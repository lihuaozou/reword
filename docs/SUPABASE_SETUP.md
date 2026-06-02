# Supabase 登录和云同步配置

前端只使用 Supabase anon key。不要把 service role key 写入前端代码。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

GitHub Pages 部署时，也需要在构建环境提供这两个变量。未配置时，应用会继续以本地游客模式运行，云同步按钮会显示为未配置。

## Auth

在 Supabase Dashboard 开启 Email + Password 登录。第一版登录使用邮箱 + 密码；注册时额外填写 username，并写入 `profiles` 表。

如果开启邮箱验证，用户注册后需要先验证邮箱再登录。测试阶段可以暂时关闭邮箱验证。

官方参考：

- Supabase JavaScript Auth: https://supabase.com/docs/reference/javascript/auth-signup
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security

## SQL

在 Supabase SQL Editor 执行下面脚本。

```sql
create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  username text not null unique,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);

create table if not exists public.word_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  word_id text not null,
  unit_id text,
  stage int not null default 0,
  first_learned_at timestamptz,
  last_reviewed_at timestamptz,
  next_review_at timestamptz,
  known_count int not null default 0,
  fuzzy_count int not null default 0,
  forgotten_count int not null default 0,
  correct_count int not null default 0,
  wrong_count int not null default 0,
  monster_hp int,
  is_mastered boolean not null default false,
  raw_progress jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique(user_id, word_id)
);

create table if not exists public.review_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  word_id text not null,
  unit_id text,
  action text not null,
  old_stage int,
  new_stage int,
  created_at timestamptz not null default now()
);

create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mode text not null,
  unit_id text,
  started_at timestamptz not null,
  ended_at timestamptz not null,
  duration_seconds int not null default 0,
  word_count int not null default 0,
  correct_count int,
  wrong_count int,
  created_at timestamptz not null default now()
);

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  type text not null check (type in ('signin', 'checkin')),
  streak_day int not null default 1,
  reward_xp int not null default 0,
  reward_coins int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.user_stats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  total_study_days int not null default 0,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  total_study_minutes int not null default 0,
  total_words_learned int not null default 0,
  total_words_reviewed int not null default 0,
  total_quiz_count int not null default 0,
  total_correct_count int not null default 0,
  total_wrong_count int not null default 0,
  total_xp int not null default 0,
  level int not null default 1,
  coins int not null default 0,
  diamonds int not null default 0,
  monster_points int not null default 0,
  defeated_monsters int not null default 0,
  raw_stats jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.user_settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  default_accent text not null default 'us',
  auto_play_on_study boolean not null default false,
  auto_play_on_recall boolean not null default false,
  speech_rate numeric not null default 0.9,
  repeat_count int not null default 1,
  theme text not null default 'theme-default',
  updated_at timestamptz not null default now()
);

create table if not exists public.rewards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  title text not null,
  description text,
  xp int not null default 0,
  coins int not null default 0,
  diamonds int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null,
  unlocked_at timestamptz not null default now()
);

create table if not exists public.inventory (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  count int not null default 1,
  obtained_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_word_progress_user_word on public.word_progress(user_id, word_id);
create index if not exists idx_review_history_user on public.review_history(user_id, created_at desc);
create index if not exists idx_study_sessions_user on public.study_sessions(user_id, started_at desc);
create index if not exists idx_checkins_user_date on public.checkins(user_id, date desc);

alter table public.profiles enable row level security;
alter table public.word_progress enable row level security;
alter table public.review_history enable row level security;
alter table public.study_sessions enable row level security;
alter table public.checkins enable row level security;
alter table public.user_stats enable row level security;
alter table public.user_settings enable row level security;
alter table public.rewards enable row level security;
alter table public.achievements enable row level security;
alter table public.inventory enable row level security;

create policy "profiles_select_own" on public.profiles for select using (user_id = auth.uid());
create policy "profiles_insert_own" on public.profiles for insert with check (user_id = auth.uid());
create policy "profiles_update_own" on public.profiles for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "profiles_delete_own" on public.profiles for delete using (user_id = auth.uid());

create policy "word_progress_select_own" on public.word_progress for select using (user_id = auth.uid());
create policy "word_progress_insert_own" on public.word_progress for insert with check (user_id = auth.uid());
create policy "word_progress_update_own" on public.word_progress for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "word_progress_delete_own" on public.word_progress for delete using (user_id = auth.uid());

create policy "review_history_select_own" on public.review_history for select using (user_id = auth.uid());
create policy "review_history_insert_own" on public.review_history for insert with check (user_id = auth.uid());
create policy "review_history_update_own" on public.review_history for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "review_history_delete_own" on public.review_history for delete using (user_id = auth.uid());

create policy "study_sessions_select_own" on public.study_sessions for select using (user_id = auth.uid());
create policy "study_sessions_insert_own" on public.study_sessions for insert with check (user_id = auth.uid());
create policy "study_sessions_update_own" on public.study_sessions for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "study_sessions_delete_own" on public.study_sessions for delete using (user_id = auth.uid());

create policy "checkins_select_own" on public.checkins for select using (user_id = auth.uid());
create policy "checkins_insert_own" on public.checkins for insert with check (user_id = auth.uid());
create policy "checkins_update_own" on public.checkins for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "checkins_delete_own" on public.checkins for delete using (user_id = auth.uid());

create policy "user_stats_select_own" on public.user_stats for select using (user_id = auth.uid());
create policy "user_stats_insert_own" on public.user_stats for insert with check (user_id = auth.uid());
create policy "user_stats_update_own" on public.user_stats for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "user_stats_delete_own" on public.user_stats for delete using (user_id = auth.uid());

create policy "user_settings_select_own" on public.user_settings for select using (user_id = auth.uid());
create policy "user_settings_insert_own" on public.user_settings for insert with check (user_id = auth.uid());
create policy "user_settings_update_own" on public.user_settings for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "user_settings_delete_own" on public.user_settings for delete using (user_id = auth.uid());

create policy "rewards_select_own" on public.rewards for select using (user_id = auth.uid());
create policy "rewards_insert_own" on public.rewards for insert with check (user_id = auth.uid());
create policy "rewards_update_own" on public.rewards for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "rewards_delete_own" on public.rewards for delete using (user_id = auth.uid());

create policy "achievements_select_own" on public.achievements for select using (user_id = auth.uid());
create policy "achievements_insert_own" on public.achievements for insert with check (user_id = auth.uid());
create policy "achievements_update_own" on public.achievements for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "achievements_delete_own" on public.achievements for delete using (user_id = auth.uid());

create policy "inventory_select_own" on public.inventory for select using (user_id = auth.uid());
create policy "inventory_insert_own" on public.inventory for insert with check (user_id = auth.uid());
create policy "inventory_update_own" on public.inventory for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "inventory_delete_own" on public.inventory for delete using (user_id = auth.uid());
```

## 同步策略

- 未登录：只读写 localStorage。
- 登录后：进入“云同步”页选择上传本地、下载云端或合并。
- 日常学习动作：本地立即保存，然后触发云端同步。
- 离线时：先写入本地，并写入 pending sync queue；网络恢复后自动尝试上传。
- 冲突处理：单词进度按更新时间较新的记录保留；统计类数值取较大值或合并数组；复习记录和学习 session 追加合并。
