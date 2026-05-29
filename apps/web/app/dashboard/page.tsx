import { MobileLayout } from "@/components/layout/MobileLayout";
import SessionListClient from "./SessionListClient";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <MobileLayout title="Dashboard">
      <div className="mx-auto w-full max-w-[390px] pb-6 pt-5">
        <Suspense fallback={<div className="text-sm text-muted">Loading sessions...</div>}>
          <SessionListClient />
        </Suspense>
      </div>
    </MobileLayout>
  );
}
