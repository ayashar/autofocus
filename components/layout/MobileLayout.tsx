import { Header } from "@/components/ui/header";
import { Navbar } from "@/components/ui/navbar";

export function MobileLayout({
  children,
  title,
  showBackButton = false,
  hideNavbar = false,
}: {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  hideNavbar?: boolean;
}) {
  return (
    <div className="flex flex-col h-full w-full bg-white relative">
      <Header title={title} showBackButton={showBackButton} />
      
      <main className="flex-1 overflow-y-auto w-full">
        {children}
      </main>
      
      {!hideNavbar && <Navbar />}
    </div>
  );
}
