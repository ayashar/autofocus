import React from 'react';
import { useRouter } from 'next/navigation';
import { useStreak } from '@/hooks/useStreak';
import { AppModal } from '@/components/ui/AppModal';
import { Button } from '@/components/ui/Button';

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
    <AppModal title="Streak Lost!" onClose={onClose}>
      <p className="mt-2 text-[15px] text-white/90">
        Do an extra session to recover your streak!
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Button type="button" size="large" onClick={handleRecover}>
          Start Recovery Session
        </Button>
        <Button type="button" size="large" variant="destructive" onClick={handleLetLost}>
          Let Streak Lost
        </Button>
      </div>
    </AppModal>
  );
}
