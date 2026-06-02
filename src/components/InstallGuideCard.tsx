import { Download, ExternalLink, Github, PackageCheck, ShieldAlert, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { safeFetchJson } from "../utils/safeFetch";

export const APK_DOWNLOAD_URL = "https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk";
export const APK_WORKFLOW_URL = "https://github.com/lihuaozou/reword/actions/workflows/build-android-apk.yml";
export const APK_RELEASES_URL = "https://github.com/lihuaozou/reword/releases";
const APK_RELEASE_API_URL = "https://api.github.com/repos/lihuaozou/reword/releases/tags/latest-apk";

type InstallGuideCardProps = {
  compact?: boolean;
};

type ApkStatus = "checking" | "available" | "missing" | "unknown";

type GitHubRelease = {
  assets?: Array<{
    name?: string;
  }>;
};

export function InstallGuideCard({ compact = false }: InstallGuideCardProps) {
  const [apkStatus, setApkStatus] = useState<ApkStatus>("checking");
  const [statusDetail, setStatusDetail] = useState("");
  const [installOpen, setInstallOpen] = useState(false);

  useEffect(() => {
    let alive = true;

    safeFetchJson<GitHubRelease>(APK_RELEASE_API_URL, {
      headers: { Accept: "application/vnd.github+json" },
    }).then((result) => {
      if (!alive) return;
      if (!result.ok) {
        setApkStatus(result.status === 404 ? "missing" : "unknown");
        setStatusDetail(result.error || "");
        return;
      }

      const hasApk = result.data?.assets?.some((asset) => asset.name === "reword-debug.apk");
      setApkStatus(hasApk ? "available" : "missing");
      setStatusDetail("");
    });

    return () => {
      alive = false;
    };
  }, []);

  const canDownload = apkStatus === "available";
  const statusText =
    apkStatus === "available"
      ? "APK Release 已生成，可以下载。"
      : apkStatus === "checking"
        ? "正在检测 APK Release..."
        : apkStatus === "missing"
          ? "APK 还没有成功发布。如果下载 404，请先运行 Build Android APK。"
          : "暂时无法检测 APK Release。下载链接仍可点击，请同时查看 Releases 或 Actions。";

  return (
    <section className={`rounded-lg border border-sky-100 bg-white shadow-soft ${compact ? "p-4" : "p-5"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-harbor">
            <Smartphone size={18} aria-hidden="true" />
            Android 测试安装包
          </div>
          <h2 className={`${compact ? "mt-1 text-lg" : "mt-2 text-xl"} font-semibold text-ink`}>下载 Reword APK</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            这是 debug 测试版，可以直接安装到安卓手机。网页内容更新后不用重新装 APK，只有改图标、壳配置或原生能力时才需要重新打包。
          </p>
        </div>
        <span className="hidden shrink-0 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-harbor sm:inline-flex">WebView</span>
      </div>

      <div className={`mt-4 flex gap-2 rounded-lg px-3 py-2 text-xs leading-5 ${canDownload ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-amber-200 bg-amber-50 text-amber-800"}`}>
        {canDownload ? <PackageCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> : <ShieldAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
        <span>
          {statusText}
          {statusDetail ? <span className="block text-[11px] opacity-80">{statusDetail}</span> : null}
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <a href={APK_DOWNLOAD_URL} className="btn-primary" rel="noreferrer">
          <Download size={18} aria-hidden="true" />
          下载 APK
        </a>
        <a href={APK_WORKFLOW_URL} target="_blank" rel="noreferrer" className="btn-secondary">
          <ExternalLink size={18} aria-hidden="true" />
          打开 Actions 构建
        </a>
        <a href={APK_RELEASES_URL} target="_blank" rel="noreferrer" className="btn-secondary">
          <Github size={18} aria-hidden="true" />
          查看 Releases
        </a>
        <button type="button" onClick={() => setInstallOpen((open) => !open)} className="btn-secondary">
          <ShieldAlert size={18} aria-hidden="true" />
          查看安装说明
        </button>
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        如果下载 404，真实原因通常是 GitHub Release `latest-apk` 尚未生成，或 Release assets 里没有 `reword-debug.apk`。请进入 GitHub Actions 手动运行 Build Android APK。
      </p>

      <details open={installOpen} onToggle={(event) => setInstallOpen(event.currentTarget.open)} className="mt-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm text-slate-700">
        <summary className="cursor-pointer font-semibold text-ink">Android 安装说明</summary>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5 text-slate-600">
          <li>点击“下载 APK”。</li>
          <li>下载完成后点击 APK 文件。</li>
          <li>如果系统提示禁止安装，请点击设置。</li>
          <li>允许当前浏览器或文件管理器安装未知应用。</li>
          <li>返回继续安装。</li>
          <li>安装完成后，桌面会出现 Reword 图标。</li>
          <li>打开后会加载在线最新版网页。</li>
          <li>网页内容更新后，不需要重新安装 APK。</li>
          <li>如果 APK 下载 404，请先运行 GitHub Actions 里的 Build Android APK。</li>
        </ol>
      </details>
    </section>
  );
}
