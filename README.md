# Reword

2027 考研英语红宝书背词网站，线上地址：

https://lihuaozou.github.io/reword/

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

生产包按 GitHub Pages 子路径 `/reword/` 构建。

## GitHub Pages 部署

仓库已配置：

```text
.github/workflows/deploy.yml
```

触发方式：

- 推送 `main`
- 或在 GitHub Actions 手动运行 `Deploy GitHub Pages`

如果线上仍显示“云同步未接通”，不是页面没更新，而是构建时没有读取到 Supabase Secrets。请先配置：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

位置：

```text
GitHub 仓库 -> Settings -> Secrets and variables -> Actions -> Repository secrets
```

配置完成后重新运行 `Deploy GitHub Pages`。

## Supabase 云同步

先看：

```text
docs/DO_THIS_FIRST_SUPABASE.md
```

必须完成：

1. 创建 Supabase 项目。
2. 运行 `supabase/schema.sql`。
3. 在 GitHub Actions Secrets 填入 `VITE_SUPABASE_URL`。
4. 在 GitHub Actions Secrets 填入 `VITE_SUPABASE_ANON_KEY`。
5. 重新部署 GitHub Pages。

前端只使用 anon public key，不要把 service role key 放进仓库或前端环境变量。

## Android APK 下载

网页内已加入 APK 下载入口，链接固定为：

https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk

如果链接暂时打不开，说明 `latest-apk` Release 还没有生成。打开 GitHub Actions，手动运行：

```text
Build Android APK
```

成功后 workflow 会：

- 构建 `app-debug.apk`
- 上传 artifact `reword-debug-apk`
- 创建或更新 GitHub Release `latest-apk`
- 上传文件名 `reword-debug.apk`

这个 APK 是 debug 测试版，适合手机直接安装测试。正式上架应用市场前，需要 release 签名 APK/AAB。

## App 外壳说明

Capacitor 配置位于：

```text
capacitor.config.ts
```

当前 Android 壳加载在线地址：

```text
https://lihuaozou.github.io/reword/
```

所以：

- 改内容、页面、文案、单词数据：重新部署网页即可，用户打开 App 会加载最新版。
- 改图标、包名、原生权限、推送、启动页：需要重新构建 APK。
