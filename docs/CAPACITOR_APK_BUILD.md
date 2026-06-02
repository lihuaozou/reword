# Capacitor WebView APK 备用方案

当 TWA 因 GitHub Pages 根路径或 Digital Asset Links 暂时无法完成时，可以用 Capacitor 生成一个 WebView APK 做测试。

推荐第一版加载在线网址：

https://lihuaozou.github.io/reword/

这样网页更新后，不需要重新安装 APK。

## 安装依赖

仓库已经包含：

- `@capacitor/core`
- `@capacitor/cli`
- `@capacitor/android`
- `capacitor.config.ts`
- `.github/workflows/build-android-apk.yml`

可以直接用 GitHub Actions 生成 APK artifact：

1. 打开 GitHub 仓库 Actions。
2. 选择 `Build Android APK`。
3. 点击 `Run workflow`。
4. 等构建完成。
5. 打开本次 workflow run。
6. 在 Artifacts 下载 `reword-debug-apk`。
7. 解压后得到 `app-debug.apk`。

本地手动安装依赖时使用：

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

如果要从零初始化：

```bash
npx cap init "2027考研英语记忆系统" com.reword.kaoyan --web-dir=dist
```

添加 Android：

```bash
npx cap add android
```

## 加载在线网址

仓库里的 `capacitor.config.ts` 已设置为加载在线网址：

```ts
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reword.kaoyan",
  appName: "2027考研英语记忆系统",
  webDir: "dist",
  server: {
    url: "https://lihuaozou.github.io/reword/",
    cleartext: false
  }
};

export default config;
```

## 构建 Android APK

```bash
npm run build
npx cap sync android
npx cap open android
```

在 Android Studio 中：

1. Build -> Generate Signed Bundle / APK。
2. 选择 APK。
3. 选择或创建 keystore。
4. 生成 release APK。

也可以使用 Gradle：

```bash
cd android
./gradlew assembleDebug
```

Windows:

```powershell
cd android
.\gradlew.bat assembleDebug
```

常见输出：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 优点

- 不强依赖 Digital Asset Links。
- 可以直接生成 APK 给手机测试。
- 适合短期内部自用。

## 缺点

- WebView 可信体验不如 TWA。
- 部分 PWA、浏览器语音、缓存行为可能和 Chrome 不完全一致。
- 如果要上架或长期使用，仍建议优先 TWA 或原生方案。
