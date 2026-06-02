import { useCallback, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { getCurrentSession, getProfile, signInWithEmail, signOut, signUpWithEmail, upsertProfile } from "../services/authService";
import type { UserProfile } from "../types";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState<string | null>(null);

  const refreshProfile = useCallback(
    async (nextUser = user) => {
      if (!nextUser || !isSupabaseConfigured) {
        setProfile(null);
        return null;
      }
      const existing = await getProfile(nextUser.id);
      const nextProfile = existing || (await upsertProfile(nextUser));
      setProfile(nextProfile);
      return nextProfile;
    },
    [user]
  );

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return;
    }

    let alive = true;
    getCurrentSession()
      .then(async ({ session: nextSession, user: nextUser }) => {
        if (!alive) return;
        setSession(nextSession);
        setUser(nextUser);
        if (nextUser) await refreshProfile(nextUser);
      })
      .catch((nextError) => {
        if (!alive) return;
        setError(nextError instanceof Error ? nextError.message : "读取登录状态失败");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      const nextUser = nextSession?.user || null;
      setSession(nextSession);
      setUser(nextUser);
      if (nextUser) refreshProfile(nextUser).catch(() => undefined);
      else setProfile(null);
    });

    return () => {
      alive = false;
      data.subscription.unsubscribe();
    };
  }, [refreshProfile]);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);
      try {
        const data = await signInWithEmail({ email, password });
        setSession(data.session);
        setUser(data.user);
        if (data.user) await refreshProfile(data.user);
        return data;
      } catch (nextError) {
        const message = nextError instanceof Error ? nextError.message : "登录失败";
        setError(message);
        throw nextError;
      } finally {
        setLoading(false);
      }
    },
    [refreshProfile]
  );

  const register = useCallback(
    async (username: string, email: string, password: string) => {
      setLoading(true);
      setError(null);
      try {
        const data = await signUpWithEmail({ username, email, password });
        setSession(data.session);
        setUser(data.user);
        if (data.user) await refreshProfile(data.user);
        return data;
      } catch (nextError) {
        const message = nextError instanceof Error ? nextError.message : "注册失败";
        setError(message);
        throw nextError;
      } finally {
        setLoading(false);
      }
    },
    [refreshProfile]
  );

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      setSession(null);
      setUser(null);
      setProfile(null);
    } catch (nextError) {
      const message = nextError instanceof Error ? nextError.message : "退出登录失败";
      setError(message);
      throw nextError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    configured: isSupabaseConfigured,
    session,
    user,
    profile,
    loading,
    error,
    login,
    register,
    logout,
    refreshProfile,
  };
}
