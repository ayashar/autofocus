import { Header } from "@/components/ui/Header";
import { Navbar } from "@/components/ui/Navbar";

export function MobileLayout({
  children,
  title,
  showBackButton = false,
  hideNavbar = false,
  backHref,
}: {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  hideNavbar?: boolean;
  backHref?: string;
}) {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-white shadow-2xl md:aspect-9/19.5 md:w-auto md:rounded-xl">
      <Header title={title} showBackButton={showBackButton} backHref={backHref} />

      <main className="w-full flex-1 overflow-y-auto px-4">
        {children}
      </main>

      {!hideNavbar && <Navbar />}
    </div>
  );
}
