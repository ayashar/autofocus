"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { BrandHeader } from "@/components/ui/BrandHeader";
import { Button } from "@/components/ui/Button";

type OnboardingProps = {
  onComplete: () => void;
};

const slides = [
  {
    title: "Stay focused",
    body: "AutoFokus helps you protect study and work time by reducing distractions from other apps.",
    icon: ShieldCheck,
  },
  {
    title: "Create a focus session",
    body: "Choose apps to block, set your session duration, then start your focus timer.",
    icon: Clock,
  },
  {
    title: "Adaptive timer",
    body: "Your timer plan grows gradually so focus blocks can adjust to your needs and usage pattern.",
    icon: Sparkles,
  },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const Icon = slide.icon;
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  return (
    <main className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center">
        <BrandHeader compact />

        <section className="mt-14 rounded-[18px] bg-primary-100 px-6 py-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-500 text-white">
            <Icon size={38} strokeWidth={2.2} />
          </div>
          <h1 className="mt-8 text-[30px] font-black leading-tight text-ink">{slide.title}</h1>
          <p className="mt-4 text-[17px] leading-6 text-ink/75">{slide.body}</p>

          <div className="mt-8 flex justify-center gap-2">
            {slides.map((item) => (
              <span
                key={item.title}
                className={`h-2 rounded-full transition-all ${
                  item.title === slide.title ? "w-8 bg-primary-500" : "w-2 bg-primary-300"
                }`}
              />
            ))}
          </div>
        </section>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="secondary"
            size="large"
            disabled={isFirst}
            onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          >
            <ArrowLeft size={18} />
            Back
          </Button>
          <Button
            type="button"
            size="large"
            onClick={() => (isLast ? onComplete() : setIndex((prev) => prev + 1))}
          >
            {isLast ? "Get Started" : "Next"}
            {!isLast && <ArrowRight size={18} />}
          </Button>
        </div>
      </div>
    </main>
  );
}
