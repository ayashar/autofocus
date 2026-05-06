interface SetTargetCardProps {
  children: React.ReactNode;
  height?: number;
}

export default function SetTargetCard({ children, height = 40 }: SetTargetCardProps) {
  return (
    <div
      className="w-full rounded-[20px] bg-black/20 border border-white/10"
      style={{ height: `${height}px` }}
    >
      <div className="flex items-center h-full px-4">
        {children}
      </div>
    </div>
  );
}