# Reword 自检报告

检查日期：2026-06-02

线上地址：

https://lihuaozou.github.io/reword/

## 1. 当前完成内容

- 保留 React + Vite + Tailwind + PWA + GitHub Pages。
- 保留 `/reword/` base path。
- Supabase 登录/注册/退出/账号页/同步页已接入。
- 未配置 Supabase 时显示“云同步未配置，本地模式可用”，学习功能继续使用 localStorage。
- 新增 Supabase SQL：`supabase/schema.sql`。
- 新增 GitHub Pages 部署 workflow：`.github/workflows/deploy.yml`，支持从 GitHub Secrets 注入 Supabase 环境变量。
- 新增 PWA 更新提示：发现新版本后显示“刷新 / 清缓存”。
- 新增“我的学习账户”里的“清理缓存”按钮，只清 PWA 缓存和 service worker，不删除学习进度。
- 新增 Android APK 文档：`docs/ANDROID_APK_BUILD.md`。
- 新增 Capacitor WebView 备用方案：`docs/CAPACITOR_APK_BUILD.md`。
- 新增 GitHub Actions APK artifact workflow：`.github/workflows/build-android-apk.yml`。

## 2. Supabase 配置状态

当前仓库已具备 Supabase 前端代码和数据库 SQL。

仍需手动配置：

- Supabase 项目 URL
- Supabase anon key
- 执行 `supabase/schema.sql`
- GitHub Secrets：`VITE_SUPABASE_URL`
- GitHub Secrets：`VITE_SUPABASE_ANON_KEY`

安全检查：

- 前端没有 service role key。
- 密码只交给 Supabase Auth。
- 数据表 RLS 按 `user_id = auth.uid()` 限制。

## 3. PWA 状态

- `vite.config.ts` base：`/reword/`
- manifest `start_url`：`/reword/`
- manifest `scope`：`/reword/`
- service worker：`public/sw.js`
- offline 页面：`public/offline.html`
- build 后会向 `dist/sw.js` 注入缓存版本。

本次构建确认：

```text
Injected service worker cache version: 20260602075849
```

## 4. APK 打包状态

本机状态：

- Node：可用
- npm：可用
- Java：未检测到
- Bubblewrap：未检测到
- Gradle：未检测到

因此本机不能直接生成 APK。

已提供两个可执行方案：

- TWA/Bubblewrap 正式方案：`docs/ANDROID_APK_BUILD.md`
- Capacitor WebView 测试 APK 方案：`docs/CAPACITOR_APK_BUILD.md`

已新增 GitHub Actions：

```text
.github/workflows/build-android-apk.yml
```

运行后会上传 artifact：

```text
reword-debug-apk / app-debug.apk
```

## 5. TWA 限制说明

TWA 需要 Digital Asset Links。

当前项目地址是：

```text
https://lihuaozou.github.io/reword/
```

TWA 校验读取的是 origin 根目录：

```text
https://lihuaozou.github.io/.well-known/assetlinks.json
```

如果当前仓库无法控制 `lihuaozou.github.io` 根路径，正式 TWA 会受限。可选方案：

- 控制 `lihuaozou.github.io` 根站点并放置 `.well-known/assetlinks.json`
- 使用自定义域名
- 短期用 Capacitor WebView APK 测试

## 6. 手机端检查结果

浏览器宽度扫测：

```text
375: 无横向滚动
390: 无横向滚动
430: 无横向滚动
```

390px 学习页烟测：

- 记忆页显示单词、音标、US/UK、释义、上一个/已学/下一个。
- 理解页显示查看释义、记住、不太熟、不记住。
- 点击查看释义后，三个操作按钮仍然存在。
- 测试页显示英文、音标、US/UK、4 个选项、下一题。

## 7. 平板端检查结果

浏览器宽度扫测：

```text
768: 无横向滚动
820: 无横向滚动
1024: 无横向滚动
```

## 8. 电脑端检查结果

浏览器宽度扫测：

```text
1366: 无横向滚动
```

## 9. 数据和功能检查

- Unit1 页面显示：共 68 词。
- 总词量页面显示：1830 词。
- 未配置 Supabase 时：首页和我的页面显示本地模式可用。
- 音频本地路径使用 `import.meta.env.BASE_URL`，适配 `/reword/`。
- 本地音频缺失时会尝试 dictionary MP3，再 fallback 到 Web Speech API。
- 单词图片缺失时 `WordCard` 显示占位区域。
- 学习计时器在页面隐藏超过 60 秒后会扣除隐藏时间，避免一直刷时长。
- 导入/导出进度入口存在。
- 清理缓存不会删除学习数据；清空进度需要单独确认。

## 10. 需要手动配置

- Supabase 项目 URL
- Supabase anon key
- 执行 `supabase/schema.sql`
- GitHub Actions Secrets
- Android keystore
- Digital Asset Links
- 本机 JDK / Android SDK / Bubblewrap，如果要本地构建 TWA APK

## 11. 如何验证

本地开发：

```bash
npm ci
npm run dev
```

生产构建：

```bash
npm run build
```

云同步：

1. 配置 `.env.local`。
2. 执行 `supabase/schema.sql`。
3. 打开账号同步页。
4. 注册账号。
5. 登录账号。
6. 学习一个单词。
7. 上传、下载或合并同步。

GitHub Pages：

1. 配置 GitHub Secrets。
2. 推送 main。
3. 等待 `Deploy GitHub Pages` 完成。
4. 打开 `https://lihuaozou.github.io/reword/`。

APK：

1. 打开 GitHub Actions。
2. 运行 `Build Android APK`。
3. 下载 artifact `reword-debug-apk`。
4. 解压得到 `app-debug.apk`。
5. 发到安卓手机。
6. 允许当前来源安装未知应用。
7. 安装并打开。

## 12. 当前限制

- 没有真实 Supabase URL 和 anon key 时，无法实测线上注册/登录。
- 本机没有 Java/Android SDK/Bubblewrap，无法本地生成 TWA APK。
- Capacitor workflow 需要在 GitHub Actions 中运行后才能下载 APK artifact。
- TWA 正式可信全屏需要 `.well-known/assetlinks.json` 放在 origin 根目录。
