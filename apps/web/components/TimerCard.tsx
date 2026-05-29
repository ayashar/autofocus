interface TimerCardProps {
  tier: string;
  focusTime: string;
  breakTime: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function TimerCard({
  tier,
  focusTime,
  breakTime,
  isSelected = false,
  onClick,
}: TimerCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-21.25 px-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98] ${isSelected ? 'bg-primary-300' : 'bg-primary-100'}`}
    >
      <div className="flex items-center justify-between h-full">
        {/* Tier Section */}
        <div className="flex items-center">
          <span className="text-[20px] font-bold text-white ml-2">
            Tier
          </span>
          <input
            type="text"
            value={tier}
            readOnly
            className="w-8 bg-transparent text-[20px] font-bold text-white text-center outline-none"
          />
        </div>

        {/* Timer Settings Hint */}
        <div className="mx-3 flex flex-1 items-center justify-end gap-2 text-right">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-medium tracking-widest text-white/95">Focus Time</span>
            <div className="rounded-full bg-white/20 px-4 py-1.5">
              <span className="text-[14px] font-semibold tabular-nums text-white">{focusTime}</span>
            </div>
          </div>

          <div className="w-px h-12 bg-white/30" />

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-medium tracking-widest text-white/95">Break Time</span>
            <div className="rounded-full bg-white/20 px-4 py-1.5">
              <span className="text-[14px] font-semibold tabular-nums text-white">{breakTime}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}