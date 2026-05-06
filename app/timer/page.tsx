'use client';

import { useState } from 'react';
import TimerCard from '@/components/TimerCard';
import StartButton from '@/components/StartButton';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Header } from '@/components/ui/Header';

const timerOptions = [
  { id: 'focus', tier: '1', focusTime: '00:03:00', breakTime: '00:02:00' },
  { id: 'short', tier: '2', focusTime: '00:10:00', breakTime: '00:04:00' },
  { id: 'long', tier: '3', focusTime: '00:30:00', breakTime: '00:07:00' },
  { id: 'custom', tier: '4', focusTime: '01:00:00', breakTime: '00:15:00' },
];

export default function Timer() {
  const [selected, setSelected] = useState<string>('focus');

  return (
    <MobileLayout>
      <div className="flex flex-col w-full items-center py-8 gap-[19px]">
        {timerOptions.map((option) => (
          <TimerCard
            key={option.id}
            tier={option.tier}
            focusTime={option.focusTime}
            breakTime={option.breakTime}
            isSelected={selected === option.id}
            onClick={() => setSelected(option.id)}
          />
        ))}

        {/* Spacer for scroll */}
        <div className="h-8" />

        {/* Start Button */}
        <a
          href="/focus?duration=1500"
          className="mt-6 inline-flex h-[63px] w-full items-center justify-center rounded-[31.5px] bg-[#0077B6] text-[24px] font-medium text-white transition-colors hover:bg-[#056da6]"
        >
          Start
        </a>
      </div>
    </MobileLayout>
  );
}