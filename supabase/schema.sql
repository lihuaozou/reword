-- Reword Supabase schema
-- Copy this whole file into Supabase SQL Editor and run it once.

create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

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
  created_at timestamptz not null default now(),
  unique(user_id, date, type)
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
  unlocked_at timestamptz not null default now(),
  unique(user_id, achievement_id)
);

create table if not exists public.inventory (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  count int not null default 1,
  obtained_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, item_id)
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

create table if not exists public.sync_queue (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  payload jsonb not null default '{}'::jsonb,
  retry_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_word_progress_user_word on public.word_progress(user_id, word_id);
create index if not exists idx_review_history_user_created on public.review_history(user_id, created_at desc);
create index if not exists idx_study_sessions_user_started on public.study_sessions(user_id, started_at desc);
create index if not exists idx_checkins_user_date on public.checkins(user_id, date desc);
create index if not exists idx_rewards_user_created on public.rewards(user_id, created_at desc);
create index if not exists idx_sync_queue_user_created on public.sync_queue(user_id, created_at asc);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
drop trigger if exists set_user_stats_updated_at on public.user_stats;
create trigger set_user_stats_updated_at before update on public.user_stats for each row execute function public.set_updated_at();
drop trigger if exists set_word_progress_updated_at on public.word_progress;
create trigger set_word_progress_updated_at before update on public.word_progress for each row execute function public.set_updated_at();
drop trigger if exists set_inventory_updated_at on public.inventory;
create trigger set_inventory_updated_at before update on public.inventory for each row execute function public.set_updated_at();
drop trigger if exists set_user_settings_updated_at on public.user_settings;
create trigger set_user_settings_updated_at before update on public.user_settings for each row execute function public.set_updated_at();
drop trigger if exists set_sync_queue_updated_at on public.sync_queue;
create trigger set_sync_queue_updated_at before update on public.sync_queue for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.user_stats enable row level security;
alter table public.word_progress enable row level security;
alter table public.review_history enable row level security;
alter table public.study_sessions enable row level security;
alter table public.checkins enable row level security;
alter table public.rewards enable row level security;
alter table public.achievements enable row level security;
alter table public.inventory enable row level security;
alter table public.user_settings enable row level security;
alter table public.sync_queue enable row level security;

drop policy if exists "own_select" on public.profiles;
drop policy if exists "own_insert" on public.profiles;
drop policy if exists "own_update" on public.profiles;
drop policy if exists "own_delete" on public.profiles;
create policy "own_select" on public.profiles for select using (user_id = auth.uid());
create policy "own_insert" on public.profiles for insert with check (user_id = auth.uid());
create policy "own_update" on public.profiles for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.profiles for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.user_stats;
drop policy if exists "own_insert" on public.user_stats;
drop policy if exists "own_update" on public.user_stats;
drop policy if exists "own_delete" on public.user_stats;
create policy "own_select" on public.user_stats for select using (user_id = auth.uid());
create policy "own_insert" on public.user_stats for insert with check (user_id = auth.uid());
create policy "own_update" on public.user_stats for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.user_stats for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.word_progress;
drop policy if exists "own_insert" on public.word_progress;
drop policy if exists "own_update" on public.word_progress;
drop policy if exists "own_delete" on public.word_progress;
create policy "own_select" on public.word_progress for select using (user_id = auth.uid());
create policy "own_insert" on public.word_progress for insert with check (user_id = auth.uid());
create policy "own_update" on public.word_progress for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.word_progress for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.review_history;
drop policy if exists "own_insert" on public.review_history;
drop policy if exists "own_update" on public.review_history;
drop policy if exists "own_delete" on public.review_history;
create policy "own_select" on public.review_history for select using (user_id = auth.uid());
create policy "own_insert" on public.review_history for insert with check (user_id = auth.uid());
create policy "own_update" on public.review_history for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.review_history for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.study_sessions;
drop policy if exists "own_insert" on public.study_sessions;
drop policy if exists "own_update" on public.study_sessions;
drop policy if exists "own_delete" on public.study_sessions;
create policy "own_select" on public.study_sessions for select using (user_id = auth.uid());
create policy "own_insert" on public.study_sessions for insert with check (user_id = auth.uid());
create policy "own_update" on public.study_sessions for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.study_sessions for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.checkins;
drop policy if exists "own_insert" on public.checkins;
drop policy if exists "own_update" on public.checkins;
drop policy if exists "own_delete" on public.checkins;
create policy "own_select" on public.checkins for select using (user_id = auth.uid());
create policy "own_insert" on public.checkins for insert with check (user_id = auth.uid());
create policy "own_update" on public.checkins for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.checkins for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.rewards;
drop policy if exists "own_insert" on public.rewards;
drop policy if exists "own_update" on public.rewards;
drop policy if exists "own_delete" on public.rewards;
create policy "own_select" on public.rewards for select using (user_id = auth.uid());
create policy "own_insert" on public.rewards for insert with check (user_id = auth.uid());
create policy "own_update" on public.rewards for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.rewards for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.achievements;
drop policy if exists "own_insert" on public.achievements;
drop policy if exists "own_update" on public.achievements;
drop policy if exists "own_delete" on public.achievements;
create policy "own_select" on public.achievements for select using (user_id = auth.uid());
create policy "own_insert" on public.achievements for insert with check (user_id = auth.uid());
create policy "own_update" on public.achievements for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.achievements for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.inventory;
drop policy if exists "own_insert" on public.inventory;
drop policy if exists "own_update" on public.inventory;
drop policy if exists "own_delete" on public.inventory;
create policy "own_select" on public.inventory for select using (user_id = auth.uid());
create policy "own_insert" on public.inventory for insert with check (user_id = auth.uid());
create policy "own_update" on public.inventory for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.inventory for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.user_settings;
drop policy if exists "own_insert" on public.user_settings;
drop policy if exists "own_update" on public.user_settings;
drop policy if exists "own_delete" on public.user_settings;
create policy "own_select" on public.user_settings for select using (user_id = auth.uid());
create policy "own_insert" on public.user_settings for insert with check (user_id = auth.uid());
create policy "own_update" on public.user_settings for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.user_settings for delete using (user_id = auth.uid());

drop policy if exists "own_select" on public.sync_queue;
drop policy if exists "own_insert" on public.sync_queue;
drop policy if exists "own_update" on public.sync_queue;
drop policy if exists "own_delete" on public.sync_queue;
create policy "own_select" on public.sync_queue for select using (user_id = auth.uid());
create policy "own_insert" on public.sync_queue for insert with check (user_id = auth.uid());
create policy "own_update" on public.sync_queue for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own_delete" on public.sync_queue for delete using (user_id = auth.uid());
