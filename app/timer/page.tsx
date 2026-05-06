'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TimerCard from '@/components/TimerCard';
import StartButton from '@/components/StartButton';

const timerOptions = [
  { id: 'focus', tier: '1', focusTime: '00:03:00', breakTime: '00:02:00' },
  { id: 'short', tier: '2', focusTime: '00:10:00', breakTime: '00:04:00' },
  { id: 'long', tier: '3', focusTime: '00:30:00', breakTime: '00:07:00' },
  { id: 'custom', tier: '4', focusTime: '01:00:00', breakTime: '00:15:00' },
];

export default function Timer() {
  const [selected, setSelected] = useState<string>('focus');

  return (
    <div className="relative w-full h-full bg-white">
      {/* Header - spans to top of screen */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden bg-[#33A5E1] z-10">
        <div className="h-21.5" />
      </div>

      {/* Main Content */}
      <div className="absolute left-0 right-0 bottom-[69px] overflow-y-auto" style={{ top: '169px' }}>
        {/* Timer Cards */}
        <div className="flex flex-col items-center px-4 gap-[19px]">
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
        </div>

        {/* Spacer for scroll */}
        <div className="h-8" />

        {/* Start Button */}
        <StartButton />
      </div>

      {/* Footer */}
      <Footer activeIndex={1} />
    </div>
  );
}