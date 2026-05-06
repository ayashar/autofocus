'use client';

import { useState } from 'react';
import TimerCard from '../../components/TimerCard';
import { MobileLayout } from '../../components/layout/MobileLayout';

const initialTimerOptions = [
  { id: 'focus', tier: '1', focusTime: '00:03:00', breakTime: '00:02:00' },
  { id: 'short', tier: '2', focusTime: '00:10:00', breakTime: '00:04:00' },
  { id: 'long', tier: '3', focusTime: '00:30:00', breakTime: '00:07:00' },
  { id: 'custom', tier: '4', focusTime: '01:00:00', breakTime: '00:15:00' },
];

type TimerOption = (typeof initialTimerOptions)[number];

type TimerForm = {
  focusHours: string;
  focusMinutes: string;
  focusSeconds: string;
  breakHours: string;
  breakMinutes: string;
  breakSeconds: string;
};

function parseHms(value: string) {
  const [hours = 0, minutes = 0, seconds = 0] = value.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function toHms(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, '0'));
}

export default function Timer() {
  const [selected, setSelected] = useState<string>('focus');
  const [options, setOptions] = useState<TimerOption[]>(initialTimerOptions);
  const [editingId, setEditingId] = useState<string | null>(null);

  const editingOption = options.find((option) => option.id === editingId) ?? null;
  const selectedOption = options.find((option) => option.id === selected) ?? options[0];

  const [form, setForm] = useState<TimerForm>(() => {
    const [fh, fm, fs] = toHms(parseHms(selectedOption.focusTime));
    const [bh, bm, bs] = toHms(parseHms(selectedOption.breakTime));

    return {
      focusHours: fh,
      focusMinutes: fm,
      focusSeconds: fs,
      breakHours: bh,
      breakMinutes: bm,
      breakSeconds: bs,
    };
  });

  function openEditor(optionId: string) {
    const option = options.find((item) => item.id === optionId);
    if (!option) return;

    const [fh, fm, fs] = toHms(parseHms(option.focusTime));
    const [bh, bm, bs] = toHms(parseHms(option.breakTime));

    setSelected(optionId);
    setForm({
      focusHours: fh,
      focusMinutes: fm,
      focusSeconds: fs,
      breakHours: bh,
      breakMinutes: bm,
      breakSeconds: bs,
    });
    setEditingId(optionId);
  }

  const durationSeconds = parseHms(selectedOption.focusTime);

  return (
    <MobileLayout>
      <div className="flex w-full flex-col items-center gap-4.75 py-8">
        {options.map((option) => (
          <TimerCard
            key={option.id}
            tier={option.tier}
            focusTime={option.focusTime}
            breakTime={option.breakTime}
            isSelected={selected === option.id}
            onClick={() => openEditor(option.id)}
          />
        ))}

        <a
          href={`/focus?duration=${durationSeconds}`}
          className="mt-6 inline-flex h-15.75 w-full items-center justify-center rounded-[31.5px] bg-primary-100 text-[24px] font-medium text-white transition-colors hover:bg-[#056da6]"
        >
          Start
        </a>

        {editingOption && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <button
              type="button"
              aria-label="Close timer settings"
              className="absolute inset-0 bg-black/40"
              onClick={() => setEditingId(null)}
            />

            <div className="relative z-10 w-full max-w-[384px] rounded-2xl bg-[#39A9E1] p-6 text-white shadow-lg">
              <button
                type="button"
                onClick={() => setEditingId(null)}
                className="absolute right-4 top-3 text-[28px] leading-none text-white"
                aria-label="Close"
              >
                ×
              </button>

              <h3 className="mt-2 text-center text-[20px] font-bold">Set Timer</h3>
              <p className="mt-2 text-center text-sm text-white/90">
                This timer will be saved as your focus duration.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <label className="text-center text-sm">
                  <span className="mb-2 block">Hours</span>
                  <input
                    type="number"
                    min={0}
                    value={form.focusHours}
                    onChange={(event) => setForm((prev) => ({ ...prev, focusHours: event.target.value }))}
                    className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                  />
                </label>
                <label className="text-center text-sm">
                  <span className="mb-2 block">Minutes</span>
                  <input
                    type="number"
                    min={0}
                    value={form.focusMinutes}
                    onChange={(event) => setForm((prev) => ({ ...prev, focusMinutes: event.target.value }))}
                    className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                  />
                </label>
                <label className="text-center text-sm">
                  <span className="mb-2 block">Seconds</span>
                  <input
                    type="number"
                    min={0}
                    value={form.focusSeconds}
                    onChange={(event) => setForm((prev) => ({ ...prev, focusSeconds: event.target.value }))}
                    className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none placeholder:text-white/60"
                  />
                </label>
              </div>

              <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm">
                <div className="mb-3 font-semibold">Break Time</div>
                <div className="grid grid-cols-3 gap-3">
                  <label className="text-center">
                    <span className="mb-1 block text-xs text-white/90">Hours</span>
                    <input
                      type="number"
                      min={0}
                      value={form.breakHours}
                      onChange={(event) => setForm((prev) => ({ ...prev, breakHours: event.target.value }))}
                      className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none"
                    />
                  </label>
                  <label className="text-center">
                    <span className="mb-1 block text-xs text-white/90">Minutes</span>
                    <input
                      type="number"
                      min={0}
                      value={form.breakMinutes}
                      onChange={(event) => setForm((prev) => ({ ...prev, breakMinutes: event.target.value }))}
                      className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none"
                    />
                  </label>
                  <label className="text-center">
                    <span className="mb-1 block text-xs text-white/90">Seconds</span>
                    <input
                      type="number"
                      min={0}
                      value={form.breakSeconds}
                      onChange={(event) => setForm((prev) => ({ ...prev, breakSeconds: event.target.value }))}
                      className="w-full rounded-lg bg-white/20 px-3 py-2 text-center text-white outline-none"
                    />
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const focusTime = [form.focusHours, form.focusMinutes, form.focusSeconds]
                    .map((part) => String(Number(part || 0)).padStart(2, '0'))
                    .join(':');
                  const breakTime = [form.breakHours, form.breakMinutes, form.breakSeconds]
                    .map((part) => String(Number(part || 0)).padStart(2, '0'))
                    .join(':');

                  setOptions((prev) =>
                    prev.map((option) =>
                      option.id === editingOption.id
                        ? { ...option, focusTime, breakTime }
                        : option,
                    ),
                  );
                  setEditingId(null);
                }}
                className="mt-6 inline-flex h-15.75 w-full items-center justify-center rounded-[31.5px] bg-primary-100 text-[24px] font-medium text-white transition-colors hover:bg-[#056da6]"
              >
                Save Timer
              </button>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
