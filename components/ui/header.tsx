"use client";

import { usePathname } from "next/navigation";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export function Header({ title, showBackButton }: HeaderProps) {
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
        <button className="mr-4 p-1 -ml-1 rounded-full hover:bg-white/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      )}
      <h1 className="font-bold text-2xl">{displayTitle}</h1>
    </header>
  );
}
