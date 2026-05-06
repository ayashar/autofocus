'use client';

import { useState, useEffect } from 'react';

const imgDashboard2 = "https://www.figma.com/api/mcp/asset/36ffbc97-e7a0-43df-a366-5b8ada16cb05";
const imgVector = "https://www.figma.com/api/mcp/asset/d83f23ce-92fb-4900-b889-b176ff12a6b2";
const imgVector1 = "https://www.figma.com/api/mcp/asset/ffaf696a-f0d0-4a96-b706-3cd77b569e5d";
const imgVector2 = "https://www.figma.com/api/mcp/asset/a6aa170b-852f-4fe3-a820-d32653154dc7";
const imgVector3 = "https://www.figma.com/api/mcp/asset/b949e0cd-6f64-43de-8dc2-228c5eb32919";
const imgRectangle109 = "https://www.figma.com/api/mcp/asset/7288991d-9b0c-4cf4-be0a-d85f583251e7";

type FocusSessionProps = {
  initialSeconds?: number;
};

export default function FocusSession({ initialSeconds }: FocusSessionProps) {
  const total = initialSeconds ?? 24 * 60 + 59;
  const [timeLeft, setTimeLeft] = useState(total);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGiveUp = () => {
    setIsRunning(false);
  };

  const progress = 1 - timeLeft / total;
  const radius = 80;
  const stroke = 12;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-[340px] rounded-2xl bg-[#0077B6] p-6 text-center text-white">
        <h2 className="text-[20px] font-bold">Adaptive Focus Session</h2>

        <div className="mt-6 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 220 220">
            <g transform="translate(110,110)">
              <circle r={radius} fill="none" stroke="#263238" strokeWidth={stroke} />
              <circle
                r={radius}
                fill="none"
                stroke="#39A0FF"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={Math.max(0, circumference * (1 - progress))}
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
    </div>
  );
}