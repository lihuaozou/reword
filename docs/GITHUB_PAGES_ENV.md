# GitHub Pages 环境变量配置

当前线上地址：

```text
https://lihuaozou.github.io/reword/
```

Vite 只会把以 `VITE_` 开头的变量注入前端。Supabase 云同步需要在 GitHub Actions Secrets 配置：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

配置步骤：

1. 打开 GitHub 仓库 `lihuaozou/reword`。
2. 进入 `Settings -> Secrets and variables -> Actions`。
3. 点击 `New repository secret`。
4. 添加 `VITE_SUPABASE_URL`，值为 Supabase Project URL。
5. 添加 `VITE_SUPABASE_ANON_KEY`，值为 Supabase anon public key。
6. 手动运行 `Actions -> Deploy GitHub Pages -> Run workflow`。

不要添加或暴露 Supabase service role key。前端只能使用 anon key，用户数据安全依赖 Supabase RLS。

deploy workflow 会打印 secret 是否存在：

```text
Supabase URL configured: true/false
Supabase anon key configured: true/false
```

这不会泄露密钥值。
