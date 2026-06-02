# 先做这个：Supabase 云同步配置

线上如果显示“本地模式”或“Supabase URL 缺失”，说明 GitHub Pages 构建时没有读取到 Supabase 环境变量。网页仍然可以本地背单词，但登录、注册和跨设备同步不会启用。

## 傻瓜式步骤

1. 打开 Supabase 官网。
2. 创建一个 Supabase 项目。
3. 进入 `Project Settings -> API`。
4. 复制 `Project URL`。
5. 复制 `anon public key`。
6. 打开 GitHub 仓库 `lihuaozou/reword`。
7. 进入 `Settings -> Secrets and variables -> Actions -> New repository secret`。
8. 新增 Secret：`VITE_SUPABASE_URL`，值填 Supabase `Project URL`。
9. 新增 Secret：`VITE_SUPABASE_ANON_KEY`，值填 Supabase `anon public key`。
10. 打开 Supabase `SQL Editor`。
11. 复制仓库里的 `supabase/schema.sql` 全部内容。
12. 粘贴到 SQL Editor 并执行。
13. 回到 GitHub 仓库。
14. 进入 `Actions`。
15. 手动运行 `Deploy GitHub Pages`。
16. 部署完成后打开 `https://lihuaozou.github.io/reword/`。
17. 进入“我的 -> 账号同步”或“设置 -> 云同步配置”。
18. 看到“云同步已配置”后，再注册或登录账号。

## GitHub Secrets 名字必须完全一致

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

不要写成：

```text
SUPABASE_URL
SUPABASE_ANON_KEY
VITE_SUPABASE_KEY
```

Vite 只会把 `VITE_` 开头的环境变量注入前端。

## 不要使用 service role key

前端只能使用 Supabase `anon public key`。不要把 `service_role` key 放进：

- 代码仓库
- `.env`
- GitHub Secrets 给前端构建
- 网页

用户数据安全依靠 Supabase RLS。`supabase/schema.sql` 里已经启用了用户只能访问自己数据的策略。

## 为什么配置后还显示本地模式

通常是以下原因：

- GitHub Secrets 没填。
- Secrets 名字填错。
- 填完 Secrets 后没有重新运行 `Deploy GitHub Pages`。
- GitHub Pages 还在等待部署完成。
- 浏览器或 PWA 缓存仍是旧版本，可以刷新或清理缓存。

## 本地开发测试

在仓库根目录新建 `.env.local`：

```text
VITE_SUPABASE_URL=你的 Supabase Project URL
VITE_SUPABASE_ANON_KEY=你的 Supabase anon public key
```

然后运行：

```bash
npm run dev
```

本地页面进入“设置 -> 云同步配置”，看到 URL 和 anon key 都是“已读取”即可。
