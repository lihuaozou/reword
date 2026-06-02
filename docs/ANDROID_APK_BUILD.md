# Android APK / TWA 打包说明

目标：生成一个 Android App 外壳，打开后加载在线网页：

```text
https://lihuaozou.github.io/reword/
```

网页内容、单词数据、UI 和学习逻辑更新后，只需要重新部署 GitHub Pages，不需要重新安装 APK。只有修改 App 图标、名称、包名、权限、启动页、推送或原生插件时，才需要重新打包 APK。

## 当前 APK 方案

仓库当前使用 Capacitor WebView 生成 debug APK：

```text
.github/workflows/build-android-apk.yml
```

下载地址：

```text
https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk
```

如果下载 404，说明 `Build Android APK` 还没有成功发布 `latest-apk`，或 Release 里没有 `reword-debug.apk`。

## App 配置

- App 名称：`2027考研英语记忆系统`
- 包名：`com.reword.kaoyan`
- 在线地址：`https://lihuaozou.github.io/reword/`
- 配置文件：`capacitor.config.ts`

## 环境要求

Capacitor Android 8.3.4 的 Gradle 配置使用：

```text
JavaVersion.VERSION_21
```

所以 Android 构建需要 JDK 21 或更高版本。

本仓库 GitHub Actions 已使用：

```yaml
java-version: 21
```

本机如果要构建，也需要先安装 JDK 21 和 Android SDK：

```bash
java -version
```

## GitHub Actions 构建 APK

1. 打开 GitHub 仓库 `lihuaozou/reword`。
2. 进入 `Actions`。
3. 选择 `Build Android APK`。
4. 点击 `Run workflow`。
5. 等待构建完成。
6. 在 run 页面下载 artifact `reword-debug-apk`。
7. 或到 Releases 下载 `latest-apk` 下的 `reword-debug.apk`。

workflow 会执行：

```bash
npm ci
npm run build
node scripts/check-android-build.mjs
npx cap add android
npx cap sync android
node scripts/check-android-build.mjs --require-android
cd android
./gradlew assembleDebug --stacktrace --info
node scripts/check-android-build.mjs --require-apk
```

如果再次失败，看 `Build debug APK with Gradle diagnostics` 这一步，里面会有真正的 Gradle 堆栈。

## 本地 Capacitor 构建

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

常见输出：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 安装 APK

1. 下载 `reword-debug.apk`。
2. 手机点击 APK 文件。
3. 如果提示禁止安装，进入系统设置。
4. 允许当前浏览器或文件管理器安装未知应用。
5. 返回继续安装。
6. 安装完成后打开 App。

## TWA 说明

正式发布时可以考虑 TWA，但 TWA 需要 Digital Asset Links。当前 GitHub Pages 项目路径是：

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

如果不能控制根站点 `.well-known/assetlinks.json`，短期继续用 Capacitor WebView debug APK 更简单。
