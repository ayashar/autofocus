"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useState } from "react";

type Session = {
  id: string;
  createdAt: string;
  targetDuration: number;
  actualDuration?: number | null;
  _count?: { distractions?: number };
};

function isLoggedIn() {
  try {
    const auth = JSON.parse(localStorage.getItem("autofocus_auth") || "{}");
    return Boolean(auth?.loggedIn);
  } catch {
    return false;
  }
}

export default function SessionListClient() {
  const [loggedIn] = useState(() => (typeof window === "undefined" ? false : isLoggedIn()));
  const [sessions] = useState<Session[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("autofocus_past_sessions") || "[]") as Session[];
    } catch {
      return [];
    }
  });

  return (
    <div>
      <h2 className="mb-4 text-[20px] font-bold text-ink">Past Sessions</h2>

      {!loggedIn ? (
        <div className="flex min-h-[560px] flex-col items-center justify-center text-center text-ink">
          <User size={124} strokeWidth={1.8} />
          <h3 className="mt-8 text-[20px] font-bold">Log in first to record your sessions!</h3>
          <Link
            href="/"
            className="mt-5 flex h-[39px] w-[323px] max-w-full items-center justify-center rounded-[7px] bg-primary-500 text-[16px] font-medium text-white transition-colors hover:bg-primary-600"
          >
            Log In
          </Link>
        </div>
      ) : sessions.length === 0 ? (
        <div className="py-20 text-center text-[15px] text-muted">
          No sessions recorded yet.
        </div>
      ) : (
        <div className="grid gap-3">
          {sessions.map((session) => {
            const date = new Date(session.createdAt).toLocaleDateString("en-GB");
            const minutes = Math.round(((session.actualDuration ?? session.targetDuration) || 0) / 60);
            const giveUp = session._count?.distractions ?? 0;

            return (
              <article
                key={session.id}
                className="grid grid-cols-[0.95fr_1.45fr] items-center rounded-[4px] bg-primary-500 px-4 py-3 text-white"
              >
                <div className="border-r border-white/80 pr-4 text-center text-[20px] font-bold">
                  {date}
                </div>
                <div className="space-y-2 pl-5 text-[15px]">
                  <div className="flex justify-between gap-3">
                    <span>Time focused:</span>
                    <strong>{minutes} minutes</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Almost give up:</span>
                    <strong>{giveUp} time(s)</strong>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
