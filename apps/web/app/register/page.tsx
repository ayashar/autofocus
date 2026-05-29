"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("Email and password are required");
    if (password !== confirm) return setError("Passwords do not match");

    const name = email.split("@")[0] || email;
    const mockUserId = "user_" + Date.now();

    // Save mock user to localStorage
    const mockUser = { id: mockUserId, email, password, name, loggedIn: true };
    localStorage.setItem("mockUser", JSON.stringify(mockUser));
    localStorage.setItem("autofocus_auth", JSON.stringify(mockUser));

    setLoading(true);
    setTimeout(() => {
      router.push(`/register/profile?userId=${mockUserId}`);
    }, 500);
  }

  return (
    <AuthLayout showBack brandOffset="top">
      <form onSubmit={handleSubmit} className="mt-20 space-y-5">
        <TextField
          id="register-email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
        />

        <TextField
          id="register-password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <TextField
          id="confirm-password"
          label="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button disabled={loading} type="submit" size="large">
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="mt-2 text-center text-[13px] text-ink">
        Already have an account?{" "}
        <Link href="/" className="text-primary-500 underline underline-offset-2">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
