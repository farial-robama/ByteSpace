import { PencilRuler, Code2, Laptop, Building2, Megaphone, Camera } from "lucide-react";

const paths = [
  { label: "Design", Icon: PencilRuler },
  { label: "Development", Icon: Code2 },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

export function LearningPaths() {
  return (
    <section className="relative h-[553px] overflow-hidden bg-white font-[family-name:var(--font-body,var(--font-poppins))]">
      <div className="absolute left-1/2 top-0 w-[1440px] -translate-x-1/2 pt-[60px]">
        <h2 className="text-center text-[36px] font-semibold leading-[48px] tracking-[-0.01em] text-[#0a0a2a]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-[14px] w-[940px] text-center text-[16px] font-light leading-[30px] text-zinc-400">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br />
          fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <div className="mt-[68px] flex justify-center gap-[40px]">
          {paths.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              className="flex h-[168px] w-[168px] flex-col items-center rounded-[22px] border border-zinc-200 pt-[38px] text-[#0a0a2a] transition-colors hover:border-[#0435E6]"
            >
              <span className="grid h-[62px] w-[62px] place-items-center rounded-full bg-[#C6FF00]">
                <Icon className="h-[26px] w-[26px]" strokeWidth={2.4} />
              </span>
              <span className="mt-2 text-[18px] font-medium leading-[26px]">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}