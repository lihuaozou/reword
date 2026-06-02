# App 在线更新和 Android 封装说明

本项目线上地址：

https://lihuaozou.github.io/reword/

## 更新规则

App 推荐采用“安卓外壳 + 在线网页”的方式。外壳只负责全屏加载线上地址，网页内容仍由 GitHub Pages 提供。

不需要重新打包 APK 的改动：

- 页面内容、UI、文案
- 单词数据
- 学习逻辑
- 音频策略
- PWA 缓存内容

需要重新打包 APK 的改动：

- App 图标
- App 名称
- 启动页
- 包名
- Android 权限
- 原生推送
- 原生插件
- 原生配置

GitHub Pages 更新后，用户重新打开 App 会加载最新版。如果 PWA 缓存导致旧版残留，需要更新 `public/sw.js` 里的 `CACHE_NAME`，然后重新部署。

## PWA 配置

当前 PWA 已使用 GitHub Pages base path：

- Vite `base`: `/reword/`
- Manifest `start_url`: `/reword/`
- Manifest `scope`: `/reword/`
- Service worker: `/reword/sw.js`
- 离线页: `/reword/offline.html`

网络不可用时，service worker 会优先返回缓存首页；如果首页还没有缓存，则返回友好的离线页，避免白屏。

## Bubblewrap / TWA 打包

推荐使用 Android Trusted Web Activity。TWA 能让 Android App 全屏加载 PWA，不显示浏览器地址栏。

官方参考：Chrome Trusted Web Activity Quick Start
https://developer.chrome.com/docs/android/trusted-web-activity/quick-start/

准备环境：

```bash
npm install -g @bubblewrap/cli
bubblewrap doctor
```

初始化：

```bash
bubblewrap init --manifest https://lihuaozou.github.io/reword/manifest.json
```

建议配置：

- App name: `2027考研英语记忆系统`
- Short name: `考研单词`
- Package ID: `com.reword.kaoyan`
- Start URL: `https://lihuaozou.github.io/reword/`
- Theme color: `#6366f1`
- Background color: `#f8fafc`

构建 APK/AAB：

```bash
bubblewrap build
```

安装测试：

```bash
bubblewrap install
```

生成应用商店包时，请保存好 keystore。以后修改图标、包名、权限、原生能力时，需要用同一个签名继续打包。

## Digital Asset Links

TWA 要求线上站点声明它信任 Android App。文件必须放在站点 origin 根目录：

```text
https://lihuaozou.github.io/.well-known/assetlinks.json
```

注意：`https://lihuaozou.github.io/reword/.well-known/assetlinks.json` 通常不能满足 TWA 校验，因为校验按 origin 读取根目录的 `.well-known`。如果继续使用 GitHub Pages 项目页，需要把 `assetlinks.json` 发布到 `lihuaozou.github.io` 用户站点根目录，或改用自定义域名并在域名根目录放置该文件。

模板：

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.reword.kaoyan",
      "sha256_cert_fingerprints": [
        "替换为 Bubblewrap/keystore 生成的 SHA-256 指纹"
      ]
    }
  }
]
```

查看签名指纹：

```bash
keytool -list -v -keystore ./android.keystore -alias android
```

## 常见发布流程

网页改动：

```bash
npm run build
git add .
git commit -m "Update web app"
git push origin main
```

GitHub Pages 部署完成后，App 会加载新网页，不需要重新发 APK。

原生外壳改动：

```bash
bubblewrap build
```

然后重新提交应用商店审核或分发新的 APK/AAB。
