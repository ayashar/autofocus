import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BrandHeader } from "@/components/ui/BrandHeader";

type AuthLayoutProps = {
  children: React.ReactNode;
  showBack?: boolean;
  backHref?: string;
  brandOffset?: "middle" | "top";
};

export function AuthLayout({
  children,
  showBack = false,
  backHref = "/",
  brandOffset = "middle",
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col">
        {showBack && (
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-primary-500 px-5 py-2 text-[17px] text-white shadow-sm transition-colors hover:bg-primary-600"
          >
            <ChevronLeft size={24} strokeWidth={2.3} />
            Back
          </Link>
        )}

        <div className={brandOffset === "top" ? "mt-16" : "mt-[150px]"}>
          <BrandHeader />
        </div>

        {children}
      </div>
    </main>
  );
}
