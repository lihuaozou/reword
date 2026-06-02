# Reword 自检报告

检查日期：2026-06-02

线上地址：

```text
https://lihuaozou.github.io/reword/
```

## 1. 本次交付重点

- 首页、我的、账号、设置页已加入 Android APK 下载入口。
- APK 下载固定指向 GitHub Release：`latest-apk / reword-debug.apk`。
- 账号页和设置页已加入 Supabase 配置检测：URL、anon key、client、登录状态、同步状态、最近同步。
- 登录和注册在 Supabase 未启用时保持可见，但表单/按钮会禁用并显示明确原因。
- 云同步未配置时，提示从“云同步未配置，本地模式可用”升级为明确交接文案：需要配置 GitHub Actions Secrets 并重新部署。
- 新增 `docs/DO_THIS_FIRST_SUPABASE.md`，作为 Supabase 首次配置入口。
- `README.md` 已更新 GitHub Pages、Supabase、APK Release 和 App 外壳说明。

## 2. Supabase 当前状态说明

代码已经支持 Supabase Auth 和云同步，但线上是否可用取决于 GitHub Actions 构建时是否读取到：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

如果线上仍显示“云同步未接通”，通常不是页面没部署，而是 GitHub 仓库 Secrets 未配置或配置后没有重新运行 `Deploy GitHub Pages`。

需要手动完成：

1. 创建 Supabase 项目。
2. 运行 `supabase/schema.sql`。
3. 在 GitHub Actions Secrets 添加 `VITE_SUPABASE_URL`。
4. 在 GitHub Actions Secrets 添加 `VITE_SUPABASE_ANON_KEY`。
5. 重新运行 `Deploy GitHub Pages`。

详细步骤见：

```text
docs/DO_THIS_FIRST_SUPABASE.md
```

## 3. GitHub Pages workflow

文件：

```text
.github/workflows/deploy.yml
```

功能：

- 推送 `main` 自动构建。
- 支持手动运行。
- 使用 Node 22。
- 执行 `npm ci`。
- 执行 `npm run build`。
- 从 GitHub Secrets 注入 Supabase 环境变量。
- 将 `dist/` 推送到 `gh-pages` 分支。

## 4. Android APK workflow

文件：

```text
.github/workflows/build-android-apk.yml
```

功能：

- 支持手动运行。
- 使用 Node 22、JDK 17、Android SDK。
- 构建网页包。
- 如果没有 `android/` 目录，会运行 `npx cap add android`。
- 运行 `npx cap sync android`。
- 生成 debug APK：`android/app/build/outputs/apk/debug/app-debug.apk`。
- 上传 artifact：`reword-debug-apk`。
- 创建或更新 GitHub Release：`latest-apk`。
- 上传下载文件：`reword-debug.apk`。

网页下载入口：

```text
https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk
```

如果链接不存在，先运行：

```text
Actions -> Build Android APK -> Run workflow
```

## 5. Capacitor 配置检查

文件：

```text
capacitor.config.ts
```

当前配置加载在线网页：

```text
https://lihuaozou.github.io/reword/
```

因此：

- 改网页内容、文案、UI、单词数据：重新部署 GitHub Pages 即可。
- 改图标、包名、原生功能、推送、启动页：需要重新构建 APK。

## 6. 仍需人工处理

- Supabase 后台项目、SQL 和 GitHub Secrets 无法由本地代码自动完成。
- APK Release 需要 `Build Android APK` workflow 至少成功运行一次后才会存在。
- Debug APK 适合测试安装；正式上架应用市场需要 release 签名 APK/AAB。

## 7. 本地验证

本次已运行：

```text
cmd /c npm run build
```

结果：通过。

构建输出摘要：

```text
tsc -b && vite build
1710 modules transformed
dist/index.html
dist/assets/index-BAPFqWCP.css
dist/assets/index-DB2mgqku.js
Injected service worker cache version: 20260602152815
```
