import { Suspense } from "react";
import FocusClient from "./FocusClient";

export const dynamic = "force-dynamic";

type FocusPageProps = {
  searchParams?: Promise<{
    duration?: string | string[];
  }>;
};

export default async function Page({ searchParams }: FocusPageProps) {
  const resolvedSearchParams = await searchParams;
  const durationParam = Array.isArray(resolvedSearchParams?.duration)
    ? resolvedSearchParams?.duration[0]
    : resolvedSearchParams?.duration;

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
