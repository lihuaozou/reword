import { ArrowLeft, UserPlus } from "lucide-react";
import { useState } from "react";
import { LoginForm } from "../components/auth/LoginForm";
import { getSupabaseDisabledMessage } from "../lib/supabase";
import { requestPasswordReset } from "../services/authService";

type LoginPageProps = {
  configured: boolean;
  loading: boolean;
  error?: string | null;
  onLogin: (email: string, password: string) => Promise<void>;
  onSuccess: () => void;
  onRegister: () => void;
  onGuest: () => void;
};

export function LoginPage({ configured, loading, error, onLogin, onSuccess, onRegister, onGuest }: LoginPageProps) {
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (email: string, password: string) => {
    await onLogin(email, password);
    onSuccess();
  };

  return (
    <div className="mx-auto grid min-h-[calc(100dvh-160px)] max-w-5xl items-center gap-5 lg:grid-cols-[1fr_420px]">
      <section className="rounded-lg border border-sky-100 bg-white/90 p-5 shadow-soft">
        <div className="text-xs font-semibold uppercase text-copper">Cloud Account</div>
        <h1 className="mt-2 text-3xl font-semibold text-ink">2027 考研英语记忆系统</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">登录后可在手机、平板、电脑同步学习进度。未登录时仍可继续游客模式，数据会保存在本地。</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["本地先保存", "登录后同步", "换设备恢复"].map((item) => (
            <div key={item} className="rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-3 text-sm font-semibold text-harbor">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink">账号登录</h2>
            <p className="mt-1 text-sm text-slate-500">邮箱 + 密码登录</p>
          </div>
          <button type="button" onClick={onGuest} className="icon-btn" title="返回游客模式">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
        </div>

        {!configured ? <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">{getSupabaseDisabledMessage()}</div> : null}

        {error ? <div className="mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
        {message ? <div className="mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</div> : null}

        <LoginForm
          loading={loading || !configured}
          onSubmit={submit}
          onForgotPassword={async (email) => {
            await requestPasswordReset(email);
            setMessage("重置邮件已发送，请检查邮箱。");
          }}
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button type="button" onClick={onRegister} disabled={!configured} className="btn-secondary disabled:opacity-45">
            <UserPlus size={18} aria-hidden="true" />
            注册账号
          </button>
          <button type="button" onClick={onGuest} className="btn-secondary">
            游客模式
          </button>
        </div>
      </section>
    </div>
  );
}
