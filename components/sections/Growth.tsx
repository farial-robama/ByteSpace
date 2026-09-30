import Image from "next/image";
import { courses } from "@/lib/data";
import { StudentAvatars } from "../shared/StudentAvatars";

const SHADOW = "shadow-[0_8px_24px_rgba(0,0,0,0.10)]";

const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 110" fill="none" aria-hidden className={`text-lime ${className}`}>
    <path
      d="M22 20C50 8 84 14 78 26C72 38 30 34 24 48C18 62 74 56 80 70C84 82 40 84 26 96"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden className="shrink-0">
    <circle cx="10" cy="10" r="10" className="fill-brand" />
    <path d="M5.5 10.2l3 3 6-6.4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const BarsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
    <rect x="1" y="7" width="3" height="6" rx="1" />
    <rect x="5.5" y="4" width="3" height="9" rx="1" />
    <rect x="10" y="1" width="3" height="12" rx="1" />
  </svg>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/60 px-3 py-1 text-xs leading-5 text-zinc-600 backdrop-blur-sm">{children}</span>
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-poppins)] text-[40px] font-semibold leading-[50px] text-zinc-900">
    {children}
  </h2>
);

export function Growth() {
  const c = courses[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 font-[family-name:var(--font-outfit)]">
      {/* soft background glows */}
      <div aria-hidden className="absolute -left-24 -top-10 h-[420px] w-[420px] rounded-full bg-lime/50 blur-3xl" />
      <div aria-hidden className="absolute -right-32 top-[200px] h-[420px] w-[420px] rounded-full bg-indigo-200/60 blur-3xl" />
      <div aria-hidden className="absolute -left-40 top-[640px] h-[300px] w-[300px] rounded-full bg-indigo-200/50 blur-3xl" />
      <div aria-hidden className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-lime/60 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-indigo-300/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1025px] space-y-[74px] px-5 xl:px-0">
        {/* ============ ROW 1: PATH TO PROFESSIONAL GROWTH ============ */}
        <div className="grid items-center gap-10 xl:grid-cols-[460px_490px] xl:gap-x-[75px]">
          <div>
            <Heading>
              Your Path to Professional
              <br className="hidden xl:block" /> Growth Starts Here!
            </Heading>
            <p className="mt-5 max-w-[406px] text-sm leading-6 text-zinc-600">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="mt-9 flex gap-10">
              {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-[family-name:var(--font-poppins)] text-2xl font-medium leading-8 text-brand">{n}</dt>
                  <dd className="text-sm leading-5 text-zinc-600">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[490px] w-[490px] font-[family-name:var(--font-poppins)] max-sm:[zoom:0.65] xl:mx-0">
            {/* course card */}
            <div className={`absolute left-0 top-0 z-10 h-[322px] w-[312px] rounded-[20px] bg-white p-3.5 ${SHADOW}`}>
              <div className="relative h-[140px] overflow-hidden rounded-[12px]">
                <Image src={c.image} alt="" fill sizes="285px" className="object-cover" />
                <div className="absolute bottom-2 left-2 flex gap-1.5">
                  <Pill>{c.lessons} Lessons</Pill>
                  <Pill>{c.duration}</Pill>
                </div>
              </div>
              <p className="mt-5 text-lg font-semibold leading-7">{c.title}</p>
              <p className="text-[11px] leading-4 text-zinc-500">
                by <span className="text-brand">{c.author}</span>
              </p>
              <span className="mt-4 inline-flex h-8 items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 text-xs text-zinc-700">
                <BarsIcon />
                {c.level}
              </span>
              <p className="mt-3 text-xl font-semibold leading-7 text-brand">
                ${c.price}
                <span className="text-xs font-normal text-zinc-500">/lifetime</span>
              </p>
            </div>

            {/* squiggle */}
            <Squiggle className="absolute left-[380px] top-[76px] z-10 h-[110px] w-[85px] -rotate-12" />

            {/* student */}
            <Image
              src="/images/hero.png"
              alt="Student learning with a laptop"
              width={520}
              height={490}
              className="absolute right-[5px] top-[37px] z-20 h-[425px] w-auto drop-shadow-2xl"
            />

            {/* learning progress */}
            <div className={`absolute left-[290px] top-[178px] z-30 h-[114px] w-[197px] rounded-[16px] bg-white p-4 ${SHADOW}`}>
              <p className="text-[13px] leading-5 text-zinc-600">Learning Progress</p>
              <p className="mt-1 text-4xl font-semibold leading-[44px]">55%</p>
              <div className="mt-2 h-[7px] rounded-full bg-zinc-200">
                <div className="h-full w-[55%] rounded-full bg-lime" />
              </div>
            </div>
          </div>
        </div>

        {/* ============ ROW 2: CREATE & MANAGE COURSES ============ */}
        <div id="creators" className="grid items-center gap-10 xl:grid-cols-[460px_460px] xl:gap-x-[64px]">
          <div>
            <Heading>
              Create &amp; Manage
              <br className="hidden xl:block" /> Courses Easily.
            </Heading>
            <p className="mt-5 max-w-[470px] text-sm leading-6 text-zinc-600">
              <b className="font-semibold text-brand">ByteSpace</b> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="mt-9 space-y-2.5">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((t) => (
                <li key={t} className="flex h-6 items-center gap-2.5 text-[15px]">
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto h-[470px] w-[460px] font-[family-name:var(--font-poppins)] max-sm:[zoom:0.65] xl:order-first xl:mx-0">
            {/* creator */}
            <Image
              src="/images/create-and-manage-course-easily.png"
              alt="Creator holding a tablet"
              width={500}
              height={500}
              className="absolute left-[51px] top-0 z-10 h-[466px] w-auto"
            />

            {/* revenue cards */}
            <div className="absolute left-0 top-[5px] z-20 h-[100px] w-[147px] rounded-[10px] bg-brand p-3 text-white">
              <p className="text-[11px] leading-4">Total Revenue</p>
              <p className="text-[8px] leading-3 text-white/70">July 1-25</p>
              <p className="mt-1 text-lg font-semibold leading-6">$120.29</p>
              <div className="mt-1.5 h-[5px] rounded-full bg-white/25">
                <div className="h-full w-[62%] rounded-full bg-lime" />
              </div>
            </div>

            <div className="absolute left-0 top-[125px] z-20 h-[117px] w-[114px] rounded-[10px] bg-brand p-3 text-white">
              <p className="text-[11px] leading-4">Year to Date</p>
              <p className="text-[8px] leading-3 text-white/70">2023</p>
              <p className="mt-1 text-lg font-semibold leading-6">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[9px] font-medium text-black">+125</span>
            </div>

            {/* squiggle */}
            <Squiggle className="absolute left-[285px] top-[92px] z-30 h-[124px] w-[118px] rotate-[10deg]" />

            {/* happy students */}
            <div className={`absolute left-[237px] top-[314px] z-30 w-[217px] rounded-[14px] bg-white p-3 ${SHADOW}`}>
              <p className="text-sm font-medium leading-5">Happy Students</p>
              <p className="mt-0.5 text-[11px] leading-4 text-zinc-600">
                4.6 (240) <span className="text-lime">★</span>
              </p>
              <StudentAvatars className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}