# GitHub Pages 环境变量配置

当前线上地址：

https://lihuaozou.github.io/reword/

Vite 只会把以 `VITE_` 开头的变量注入前端。Supabase 云同步需要在 GitHub Actions Secrets 里配置：

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

配置步骤：

1. 打开 GitHub 仓库 `lihuaozou/reword`。
2. 进入 Settings -> Secrets and variables -> Actions。
3. 点击 New repository secret。
4. 添加 `VITE_SUPABASE_URL`，值为 Supabase Project URL。
5. 添加 `VITE_SUPABASE_ANON_KEY`，值为 Supabase anon public key。
6. 推送 main 或手动运行 `.github/workflows/deploy.yml`。

不要添加或暴露 Supabase service role key。前端只能使用 anon key，用户数据安全依赖 Supabase RLS。

如果 Secrets 没有配置，线上页面仍可正常背单词，只会显示“云同步未配置，本地模式可用”。
