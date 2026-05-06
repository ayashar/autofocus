import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const avatars = [1, 2, 3, 4];

import ClientProfile from "./ClientProfile";
import { Suspense } from "react";

export default function FocusPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-[#64748B]">Loading...</div>}>
      <ClientProfile />
    </Suspense>
  );
}