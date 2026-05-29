export type TimerSegment = {
  id: string;
  focusSeconds: number;
  breakSeconds: number;
};

export const MIN_FOCUS_SECONDS = 5 * 60;
export const DEFAULT_FOCUS_SECONDS = 25 * 60;
export const MAX_FOCUS_SECONDS = 50 * 60;
export const MAX_BREAK_SECONDS = 10 * 60;

export function formatDuration(totalSeconds: number) {
  const safe = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

export function formatClock(totalSeconds: number) {
  const safe = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function clampFocus(seconds: number) {
  return Math.min(MAX_FOCUS_SECONDS, Math.max(MIN_FOCUS_SECONDS, Math.round(seconds / 60) * 60));
}

export function getBreakSeconds(focusSeconds: number) {
  return Math.min(MAX_BREAK_SECONDS, Math.max(60, Math.round(focusSeconds / 5 / 60) * 60));
}

function getNextFocus(baseFocusSeconds: number, previousFocusSeconds: number) {
  if (baseFocusSeconds >= MAX_FOCUS_SECONDS) {
    return Math.min(MAX_FOCUS_SECONDS, previousFocusSeconds + 25 * 60);
  }

  if (baseFocusSeconds < DEFAULT_FOCUS_SECONDS) {
    return Math.min(MAX_FOCUS_SECONDS, previousFocusSeconds + 5 * 60);
  }

  return Math.min(MAX_FOCUS_SECONDS, Math.round((previousFocusSeconds * 1.25) / 60) * 60);
}

export function generateAdaptiveTimers(
  sessionSeconds: number,
  firstFocusSeconds = DEFAULT_FOCUS_SECONDS,
) {
  const timers: TimerSegment[] = [];
  let remaining = Math.max(0, Math.round(sessionSeconds));
  let targetFocus = clampFocus(firstFocusSeconds);
  const baseFocus = targetFocus;

  while (remaining > 0 && timers.length < 24) {
    const focusSeconds = Math.min(targetFocus, remaining);
    remaining -= focusSeconds;

    const breakTarget = getBreakSeconds(focusSeconds);
    const breakSeconds = remaining > 0 ? Math.min(breakTarget, remaining) : 0;
    remaining -= breakSeconds;

    timers.push({
      id: `timer-${timers.length + 1}`,
      focusSeconds,
      breakSeconds,
    });

    targetFocus = getNextFocus(baseFocus, targetFocus);
  }

  return timers;
}

export function totalFocusSeconds(timers: TimerSegment[]) {
  return timers.reduce((total, timer) => total + timer.focusSeconds, 0);
}
