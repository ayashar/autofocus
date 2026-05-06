import SetTargetCard from './SetTargetCard';

interface SetTargetViewProps {
  focusHours: string;
  focusMinutes: string;
  breakHours: string;
  breakMinutes: string;
}

export default function SetTargetView({
  focusHours,
  focusMinutes,
  breakHours,
  breakMinutes,
}: SetTargetViewProps) {
  return (
    <div className="w-full max-w-[401px]">
      {/* Header Text - "SET TARGET" */}
      <div className="mb-8">
        <svg width="300" height="30" viewBox="0 0 300 30">
          <text
            x="0"
            y="22"
            fill="#F8FAFC"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="bold"
          >
            SET TARGET
          </text>
        </svg>
      </div>

      {/* Focus Time Card */}
      <SetTargetCard height={40}>
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] text-[#F8FAFC]">Focus Time</span>
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={focusHours}
              className="w-[40px] h-[28px] bg-white/10 rounded-[6px] text-center text-[14px] text-[#F8FAFC] outline-none"
              readOnly
            />
            <span className="text-[14px] text-[#F8FAFC]">h</span>
            <input
              type="text"
              value={focusMinutes}
              className="w-[40px] h-[28px] bg-white/10 rounded-[6px] text-center text-[14px] text-[#F8FAFC] outline-none"
              readOnly
            />
            <span className="text-[14px] text-[#F8FAFC]">m</span>
          </div>
        </div>
      </SetTargetCard>

      {/* Break Time Card */}
      <div className="mt-4">
        <SetTargetCard height={40}>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] text-[#F8FAFC]">Break Time</span>
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={breakHours}
                className="w-[40px] h-[28px] bg-white/10 rounded-[6px] text-center text-[14px] text-[#F8FAFC] outline-none"
                readOnly
              />
              <span className="text-[14px] text-[#F8FAFC]">h</span>
              <input
                type="text"
                value={breakMinutes}
                className="w-[40px] h-[28px] bg-white/10 rounded-[6px] text-center text-[14px] text-[#F8FAFC] outline-none"
                readOnly
              />
              <span className="text-[14px] text-[#F8FAFC]">m</span>
            </div>
          </div>
        </SetTargetCard>
      </div>
    </div>
  );
}