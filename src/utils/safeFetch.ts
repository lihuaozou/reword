export type SafeFetchJsonResult<T> = {
  ok: boolean;
  data?: T;
  error?: string;
  status?: number;
  contentType?: string;
};

function isJsonContentType(contentType: string) {
  return contentType.includes("application/json") || contentType.includes("+json");
}

function previewBody(text: string) {
  return text.replace(/\s+/g, " ").trim().slice(0, 120);
}

export async function safeFetchJson<T = unknown>(url: string, options?: RequestInit): Promise<SafeFetchJsonResult<T>> {
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        contentType,
        error: `请求失败：HTTP ${response.status}`,
      };
    }

    if (!isJsonContentType(contentType)) {
      const body = await response.text().catch(() => "");
      return {
        ok: false,
        status: response.status,
        contentType,
        error: `接口返回的不是 JSON${body ? `：${previewBody(body)}` : ""}`,
      };
    }

    try {
      return {
        ok: true,
        status: response.status,
        contentType,
        data: (await response.json()) as T,
      };
    } catch {
      return {
        ok: false,
        status: response.status,
        contentType,
        error: "JSON 解析失败，请检查接口返回内容。",
      };
    }
  } catch {
    return {
      ok: false,
      error: "网络请求失败，请检查网络或稍后重试。",
    };
  }
}
