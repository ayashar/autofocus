interface StatCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="w-full bg-white/10 rounded-[16px] p-4">
      <p className="text-[12px] text-[#94A3B8] mb-1">{label}</p>
      <p className="text-[24px] font-bold text-[#F8FAFC]">{value}</p>
    </div>
  );
}