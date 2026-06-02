import { UserPlus } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type RegisterFormProps = {
  loading?: boolean;
  onSubmit: (username: string, email: string, password: string) => Promise<void>;
};

export function RegisterForm({ loading = false, onSubmit }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
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
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
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
          autoComplete="email"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
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
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
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
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            placeholder="再次输入"
          />
        </label>
      </div>
      {error ? <div className="rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
        <UserPlus size={18} aria-hidden="true" />
        注册账号
      </button>
    </form>
  );
}
