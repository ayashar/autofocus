interface TimerDisplayProps {
  timeLeft: number;
}

export default function TimerDisplay({ timeLeft }: TimerDisplayProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <p className="text-[56px] font-bold text-[#f8fafc] text-center tabular-nums">
      {formatTime(timeLeft)}
    </p>
  );
}