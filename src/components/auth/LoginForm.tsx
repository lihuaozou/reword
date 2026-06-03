import { LogIn, Mail, RotateCcw } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type LoginFormProps = {
  loading?: boolean;
  disabled?: boolean;
  disabledReason?: string;
  onSubmit: (email: string, password: string) => Promise<void>;
  onForgotPassword: (email: string) => Promise<void>;
};

export function LoginForm({ loading = false, disabled = false, disabledReason, onSubmit, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const locked = loading || disabled;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage(null);
    if (disabled) {
      setMessage(disabledReason || "当前暂不可用。");
      return;
    }
    await onSubmit(email.trim(), password);
  };

  const resetPassword = async () => {
    setMessage(null);
    if (disabled) {
      setMessage(disabledReason || "当前暂不可用。");
      return;
    }
    if (!email.trim()) {
      setMessage("先填写邮箱，再发送重置邮件。");
      return;
    }
    await onForgotPassword(email.trim());
    setMessage("如果邮箱存在，重置邮件会发送到你的邮箱。");
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">邮箱</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={locked}
          autoComplete="email"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          placeholder="name@example.com"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">密码</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={locked}
          autoComplete="current-password"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          placeholder="输入密码"
        />
      </label>
      {message ? <div className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-harbor">{message}</div> : null}
      <button type="submit" disabled={locked} className="btn-primary w-full disabled:opacity-50">
        <LogIn size={18} aria-hidden="true" />
        登录
      </button>
      <button type="button" onClick={resetPassword} disabled={locked} className="btn-secondary w-full disabled:opacity-50">
        <RotateCcw size={18} aria-hidden="true" />
        忘记密码
      </button>
      {disabledReason ? <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">{disabledReason}</div> : null}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
        <Mail size={14} aria-hidden="true" />
        密码由 Supabase Auth 处理，本地不会保存明文密码。
      </div>
    </form>
  );
}
