type TimeValue = {
  hours: string;
  minutes: string;
  seconds: string;
};

type TimeInputProps = {
  value: TimeValue;
  onChange: (value: TimeValue) => void;
  label?: string;
};

const fields: Array<keyof TimeValue> = ["hours", "minutes", "seconds"];

export function secondsToTimeValue(totalSeconds: number): TimeValue {
  const safe = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function timeValueToSeconds(value: TimeValue) {
  return (
    Number(value.hours || 0) * 3600 +
    Number(value.minutes || 0) * 60 +
    Number(value.seconds || 0)
  );
}

export function TimeInput({ value, onChange, label }: TimeInputProps) {
  return (
    <div>
      {label && <h2 className="mb-5 text-center text-[25px] font-bold text-white">{label}</h2>}
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-2 text-white">
        {fields.map((field, index) => (
          <div key={field} className="contents">
            <label className="block text-center">
              <input
                value={value[field]}
                onChange={(event) =>
                  onChange({
                    ...value,
                    [field]: event.target.value.replace(/\D/g, "").slice(0, 2),
                  })
                }
                inputMode="numeric"
                className="w-full bg-transparent text-center text-[32px] font-bold leading-none text-white outline-none"
                aria-label={field}
              />
              <span className="mt-2 block text-[14px] capitalize">{field}</span>
            </label>
            {index < fields.length - 1 && (
              <span className="pt-0 text-[32px] font-bold leading-none">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
