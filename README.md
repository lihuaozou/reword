# Reword

2027 考研英语红宝书背词网站。

在线网页：

```text
https://lihuaozou.github.io/reword/
```

## PWA 安装

安卓 Chrome 打开在线网页后：

1. 点击右上角菜单。
2. 选择“添加到主屏幕”或“安装应用”。
3. 桌面会出现 Reword 图标。

PWA 不需要下载 APK，网页更新后重新打开即可看到最新版。

## Android APK 下载

APK 下载地址：

```text
https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk
```

如果 APK 下载 404，说明 `latest-apk` Release 还没有生成，或 Release assets 里没有 `reword-debug.apk`。

处理方式：

1. 打开 GitHub 仓库。
2. 进入 `Actions`。
3. 选择 `Build Android APK`。
4. 点击 `Run workflow`。
5. 等待构建成功。
6. 回到 `Releases`，确认 `latest-apk` 里有 `reword-debug.apk`。

这是 debug 测试安装包，可以直接安装到安卓手机。正式上架应用市场前，需要 release 签名 APK 或 AAB。

APK 打包说明：

```text
docs/ANDROID_APK_BUILD.md
```

## Supabase 云同步

Supabase 配置步骤：

```text
docs/DO_THIS_FIRST_SUPABASE.md
```

必须配置两个 GitHub Actions Secrets：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

配置位置：

```text
GitHub 仓库 -> Settings -> Secrets and variables -> Actions -> Repository secrets
```

配置完成后必须重新运行：

```text
Actions -> Deploy GitHub Pages -> Run workflow
```

如果线上仍显示“本地模式”或 Supabase URL 缺失，通常是 Secrets 没填、名字填错，或填完后没有重新部署 GitHub Pages。

不要把 Supabase service role key 写进前端、仓库或 GitHub Pages 环境变量。

## GitHub Pages 部署

部署 workflow：

```text
.github/workflows/deploy.yml
```

触发方式：

- 推送 `main`
- 手动运行 `Deploy GitHub Pages`

构建时会注入：

```yaml
VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

Secrets 没配置时构建仍会成功，线上会降级为本地模式。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

生产包使用 GitHub Pages 子路径：

```text
/reword/
```

## App 外壳

Capacitor 配置：

```text
capacitor.config.ts
```

当前方案是 APK WebView 加载在线网页：

```text
https://lihuaozou.github.io/reword/
```

因此：

- 改网页内容、文案、UI、单词数据：只需要重新部署 GitHub Pages。
- 改图标、包名、权限、推送、启动页：需要重新构建 APK。
