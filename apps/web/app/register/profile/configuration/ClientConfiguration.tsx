"use client";

import { Button } from "@/components/ui/Button";
import { Check, ChevronLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { blockedAppCatalog } from "@/lib/blockedApps";

export default function ClientConfiguration() {
  const [apps, setApps] = useState(blockedAppCatalog);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const search = useSearchParams();
  const userId = search?.get("userId");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredApps = apps
    .map((app, index) => ({ app, index }))
    .filter(({ app }) => app.name.toLowerCase().includes(normalizedQuery));

  function toggleApp(index: number) {
    setApps((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], active: !next[index].active };
      return next;
    });
  }

  async function handleConfigure() {
    setLoading(true);
    setError(null);

    const mockConfig = {
      userId: userId ?? "guest",
      blockedApps: apps.filter((app) => app.active),
    };
    localStorage.setItem("mockConfig", JSON.stringify(mockConfig));

    setTimeout(() => {
      router.push(userId ? `/timer?userId=${userId}` : "/timer?guest=1");
      setLoading(false);
    }, 300);
  }

  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-primary-500 px-5 py-2 text-[17px] text-white shadow-sm transition-colors hover:bg-primary-600"
        >
          <ChevronLeft size={24} strokeWidth={2.3} />
          Back
        </Link>

        <section className="mt-10 text-center">
          <h1 className="text-[43px] font-black leading-none text-ink">Configure</h1>
          <p className="mx-auto mt-2 max-w-[300px] text-[18px] leading-6 text-muted">
            Choose the app you want to block during your lock-in session
          </p>
        </section>

        <section className="mt-8 min-h-[520px] rounded-[6px] bg-primary-100 px-2 py-2 pr-1 shadow-inner">
          <label className="relative mb-2 block pr-1" htmlFor="blocked-app-search">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-primary-500"
            />
            <input
              id="blocked-app-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search apps"
              className="h-11 w-full rounded-[6px] border border-primary-200 bg-white pl-10 pr-3 text-[15px] text-ink outline-none placeholder:text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
          </label>

          <div className="max-h-[488px] space-y-2 overflow-y-auto pr-1">
            {filteredApps.length === 0 ? (
              <div className="flex min-h-[220px] items-center justify-center rounded-[5px] bg-white/55 px-4 text-center text-[15px] font-medium text-muted">
                No apps found
              </div>
            ) : (
              filteredApps.map(({ app, index }) => (
                <button
                  key={app.name}
                  type="button"
                  onClick={() => toggleApp(index)}
                  className={`flex h-[58px] w-full items-center justify-between rounded-[5px] px-3 text-left transition-transform active:scale-[0.99] ${
                    app.active ? "bg-[#AEBFA5]" : "bg-primary-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-[12px] font-bold text-white shadow-sm ${app.accent}`}
                    >
                      {app.label}
                    </div>
                    <span className="text-[18px] text-ink">{app.name}</span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border-2 border-primary-500 bg-transparent">
                    {app.active && <Check size={22} strokeWidth={2.4} className="text-primary-500" />}
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        {error && (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        )}

        <Button
          onClick={handleConfigure}
          type="button"
          disabled={loading}
          size="large"
          className="mt-6"
        >
          {loading ? "Saving..." : "Configure"}
        </Button>
      </div>
    </main>
  );
}
