import ClientProfile from "./ClientProfile";
import { Suspense } from "react";

export default function FocusPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-muted">Loading...</div>}>
      <ClientProfile />
    </Suspense>
  );
}
