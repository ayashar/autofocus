"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    else displayTitle = "AutoFocus";
  }

  return (
    <header className="bg-primary-200 text-white px-4 py-4 flex items-center shrink-0">
      {showBackButton && (
        <Link
          href={backHref ?? "/"}
          className="mr-4 p-1 -ml-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
      )}
      <h1 className="font-bold text-2xl">{displayTitle}</h1>
    </header>
  );
}
