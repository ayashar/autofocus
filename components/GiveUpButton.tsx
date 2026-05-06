interface GiveUpButtonProps {
  onClick?: () => void;
}

export default function GiveUpButton({ onClick }: GiveUpButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[295px] h-[53px] bg-[#318CF9] rounded-full flex items-center justify-center active:scale-[0.97] active:shadow-inner transition-all duration-100"
    >
      <span className="text-[18px] font-bold text-white">MENYERAH</span>
    </button>
  );
}