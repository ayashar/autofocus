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
    <nav className="bg-primary-200 w-full h-[84px] shrink-0 flex items-center justify-around px-4 pb-4 pt-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-[72px] py-1.5 rounded-xl transition-all duration-200 ${
              isActive 
                ? "bg-primary-100 text-[#001D3D]" 
                : "text-[#001D3D] hover:bg-white/10"
            }`}
          >
            <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[12px] mt-1 tracking-tight ${isActive ? "font-bold" : "font-medium"}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
