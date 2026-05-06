interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="px-5 pt-4 pb-3">
      <h1 className="text-[28px] font-bold text-[#1E1E1E] leading-tight">{title}</h1>
      {subtitle && (
        <p className="text-[14px] text-[#1E1E1E]/60 mt-1">{subtitle}</p>
      )}
    </div>
  );
}