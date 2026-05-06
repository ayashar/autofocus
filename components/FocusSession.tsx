'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const imgDashboard2 = "https://www.figma.com/api/mcp/asset/36ffbc97-e7a0-43df-a366-5b8ada16cb05";
const imgVector = "https://www.figma.com/api/mcp/asset/d83f23ce-92fb-4900-b889-b176ff12a6b2";
const imgVector1 = "https://www.figma.com/api/mcp/asset/ffaf696a-f0d0-4a96-b706-3cd77b569e5d";
const imgVector2 = "https://www.figma.com/api/mcp/asset/a6aa170b-852f-4fe3-a820-d32653154dc7";
const imgVector3 = "https://www.figma.com/api/mcp/asset/b949e0cd-6f64-43de-8dc2-228c5eb32919";
const imgRectangle109 = "https://www.figma.com/api/mcp/asset/7288991d-9b0c-4cf4-be0a-d85f583251e7";

export default function FocusSession() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 + 59); // 24:59 in seconds
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
    // TODO: Handle session abandonment - could redirect or show modal
  };

  return (
    <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-30">
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgDashboard2}
        />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-[86px] flex items-center justify-between px-6 z-20">
        {/* Back button / Menu icon */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector1}
          />
        </div>

        {/* Logo */}
        <Link href="/" className="text-[20px] font-bold text-[#00f2fe]">
          Autofokus
        </Link>

        {/* Nav placeholder */}
        <div className="w-10" />
      </div>

      {/* Navigation tabs */}
      <div className="absolute top-[7.74%] right-6 left-[52.08%] flex justify-end">
        <Link href="/dashboard" className="text-[14px] font-normal text-[#f8fafc]">
          Dashboard
        </Link>
      </div>
      <div className="absolute top-[7.74%] right-[72.92%] left-[6.04%]">
        <Link href="/profile" className="text-[14px] font-normal text-[#94a3b8]">
          Profil & Reward
        </Link>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Title */}
        <h1 className="text-[24px] font-bold text-[#f8fafc] text-center mb-2">
          Adaptive Focus Session
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] font-normal text-[#94a3b8] text-center mb-8">
          Fokus sedang berlangsung...
        </p>

        {/* Play icon / Decorative circle */}
        <div className="w-[120px] h-[120px] mb-8 relative">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector2}
          />
        </div>

        {/* Timer display */}
        <div className="relative mb-12">
          {/* Outer ring decorative */}
          <div className="absolute -inset-5">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector3}
            />
          </div>

          {/* Timer text */}
          <p className="text-[56px] font-bold text-[#f8fafc] text-center tabular-nums relative z-10">
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Give Up Button */}
        <button
          onClick={handleGiveUp}
          className="relative w-[295px] h-[53px] flex items-center justify-center"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgRectangle109}
          />
          <span className="relative z-10 text-[18px] font-bold text-white">
            Menyerah
          </span>
        </button>
      </div>
    </div>
  );
}