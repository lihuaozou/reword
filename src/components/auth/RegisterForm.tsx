import { UserPlus } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type RegisterFormProps = {
  loading?: boolean;
  disabled?: boolean;
  disabledReason?: string;
  onSubmit: (username: string, email: string, password: string) => Promise<void>;
};

const USERNAME_PATTERN = /^[\p{Script=Han}A-Za-z0-9_]{2,20}$/u;

function validateUsername(value: string) {
  const username = value.trim();
  if (!username) return "请输入用户名。";
  if (!USERNAME_PATTERN.test(username)) return "用户名需为 2-20 位，只能包含中文、字母、数字或下划线。";
  return null;
}

function validateEmail(value: string) {
  const email = value.trim();
  if (!email) return "请输入邮箱。";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "请输入正确的邮箱地址。";
  return null;
}

export function RegisterForm({ loading = false, disabled = false, disabledReason, onSubmit }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const locked = loading || disabled;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (disabled) {
      setError(disabledReason || "当前暂不可用。");
      return;
    }

    const usernameError = validateUsername(username);
    if (usernameError) {
      setError(usernameError);
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    if (password.length < 6) {
      setError("密码至少 6 位。");
      return;
    }
    if (password !== confirmPassword) {
      setError("两次输入的密码不一致。");
      return;
    }

    await onSubmit(username.trim(), email.trim(), password);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">用户名</span>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
          minLength={2}
          maxLength={20}
          disabled={locked}
          autoComplete="username"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          placeholder="例如 kaoyan2027"
        />
      </label>
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">密码</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            disabled={locked}
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            placeholder="至少 6 位"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">确认密码</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            disabled={locked}
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            placeholder="再次输入"
          />
        </label>
      </div>
      {error ? <div className="rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
      {disabledReason ? <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">{disabledReason}</div> : null}
      <button type="submit" disabled={locked} className="btn-primary w-full disabled:opacity-50">
        <UserPlus size={18} aria-hidden="true" />
        注册账号
      </button>
    </form>
  );
}
