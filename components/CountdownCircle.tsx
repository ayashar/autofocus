'use client';

import ProgressRing from './ProgressRing';
import TimerDisplay from './TimerDisplay';

interface CountdownCircleProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
  strokeWidth?: number;
}

export default function CountdownCircle({
  timeLeft,
  totalTime,
  size = 280,
  strokeWidth = 12,
}: CountdownCircleProps) {
  const progress = timeLeft / totalTime;

  return (
    <div className="relative">
      <ProgressRing progress={progress} size={size} strokeWidth={strokeWidth} />
      <div className="absolute inset-0 flex items-center justify-center">
        <TimerDisplay timeLeft={timeLeft} />
      </div>
    </div>
  );
}