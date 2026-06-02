# build-apk 操作说明

这个文件是人工执行说明，不会自动打包。

当前推荐优先使用 GitHub Actions：

1. 打开仓库 Actions。
2. 选择 `Build Android APK`。
3. 点击 `Run workflow`。
4. 构建成功后下载 artifact `reword-debug-apk`。
5. 或到 Releases 下载 `latest-apk` 的 `reword-debug.apk`。

如果本地构建 Capacitor WebView APK，需要先安装 JDK 21 和 Android SDK：

```bash
npm ci
npm run build
npx cap add android
npx cap sync android
node scripts/check-android-build.mjs --require-android
cd android
./gradlew assembleDebug --stacktrace --info
```

输出位置：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

如果要做 TWA / Bubblewrap 正式方案，需要额外准备 Digital Asset Links、keystore 和签名信息：

```bash
npm install -g @bubblewrap/cli
bubblewrap doctor
bubblewrap init --manifest https://lihuaozou.github.io/reword/manifest.json
bubblewrap build
```

推荐配置：

```text
Application ID: com.reword.kaoyan
Start URL: https://lihuaozou.github.io/reword/
App name: 2027考研英语记忆系统
Short name: 考研单词
Theme color: #6366f1
Background color: #f8fafc
```
