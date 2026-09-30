import { Checklist } from "./ui";

export const GRID = "pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px]";

/* Decorative 3D-style shapes. Replace with Figma-exported PNGs when available. */
export const Shape = ({ className }: { className: string }) => <span aria-hidden className={`absolute hidden shadow-[inset_-6px_-8px_14px_rgba(0,0,0,.12)] md:block ${className}`} />;
export const tri = "[clip-path:polygon(50%_0,100%_100%,0_100%)]";
const tints = ["bg-rose-300", "bg-amber-300", "bg-sky-300", "bg-emerald-300", "bg-violet-300"];

export function Avatars({ label = "2K+" }: { label?: string }) {
  return (
    <span className="flex items-center">
      {tints.map((t) => <span key={t} className={`-ml-1.5 h-5 w-5 rounded-full border-2 border-white first:ml-0 ${t}`} />)}
      <span className="-ml-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-lime px-1 text-[8px] font-medium text-black">{label}</span>
    </span>
  );
}

export const FloatCard = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <div className={`absolute rounded-xl p-3 text-left text-[11px] shadow-lg ${className}`}>{children}</div>
);

export const HappyStudents = ({ className }: { className: string }) => (
  <FloatCard className={`bg-white text-black ${className}`}>
    <div className="font-medium">Happy Students</div>
    <div className="mb-1.5 text-[9px] text-zinc-500">4.5 (240) ★</div>
    <Avatars />
  </FloatCard>
);

export function Feature({ title, text, visual, items, reverse = false, children }: { title: string; text: string; visual: React.ReactNode; items?: string[]; reverse?: boolean; children?: React.ReactNode }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <h2 className="max-w-sm text-3xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-600">{text}</p>
        {children}
        {items && <Checklist items={items} />}
      </div>
      <div className="relative mx-auto h-80 w-full max-w-md">{visual}</div>
    </div>
  );
}