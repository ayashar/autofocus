import Link from "next/link";
import { MobileLayout } from "@/components/layout/MobileLayout";
import SessionListClient from "./SessionListClient";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <MobileLayout title="Dashboard">
      <div className="mx-auto w-full max-w-[390px] pb-6 pt-5">

        <div className="mt-6">
          <Suspense fallback={<div className="text-sm text-[#64748B]">Loading sessions...</div>}>
            <SessionListClient />
          </Suspense>
        </div>

        <Link
          href="/timer"
          className="mt-6 flex h-[48px] items-center justify-center rounded-[10px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6]"
        >
          Start session
        </Link>
      </div>
    </MobileLayout>
  );
}