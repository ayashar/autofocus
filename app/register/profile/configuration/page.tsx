import { MobileLayout } from "@/components/layout/MobileLayout";
import { Check } from "lucide-react";

const apps = [
  { name: "Instagram", active: true, accent: "from-[#ff4d6d] via-[#f97316] to-[#c026d3]", label: "IG" },
  { name: "Youtube", active: true, accent: "bg-[#FF0000]", label: "YT" },
  { name: "Tiktok", active: true, accent: "bg-[#111111]", label: "TT" },
  { name: "Twitter (X)", active: true, accent: "bg-[#0F1419]", label: "X" },
  { name: "Whatsapp", active: false, accent: "bg-[#25D366]", label: "WA" },
  { name: "Chrome", active: false, accent: "from-[#EA4335] via-[#FBBC05] to-[#34A853]", label: "C" },
];


import { Suspense } from "react";
import ClientConfiguration from "./ClientConfiguration";

export default function ConfigurationPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-[#64748B]">Loading...</div>}>
      <ClientConfiguration />
    </Suspense>
  );
}