# 先做这个：Supabase 云同步配置

线上如果显示“云同步未接通”，说明 GitHub Pages 构建时没有拿到 Supabase 环境变量。网页仍能本地背单词，但登录、注册、跨设备同步不会启用。

## 1. 创建 Supabase 项目

打开 Supabase，创建一个项目。进入项目后找到：

```text
Project Settings -> API
```

复制：

```text
Project URL
anon public key
```

不要复制 service role key 到前端。

## 2. 建表

打开 Supabase：

```text
SQL Editor -> New query
```

复制并运行仓库里的 SQL：

```text
supabase/schema.sql
```

这一步会创建用户资料、学习进度、学习统计等表，并启用 RLS。

## 3. 配置 GitHub Actions Secrets

打开仓库：

```text
https://github.com/lihuaozou/reword
```

进入：

```text
Settings -> Secrets and variables -> Actions -> Repository secrets
```

新增两个 secret：

```text
VITE_SUPABASE_URL=你的 Supabase Project URL
VITE_SUPABASE_ANON_KEY=你的 Supabase anon public key
```

## 4. 重新部署网页

打开：

```text
Actions -> Deploy GitHub Pages -> Run workflow
```

或直接推送一次 `main`。

部署完成后打开：

```text
https://lihuaozou.github.io/reword/
```

进入“设置”或“账号与云同步”，检查：

- Supabase URL：已读取
- Supabase anon key：已读取
- 客户端：在线
- 登录状态：未登录或已登录
- 同步状态：登录后可同步

## 5. 注册和同步

配置完成后：

1. 打开“账号与云同步”。
2. 注册账号。
3. 登录账号。
4. 首次同步时选择上传本地、下载云端或合并。

如果注册后无法登录，检查 Supabase Auth 是否开启了邮箱验证。开启邮箱验证时，需要先去邮箱点击验证链接。

## 常见问题

### 为什么线上还是说未接通？

通常是这三个原因：

- GitHub Secrets 没填。
- Secrets 名字填错了，必须是 `VITE_SUPABASE_URL` 和 `VITE_SUPABASE_ANON_KEY`。
- 填完 Secrets 后没有重新运行 `Deploy GitHub Pages`。

### 为什么不能把 service role key 放进去？

service role key 权限太高，只能放在后端服务器。这个项目是前端静态站，只能使用 Supabase anon public key，并依靠 RLS 限制用户只能访问自己的数据。

### 本地开发怎么测试？

在仓库根目录新建 `.env.local`：

```text
VITE_SUPABASE_URL=你的 Supabase Project URL
VITE_SUPABASE_ANON_KEY=你的 Supabase anon public key
```

然后运行：

```bash
npm run dev
```
