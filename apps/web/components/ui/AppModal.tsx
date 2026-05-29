import { X } from "lucide-react";

type AppModalProps = {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

export function AppModal({ title, children, onClose, className = "" }: AppModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
        className={`relative w-full max-w-[388px] rounded-[18px] bg-primary-400 p-5 text-center text-white shadow-xl ${className}`}
      >
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-white hover:bg-white/10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        )}
        <h2 id="app-modal-title" className="text-[25px] font-bold leading-tight">{title}</h2>
        {children}
      </div>
    </div>
  );
}
