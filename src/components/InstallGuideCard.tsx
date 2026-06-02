import { Download, ExternalLink, ShieldAlert, Smartphone } from "lucide-react";

export const APK_DOWNLOAD_URL = "https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk";
export const APK_ACTIONS_URL = "https://github.com/lihuaozou/reword/actions/workflows/build-android-apk.yml";

type InstallGuideCardProps = {
  compact?: boolean;
};

export function InstallGuideCard({ compact = false }: InstallGuideCardProps) {
  return (
    <section className={`rounded-lg border border-sky-100 bg-white shadow-soft ${compact ? "p-4" : "p-5"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm font-semibold text-harbor">
            <Smartphone size={18} aria-hidden="true" />
            Android 测试安装包
          </div>
          <h2 className={`${compact ? "mt-1 text-lg" : "mt-2 text-xl"} font-semibold text-ink`}>下载 Reword APK</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">这是 debug 测试版，可直接安装到安卓手机。首次安装时，系统可能要求允许当前来源安装未知应用。</p>
        </div>
        <span className="hidden shrink-0 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-harbor sm:inline-flex">WebView</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a href={APK_DOWNLOAD_URL} className="btn-primary" rel="noreferrer">
          <Download size={18} aria-hidden="true" />
          下载 APK
        </a>
        <a href={APK_ACTIONS_URL} target="_blank" rel="noreferrer" className="btn-secondary">
          <ExternalLink size={18} aria-hidden="true" />
          运行构建
        </a>
      </div>

      <div className="mt-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
        <ShieldAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        <span>如果下载提示不存在，说明 GitHub Release `latest-apk` 还没生成。先打开 GitHub Actions，手动运行 Build Android APK，成功后这里会下载 `reword-debug.apk`。</span>
      </div>

      <details className="mt-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm text-slate-700">
        <summary className="cursor-pointer font-semibold text-ink">安装说明</summary>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5 text-slate-600">
          <li>点击下载 APK。</li>
          <li>下载后点击安装。</li>
          <li>如果提示禁止安装未知应用，进入系统设置。</li>
          <li>允许当前浏览器或文件管理器安装未知应用。</li>
          <li>返回继续安装。</li>
          <li>桌面出现考研单词图标后打开 App。</li>
          <li>App 会加载在线最新版网页，普通页面更新不需要重新安装 APK。</li>
        </ol>
      </details>
    </section>
  );
}
