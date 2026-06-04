import { ArrowLeft, LogIn } from "lucide-react";
import { useState } from "react";
import { RegisterForm } from "../components/auth/RegisterForm";

type RegisterPageProps = {
  configured: boolean;
  loading: boolean;
  error?: string | null;
  onRegister: (username: string, email: string, password: string) => Promise<{ session: unknown | null }>;
  onSuccess: () => void;
  onLogin: () => void;
};

export function RegisterPage({ configured, loading, error, onRegister, onSuccess, onLogin }: RegisterPageProps) {
  const [message, setMessage] = useState<string | null>(null);
  const disabledReason = !configured ? "配置 Supabase 后可注册账号并跨设备同步。当前为本地模式，注册暂不可用。" : undefined;

  const submit = async (username: string, email: string, password: string) => {
    if (!configured) {
      setMessage(disabledReason || "当前暂不可用。");
      return;
    }
    try {
      const result = await onRegister(username, email, password);
      if (result.session) {
        setMessage("注册成功，已登录。");
        onSuccess();
        return;
      }
      setMessage("注册成功，请先到邮箱完成验证，然后回到登录页登录。");
    } catch (nextError) {
      setMessage(nextError instanceof Error ? nextError.message : "注册失败，请稍后重试。");
    }
  };

  return (
    <div className="mx-auto max-w-xl">
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Register</div>
            <h1 className="mt-1 text-2xl font-semibold text-ink">创建学习账号</h1>
          </div>
          <button type="button" onClick={onLogin} className="icon-btn" title="返回登录">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
        </div>

        {!configured ? <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">{disabledReason}</div> : null}
        {error ? <div className="mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
        {message ? <div className="mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</div> : null}

        <RegisterForm loading={loading} disabled={!configured} disabledReason={disabledReason} onSubmit={submit} />

        <button type="button" onClick={onLogin} className="btn-secondary mt-4 w-full">
          <LogIn size={18} aria-hidden="true" />
          返回登录
        </button>
      </section>
    </div>
  );
}
