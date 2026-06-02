# Reword 自检报告

检查日期：2026-06-03

线上地址：

```text
https://lihuaozou.github.io/reword/
```

## 当前结论

- 本地背单词功能可用。
- Supabase 云同步是否可用，取决于 GitHub Actions Secrets 是否配置并重新部署。
- 如果线上显示“本地模式”或 Supabase URL/key 缺失，不是注册代码坏了，而是线上包没有读到 `VITE_SUPABASE_URL` 或 `VITE_SUPABASE_ANON_KEY`。
- `Build Android APK` 最新失败点是 `Build debug APK`，也就是 Gradle `assembleDebug`。
- 本地 `@capacitor/android@8.3.4` 的 Gradle 配置要求 `JavaVersion.VERSION_21`，旧 workflow 使用 JDK 17，很可能就是 APK 构建失败的直接原因。
- 新 workflow 已改为 JDK 21，并在 Gradle 构建时输出 `--stacktrace --info`。
- APK 下载 404 说明 `latest-apk` Release 尚未成功生成，或 Release assets 中没有 `reword-debug.apk`。
- `Unexpected token '<'` 已通过 `safeFetchJson` 规避：接口返回 HTML 时不会再被硬解析成 JSON。

## 需要手动完成

1. 创建 Supabase 项目。
2. 在 Supabase SQL Editor 执行 `supabase/schema.sql`。
3. 在 GitHub Actions Secrets 配置 `VITE_SUPABASE_URL`。
4. 在 GitHub Actions Secrets 配置 `VITE_SUPABASE_ANON_KEY`。
5. 手动运行 `Deploy GitHub Pages`。
6. 手动运行 `Build Android APK`。

## GitHub Pages Workflow

文件：

```text
.github/workflows/deploy.yml
```

状态：

- 支持 push `main` 自动运行。
- 支持 `workflow_dispatch` 手动运行。
- 使用 Node 22。
- 执行 `npm ci`。
- 构建前打印 Supabase URL/key 是否已配置，只打印 true/false。
- 执行 `npm run build`。
- 部署 `dist` 到 `gh-pages` 分支。

## Android APK Workflow

文件：

```text
.github/workflows/build-android-apk.yml
```

状态：

- 支持 `workflow_dispatch` 手动运行。
- 使用 Node 22、JDK 21、Android SDK。
- 如果 `android/` 目录不存在，会在 CI 中执行 `npx cap add android`。
- 执行 `npx cap sync android`。
- 执行 `node scripts/check-android-build.mjs --require-android` 检查 Android 项目文件。
- 执行 `./gradlew assembleDebug --stacktrace --info`。
- 执行 `node scripts/check-android-build.mjs --require-apk` 检查 APK 产物。
- 上传 artifact：`reword-debug-apk`。
- 创建或覆盖上传 GitHub Release asset：

```text
tag: latest-apk
release name: Reword Android APK
asset: reword-debug.apk
```

最终下载地址：

```text
https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk
```

## 页面提示调整

- Android 下载区会检测 GitHub Release，但“下载 APK”始终是普通链接，不再因为检测不到 Release 就禁用。
- 下载区会提示 404 的真实含义：Release 未生成或 asset 缺失。
- Supabase 配置卡片会明确显示 URL、anon key、客户端、登录状态、同步状态。
- 注册表单增加用户名、邮箱、密码校验；Supabase 未配置时仍禁用注册。

## 本地验证

已运行：

```text
cmd /c npm run build
```

本机没有可用 Java 环境，无法在本地直接执行 Android Gradle 构建；APK 构建应通过 GitHub Actions 完成。
