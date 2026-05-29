export type BlockedApp = {
  name: string;
  active: boolean;
  accent: string;
  label: string;
};

export const blockedAppCatalog: BlockedApp[] = [
  { name: "Instagram", active: true, accent: "from-[#ff4d6d] via-[#f97316] to-[#c026d3]", label: "IG" },
  { name: "YouTube", active: true, accent: "bg-[#FF0000]", label: "YT" },
  { name: "TikTok", active: true, accent: "bg-[#111111]", label: "TT" },
  { name: "Twitter (X)", active: true, accent: "bg-[#0F1419]", label: "X" },
  { name: "WhatsApp", active: false, accent: "bg-[#25D366]", label: "WA" },
  { name: "Chrome", active: false, accent: "from-[#EA4335] via-[#FBBC05] to-[#34A853]", label: "C" },
  { name: "Safari", active: false, accent: "from-[#21A5F5] to-[#0B57D0]", label: "SF" },
  { name: "Telegram", active: false, accent: "bg-[#26A5E4]", label: "TG" },
  { name: "Discord", active: false, accent: "bg-[#5865F2]", label: "DC" },
  { name: "Reddit", active: false, accent: "bg-[#FF4500]", label: "RD" },
  { name: "Facebook", active: false, accent: "bg-[#1877F2]", label: "FB" },
  { name: "Messenger", active: false, accent: "from-[#00B2FF] to-[#006AFF]", label: "MS" },
  { name: "Netflix", active: false, accent: "bg-[#E50914]", label: "NF" },
  { name: "Spotify", active: false, accent: "bg-[#1DB954]", label: "SP" },
  { name: "Twitch", active: false, accent: "bg-[#9146FF]", label: "TW" },
  { name: "Pinterest", active: false, accent: "bg-[#E60023]", label: "PT" },
  { name: "Snapchat", active: false, accent: "bg-[#FFFC00] text-black", label: "SC" },
  { name: "Shopee", active: false, accent: "bg-[#EE4D2D]", label: "SH" },
  { name: "Tokopedia", active: false, accent: "bg-[#03AC0E]", label: "TP" },
  { name: "Mobile Legends", active: false, accent: "from-[#2257D8] to-[#F4B43F]", label: "ML" },
  { name: "Genshin Impact", active: false, accent: "from-[#6D8ACF] to-[#D9B56C]", label: "GI" },
  { name: "Steam", active: false, accent: "bg-[#171A21]", label: "ST" },
  { name: "Roblox", active: false, accent: "bg-[#232527]", label: "RB" },
  { name: "CapCut", active: false, accent: "bg-[#111111]", label: "CC" },
  { name: "Threads", active: false, accent: "bg-[#111111]", label: "TH" },
  { name: "LinkedIn", active: false, accent: "bg-[#0A66C2]", label: "IN" },
  { name: "Gmail", active: false, accent: "from-[#EA4335] via-[#FBBC05] to-[#34A853]", label: "GM" },
  { name: "Canva", active: false, accent: "from-[#00C4CC] to-[#7D2AE8]", label: "CV" },
];
