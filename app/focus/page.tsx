import { Suspense } from "react";
import FocusClient from "./FocusClient";

export const dynamic = "force-dynamic";

type FocusPageProps = {
  searchParams?: {
    duration?: string | string[];
  };
};

export default function Page({ searchParams }: FocusPageProps) {
  const durationParam = Array.isArray(searchParams?.duration)
    ? searchParams?.duration[0]
    : searchParams?.duration;

  const fallbackSeconds = (() => {
    const n = Number(durationParam);
    return Number.isFinite(n) && n > 0 ? n : 1500;
  })();

  return (
    <Suspense fallback={null}>
      <FocusClient fallbackSeconds={fallbackSeconds} />
    </Suspense>
  );
}
