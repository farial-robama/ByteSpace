import Image from "next/image";
import { StudentAvatars } from "@/components/shared/StudentAvatars";

const S = "/images/shapes";
const CARD_SHADOW = "shadow-[0_8px_24px_rgba(0,0,0,0.10)]";

function Deco({ src, w, h, className = "" }: { src: string; w: number; h: number; className?: string }) {
  return (
    <Image
      src={`${S}/${src}`}
      alt=""
      aria-hidden
      width={w}
      height={h}
      className={`pointer-events-none absolute max-w-none select-none ${className}`}
    />
  );
}

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap rounded-full bg-white/60 px-3 py-1.5 text-[13px] leading-5 text-zinc-600 backdrop-blur-sm">
    {children}
  </span>
);

const BarsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
    <rect x="1" y="7" width="3" height="6" rx="1" />
    <rect x="5.5" y="4" width="3" height="9" rx="1" />
    <rect x="10" y="1" width="3" height="12" rx="1" opacity=".4" />
  </svg>
);

const Level = () => (
  <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 text-xs text-zinc-700">
    <BarsIcon />
    Beginner
  </span>
);

const By = () => (
  <p className="mt-0.5 text-[11px] leading-4 text-zinc-500">
    by <span className="text-brand">purepearl studio</span>
  </p>
);

const Price = () => (
  <p className="text-xl font-semibold leading-7 text-brand">
    $25<span className="text-xs font-normal text-zinc-500">/lifetime</span>
  </p>
);

const LevelRow = () => (
  <div className="mt-[17px] flex items-center gap-[10px]">
    <Level />
    <div className="[zoom:1.2]">
      <StudentAvatars label="26+" />
    </div>
  </div>
);

export function AuthPreview() {
  return (
    <div aria-hidden className="absolute inset-0 font-[family-name:var(--font-poppins)] text-black">
      {/* BACK CARD */}
      <div className={`absolute left-[124px] top-[390px] z-10 h-[383px] w-[372px] rounded-[20px] bg-white p-4 ${CARD_SHADOW}`}>
        <div className="relative h-[195px] overflow-hidden rounded-[14px]">
          <Image src="/images/build-digital-asset.jpg" alt="" fill sizes="340px" className="object-cover" />
          <div className="absolute bottom-3 left-[17px]">
            <Pill>17 Lessons</Pill>
          </div>
        </div>
        <p className="mt-[21px] truncate text-xl font-semibold leading-7">Build Digital...</p>
        <By />
        <LevelRow />
        <div className="mt-3">
          <Price />
        </div>
      </div>

      {/* FRONT CARD */}
      <div className={`absolute left-[235px] top-[301px] z-20 h-[383px] w-[372px] rounded-[20px] bg-white p-4 ${CARD_SHADOW}`}>
        <div className="relative h-[195px] overflow-hidden rounded-[14px]">
          <Image src="/images/learn-from-bd-data.jpg" alt="" fill sizes="340px" className="object-cover" />
          <div className="absolute bottom-3 left-[17px] flex gap-2">
            <Pill>17 Lessons</Pill>
            <Pill>2 hours 16 mins</Pill>
            <Pill>59 Comments</Pill>
          </div>
        </div>

        <div className="mt-[21px] flex items-start justify-between gap-2">
          <p className="text-xl font-semibold leading-7">the Power of Big Data</p>
          <span className="shrink-0 text-[17px] leading-7 text-zinc-600">
            4.5 <span className="text-lime">★</span>
          </span>
        </div>
        <By />
        <LevelRow />
        <div className="mt-3">
          <Price />
        </div>
      </div>

      {/* HAPPY STUDENTS */}
      <div className="absolute left-[349px] top-[735px] z-40 h-[122px] w-[258px] rounded-[18px] bg-lime p-4 shadow-lg">
        <p className="text-sm font-medium leading-5">Happy Students</p>
        <p className="mt-0.5 text-xs leading-4">
          4.5 <span className="text-zinc-600">(240)</span> <span className="text-brand">★</span>
        </p>
        <div className="mt-2.5 [zoom:1.3]">
          <StudentAvatars label="2K+" />
        </div>
      </div>

      {/* shapes */}
      <Deco src="auth-torus.png"    w={148} h={147} className="left-[150px] top-[318px] z-30" />
      <Deco src="auth-cone.png"     w={190} h={189} className="left-[96px] top-[698px] z-20" />
      <Deco src="auth-squiggle.png" w={177} h={176} className="left-[472px] top-[619px] z-50" />
    </div>
  );
}