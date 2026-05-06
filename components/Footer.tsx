import Link from 'next/link';

interface FooterProps {
  activeIndex?: number;
}

const navItems = [
  { label: 'Streak', href: '/streak' },
  { label: 'Set timer', href: '/timer' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'Set target', href: '/target' },
  { label: 'Features', href: '/features' },
];

export default function Footer({ activeIndex = 1 }: FooterProps) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-[69px] bg-[#33A5E1]">
      {/* Navigation items with labels */}
      <div className="absolute top-[15px] left-0 right-0 flex justify-around px-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center w-[60px] cursor-pointer"
          >
            <div
              className={`w-[42px] h-[40px] rounded-full transition-colors ${
                index === activeIndex ? 'bg-[#3D3D3D]' : 'bg-[#E0E0E0]'
              }`}
            />
            <span
              className={`mt-1 text-[10px] font-medium tracking-wide whitespace-nowrap ${
                index === activeIndex ? 'text-[#03045E]' : 'text-[#03045E]/60'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}