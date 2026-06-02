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
  const fallback = user.email?.split("@")[0] || `user_${user.id.slice(0, 8)}`;
  const nextUsername = (username || user.user_metadata?.username || fallback).trim();
  const { data, error } = await client
    .from("profiles")
    .upsert(
      {
        user_id: user.id,
        username: nextUsername,
        display_name: user.user_metadata?.display_name || nextUsername,
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
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        display_name: username,
      },
    },
  });
  if (error) throw error;
  if (data.user && data.session) await upsertProfile(data.user, username);
  return data;
}

export async function signInWithEmail({ email, password }: LoginInput) {
  const client = requireSupabase();
  const { data, error } = await client.auth.signInWithPassword({ email, password });
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
  const { error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
  });
  if (error) throw error;
}
