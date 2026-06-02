import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const placeholderValues = new Set([
  "",
  "your_supabase_url",
  "your_supabase_anon_key",
  "https://your-project.supabase.co",
  "your-anon-key",
]);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || "";

function isRealEnvValue(value: string) {
  return !placeholderValues.has(value.replace(/\/$/, ""));
}

const urlPresent = isRealEnvValue(supabaseUrl);
const anonKeyPresent = isRealEnvValue(supabaseAnonKey);

export const supabaseConfig = {
  urlPresent,
  anonKeyPresent,
  clientEnabled: urlPresent && anonKeyPresent,
  missingKeys: [
    ...(!urlPresent ? ["VITE_SUPABASE_URL"] : []),
    ...(!anonKeyPresent ? ["VITE_SUPABASE_ANON_KEY"] : []),
  ],
};

export const isSupabaseConfigured = supabaseConfig.clientEnabled;
export const supabaseEnabled = supabaseConfig.clientEnabled;

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

export function getSupabaseDisabledMessage() {
  const missing = supabaseConfig.missingKeys.join(" / ") || "Supabase 环境变量";
  return `云同步未接通：当前线上包没有读取到 ${missing}。请在 GitHub 仓库 Secrets 配置 Supabase，并重新运行 Deploy GitHub Pages。本地学习数据仍会保存在当前设备。`;
}

export function requireSupabase() {
  if (!supabase) {
    throw new Error(getSupabaseDisabledMessage());
  }
  return supabase;
}
