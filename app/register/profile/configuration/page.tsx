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

export default function ConfigurationPage() {
  return (
    <MobileLayout title="Configure" showBackButton backHref="/focus" hideNavbar>
      <div className="mx-auto flex w-full max-w-[390px] flex-col pb-6 pt-5">
        <p className="text-center text-[18px] leading-6 text-[#9AAED0]">
          Choose the app you want to block during your lock-in session
        </p>

        <section className="mt-4 min-h-[520px] rounded-[12px] bg-[#C7EEF9] px-2 py-2 pr-1 shadow-inner">
          <div className="max-h-[540px] space-y-2 overflow-y-auto pr-1">
            {apps.map((app) => (
              <button
                key={app.name}
                type="button"
                className="flex h-[64px] w-full items-center justify-between rounded-[8px] bg-[#83D0EB] px-2 text-left shadow-[0_1px_0_rgba(255,255,255,0.35)] transition-transform active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-[13px] font-bold text-white shadow-sm ${app.accent}`}
                  >
                    {app.label}
                  </div>
                  <span className="text-[17px] text-[#061E3A]">{app.name}</span>
                </div>

                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-[4px] border-2 ${app.active ? "border-[#0B88C5] bg-[#D9F4FF]" : "border-[#0B88C5] bg-transparent"
                    }`}
                >
                  {app.active && <Check size={20} strokeWidth={3} className="text-[#0B88C5]" />}
                </div>
              </button>
            ))}
          </div>
        </section>

        <button
          type="button"
          className="mt-6 h-[44px] w-full rounded-[8px] bg-[#0077B6] text-[18px] font-medium text-white transition-colors hover:bg-[#056da6]"
        >
          Configure
        </button>
      </div>
    </MobileLayout>
  );
}