# Android APK / TWA 打包说明

目标：生成一个 Android App 外壳，打开后加载线上网页：

https://lihuaozou.github.io/reword/

网页内容、单词数据、UI 和学习逻辑更新后，只需要重新部署 GitHub Pages，不需要重新安装 APK。只有修改 App 图标、名称、包名、权限、启动页、推送或原生插件时，才需要重新打包 APK。

## App 配置

- App 名称：`2027考研英语记忆系统`
- short_name：`考研单词`
- 包名：`com.reword.kaoyan`
- start_url：`https://lihuaozou.github.io/reword/`
- theme_color：`#6366f1`
- background_color：`#f8fafc`
- display：`standalone`

## 准备环境

安装 JDK 17 或更高版本：

```bash
java -version
```

安装 Bubblewrap：

```bash
npm install -g @bubblewrap/cli
bubblewrap doctor
```

`bubblewrap doctor` 会检查 Android SDK、JDK、Gradle 等环境。如果缺少 Android SDK，按提示安装。

当前这台机器自检结果：未检测到 `java`，因此不能直接在本机完成 APK 构建。安装 JDK 和 Android SDK 后即可继续。

如果只是想先拿到一个可下载 APK，仓库已提供备用 workflow：

```text
.github/workflows/build-android-apk.yml
```

它会用 Capacitor WebView 生成 `app-debug.apk`，在 GitHub Actions 的 Artifacts 里下载。TWA 正式版仍建议按下面的 Bubblewrap 流程做。

## 初始化 TWA 项目

推荐在仓库外或 `android-twa/` 目录初始化：

```bash
bubblewrap init --manifest https://lihuaozou.github.io/reword/manifest.json
```

按提示填写：

```text
Application ID: com.reword.kaoyan
Start URL: https://lihuaozou.github.io/reword/
Launcher name: 2027考研英语记忆系统
Short name: 考研单词
Theme color: #6366f1
Background color: #f8fafc
```

## 生成 keystore

Bubblewrap 初始化时可以自动生成 keystore。务必保存：

- keystore 文件
- keystore password
- key alias
- key password

以后更新 APK 必须使用同一套签名。

查看 SHA-256 指纹：

```bash
keytool -list -v -keystore ./android.keystore -alias android
```

## 构建 APK / AAB

```bash
bubblewrap build
```

常见输出：

```text
app-release-signed.apk
app-release-bundle.aab
```

APK 用于直接发给手机安装测试。AAB 用于以后提交应用市场。

## 把 APK 发到手机

方式任选：

- 微信/QQ 文件传输
- 网盘
- 数据线
- 浏览器下载
- 局域网文件分享

## 不走应用市场安装 APK

可以不走应用市场，直接安装 APK：

1. 把 APK 发到手机。
2. 手机点击 APK。
3. 如果提示禁止安装，进入系统设置。
4. 允许当前来源“安装未知应用”。
5. 返回继续安装。
6. 安装后桌面出现 App 图标。
7. 打开 App 后加载 `https://lihuaozou.github.io/reword/`。

安全提示：

- 只给自己或可信的人安装。
- 不要让用户安装来源不明的 APK。
- 公开发布建议上架应用市场，或提供 SHA-256 校验信息。

## 卸载旧版和更新 APK

如果包名和签名不变，直接安装新版 APK 会覆盖旧版。

如果签名变了，系统会拒绝覆盖安装。需要先卸载旧版：

1. 长按桌面 App。
2. 选择卸载。
3. 再安装新版 APK。

## Digital Asset Links

TWA 正式全屏可信运行需要 Digital Asset Links。它验证“网站域名”和“Android App 签名”的关系。

当前网站是 GitHub Pages 项目路径：

```text
https://lihuaozou.github.io/reword/
```

TWA 校验读取的是 origin 根目录：

```text
https://lihuaozou.github.io/.well-known/assetlinks.json
```

不是：

```text
https://lihuaozou.github.io/reword/.well-known/assetlinks.json
```

### 方案 A：控制 GitHub Pages 根站点

如果你有 `lihuaozou.github.io` 根站点仓库，把文件放到：

```text
.well-known/assetlinks.json
```

内容模板：

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.reword.kaoyan",
      "sha256_cert_fingerprints": [
        "替换为 keystore 的 SHA-256 指纹"
      ]
    }
  }
]
```

### 方案 B：使用自定义域名

例如：

```text
https://reword.example.com/
```

把 `assetlinks.json` 放到：

```text
https://reword.example.com/.well-known/assetlinks.json
```

这是正式发布最清晰的方案。

### 方案 C：短期测试用 WebView 壳

如果暂时不能控制 `.well-known/assetlinks.json`，可以用 Capacitor WebView 先打测试 APK。WebView 不强依赖 Digital Asset Links，但体验和可信验证不如 TWA。

## TWA 和 WebView 区别

TWA：

- 体验更接近原生 Chrome PWA
- 地址栏隐藏
- 可信验证更强
- 需要 Digital Asset Links

普通 WebView：

- 更容易快速打测试 APK
- 不强依赖 assetlinks.json
- PWA/service worker 行为可能和 Chrome TWA 不完全一致
- 可信体验不如 TWA
