# Reword 自检报告

检查日期：2026-06-02

线上地址：

```text
https://lihuaozou.github.io/reword/
```

## 当前状态

- 本地背单词功能可用。
- Supabase 云同步是否可用，取决于 GitHub Actions Secrets 是否已配置。
- 如果线上显示“本地模式”，说明 Supabase URL 或 anon key 没有被线上包读取到。
- 如果 Supabase URL 显示“缺失”，通常是 Secrets 未配置、名字填错，或配置后没有重新运行 `Deploy GitHub Pages`。
- APK 是否可下载，取决于 `Build Android APK` workflow 是否成功生成 `latest-apk` Release。
- 如果 APK 下载 404，说明 Release 没生成，或 Release assets 里没有 `reword-debug.apk`。

## 需要用户手动完成

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

- 标准多行 YAML。
- 支持 push main 自动运行。
- 支持 workflow_dispatch 手动运行。
- 使用 Node 22。
- 执行 `npm ci`。
- 执行 `npm run build`。
- 构建时注入 GitHub Secrets：

```yaml
VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

Secrets 没配置时，构建仍然成功，网页降级为本地模式。

## Android APK Workflow

文件：

```text
.github/workflows/build-android-apk.yml
```

状态：

- 标准多行 YAML。
- 支持 workflow_dispatch 手动运行。
- 使用 Node 22、JDK 17、Android SDK。
- 如果 `android/` 目录不存在，会在 CI 中执行 `npx cap add android`。
- 执行 `npx cap sync android`。
- 执行 `./gradlew assembleDebug`。
- 生成 `android/app/build/outputs/apk/debug/app-debug.apk`。
- 复制为 `reword-debug.apk`。
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

- 首页顶部只显示短状态，不重复长说明。
- 我的页顶部只显示短状态，不重复长说明。
- 详细 Supabase 配置说明只放在“云同步配置”卡片里。
- 设置页和账号页显示详细检测项：Supabase URL、anon key、客户端、登录状态、同步状态、最近同步。
- Android 下载区会检测 GitHub Release；未检测到 `reword-debug.apk` 时禁用“下载 APK”，避免直接点进 404。
- Android 下载区提供“打开 Actions 构建”“查看 Releases”“查看安装说明”。

## Capacitor 配置

文件：

```text
capacitor.config.ts
```

当前方案：

```text
APK WebView 加载在线网页：https://lihuaozou.github.io/reword/
```

因此：

- 网页内容更新不需要重新打包 APK。
- 改图标、包名、权限、推送、启动页，需要重新打包 APK。

## 本地验证

本次已重新运行：

```text
cmd /c npm run build
```

结果：通过。

构建输出摘要：

```text
1710 modules transformed
dist/assets/index-gMvuEq6E.css
dist/assets/index-McG6XLoi.js
Injected service worker cache version: 20260602161054
```
