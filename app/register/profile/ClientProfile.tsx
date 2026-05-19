"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";

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

    // Save to localStorage (mock)
    const mockUser = JSON.parse(localStorage.getItem("mockUser") || "{}");
    if (username) mockUser.name = username;
    if (photoId) mockUser.photoId = photoId;
    localStorage.setItem("mockUser", JSON.stringify(mockUser));

    setTimeout(() => {
      router.push(`/register/profile/configuration?userId=${userId}`);
      setLoading(false);
    }, 300);
  }

  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }

  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col">
        <Link
          href="/register"
          className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#0B88C5] px-5 py-2 text-[18px] text-white shadow-sm transition-colors hover:bg-[#0a7bb5]"
        >
          <ChevronLeft size={24} strokeWidth={2.3} />
          Back
        </Link>

        <section className="mt-16 text-center">
          <h1 className="text-[68px] font-black leading-none tracking-[-0.06em] text-[#031B77]">
            AutoFokus
          </h1>
          <p className="mt-1 text-[18px] text-[#8FA0C2]">Stop scrolling. Start Focusing.</p>
        </section>

        <section className="mt-20">
          <label className="block text-center text-[17px] text-[#111827]" htmlFor="username">
            What should we call you?
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className="mt-3 h-10 w-full rounded-[9px] border border-[#A3ADC2] px-3 text-[15px] text-[#0F172A] outline-none placeholder:text-[#A3ADC2] focus:border-[#0077B6] focus:ring-2 focus:ring-[#CAF0F8]"
          />
        </section>

        <section className="mt-8">
          <p className="text-center text-[17px] text-[#111827]">Choose your profile picture</p>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {avatars.map((avatar) => (
              <button
                key={avatar}
                type="button"
                onClick={() => setPhotoId(String(avatar))}
                className={`aspect-square rounded-[4px] transition-transform active:scale-95 ${photoId === String(avatar) ? "ring-2 ring-[#0B88C5]" : "bg-[#D9D9D9]"}`}
                aria-label={`Choose profile avatar ${avatar}`}
              />
            ))}
          </div>
        </section>

        {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

        <button
          onClick={handleSave}
          type="button"
          disabled={loading}
          className="mt-8 h-[48px] w-full rounded-[10px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6] disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save"}
        </button>

        <button
          onClick={handleLogout}
          type="button"
          className="mt-3 h-[40px] w-full rounded-[8px] bg-[#E53E3E] text-[16px] font-medium text-white transition-colors hover:bg-[#cc2f2f]"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
