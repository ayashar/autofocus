interface FocusContainerProps {
  children: React.ReactNode;
}

export default function FocusContainer({ children }: FocusContainerProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative bg-[#0077B6] rounded-[40px] overflow-hidden"
        style={{
          width: '358.33px',
          height: '710.2px',
        }}
      >
        {children}
      </div>
    </div>
  );
}