import { Suspense } from "react";
import ClientConfiguration from "./ClientConfiguration";

export default function ConfigurationPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-muted">Loading...</div>}>
      <ClientConfiguration />
    </Suspense>
  );
}
