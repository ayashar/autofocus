"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Onboarding } from "@/components/Onboarding";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

function shouldShowOnboarding() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("autofocus_onboarding_seen") !== "1";
}

export default function Home() {
  const router = useRouter();
  const [showOnboarding, setShowOnboarding] = useState(shouldShowOnboarding);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    setLoading(true);
    const name = email.split("@")[0] || "User";
    const mockUser = { id: "user_" + Date.now(), email, name, loggedIn: true };
    localStorage.setItem("mockUser", JSON.stringify(mockUser));
    localStorage.setItem("autofocus_auth", JSON.stringify(mockUser));

    setTimeout(() => {
      router.push(`/register/profile/configuration?userId=${mockUser.id}`);
    }, 500);
  }

  function handleSkip() {
    localStorage.setItem("autofocus_auth", JSON.stringify({ loggedIn: false, mode: "guest" }));
    router.push("/register/profile/configuration?guest=1");
  }

  if (showOnboarding) {
    return (
      <Onboarding
        onComplete={() => {
          localStorage.setItem("autofocus_onboarding_seen", "1");
          setShowOnboarding(false);
        }}
      />
    );
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="mt-16 space-y-5">
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
        />

        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button disabled={loading} type="submit" size="large">
          {loading ? "Signing in..." : "Log In"}
        </Button>
      </form>

      <p className="mt-2 text-center text-[13px] text-ink">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary-500 underline underline-offset-2">
          Sign Up
        </Link>
      </p>

      <button
        type="button"
        onClick={handleSkip}
        className="mt-16 text-center text-[16px] text-[#858585] transition-colors hover:text-primary-500"
      >
        Skip for now
      </button>
    </AuthLayout>
  );
}
