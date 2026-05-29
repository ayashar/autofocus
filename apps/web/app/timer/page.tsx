import { Suspense } from "react";
import TimerClient from "./TimerClient";

export default function TimerPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-muted">Loading...</div>}>
      <TimerClient />
    </Suspense>
  );
}
