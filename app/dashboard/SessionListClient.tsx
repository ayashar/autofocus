"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(safeSeconds % 60)
    .toString()
    .padStart(2, '0');
  if (hours > 0) {
    return `${hours}:${mins}:${secs}`;
  }
  return `${mins}:${secs}`;
}

type Session = {
  id: string;
  createdAt: string;
  targetDuration: number;
  actualDuration?: number | null;
  _count?: { distractions?: number };
};

export default function SessionListClient() {
  const search = useSearchParams();
  const userId = search?.get("userId");
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [localSessions, setLocalSessions] = useState<Session[]>([]);
  const [streak, setStreak] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("autofocus_past_sessions");
      if (stored) {
        setLocalSessions(JSON.parse(stored));
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    async function load() {
      if (!userId) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/user/profile?userId=${userId}`, { cache: "no-store" });
        const json = await res.json();
        if (res.ok && json?.data) {
          setSessions(json.data.sessions || []);
          setStreak(json.data.currentStreak ?? null);
        } else {
          setError(json?.error || "Failed to load sessions");
        }
      } catch (e) {
        setError("Failed to load sessions");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [userId]);

  // Fallback sample data when no userId provided
  const sample = [
    { id: "s1", createdAt: new Date().toISOString(), targetDuration: 1500, actualDuration: 1500, _count: { distractions: 0 } },
    { id: "s2", createdAt: new Date().toISOString(), targetDuration: 1500, actualDuration: 1500, _count: { distractions: 0 } },
    { id: "s3", createdAt: new Date().toISOString(), targetDuration: 1500, actualDuration: 1500, _count: { distractions: 0 } },
    { id: "s4", createdAt: new Date().toISOString(), targetDuration: 1500, actualDuration: 1500, _count: { distractions: 0 } },
  ];

  const dataToRender = [...localSessions, ...(userId ? sessions : sample)];

  return (
    <div>
      <h3 className="mb-3 text-[18px] font-bold text-[#031B77]">Past Sessions</h3>
      {!userId && (
        <p className="mb-3 text-sm text-[#64748B]">No user selected. Showing sample sessions.</p>
      )}

      {loading && <p className="text-sm text-[#64748B]">Loading sessions...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="grid gap-3">
        {dataToRender.map((s) => {
          const date = new Date(s.createdAt).toLocaleDateString("en-GB");
          const minutes = Math.round(((s.actualDuration ?? s.targetDuration) || 0) / 60);
          const giveUp = s._count?.distractions ?? 0;

          return (
            <div key={s.id} className="flex items-stretch">
              <div className="flex w-full items-center gap-4 rounded-[10px] bg-gradient-to-r from-[#0077B6] to-[#0086C3] p-4 text-white">
                <div className="flex-shrink-0 w-[110px]">
                  <div className="rounded-[8px] bg-[#0b84bf] p-3 text-center">
                    <div className="text-[14px] font-semibold">{date}</div>
                  </div>
                </div>

                <div className="flex-1 border-l border-white/30 pl-4">
                  <div className="text-[13px] text-white/90">Time focused:</div>
                  <div className="mt-1 text-[16px] font-bold">{formatTime((s.actualDuration ?? s.targetDuration) || 0)}</div>
                  <div className="mt-2 text-[13px] text-white/90">Almost give up:</div>
                  <div className="text-[14px] font-semibold">{giveUp} time(s)</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
