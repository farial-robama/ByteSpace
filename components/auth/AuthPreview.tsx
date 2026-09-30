import Image from "next/image";
import { StudentAvatars } from "@/components/shared/StudentAvatars";

const CARD_SHADOW = "shadow-[0_8px_24px_rgba(0,0,0,0.12)]";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/60 px-3 py-1.5 text-[13px] leading-5 text-zinc-600 backdrop-blur-sm">
    {children}
  </span>
);

const BarsIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden
  >
    <rect x="1" y="7" width="3" height="6" rx="1" />
    <rect x="5.5" y="4" width="3" height="9" rx="1" />
    <rect x="10" y="1" width="3" height="12" rx="1" />
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

export function AuthPreview() {
  return (
    <div
      aria-hidden
      className="relative mt-[46px] hidden h-[580px] w-[560px] font-[family-name:var(--font-poppins)] text-black xl:block"
    >
      {/* BACK CARD */}
      <div
        className={`absolute left-0 top-[107px] z-10 h-[381px] w-[372px] rounded-[20px] bg-white p-4 ${CARD_SHADOW}`}
      >
        <div className="relative h-[193px] overflow-hidden rounded-[14px]">
          <Image
            src="/images/build-digital-asset.jpg"
            alt=""
            fill
            sizes="340px"
            className="object-cover"
          />
          <div className="absolute bottom-2.5 left-3">
            <Pill>17 Lessons</Pill>
          </div>
        </div>
        <p className="mt-6 truncate text-xl font-semibold leading-7">
          Build Digital...
        </p>
        <By />
        <div className="mt-4">
          <Level />
        </div>
        <div className="mt-3.5">
          <Price />
        </div>
      </div>

      {/* FRONT CARD */}
      <div
        className={`absolute left-[110px] top-[15px] z-20 h-[380px] w-[373px] rounded-[20px] bg-white p-4 ${CARD_SHADOW}`}
      >
        <div className="relative h-[193px] overflow-hidden rounded-[14px]">
          <Image
            src="/images/learn-from-bd-data.jpg"
            alt=""
            fill
            sizes="340px"
            className="object-cover"
          />
          <div className="absolute bottom-2.5 left-3 flex gap-2">
            <Pill>17 Lessons</Pill>
            <Pill>2 hours 16 mins</Pill>
            <Pill>59 Comments</Pill>
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-2">
          <p className="text-xl font-semibold leading-7">
            the Power of Big Data
          </p>
          <span className="shrink-0 text-base leading-7 text-zinc-600">
            4.5 <span className="text-lime">★</span>
          </span>
        </div>
        <By />

        <div className="mt-4 flex items-center gap-4">
          <Level />
          <div className="[zoom:1.2]">
            <StudentAvatars label="2K+" />
          </div>
        </div>

        <div className="mt-3.5">
          <Price />
        </div>
      </div>

      {/* LIME RING */}
      <div className="absolute left-[51px] top-[59px] z-30 h-[96px] w-[102px] -rotate-[15deg] rounded-full border-[24px] border-lime" />

      {/* HAPPY STUDENTS */}
      <div className="absolute left-[225px] top-[451px] z-40 h-[122px] w-[258px] rounded-[18px] bg-lime p-4 shadow-lg">
        <p className="text-sm font-medium leading-5">Happy Students</p>
        <p className="mt-0.5 text-xs leading-4">
          4.5 <span className="text-zinc-600">(240)</span>{" "}
          <span className="text-brand">★</span>
        </p>
        <div className="mt-2.5 [zoom:1.3]">
          <StudentAvatars label="2K+" />
        </div>
      </div>

      {/* WHITE SQUIGGLE */}
      <svg
        className="absolute left-[376px] top-[357px] z-50 h-[124px] w-[124px] rotate-[8deg]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M8 20C25 7 48 8 65 15C78 20 82 28 72 35C61 42 40 39 25 48"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 48C38 39 61 42 75 50C86 56 85 64 75 70C62 78 42 75 27 84"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 84C46 76 65 78 79 86"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* LIME CONE */}
      <div
        className="absolute left-0 top-[434px] z-20 h-[117px] w-[119px] rotate-[14deg] bg-gradient-to-r from-[#b4e600] to-lime"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      />
    </div>
  );
}
