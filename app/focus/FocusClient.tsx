"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import FocusSession from "../../components/FocusSession";

type FocusClientProps = {
  fallbackSeconds: number;
};

export default function FocusClient({ fallbackSeconds }: FocusClientProps) {
  const searchParams = useSearchParams();
  const durationParam = searchParams.get("duration");

  const seconds = useMemo(() => {
    const n = Number(durationParam);
    return Number.isFinite(n) && n > 0 ? n : fallbackSeconds;
  }, [durationParam, fallbackSeconds]);

  return <FocusSession key={seconds} initialSeconds={seconds} />;
}
