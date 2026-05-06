import React from 'react';
import { useRouter } from 'next/navigation';
import { useStreak } from '@/hooks/useStreak';

interface RecoveryModalProps {
  onClose: () => void;
}

export function RecoveryModal({ onClose }: RecoveryModalProps) {
  const router = useRouter();
  const { resetToLost } = useStreak();

  const handleRecover = () => {
    onClose();
    router.push('/timer'); // redirect to timer/focus to start a session
  };

  const handleLetLost = () => {
    resetToLost();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-[340px] rounded-[20px] bg-[#39A9E1] p-6 text-center shadow-lg">
        <h2 className="text-[28px] font-bold text-white">Streak Lost!</h2>
        <p className="mt-2 text-[15px] text-white/90">
          Do an extra session to recover your streak!
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={handleRecover}
            className="h-[44px] w-full rounded-[10px] bg-[#0077B6] text-[16px] font-medium text-white transition-colors hover:bg-[#056da6]"
          >
            Start Recovery Session
          </button>
          
          <button
            onClick={handleLetLost}
            className="h-[44px] w-full rounded-[10px] bg-[#FFA9A9] text-[16px] font-medium text-[#900000] transition-colors hover:bg-[#ff9595]"
          >
            Let Streak Lost
          </button>
        </div>
      </div>
    </div>
  );
}
