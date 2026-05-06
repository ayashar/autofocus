'use client';

import { useState, useEffect } from 'react';
import Background from '@/components/Background';
import FocusContainer from '@/components/FocusContainer';
import Header from '@/components/Header';
import NavigationTabs from '@/components/NavigationTabs';
import FocusTitle from '@/components/FocusTitle';
import CountdownCircle from '@/components/CountdownCircle';
import GiveUpButton from '@/components/GiveUpButton';
import MathChallengePopup from '@/components/MathChallengePopup';

export default function FocusPage() {
  const totalTime = 25 * 60; // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime - 1); // Start at 24:59
  const [isRunning, setIsRunning] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleGiveUpClick = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirm = () => {
    setIsRunning(false);
    setShowPopup(false);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Background />
      <FocusContainer>

        <Header />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 gap-[45px]">
          <FocusTitle
            title="Adaptive Focus Session"
            subtitle="Fokus sedang berlangsung..."
          />
          <CountdownCircle timeLeft={timeLeft} totalTime={totalTime} />
          <GiveUpButton onClick={handleGiveUpClick} />
        </div>

        {showPopup && <MathChallengePopup onCancel={handleCancel} onConfirm={handleConfirm} />}
      </FocusContainer>
    </div>
  );
}