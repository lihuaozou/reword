import type { Session, User } from "@supabase/supabase-js";
import { requireSupabase, supabase } from "../lib/supabase";
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

export async function getCurrentSession(): Promise<{ session: Session | null; user: User | null }> {
  if (!supabase) return { session: null, user: null };
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return { session: data.session, user: data.session?.user || null };
}

export async function getProfile(userId: string) {
  const client = requireSupabase();
  const { data, error } = await client.from("profiles").select("*").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  return normalizeProfile(data);
}

export async function upsertProfile(user: User, username?: string) {
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
  const client = requireSupabase();
  const nextUsername = assertValidUsername(username);
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
  if (error) throw error;
  if (data.user && data.session) await upsertProfile(data.user, nextUsername);
  return data;
}

export async function signInWithEmail({ email, password }: LoginInput) {
  const client = requireSupabase();
  const { data, error } = await client.auth.signInWithPassword({ email: email.trim(), password });
  if (error) throw error;
  if (data.user) await upsertProfile(data.user);
  return data;
}

export async function signOut() {
  const client = requireSupabase();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

export async function requestPasswordReset(email: string) {
  const client = requireSupabase();
  const { error } = await client.auth.resetPasswordForEmail(email.trim(), {
    redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
  });
  if (error) throw error;
}
