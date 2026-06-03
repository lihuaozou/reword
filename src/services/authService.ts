import type { Session, User } from "@supabase/supabase-js";
import { isSupabaseConfigured, requireSupabase, supabase } from "../lib/supabase";
import type { UserProfile } from "../types";

type RegisterInput = {
  username: string;
  email: string;
  password: string;
};

type LoginInput = {
  email: string;
  password: string;
};

const USERNAME_PATTERN = /^[\p{Script=Han}A-Za-z0-9_]{2,20}$/u;

function normalizeProfile(row: any): UserProfile | null {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    username: row.username,
    displayName: row.display_name,
    avatarUrl: row.avatar_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function sanitizeFallbackUsername(value: string, fallback: string) {
  const normalized = value
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\p{Script=Han}A-Za-z0-9_]/gu, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 20);
  return USERNAME_PATTERN.test(normalized) ? normalized : fallback;
}

function assertValidUsername(value: string) {
  const username = value.trim();
  if (!USERNAME_PATTERN.test(username)) {
    throw new Error("用户名需为 2-20 位，只能包含中文、字母、数字或下划线。");
  }
  return username;
}

function normalizeAuthError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "");
  const lower = message.toLowerCase();

  if (lower.includes("html") || lower.includes("unexpected token") || lower.includes("<html")) {
    return new Error("请求返回了 HTML 页面，可能是 Supabase 地址填错、GitHub Pages 返回 404，或线上包没有正确注入环境变量。");
  }
  if (lower.includes("is_username_available") || lower.includes("function") || lower.includes("schema cache")) {
    return new Error("Supabase 表结构未更新，请在 SQL Editor 重新执行最新的 supabase/schema.sql。");
  }
  if (lower.includes("profiles_username") || lower.includes("duplicate") || lower.includes("unique")) {
    return new Error("用户名已被占用，请换一个。");
  }
  if (lower.includes("database error saving new user")) {
    return new Error("创建账号时写入资料失败，可能是用户名已被占用，或 Supabase schema 尚未更新。请换一个用户名，或重新执行最新 schema.sql。");
  }
  if (lower.includes("already registered") || lower.includes("already been registered")) {
    return new Error("该邮箱已注册，请直接登录。");
  }
  if (lower.includes("invalid login credentials")) {
    return new Error("邮箱或密码不正确。");
  }
  if (lower.includes("email not confirmed")) {
    return new Error("邮箱还没有完成验证，请先到邮箱点击验证链接。");
  }
  if (lower.includes("row-level security")) {
    return new Error("Supabase RLS 策略阻止了本次操作，请确认已执行最新 schema.sql。");
  }

  return new Error(message || "账号请求失败，请稍后重试。");
}

function assertSupabaseEnabled() {
  if (!isSupabaseConfigured) {
    throw new Error("当前线上包未读取到 Supabase 配置，请先配置 GitHub Secrets 并重新部署。你仍可使用游客模式背单词。");
  }
}

async function assertUsernameAvailable(username: string) {
  const client = requireSupabase();
  const result = await client.rpc("is_username_available", { candidate: username });
  if (result.error) throw normalizeAuthError(result.error);
  if (result.data === false) throw new Error("用户名已被占用，请换一个。");
}

export async function getCurrentSession(): Promise<{ session: Session | null; user: User | null }> {
  if (!supabase) return { session: null, user: null };
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return { session: data.session, user: data.session?.user || null };
}

export async function getProfile(userId: string) {
  assertSupabaseEnabled();
  const client = requireSupabase();
  const { data, error } = await client.from("profiles").select("*").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  return normalizeProfile(data);
}

export async function upsertProfile(user: User, username?: string) {
  assertSupabaseEnabled();
  const client = requireSupabase();
  const fallback = `user_${user.id.slice(0, 8)}`;
  const metadataUsername = user.user_metadata?.username || user.email?.split("@")[0] || fallback;
  const safeUsername = username ? assertValidUsername(username) : sanitizeFallbackUsername(metadataUsername, fallback);

  const { data, error } = await client
    .from("profiles")
    .upsert(
      {
        user_id: user.id,
        username: safeUsername,
        display_name: user.user_metadata?.display_name || safeUsername,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    )
    .select("*")
    .single();
  if (error) throw error;
  return normalizeProfile(data);
}

export async function signUpWithEmail({ username, email, password }: RegisterInput) {
  try {
    assertSupabaseEnabled();
    const client = requireSupabase();
    const nextUsername = assertValidUsername(username);
    await assertUsernameAvailable(nextUsername);
    const { data, error } = await client.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          username: nextUsername,
          display_name: nextUsername,
        },
      },
    });
    if (error) throw normalizeAuthError(error);
    if (data.user) {
      try {
        await upsertProfile(data.user, nextUsername);
      } catch (profileError) {
        if (data.session) throw normalizeAuthError(profileError);
      }
    }
    return data;
  } catch (error) {
    throw normalizeAuthError(error);
  }
}

export async function signInWithEmail({ email, password }: LoginInput) {
  try {
    assertSupabaseEnabled();
    const client = requireSupabase();
    const { data, error } = await client.auth.signInWithPassword({ email: email.trim(), password });
    if (error) throw normalizeAuthError(error);
    if (data.user) await upsertProfile(data.user);
    return data;
  } catch (error) {
    throw normalizeAuthError(error);
  }
}

export async function signOut() {
  assertSupabaseEnabled();
  const client = requireSupabase();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

export async function requestPasswordReset(email: string) {
  try {
    assertSupabaseEnabled();
    const client = requireSupabase();
    const { error } = await client.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
    });
    if (error) throw normalizeAuthError(error);
  } catch (error) {
    throw normalizeAuthError(error);
  }
}
