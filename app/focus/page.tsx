"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import FocusSession from "../../components/FocusSession";

export default function Page() {
  const searchParams = useSearchParams();
  const durationParam = searchParams?.get("duration");

  const seconds = useMemo(() => {
    const n = Number(durationParam);
    return Number.isFinite(n) && n > 0 ? n : 1500;
  }, [durationParam]);

  return <FocusSession initialSeconds={seconds} />;
}
