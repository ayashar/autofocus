interface FocusTitleProps {
  title: string;
  subtitle: string;
}

export default function FocusTitle({ title, subtitle }: FocusTitleProps) {
  return (
    <div className="text-center">
      <h1 className="text-[24px] font-bold text-[#f8fafc] mb-2">
        {title}
      </h1>
      <p className="text-[14px] font-normal text-[#94a3b8]">
        {subtitle}
      </p>
    </div>
  );
}