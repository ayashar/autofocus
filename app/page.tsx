"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const fieldClass =
  "mt-2 h-10 w-full rounded-[9px] border border-[#A3ADC2] px-3 text-[15px] text-[#0F172A] outline-none placeholder:text-[#A3ADC2] focus:border-[#0077B6] focus:ring-2 focus:ring-[#CAF0F8]";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Mock login - just redirect to dashboard
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  }

  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center">
        <section className="text-center">
          <h1 className="text-[68px] font-black leading-none tracking-[-0.06em] text-[#031B77]">
            AutoFocus
          </h1>
          <p className="mt-1 text-[18px] text-[#8FA0C2]">Stop scrolling. Start Focusing.</p>
        </section>

        <form onSubmit={handleSubmit} className="mt-20 space-y-5">
          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className={fieldClass}
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <p className="text-[10px] text-center">Login bersifat dummy, tidak perlu mendaftar silakan langsung klik tombol di bawah</p>

          <button
            disabled={loading}
            type="submit"
            className="h-[48px] w-full rounded-[10px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
        </form>

        <p className="mt-3 text-center text-[14px] text-[#1F2937]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#0077B6] underline underline-offset-2">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
