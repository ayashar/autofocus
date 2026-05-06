import Background from '@/components/Background';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';

export default function DashboardPage() {
  const stats = {
    streaks: '7',
    longestFocus: '2h 45m',
    attempts: '23',
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden bg-[#33A5E1] z-10">
        <div className="h-21.5" />
      </div>

      {/* Main Content */}
      <div
        className="absolute left-0 right-0 bottom-[69px] flex flex-col items-center justify-center z-10 px-6"
        style={{ top: '169px' }}
      >
        <div className="w-full max-w-[320px] space-y-4">
          <StatCard label="Number of Streaks" value={stats.streaks} />
          <StatCard label="Longest Uninterrupted Focus" value={stats.longestFocus} />
          <StatCard label="Attempts Accessing App" value={stats.attempts} />
        </div>
      </div>

      {/* Footer */}
      <Footer activeIndex={1} />
    </div>
  );
}