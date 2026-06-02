import { Download, ExternalLink, Github, PackageCheck, ShieldAlert, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

export const APK_DOWNLOAD_URL = "https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk";
export const APK_WORKFLOW_URL = "https://github.com/lihuaozou/reword/actions/workflows/build-android-apk.yml";
export const APK_RELEASES_URL = "https://github.com/lihuaozou/reword/releases";
const APK_RELEASE_API_URL = "https://api.github.com/repos/lihuaozou/reword/releases/tags/latest-apk";

type InstallGuideCardProps = {
  compact?: boolean;
};

type ApkStatus = "checking" | "available" | "missing" | "unknown";

export function InstallGuideCard({ compact = false }: InstallGuideCardProps) {
  const [apkStatus, setApkStatus] = useState<ApkStatus>("checking");
  const [installOpen, setInstallOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(APK_RELEASE_API_URL)
      .then(async (response) => {
        if (!alive) return;
        if (response.status === 404) {
          setApkStatus("missing");
          return;
        }
        if (!response.ok) {
          setApkStatus("unknown");
          return;
        }
        const data = (await response.json()) as { assets?: Array<{ name?: string }> };
        setApkStatus(data.assets?.some((asset) => asset.name === "reword-debug.apk") ? "available" : "missing");
      })
      .catch(() => {
        if (alive) setApkStatus("unknown");
      });
    return () => {
      alive = false;
    };
  }, []);

  const statusText =
    apkStatus === "available"
      ? "APK Release 已生成，可以下载。"
      : apkStatus === "checking"
        ? "正在检测 APK Release..."
        : apkStatus === "missing"
          ? "APK 可能尚未生成。如果下载 404，请先运行构建。"
          : "暂时无法检测 APK Release。请先查看 Releases 或运行构建。";
  const canDownload = apkStatus === "available";

  return (
    <section className={`rounded-lg border border-sky-100 bg-white shadow-soft ${compact ? "p-4" : "p-5"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-harbor">
            <Smartphone size={18} aria-hidden="true" />
            Android 测试安装包
          </div>
          <h2 className={`${compact ? "mt-1 text-lg" : "mt-2 text-xl"} font-semibold text-ink`}>下载 Reword APK</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">这是 debug 测试版，可直接安装到安卓手机，不需要应用市场。首次安装需要允许安装未知应用。</p>
        </div>
        <span className="hidden shrink-0 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-harbor sm:inline-flex">WebView</span>
      </div>

      <div className={`mt-4 flex gap-2 rounded-lg px-3 py-2 text-xs leading-5 ${canDownload ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-amber-200 bg-amber-50 text-amber-800"}`}>
        {canDownload ? <PackageCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> : <ShieldAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
        <span>{statusText}</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {canDownload ? (
          <a href={APK_DOWNLOAD_URL} className="btn-primary" rel="noreferrer">
            <Download size={18} aria-hidden="true" />
            下载 APK
          </a>
        ) : (
          <button type="button" disabled className="btn-primary opacity-45">
            <Download size={18} aria-hidden="true" />
            下载 APK
          </button>
        )}
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

      <p className="mt-3 text-xs leading-5 text-slate-500">如果下载出现 404，说明 GitHub Release `latest-apk` 还未生成，或 Release assets 里没有 `reword-debug.apk`。请先进入 GitHub Actions 手动运行 Build Android APK。</p>

      <details open={installOpen} onToggle={(event) => setInstallOpen(event.currentTarget.open)} className="mt-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm text-slate-700">
        <summary className="cursor-pointer font-semibold text-ink">Android 安装说明</summary>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5 text-slate-600">
          <li>点击“下载 APK”。</li>
          <li>下载完成后点击 APK 文件。</li>
          <li>如果系统提示禁止安装，请点击设置。</li>
          <li>允许当前浏览器或文件管理器安装未知应用。</li>
          <li>返回继续安装。</li>
          <li>安装完成后桌面会出现“考研单词”图标。</li>
          <li>打开后加载在线最新版。</li>
          <li>网页内容更新后，不需要重新安装 APK。</li>
          <li>如果 APK 下载 404，请先运行 GitHub Actions 里的 Build Android APK。</li>
        </ol>
      </details>
    </section>
  );
}
