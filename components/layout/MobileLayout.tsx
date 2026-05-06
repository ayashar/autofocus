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
    <div className="flex flex-col bg-white h-screen w-screen md:w-auto md:aspect-9/19.5 md:rounded-xl shadow-2xl overflow-hidden relative">
      <Header title={title} showBackButton={showBackButton} backHref={backHref} />

      <main className="flex-1 overflow-y-auto w-full px-4">
        {children}
      </main>

      {!hideNavbar && <Navbar />}
    </div>
  );
}
