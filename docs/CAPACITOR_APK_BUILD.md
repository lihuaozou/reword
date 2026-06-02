# Capacitor WebView APK 备用方案

当前 APK 方案是 Capacitor WebView：App 打开后加载在线网页。

```text
https://lihuaozou.github.io/reword/
```

网页更新后不需要重新安装 APK；改原生壳配置才需要重新打包。

## 依赖

仓库已经包含：

- `@capacitor/core`
- `@capacitor/cli`
- `@capacitor/android`
- `capacitor.config.ts`
- `.github/workflows/build-android-apk.yml`

Capacitor Android 8.3.4 需要 JDK 21。GitHub Actions 已使用 JDK 21。

## GitHub Actions 生成 APK

1. 打开 GitHub 仓库 Actions。
2. 选择 `Build Android APK`。
3. 点击 `Run workflow`。
4. 构建成功后下载 artifact `reword-debug-apk`。
5. 或在 Releases 里下载 `latest-apk` 的 `reword-debug.apk`。

如果下载链接 404，说明 Release 还没有成功生成。

## 本地构建

本地需要 JDK 21 和 Android SDK：

```bash
npm ci
npm run build
npx cap add android
npx cap sync android
node scripts/check-android-build.mjs --require-android
cd android
./gradlew assembleDebug --stacktrace --info
```

Windows：

```powershell
npm ci
npm run build
npx cap add android
npx cap sync android
node scripts/check-android-build.mjs --require-android
cd android
.\gradlew.bat assembleDebug --stacktrace --info
```

输出位置：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 优点

- 不强依赖 Digital Asset Links。
- 可以快速生成 APK 给手机测试。
- 适合短期内部自用。

## 缺点

- WebView 可信体验不如 TWA。
- 部分 PWA、浏览器语音、缓存行为可能和 Chrome 不完全一致。
- 如果要上架或长期使用，仍建议评估 TWA 或原生方案。
