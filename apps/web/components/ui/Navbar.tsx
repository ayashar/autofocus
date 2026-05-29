"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Home, Clock } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Set timer", href: "/timer", icon: Clock },
  ];

  return (
    <nav className="flex h-[94px] w-full shrink-0 items-center justify-around bg-primary-400 px-4 pb-3 pt-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex h-[78px] w-[84px] flex-col items-center justify-center rounded-[8px] py-1.5 transition-all duration-200 ${
              isActive 
                ? "bg-primary-500 text-ink" 
                : "text-ink hover:bg-white/10"
            }`}
          >
            <item.icon size={31} strokeWidth={2} />
            <span className={`mt-1 text-[14px] tracking-tight ${isActive ? "font-bold" : "font-semibold"}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
