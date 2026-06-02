# Supabase 登录和云同步配置

前端只使用 Supabase anon key。不要把 service role key 写入前端代码，也不要自己保存明文密码。

官方参考：

- Supabase JavaScript Auth: https://supabase.com/docs/reference/javascript/auth-signup
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security

## 1. 创建 Supabase 项目

1. 打开 https://supabase.com/ 并新建项目。
2. 进入 Project Settings -> API。
3. 复制 `Project URL`。
4. 复制 `anon public` key。
5. 不要复制或暴露 `service_role` key。

## 2. 本地环境变量

复制 `.env.example` 为 `.env.local`：

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

未配置时，应用会显示“云同步未配置，本地模式可用”，所有学习功能继续使用 localStorage。

## 3. GitHub Pages Secrets

仓库页面进入 Settings -> Secrets and variables -> Actions -> New repository secret，新增：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

当前 workflow 文件是 `.github/workflows/deploy.yml`。它会在 `npm run build` 时把 Secrets 注入 Vite：

```yaml
env:
  VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
  VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

## 4. Auth 设置

在 Supabase Dashboard -> Authentication -> Providers 中启用 Email。

第一版支持：

- 注册：username + email + password
- 登录：email + password
- 退出登录
- 游客本地模式

如果开启邮箱验证，用户注册后需要先验证邮箱再登录。测试阶段可以暂时关闭邮箱验证。

## 5. 数据库 SQL

在 Supabase SQL Editor 里复制并执行：

```text
supabase/schema.sql
```

这个文件包含：

- `profiles`
- `user_stats`
- `word_progress`
- `review_history`
- `study_sessions`
- `checkins`
- `rewards`
- `achievements`
- `inventory`
- `user_settings`
- `sync_queue`

所有表都启用了 Row Level Security，策略均限制 `user_id = auth.uid()`，用户只能读写自己的学习进度、金币、等级、错题、打卡和同步队列。

关键约束：

- `profiles.username` 唯一
- `word_progress(user_id, word_id)` 唯一
- `checkins(user_id, date, type)` 唯一
- `achievements(user_id, achievement_id)` 唯一
- `inventory(user_id, item_id)` 唯一

## 6. 验证

1. 本地填写 `.env.local`。
2. 执行 `npm run dev`。
3. 打开账号同步页。
4. 注册账号。
5. 登录账号。
6. 学一个单词或完成一次复习。
7. 点击账号同步，手动上传或合并。
8. 换浏览器登录同一账号，下载云端数据。

同步失败不会删除本地数据；离线时会先写入 localStorage 和 pending sync queue，网络恢复后再尝试上传。
