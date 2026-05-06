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
      className={`w-full h-[85px] px-4 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] active:scale-[0.98] ${isSelected ? 'bg-primary-300' : 'bg-primary-100'}`}
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

        {/* Divider */}
        <div className="w-[1px] h-[48px] mx-3 bg-white/30" />

        {/* Focus Timer Section */}
        <div className="flex-col items-center">
          <span className="text-[10px] font-medium tracking-[0.1em] text-white mb-1">
            Focus Time
          </span>
          <div className="px-4 py-1.5 rounded-full bg-white/20">
            <span className="text-[14px] font-semibold tabular-nums text-white">
              {focusTime}
            </span>
          </div>
        </div>

        {/* Break Timer Section */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-medium tracking-[0.1em] text-white mb-1">
            Break Time
          </span>
          <div className="px-4 py-1.5 rounded-full bg-white/20">
            <span className="text-[14px] font-semibold tabular-nums text-white">
              {breakTime}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}