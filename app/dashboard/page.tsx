import Link from "next/link";
import { MobileLayout } from "@/components/layout/MobileLayout";

export default function DashboardPage() {
  return (
    <MobileLayout title="Dashboard">
      <div className="mx-auto w-full max-w-[390px] pb-6 pt-5">
        <section className="rounded-[24px] bg-[#CFEFFF] px-4 py-4">
          <p className="text-[18px] text-[#031B77]">Welcome back, Satya.</p>
          <p className="mt-1 text-[15px] font-bold text-[#031B77]">Current streak: 1 day</p>
        </section>

        <section className="mt-5 grid gap-3">
          <div className="rounded-[16px] bg-[#F0F8FF] p-4 shadow-sm">
            <p className="text-[14px] text-[#64748B]">Today&apos;s focus</p>
            <p className="mt-1 text-[24px] font-bold text-[#031B77]">25 minutes</p>
          </div>
          <div className="rounded-[16px] bg-[#F0F8FF] p-4 shadow-sm">
            <p className="text-[14px] text-[#64748B]">Blocked apps</p>
            <p className="mt-1 text-[24px] font-bold text-[#031B77]">4 active</p>
          </div>
        </section>

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