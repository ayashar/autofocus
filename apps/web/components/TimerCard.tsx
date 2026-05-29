import { X } from "lucide-react";
import { formatDuration } from "@/lib/timers";

interface TimerCardProps {
  index: number;
  focusSeconds: number;
  breakSeconds: number;
  editable?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export default function TimerCard({
  index,
  focusSeconds,
  breakSeconds,
  editable = false,
  onClick,
  onDelete,
}: TimerCardProps) {
  const isFirst = index === 0;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`h-[84px] w-full rounded-[7px] px-4 text-left shadow-[0_1px_4px_rgba(6,26,11,0.08)] transition-transform active:scale-[0.99] ${
        isFirst ? "bg-[#AFBEA8] text-white" : "bg-primary-400 text-white"
      }`}
    >
      <div className="flex h-full items-center">
        <div className="flex h-full w-[52px] shrink-0 items-center justify-center border-r border-white/80">
          <span className="text-[22px] font-bold">#{index + 1}</span>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 px-5">
          <div>
            <p className="text-[20px] leading-tight">Focus Time</p>
            <div className="mt-2 inline-flex rounded-full bg-primary-600/45 px-3 py-1 text-[14px] tabular-nums">
              {formatDuration(focusSeconds)}
            </div>
          </div>
          <div>
            <p className="text-[20px] leading-tight">Break Time</p>
            <div className="mt-2 inline-flex rounded-full bg-primary-600/45 px-3 py-1 text-[14px] tabular-nums">
              {formatDuration(breakSeconds)}
            </div>
          </div>
        </div>

        {editable && onDelete && (
          <span
            role="button"
            tabIndex={0}
            onClick={(event) => {
              event.stopPropagation();
              onDelete();
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.stopPropagation();
                onDelete();
              }
            }}
            className="rounded-full p-1 hover:bg-white/10"
            aria-label={`Delete timer ${index + 1}`}
          >
            <X size={24} />
          </span>
        )}
      </div>
    </button>
  );
}
