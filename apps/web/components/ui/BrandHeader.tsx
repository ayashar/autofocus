type BrandHeaderProps = {
  compact?: boolean;
};

export function BrandHeader({ compact = false }: BrandHeaderProps) {
  return (
    <section className="text-center">
      <h1
        className={`brand-font font-black leading-none text-ink ${
          compact ? "text-[56px]" : "text-[58px]"
        }`}
      >
        AutoFokus
      </h1>
      <p className="mt-2 text-[17px] text-muted">Lock your focus. AutoFokus ON!</p>
    </section>
  );
}
