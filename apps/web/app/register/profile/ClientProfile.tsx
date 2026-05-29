"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

const avatars = [1, 2, 3, 4];

export default function ClientProfile() {
  const router = useRouter();
  const search = useSearchParams();
  const userId = search?.get("userId") || undefined;
  const [username, setUsername] = useState("");
  const [photoId, setPhotoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    if (!userId) return setError("Missing user id");
    setLoading(true);
    setError(null);

    const mockUser = JSON.parse(localStorage.getItem("mockUser") || "{}");
    if (username) mockUser.name = username;
    if (photoId) mockUser.photoId = photoId;
    localStorage.setItem("mockUser", JSON.stringify(mockUser));

    setTimeout(() => {
      router.push(`/register/profile/configuration?userId=${userId}`);
      setLoading(false);
    }, 300);
  }

  return (
    <AuthLayout showBack backHref="/register" brandOffset="top">
      <section className="mt-20">
        <div className="text-center">
          <TextField
            id="username"
            label="What should we call you?"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
        </div>
      </section>

      <section className="mt-8">
        <p className="text-center text-[17px] text-ink">Choose your profile picture</p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {avatars.map((avatar) => (
            <button
              key={avatar}
              type="button"
              onClick={() => setPhotoId(String(avatar))}
              className={`aspect-square rounded-[4px] bg-[#D9D9D9] transition-transform active:scale-95 ${
                photoId === String(avatar) ? "ring-2 ring-primary-500 ring-offset-2" : ""
              }`}
              aria-label={`Choose profile avatar ${avatar}`}
            />
          ))}
        </div>
      </section>

      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

      <Button onClick={handleSave} type="button" disabled={loading} size="large" className="mt-8">
        {loading ? "Saving..." : "Log In"}
      </Button>
    </AuthLayout>
  );
}
