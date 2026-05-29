"use client";

import { useMemo, useState } from "react";
import { Clock, RotateCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import TimerCard from "@/components/TimerCard";
import { MobileLayout } from "@/components/layout/MobileLayout";
import { AppModal } from "@/components/ui/AppModal";
import { Button } from "@/components/ui/Button";
import { TimeInput, secondsToTimeValue, timeValueToSeconds } from "@/components/ui/TimeInput";
import {
  DEFAULT_FOCUS_SECONDS,
  clampFocus,
  formatDuration,
  generateAdaptiveTimers,
} from "@/lib/timers";

type StoredConfig = {
  blockedApps?: Array<{ name: string }>;
};

function readBlockedApps() {
  if (typeof window === "undefined") return [];
  try {
    const stored = JSON.parse(localStorage.getItem("mockConfig") || "{}") as StoredConfig;
    return (stored.blockedApps ?? []).map((app) => app.name);
  } catch {
    return [];
  }
}

export default function Timer() {
  const router = useRouter();
  const search = useSearchParams();
  const userId = search.get("userId");
  const isGuest = search.get("guest") === "1";
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [firstFocusSeconds, setFirstFocusSeconds] = useState(DEFAULT_FOCUS_SECONDS);
  const [removedTimerIds, setRemovedTimerIds] = useState<string[]>([]);
  const [durationForm, setDurationForm] = useState(() => secondsToTimeValue(0));
  const [firstTimerForm, setFirstTimerForm] = useState(() => secondsToTimeValue(DEFAULT_FOCUS_SECONDS));
  const [showDurationModal, setShowDurationModal] = useState(false);
  const [showFirstTimerModal, setShowFirstTimerModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [blockedApps] = useState<string[]>(readBlockedApps);

  const timers = useMemo(() => {
    const generated = generateAdaptiveTimers(sessionSeconds, firstFocusSeconds);
    return generated.filter((timer) => !removedTimerIds.includes(timer.id));
  }, [firstFocusSeconds, removedTimerIds, sessionSeconds]);

  function resetTimers() {
    setRemovedTimerIds([]);
    setFirstFocusSeconds(DEFAULT_FOCUS_SECONDS);
    setFirstTimerForm(secondsToTimeValue(DEFAULT_FOCUS_SECONDS));
  }

  function saveDuration() {
    const seconds = timeValueToSeconds(durationForm);
    setSessionSeconds(seconds);
    setRemovedTimerIds([]);
    setShowDurationModal(false);
  }

  function saveFirstTimer() {
    const seconds = clampFocus(timeValueToSeconds(firstTimerForm));
    setFirstFocusSeconds(seconds);
    setFirstTimerForm(secondsToTimeValue(seconds));
    setRemovedTimerIds([]);
    setShowFirstTimerModal(false);
  }

  function startSession() {
    if (timers.length === 0) {
      setShowDurationModal(true);
      return;
    }

    setShowBlockedModal(true);
  }

  function continueToFocus() {
    const plan = {
      timers,
      userId: userId ?? null,
      isGuest,
      blockedApps,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("autofocus_active_plan", JSON.stringify(plan));
    router.push("/focus");
  }

  return (
    <MobileLayout title="Create Focus Session">
      <div className="mx-auto flex w-full max-w-[390px] flex-col pb-6 pt-5">
        <section className="rounded-[18px] bg-primary-400 px-4 py-6 text-center text-white">
          <TimeInput
            label="Session duration"
            value={durationForm}
            onChange={setDurationForm}
          />

          <Button
            type="button"
            onClick={() => setShowDurationModal(true)}
            size="large"
            className="mt-7 bg-primary-500"
          >
            Set Duration
          </Button>
          <Button
            type="button"
            onClick={startSession}
            size="large"
            variant="destructive"
            className="mt-3"
          >
            Start Session
          </Button>
        </section>

        <p className="mx-auto mt-3 max-w-[300px] text-center text-[14px] leading-4 text-ink">
          This will be your whole session duration, including breaks and focus time
        </p>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-ink">Timer(s)</h2>
          {timers.length > 0 && (
            <button
              type="button"
              onClick={resetTimers}
              className="rounded-full p-1 text-ink transition-colors hover:bg-primary-50"
              aria-label="Reset timers"
            >
              <RotateCcw size={27} />
            </button>
          )}
        </div>

        {timers.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-24 text-center text-ink">
            <Clock size={88} strokeWidth={1.7} />
            <p className="mt-6 text-[15px]">Please set the session duration first</p>
          </div>
        ) : (
          <div className="mt-3 space-y-3">
            {timers.map((timer, index) => (
              <TimerCard
                key={timer.id}
                index={index}
                focusSeconds={timer.focusSeconds}
                breakSeconds={timer.breakSeconds}
                editable={index > 0}
                onClick={index === 0 ? () => setShowFirstTimerModal(true) : undefined}
                onDelete={
                  index > 0
                    ? () => setRemovedTimerIds((prev) => [...prev, timer.id])
                    : undefined
                }
              />
            ))}
            <p className="text-center text-[14px] text-ink">
              You can change the first timer of your session
            </p>
          </div>
        )}
      </div>

      {showDurationModal && (
        <AppModal title="Set Timer" onClose={() => setShowDurationModal(false)}>
          <div className="mt-7">
            <TimeInput value={durationForm} onChange={setDurationForm} />
          </div>
          <Button type="button" size="large" className="mt-9" onClick={saveDuration}>
            Set Timer
          </Button>
        </AppModal>
      )}

      {showFirstTimerModal && (
        <AppModal title="Set Timer" onClose={() => setShowFirstTimerModal(false)}>
          <p className="mt-2 text-[14px] text-white/90">
            The next timers adapt from this first focus block. Max per timer is 50:10.
          </p>
          <div className="mt-7">
            <TimeInput value={firstTimerForm} onChange={setFirstTimerForm} />
          </div>
          <Button type="button" size="large" className="mt-9" onClick={saveFirstTimer}>
            Set Timer
          </Button>
        </AppModal>
      )}

      {showBlockedModal && (
        <AppModal title="Blocked apps" onClose={() => setShowBlockedModal(false)}>
          <p className="mx-auto mt-2 max-w-[270px] text-[15px] leading-5 text-white">
            You won&apos;t be able to open these apps in your focus session
          </p>
          <div className="mt-5 rounded-[7px] bg-primary-300 p-5 text-left text-[18px] leading-8 text-ink">
            {(blockedApps.length ? blockedApps : ["Instagram", "YouTube", "TikTok"]).slice(0, 8).map((app) => (
              <div key={app}>{app}</div>
            ))}
            {blockedApps.length > 8 && (
              <div className="text-[15px] font-semibold">+{blockedApps.length - 8} more</div>
            )}
          </div>
          <Button
            type="button"
            size="large"
            className="mt-7"
            onClick={() => router.push(userId ? `/register/profile/configuration?userId=${userId}` : "/register/profile/configuration?guest=1")}
          >
            Configure Blocked App
          </Button>
          <Button type="button" size="large" className="mt-2" onClick={continueToFocus}>
            Start Session
          </Button>
          <Button type="button" size="large" className="mt-2" onClick={() => setShowBlockedModal(false)}>
            Go back
          </Button>
          <p className="mt-3 text-[12px] text-white/80">
            Current plan: {timers.length} timer(s), first focus {formatDuration(timers[0]?.focusSeconds ?? 0)}
          </p>
        </AppModal>
      )}
    </MobileLayout>
  );
}
