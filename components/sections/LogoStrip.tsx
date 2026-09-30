import { Globe, Sun, Zap, Disc3 } from "lucide-react";

const logos = [
  { Icon: Globe },
  { Icon: Sun },
  { Icon: Zap },
  { Icon: Disc3 },
];

export function LogoStrip() {
  return (
    <section className="flex h-[104px] items-center bg-[#F5F5F5] sm:h-[207px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-zinc-500 sm:gap-x-[68px]">
        {logos.map(({ Icon }, i) => (
          <div key={i} className="flex items-center gap-2">
            <Icon className="h-6 w-6 sm:h-10 sm:w-10" strokeWidth={2.2} />
            <span className="text-base font-bold tracking-tight sm:text-[25px]">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}