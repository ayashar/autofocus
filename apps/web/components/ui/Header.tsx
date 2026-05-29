"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  backHref?: string;
}

export function Header({ title, showBackButton, backHref }: HeaderProps) {
  const pathname = usePathname();

  let displayTitle = title;
  if (!displayTitle) {
    if (pathname === "/profile") displayTitle = "Profile";
    else if (pathname === "/timer") displayTitle = "Set Timer";
    else if (pathname === "/dashboard") displayTitle = "Dashboard";
    else if (pathname === "/focus") displayTitle = "Adaptive Focus Session";
    else displayTitle = "AutoFokus";
  }

  return (
    <header className="flex h-[62px] shrink-0 items-center bg-primary-400 px-5 text-white">
      {showBackButton && (
        <Link
          href={backHref ?? "/"}
          className="-ml-1 mr-4 rounded-full p-1 transition-colors hover:bg-white/20"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </Link>
      )}
      <h1 className="text-[24px] font-bold">{displayTitle}</h1>
    </header>
  );
}
