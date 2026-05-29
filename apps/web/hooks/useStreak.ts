import { useState, useEffect, useCallback } from 'react';

type StreakStatus = 'active' | 'recovery' | 'lost';

interface StreakData {
  lastSessionTimestamp: number | null;
  currentStreak: number;
}

const STORAGE_KEY = 'autofocus_streak_data';

// 24 hours
const STREAK_TIMEOUT_MS = 24 * 60 * 60 * 1000;
// 2 hours grace period
const GRACE_PERIOD_MS = 2 * 60 * 60 * 1000;

function readStreakData(): StreakData {
  if (typeof window === 'undefined') {
    return { lastSessionTimestamp: null, currentStreak: 0 };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { lastSessionTimestamp: null, currentStreak: 0 };
  }

  try {
    return JSON.parse(stored) as StreakData;
  } catch (e) {
    console.error('Failed to parse streak data', e);
    return { lastSessionTimestamp: null, currentStreak: 0 };
  }
}

function getStatus(data: StreakData): StreakStatus {
  if (!data.lastSessionTimestamp) return 'active';

  const timeSinceLastSession = Date.now() - data.lastSessionTimestamp;
  if (timeSinceLastSession > STREAK_TIMEOUT_MS + GRACE_PERIOD_MS) return 'lost';
  if (timeSinceLastSession > STREAK_TIMEOUT_MS) return 'recovery';
  return 'active';
}

export function useStreak() {
  const [streakData, setStreakData] = useState<StreakData>(readStreakData);
  const [status, setStatus] = useState<StreakStatus>(() => getStatus(readStreakData()));

  // Update status based on current time and lastSessionTimestamp
  const updateStatus = useCallback(() => {
    const nextStatus = getStatus(streakData);

    if (nextStatus === 'lost' && streakData.currentStreak > 0) {
      const newData = { ...streakData, currentStreak: 0 };
      setStreakData(newData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }

    setStatus(nextStatus);
  }, [streakData]);

  // Check status periodically or when streak data changes
  useEffect(() => {
    // Check every minute just in case the app stays open
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, [updateStatus]);

  const addSession = useCallback(() => {
    const now = Date.now();
    let newStreak = streakData.currentStreak;

    if (status === 'lost') {
      newStreak = 1; // Restart streak
    } else if (status === 'recovery') {
      newStreak += 1; // Recovered, add session
    } else if (status === 'active') {
      // If no session before, start at 1. Otherwise increment.
      // Wait, if it's multiple sessions in one day, does it increment?
      // Usually streaks increment once per day. But for prototype, let's just increment.
      newStreak += 1; 
    }

    const newData: StreakData = {
      lastSessionTimestamp: now,
      currentStreak: newStreak,
    };
    
    setStreakData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setStatus('active');
  }, [streakData.currentStreak, status]);

  const resetToLost = useCallback(() => {
    const newData: StreakData = {
      ...streakData,
      currentStreak: 0,
    };
    setStreakData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setStatus('lost');
  }, [streakData]);

  // DEBUG/PROTOTYPE FUNCTIONS
  const debugForwardTime = useCallback((hours: number) => {
    if (!streakData.lastSessionTimestamp) {
       // If no session exists, set one up 'hours' ago
       const pastTime = Date.now() - (hours * 60 * 60 * 1000);
       const newData: StreakData = { lastSessionTimestamp: pastTime, currentStreak: 1 };
       setStreakData(newData);
       localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } else {
       const newTimestamp = streakData.lastSessionTimestamp - (hours * 60 * 60 * 1000);
       const newData: StreakData = { ...streakData, lastSessionTimestamp: newTimestamp };
       setStreakData(newData);
       localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
  }, [streakData]);

  return {
    ...streakData,
    status,
    addSession,
    resetToLost,
    debugForwardTime,
  };
}
