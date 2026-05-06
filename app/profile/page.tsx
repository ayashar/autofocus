"use client";

import { MobileLayout } from "@/components/layout/MobileLayout";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useStreak } from "@/hooks/useStreak";
import { RecoveryModal } from "@/components/ui/RecoveryModal";
import Link from "next/link";

const avatars = [1, 2, 3, 4];

export default function ProfilePage() {
  const { currentStreak, status, debugForwardTime } = useStreak();
  const [showModal, setShowModal] = useState(false);

  return (
    <MobileLayout title="Profile">
      {showModal && <RecoveryModal onClose={() => setShowModal(false)} />}
      <div className="mx-auto w-full max-w-[390px] pb-6 pt-5">
        <section className="rounded-[24px] bg-[#CFEFFF] px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 shrink-0 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className="text-[22px] leading-tight text-[#031B77]">
                Hello, <span className="font-bold">User!</span>
              </p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-[16px] font-bold text-[#031B77]">
                <span>Current streak: {currentStreak}</span>
              </p>
              {status === 'recovery' && (
                <div className="mt-1.5 inline-flex items-center rounded border border-[#E53E3E] bg-[#FFE5E5] px-2 py-0.5 text-[12px] font-medium text-[#E53E3E]">
                  Streak lost! <button onClick={() => setShowModal(true)} className="ml-1 font-bold underline">Recover</button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Debug Buttons for Prototype */}
        <div className="mt-4 rounded-xl border border-yellow-300 bg-yellow-50 p-4">
          <p className="mb-2 text-[12px] font-bold text-yellow-800">Time machine (Untuk prototype smart streak)</p>
          <div className="flex gap-2">
            <button
              onClick={() => debugForwardTime(24.1)}
              className="rounded bg-yellow-500 px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-yellow-600"
            >
              Fast Forward 24h (Recovery)
            </button>
            <button
              onClick={() => debugForwardTime(26.1)}
              className="rounded bg-red-500 px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-red-600"
            >
              Fast Forward 26h (Lost)
            </button>
          </div>
        </div>

        <p className="mt-4">Fitur ini masih dalam pengembangan</p>
        <h2 className="mt-8 text-[22px] font-bold text-[#031B77]">Change profile</h2>

        <div className="mt-5 grid grid-cols-[1.2fr_1fr] gap-4">
          <div>
            <label className="text-[16px] text-[#111827]" htmlFor="profile-username">
              Username
            </label>
            <input
              id="profile-username"
              type="text"
              placeholder="username"
              className="mt-2 h-10 w-full rounded-[9px] border border-[#A3ADC2] px-3 text-[15px] text-[#0F172A] outline-none placeholder:text-[#A3ADC2] focus:border-[#0077B6] focus:ring-2 focus:ring-[#CAF0F8]"
            />

            <button
              type="button"
              className="mt-8 h-[38px] w-full rounded-[8px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6]"
            >
              Save
            </button>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              type="button"
              className="mt-3 h-[36px] w-full rounded-[8px] bg-[#E53E3E] text-[16px] font-medium text-white transition-colors hover:bg-[#cc2f2f]"
            >
              Logout
            </button>
          </div>

          <div>
            <p className="text-[16px] text-[#111827]">Profile Picture</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {avatars.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  className="aspect-square rounded-[4px] bg-[#D9D9D9] transition-transform active:scale-95"
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