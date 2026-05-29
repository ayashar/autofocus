"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useStreak } from "@/hooks/useStreak";
import { AppModal } from "@/components/ui/AppModal";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { TimeInput, secondsToTimeValue, timeValueToSeconds } from "@/components/ui/TimeInput";
import { TimerSegment, formatClock, totalFocusSeconds } from "@/lib/timers";

type FocusSessionProps = {
  initialSeconds?: number;
};

type TimerFormState = {
  hours: string;
  minutes: string;
  seconds: string;
};

type ChallengeState = {
  a: number;
  b: number;
};

type ActivePlan = {
  timers?: TimerSegment[];
  isGuest?: boolean;
  userId?: string | null;
};

function createChallenge(): ChallengeState {
  const a = Math.floor(Math.random() * 11) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b };
}

function readAuthState() {
  if (typeof window === "undefined") return false;
  try {
    const auth = JSON.parse(localStorage.getItem("autofocus_auth") || "{}");
    return Boolean(auth?.loggedIn);
  } catch {
    return false;
  }
}

function readActivePlan(fallbackSeconds: number) {
  const fallbackTimers = [{ id: "fallback", focusSeconds: fallbackSeconds, breakSeconds: 0 }];
  if (typeof window === "undefined") {
    return {
      timers: fallbackTimers,
      isGuest: false,
      isLoggedIn: false,
      timeLeft: fallbackSeconds,
    };
  }

  try {
    const stored = JSON.parse(localStorage.getItem("autofocus_active_plan") || "{}") as ActivePlan;
    if (stored.timers?.length) {
      return {
        timers: stored.timers,
        isGuest: Boolean(stored.isGuest),
        isLoggedIn: readAuthState(),
        timeLeft: stored.timers[0].focusSeconds,
      };
    }
  } catch {}

  return {
    timers: fallbackTimers,
    isGuest: false,
    isLoggedIn: readAuthState(),
    timeLeft: fallbackSeconds,
  };
}

export default function FocusSession({ initialSeconds }: FocusSessionProps) {
  const router = useRouter();
  const { addSession } = useStreak();
  const fallbackSeconds = initialSeconds ?? 24 * 60 + 59;
  const initialPlan = useMemo(() => readActivePlan(fallbackSeconds), [fallbackSeconds]);

  const [timers, setTimers] = useState<TimerSegment[]>(() => initialPlan.timers);
  const [isGuest] = useState(() => initialPlan.isGuest);
  const [isLoggedIn] = useState(() => initialPlan.isLoggedIn);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [phase, setPhase] = useState<"focus" | "break">("focus");
  const [timeLeft, setTimeLeft] = useState(() => initialPlan.timeLeft);
  const [isRunning, setIsRunning] = useState(true);
  const [giveUpAttempts, setGiveUpAttempts] = useState(0);
  const [showSetTimer, setShowSetTimer] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showGiveUpChallenge, setShowGiveUpChallenge] = useState(false);
  const [challenge, setChallenge] = useState<ChallengeState | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [timerForm, setTimerForm] = useState<TimerFormState>(() =>
    secondsToTimeValue(fallbackSeconds),
  );

  const currentTimer = timers[segmentIndex] ?? timers[0];
  const phaseTotal = phase === "focus" ? currentTimer.focusSeconds : currentTimer.breakSeconds;
  const focusedTotal = useMemo(() => totalFocusSeconds(timers), [timers]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return undefined;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 || !isRunning) return;

    const transition = window.setTimeout(() => {
      if (phase === "focus" && currentTimer.breakSeconds > 0) {
        setPhase("break");
        setTimeLeft(currentTimer.breakSeconds);
        return;
      }

      const nextIndex = segmentIndex + 1;
      if (nextIndex < timers.length) {
        setSegmentIndex(nextIndex);
        setPhase("focus");
        setTimeLeft(timers[nextIndex].focusSeconds);
        setTimerForm(secondsToTimeValue(timers[nextIndex].focusSeconds));
        return;
      }

      setIsRunning(false);
      setShowFinishModal(true);
    }, 0);

    return () => window.clearTimeout(transition);
  }, [currentTimer, isRunning, phase, segmentIndex, timeLeft, timers]);

  const progress = useMemo(() => {
    if (phaseTotal <= 0) return 0;
    return 1 - timeLeft / phaseTotal;
  }, [phaseTotal, timeLeft]);

  const radius = 82;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  function handleGiveUp() {
    setGiveUpAttempts((prev) => prev + 1);
    setChallenge(createChallenge());
    setUserAnswer("");
    setShowGiveUpChallenge(true);
  }

  function saveFinishedSession() {
    if (isGuest || !isLoggedIn) {
      setShowFinishModal(false);
      setShowLoginModal(true);
      return;
    }

    addSession();

    try {
      const pastSessions = JSON.parse(localStorage.getItem("autofocus_past_sessions") || "[]");
      pastSessions.unshift({
        id: "sess_" + Date.now(),
        createdAt: new Date().toISOString(),
        targetDuration: focusedTotal,
        actualDuration: focusedTotal,
        _count: { distractions: giveUpAttempts },
      });
      localStorage.setItem("autofocus_past_sessions", JSON.stringify(pastSessions));
      localStorage.removeItem("autofocus_active_plan");
    } catch {}

    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white px-[18px]">
      <div className="w-full max-w-[394px] rounded-[16px] bg-primary-500 px-4 py-6 text-center text-white">
        <h2 className="text-[32px] font-bold">
          {phase === "focus" ? "Focus Session" : "Break Time"}
        </h2>
        <p className="mt-7 text-[32px] font-bold">#{segmentIndex + 1}</p>

        <button
          type="button"
          onClick={() => setShowSetTimer(true)}
          className="mt-8 inline-flex items-center justify-center"
          aria-label="Change current timer"
        >
          <svg width="260" height="260" viewBox="0 0 220 220">
            <g transform="translate(110,110)">
              <circle r={radius} fill="none" stroke="#33383A" strokeWidth={stroke} transform="rotate(-90)" />
              <circle
                r={radius}
                fill="none"
                stroke="#A9BAA2"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={Math.max(0, circumference * (1 - progress))}
                transform="rotate(-90)"
                style={{ transition: "stroke-dashoffset 0.5s linear" }}
              />
              <text x={0} y={10} textAnchor="middle" fontSize={34} fontWeight={800} fill="#FFFFFF">
                {formatClock(timeLeft)}
              </text>
            </g>
          </svg>
        </button>

        <Button type="button" variant="destructive" size="large" className="mt-4" onClick={handleGiveUp}>
          Give Up!
        </Button>
      </div>

      {showSetTimer && (
        <AppModal title="Set Timer" onClose={() => setShowSetTimer(false)}>
          <div className="mt-7">
            <TimeInput value={timerForm} onChange={setTimerForm} />
          </div>
          <Button
            type="button"
            size="large"
            className="mt-9"
            onClick={() => {
              const seconds = timeValueToSeconds(timerForm);
              if (seconds > 0) {
                setTimers((prev) =>
                  prev.map((timer, index) =>
                    index === segmentIndex
                      ? {
                          ...timer,
                          [phase === "focus" ? "focusSeconds" : "breakSeconds"]: seconds,
                        }
                      : timer,
                  ),
                );
                setTimeLeft(seconds);
                setIsRunning(true);
              }
              setShowSetTimer(false);
            }}
          >
            Set Timer
          </Button>
        </AppModal>
      )}

      {showFinishModal && (
        <AppModal title="Session Finished!">
          <div className="mt-8 rounded-[7px] bg-primary-300 p-5 text-left text-ink">
            <div className="flex justify-between gap-4">
              <span>Time focused:</span>
              <strong>{Math.round(focusedTotal / 60)} minutes</strong>
            </div>
            <div className="mt-5 flex justify-between gap-4">
              <span>Almost give up:</span>
              <strong>{giveUpAttempts} time(s)</strong>
            </div>
          </div>
          <Button type="button" size="large" className="mt-9" onClick={saveFinishedSession}>
            Save and Finish
          </Button>
        </AppModal>
      )}

      {showLoginModal && (
        <AppModal title="Oops! You need to Log In to save your progress" onClose={() => setShowLoginModal(false)}>
          <Button type="button" size="large" className="mt-9" onClick={() => router.push("/")}>
            Log in
          </Button>
          <Button type="button" variant="destructive" size="large" className="mt-3" onClick={() => router.push("/dashboard")}>
            Lose my progress
          </Button>
        </AppModal>
      )}

      {showGiveUpChallenge && (
        <AppModal title="Wait a minute!">
          <p className="mt-4 text-[15px]">Answer this question first to stop your session</p>
          <div className="mt-16 text-[34px] font-bold">
            {challenge ? `${challenge.a} × ${challenge.b} = ?` : "---"}
          </div>
          <div className="mx-auto mt-8 max-w-[246px]">
            <TextField
              label=""
              aria-label="Your answer"
              value={userAnswer}
              onChange={(event) => setUserAnswer(event.target.value)}
              placeholder="Your Answer"
              inputMode="numeric"
              className="border-0 bg-primary-500/60 text-white placeholder:text-ink"
            />
          </div>
          <Button type="button" size="large" className="mt-20" onClick={() => setShowGiveUpChallenge(false)}>
            Go back
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="large"
            className="mt-3"
            onClick={() => {
              if (!challenge) return;
              const correct = Number(userAnswer) === challenge.a * challenge.b;
              if (correct) {
                setShowGiveUpChallenge(false);
                setIsRunning(false);
                router.push("/dashboard");
              }
            }}
          >
            Give Up!
          </Button>
        </AppModal>
      )}
    </div>
  );
}
