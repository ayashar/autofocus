import Link from 'next/link';

export default function NavigationTabs() {
  return (
    <>
      <div
        className="absolute flex justify-end"
        style={{
          top: '7.74%',
          right: '6px',
          left: '52.08%',
        }}
      >
        <Link
          href="/dashboard"
          className="text-[14px] font-normal text-[#f8fafc] px-2 py-1"
        >
          Dashboard
        </Link>
      </div>
      <div
        className="absolute"
        style={{
          top: '7.74%',
          left: '6.04%',
          right: '72.92%',
        }}
      >
        <Link
          href="/profile"
          className="text-[14px] font-normal text-[#f8fafc] px-2 py-1"
        >
          Profil & Reward
        </Link>
      </div>
    </>
  );
}