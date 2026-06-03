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

PWA 不需要下载 APK。网页更新后，刷新或重新打开即可看到最新版。

## Android APK 下载

APK 下载地址：

```text
https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk
```

如果下载 404，说明 `latest-apk` Release 还没有生成，或 Release assets 里没有 `reword-debug.apk`。

处理方式：

1. 打开 GitHub 仓库。
2. 进入 `Actions`。
3. 选择 `Build Android APK`。
4. 点击 `Run workflow`。
5. 等待构建成功。
6. 回到 `Releases`，确认 `latest-apk` 里有 `reword-debug.apk`。

当前 APK 是 Capacitor WebView debug 测试包，打开后加载在线网页：

```text
https://lihuaozou.github.io/reword/
```

因此改页面、文案、UI、单词数据，只需要重新部署 GitHub Pages；改图标、包名、权限、启动页或原生能力，才需要重新打包 APK。

APK 打包说明：

```text
docs/ANDROID_APK_BUILD.md
```

## Supabase 云同步

Supabase 配置步骤：

```text
docs/DO_THIS_FIRST_SUPABASE.md
```

请先在 Supabase SQL Editor 执行最新版：

```text
supabase/schema.sql
```

最新版 schema 包含账号资料表、用户名可用性检查 RPC、注册后自动创建资料的触发器。没执行时，注册可能提示 schema 未更新或用户名检查不可用。

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

如果线上仍显示“本地模式”或 Supabase URL/key 缺失，通常是 Secrets 没填、名字填错，或填完后没有重新部署 GitHub Pages。不要把 Supabase service role key 写进前端、仓库或 GitHub Pages 构建变量。

Supabase 未配置时，线上登录/注册会自动禁用并保留游客本地背词模式，不会再把 HTML 404 页面当 JSON 解析。

## 学习状态和音效

- 记忆页按钮会用红色“未学习”和绿色“已学习”区分状态。
- 第一次标记已学习会保存进度并发放奖励，重复点击不会重复奖励。
- 单元词表、总词表会显示已学习/未学习状态。
- 设置页可以关闭按钮音效，或把音量调到 0%、25%、50%、75%、100%。
- 手机 Chrome 单词发音优先使用浏览器语音合成，失败时再回退到录音/词典音频。

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

workflow 会只打印 Supabase secret 是否存在，不会打印密钥值。Secrets 未配置时构建仍会成功，线上会降级为本地模式。

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
