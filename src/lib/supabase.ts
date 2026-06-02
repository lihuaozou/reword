import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const placeholderValues = new Set(["", "your_supabase_url", "your_supabase_anon_key"]);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || "";

export const isSupabaseConfigured = !placeholderValues.has(supabaseUrl) && !placeholderValues.has(supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true,
        storageKey: "reword-supabase-auth",
      },
    })
  : null;

export function requireSupabase() {
  if (!supabase) {
    throw new Error("Supabase 还没有配置，请先填写 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY。");
  }
  return supabase;
}
