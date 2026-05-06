interface GiveUpPopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function GiveUpPopup({ onCancel, onConfirm }: GiveUpPopupProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="w-[300px] bg-[#0077B6] rounded-[20px]  p-6">
        <h2 className="text-[18px] font-bold text-[#F8FAFC] text-center mb-2">
          Give Up?
        </h2>
        <p className="text-[14px] text-[#F8FAFC]/80 text-center mb-6">
          Are you sure you want to give up this session?
        </p>
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 h-[45px] bg-white/20 rounded-full text-[14px] font-bold text-[#F8FAFC] active:scale-[0.97] active:shadow-inner transition-all duration-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-[45px] bg-[#EF4444] rounded-full text-[14px] font-bold text-white active:scale-[0.97] active:shadow-inner transition-all duration-100"
          >
            Give Up
          </button>
        </div>
      </div>
    </div>
  );
}