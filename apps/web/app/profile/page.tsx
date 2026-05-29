"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { RecoveryModal } from "@/components/ui/RecoveryModal";
import { useStreak } from "@/hooks/useStreak";

const avatars = [1, 2, 3, 4];

type StoredUser = {
  name?: string;
  photoId?: string;
};

function readStoredUser(): StoredUser {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("mockUser") || "{}") as StoredUser;
  } catch {
    return {};
  }
}

export default function ProfilePage() {
  const { currentStreak, status } = useStreak();
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(() => readStoredUser().name ?? "User");
  const [photoId, setPhotoId] = useState(() => readStoredUser().photoId ?? "1");

  function saveProfile() {
    const existing = JSON.parse(localStorage.getItem("mockUser") || "{}");
    const next = { ...existing, name: username, photoId, loggedIn: true };
    localStorage.setItem("mockUser", JSON.stringify(next));
    localStorage.setItem("autofocus_auth", JSON.stringify(next));
  }

  return (
    <MobileLayout title="Profile">
      {showModal && <RecoveryModal onClose={() => setShowModal(false)} />}
      <div className="mx-auto w-full max-w-[390px] pb-6 pt-6">
        <section className="rounded-[20px] bg-primary-100 px-5 py-7">
          <div className="flex items-center gap-5">
            <div className="h-[76px] w-[76px] shrink-0 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className="text-[20px] leading-tight text-ink">
                Hello, <span className="font-bold">{username}!</span>
              </p>
              <p className="mt-3 text-[16px] font-bold text-ink">
                Current streak: {currentStreak}
              </p>
              {status === "recovery" && (
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="mt-2 rounded border border-destructive-200 bg-destructive-100 px-2 py-0.5 text-[12px] font-semibold text-destructive-200"
                >
                  Recover streak
                </button>
              )}
            </div>
          </div>
        </section>

        <h2 className="mt-10 text-[22px] font-bold text-ink">Change profile</h2>

        <div className="mt-8 grid grid-cols-[1.2fr_1fr] gap-5">
          <div>
            <TextField
              id="profile-username"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="username"
            />

            <Button type="button" size="large" className="mt-12 h-[38px]" onClick={saveProfile}>
              Save
            </Button>

            <Button
              onClick={() => {
                localStorage.setItem("autofocus_auth", JSON.stringify({ loggedIn: false, mode: "guest" }));
                signOut({ callbackUrl: "/" });
              }}
              type="button"
              variant="destructive"
              className="mt-3 h-9 w-full"
            >
              Logout
            </Button>
          </div>

          <div>
            <p className="text-[16px] text-ink">Profile Picture</p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
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
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
