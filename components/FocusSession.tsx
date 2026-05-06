'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

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

function formatTime(totalSeconds: number) {
  const safeSeconds = Math.max(0, totalSeconds);
  const mins = Math.floor(safeSeconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(safeSeconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

function toTimerForm(totalSeconds: number): TimerFormState {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours),
    minutes: String(minutes),
    seconds: String(seconds),
  };
}

function fromTimerForm(form: TimerFormState) {
  const hours = Number(form.hours || 0);
  const minutes = Number(form.minutes || 0);
  const seconds = Number(form.seconds || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

function createChallenge(): ChallengeState {
  const a = Math.floor(Math.random() * 11) + 2;
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b };
}

export default function FocusSession({ initialSeconds }: FocusSessionProps) {
  const router = useRouter();

  const [total, setTotal] = useState(initialSeconds ?? 24 * 60 + 59);
  const [timeLeft, setTimeLeft] = useState(initialSeconds ?? 24 * 60 + 59);
  const [isRunning, setIsRunning] = useState(true);
  const [giveUpAttempts, setGiveUpAttempts] = useState(0);

  const [showSetTimer, setShowSetTimer] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showGiveUpChallenge, setShowGiveUpChallenge] = useState(false);
  const [challenge, setChallenge] = useState<ChallengeState | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [timerForm, setTimerForm] = useState<TimerFormState>(() =>
    toTimerForm(initialSeconds ?? 24 * 60 + 59),
  );

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return undefined;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          setShowFinishModal(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleGiveUp = () => {
    const nextChallenge = createChallenge();
    setChallenge(nextChallenge);
    setUserAnswer("");
    setShowGiveUpChallenge(true);
  };

  const progress = useMemo(() => {
    if (total <= 0) return 0;
    return 1 - timeLeft / total;
  }, [timeLeft, total]);

  const radius = 80;
  const stroke = 12;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white w-screen">
      <div className="w-85 rounded-2xl bg-primary-100 p-6 text-center text-white">
        <h2 className="text-[20px] font-bold">Adaptive Focus Session</h2>

        <div className="mt-6 flex items-center justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 220 220"
            onClick={() => setShowSetTimer(true)}
            className="cursor-pointer"
          >
            <g transform="translate(110,110)">
              <circle r={radius} fill="none" stroke="#263238" strokeWidth={stroke} transform="rotate(-90)" />
              <circle
                r={radius}
                fill="none"
                stroke="#39A0FF"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={Math.max(0, circumference * (1 - progress))}
                transform="rotate(-90)"
                style={{ transition: 'stroke-dashoffset 0.5s linear' }}
              />
              <text x={0} y={8} textAnchor="middle" fontSize={36} fontWeight={700}>
                {formatTime(timeLeft)}
              </text>
            </g>
          </svg>
        </div>

        <button
          onClick={handleGiveUp}
          className="mt-6 w-full rounded-lg bg-[#F9AFAF] py-3 text-[#7A1F1F] font-semibold"
        >
          Give Up!
        </button>
      </div>

      {/* Modals */}
      {showSetTimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowSetTimer(false)} />
          <div className="relative z-10 w-80 rounded-2xl bg-[#29A9E1] p-6 text-center text-white">
            <button className="absolute right-3 top-3 text-white/90" onClick={() => setShowSetTimer(false)}>✕</button>
            <h3 className="text-[20px] font-bold">Set Timer</h3>
            <p className="mt-2 text-sm text-white/90">This will be saved as your focus duration.</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <label className="text-left text-sm">
                <span className="mb-1 block text-white/90">Hours</span>
                <input
                  type="number"
                  min={0}
                  value={timerForm.hours}
                  onChange={(e) => setTimerForm((prev) => ({ ...prev, hours: e.target.value }))}
                  className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                />
              </label>
              <label className="text-left text-sm">
                <span className="mb-1 block text-white/90">Minutes</span>
                <input
                  type="number"
                  min={0}
                  value={timerForm.minutes}
                  onChange={(e) => setTimerForm((prev) => ({ ...prev, minutes: e.target.value }))}
                  className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                />
              </label>
              <label className="text-left text-sm">
                <span className="mb-1 block text-white/90">Seconds</span>
                <input
                  type="number"
                  min={0}
                  value={timerForm.seconds}
                  onChange={(e) => setTimerForm((prev) => ({ ...prev, seconds: e.target.value }))}
                  className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                />
              </label>
            </div>

            <button
              onClick={() => {
                const seconds = fromTimerForm(timerForm);
                if (seconds > 0) {
                  setTotal(seconds);
                  setTimeLeft(seconds);
                  setIsRunning(true);
                  setShowFinishModal(false);
                }
                setShowSetTimer(false);
              }}
              className="mt-6 w-full rounded-lg bg-[#0673A8] py-3 font-semibold"
            >
              Set Timer
            </button>
          </div>
        </div>
      )}

      {showFinishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFinishModal(false)} />
          <div className="relative z-10 w-80 rounded-2xl bg-[#29A9E1] p-6 text-center text-white">
            <h3 className="text-[20px] font-bold">Session Finished!</h3>
            <div className="mt-4 rounded-lg bg-[#9EE0FF] p-4 text-left text-black">
              <div className="flex justify-between">
                <span>Time focused:</span>
                <strong>{Math.round(total / 60)} minutes</strong>
              </div>
              <div className="flex justify-between mt-2">
                <span>Almost give up:</span>
                <strong>{giveUpAttempts} time(s)</strong>
              </div>
            </div>
            <button
              onClick={() => {
                setShowFinishModal(false);
                router.push('/dashboard');
              }}
              className="mt-4 w-full rounded-lg bg-[#0673A8] py-3 font-semibold"
            >
              Save and Finish
            </button>
          </div>
        </div>
      )}

      {showGiveUpChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowGiveUpChallenge(false)} />
          <div className="relative z-10 w-85 rounded-2xl bg-[#29A9E1] p-6 text-center text-white">
            <h3 className="text-[20px] font-bold">Wait a minute!</h3>
            <p className="mt-2 text-sm">Answer this question first to stop your session</p>

            <div className="mt-6 text-[28px] font-bold">
              {challenge ? `${challenge.a} × ${challenge.b} = ?` : '---'}
            </div>

            <input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Your Answer"
              className="mt-4 w-full rounded px-3 py-2 text-black"
            />

            <button
              onClick={() => {
                if (!challenge) return;
                const correct = Number(userAnswer) === challenge.a * challenge.b;
                if (correct) {
                  setGiveUpAttempts((v) => v + 1);
                  setShowGiveUpChallenge(false);
                  setIsRunning(false);
                  router.push('/dashboard');
                } else {
                  // shake or indicate error - simple alert for now
                  alert('Incorrect answer, try again.');
                }
              }}
              className="mt-3 w-full rounded-lg bg-[#F9AFAF] py-3 text-[#7A1F1F] font-semibold"
            >
              Give Up!
            </button>
          </div>
        </div>
      )}

    </div>
  );
}