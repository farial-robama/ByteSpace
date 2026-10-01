import Image from "next/image";

import { courses } from "@/lib/data";

import { StudentAvatars } from "../shared/StudentAvatars";

const SHADOW = "shadow-[0_8px_28px_rgba(20,30,80,0.10)]";

function Glow({
  cx,
  cy,
  r,
  color,
}: {
  cx: number;
  cy: number;
  r: number;
  color: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        left: cx - r,
        top: cy - r,
        width: r * 2,
        height: r * 2,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}

const Check = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 20 20"
    aria-hidden
    className="shrink-0"
  >
    <circle cx="10" cy="10" r="10" className="fill-brand" />
    <path
      d="M5.5 10.2l3 3 6-6.4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const BarsIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden
  >
    <rect x="1" y="7" width="3" height="6" rx="1" />
    <rect x="5.5" y="4" width="3" height="9" rx="1" />
    <rect x="10" y="1" width="3" height="12" rx="1" opacity=".4" />
  </svg>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="h-[22px] whitespace-nowrap rounded-full bg-white/60 px-2.5 text-[11px] leading-[22px] text-zinc-600 backdrop-blur-sm">
    {children}
  </span>
);

const Heading = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <h2
    className={`absolute font-[family-name:var(--font-poppins)] text-[38px] font-semibold leading-[47px] text-zinc-900 ${className}`}
  >
    {children}
  </h2>
);

export function Growth() {
  const c = courses[0];

  return (
    <section className="relative h-[1242px] overflow-hidden bg-white font-[family-name:var(--font-outfit)]">

      <div className="absolute left-1/2 top-0 h-full w-[1230px] -translate-x-1/2">

        <Glow
          cx={400}
          cy={30}
          r={280}
          color="rgba(198,255,0,0.38)"
        />

        <Glow
          cx={1250}
          cy={250}
          r={360}
          color="rgba(120,140,255,0.22)"
        />

        <Glow
          cx={-10}
          cy={600}
          r={220}
          color="rgba(120,140,255,0.20)"
        />

        <Glow
          cx={60}
          cy={1060}
          r={280}
          color="rgba(198,255,0,0.50)"
        />

        <Glow
          cx={1140}
          cy={1190}
          r={270}
          color="rgba(110,130,250,0.38)"
        />

        {/* =================== ROW 1 =================== */}

        <Heading className="left-[100px] top-[162px]">
          Your Path to Professional
          <br />
          Growth Starts Here!
        </Heading>

        <p className="absolute left-[100px] top-[288px] whitespace-nowrap text-[14px] font-light leading-[25.5px] text-zinc-500">
          Explore our curated selection of courses tailored to enhance
          <br />
          your capabilities and accelerate your career journey.
          <br />
          Whether you are looking to sharpen specific skills, gain
          <br />
          industry expertise, or embark on a new career path entirely,
          <br />
          we have the resources you need.
        </p>

        {[
          ["12K", "Students", 100],
          ["70+", "Courses", 207],
          ["16", "Creators", 310],
        ].map(([n, l, x]) => (
          <div
            key={l as string}
            className="absolute top-[451px]"
            style={{ left: x as number }}
          >
            <div className="font-[family-name:var(--font-poppins)] text-[28px] font-medium leading-[32px] text-brand">
              {n}
            </div>

            <div className="mt-[4px] text-[14px] font-light leading-5 text-zinc-500">
              {l}
            </div>
          </div>
        ))}

        {/* =================== ROW 1 CLUSTER =================== */}

        <div className="absolute left-[646px] top-[101px] h-[340px] w-[490px] font-[family-name:var(--font-poppins)]">
          {/* course card */}

          <div
            className={`absolute left-0 top-0 z-10 h-[327px] w-[312px] rounded-[20px] bg-white p-[14px] ${SHADOW}`}
          >
            <div className="relative h-[163px] overflow-hidden rounded-[12px]">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="285px"
                className="object-cover"
              />

              <div className="absolute bottom-[10px] left-[10px] flex gap-[14px]">
                <Pill>{c.lessons} Lessons</Pill>
                <Pill>{c.duration}</Pill>
              </div>
            </div>

            <p className="mt-[17px] h-[28px] text-[19px] font-semibold leading-[28px] text-zinc-900">
              {c.title}
            </p>

            <p className="h-[16px] text-[11px] leading-4 text-zinc-500">
              by <span className="text-brand">{c.author}</span>
            </p>

            <div className="mt-[16px] flex h-[28px] items-center">
              <span className="inline-flex h-[28px] items-center gap-[6px] rounded-full bg-zinc-100 px-[10px] text-[11px] text-zinc-600">
                <BarsIcon />
                {c.level}
              </span>

              <span className="ml-[10px]">
                <StudentAvatars />
              </span>
            </div>

            <p className="mt-[7px] text-[20px] font-semibold leading-[28px] text-brand">
              ${c.price}
              <span className="text-[11px] font-normal text-zinc-500">
                /lifetime
              </span>
            </p>
          </div>

          {/* student */}

          <Image
            src="/images/hero.png"
            alt="Student learning with a laptop"
            width={520}
            height={490}
            className="absolute right-[5px] top-[37px] z-20 h-[425px] w-auto drop-shadow-2xl"
          />

          {/* learning progress */}

          <div
            className={`absolute left-[296px] top-[184px] z-30 h-[114px] w-[196px] rounded-[14px] bg-white px-3 pt-[13px] ${SHADOW}`}
          >
            <p className="text-[13px] leading-5 text-zinc-700">
              Learning Progress
            </p>

            <p className="mt-[5px] text-[38px] font-semibold leading-[44px] text-zinc-900">
              55%
            </p>

            <div className="absolute inset-x-3 top-[93px] h-[7px] rounded-full bg-zinc-200">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>

          {/* coil */}

          <Image
            src="/images/shapes/coil-tall.png"
            alt=""
            aria-hidden
            width={184}
            height={183}
            className="pointer-events-none absolute left-[343px] top-[58px] z-40 max-w-none select-none"
          />
        </div>

        {/* =================== ROW 2 =================== */}

        <div
          id="creators"
          className="absolute left-[100px] top-[665px] h-[480px] w-[470px] font-[family-name:var(--font-poppins)]"
        >
          {/* creator */}

          <Image
            src="/images/create-and-manage-course-easily.png"
            alt="Creator holding a tablet"
            width={500}
            height={500}
            className="absolute left-[51px] top-0 z-10 h-[466px] w-auto"
          />

          {/* total revenue */}

          <div className="absolute left-0 top-[7px] z-20 h-[98px] w-[180px] rounded-[10px] bg-brand px-[14px] pt-[14px] text-white">
            <p className="text-[12px] leading-4">
              Total Revenue
            </p>

            <p className="text-[9px] leading-[14px] text-white/70">
              July 1-25
            </p>

            <p className="mt-[2px] text-[18px] font-semibold leading-6">
              $120.29
            </p>

            <div className="mt-[8px] h-[6px] rounded-full bg-white/25">
              <div className="h-full w-[61%] rounded-full bg-lime" />
            </div>
          </div>

          {/* year to date */}

          <div className="absolute left-0 top-[135px] z-20 h-[116px] w-[114px] rounded-[10px] bg-brand px-[14px] pt-[14px] text-white">
            <p className="text-[12px] leading-4">
              Year to Date
            </p>

            <p className="text-[9px] leading-[14px] text-white/70">
              2023
            </p>

            <p className="mt-[2px] text-[17px] font-semibold leading-6">
              $1,200.38
            </p>

            <span className="mt-[8px] inline-block h-[19px] rounded-full bg-lime px-2 text-[10px] font-medium leading-[19px] text-black">
              +125
            </span>
          </div>

          {/* coil */}

          <Image
            src="/images/shapes/coil-knob.png"
            alt=""
            aria-hidden
            width={184}
            height={183}
            className="pointer-events-none absolute left-[310px] top-[65px] z-30 max-w-none select-none"
          />

          {/* happy students */}

          <div
            className={`absolute left-[241px] top-[324px] z-30 h-[105px] w-[222px] rounded-[14px] bg-white px-3.5 pt-[12px] ${SHADOW}`}
          >
            <p className="text-[13px] font-medium leading-5 text-zinc-900">
              Happy Students
            </p>

            <p className="text-[10px] leading-4 text-zinc-600">
              4.5{" "}
              <span className="text-zinc-400">(240)</span>{" "}
              <span className="text-yellow-400">★</span>
            </p>

            <StudentAvatars className="mt-[6px]" />
          </div>
        </div>

        {/* =================== ROW 2 CONTENT =================== */}

        <Heading className="left-[630px] top-[724px]">
          Create &amp; Manage
          <br />
          Courses Easily.
        </Heading>

        <p className="absolute left-[630px] top-[846px] whitespace-nowrap text-[14px] font-light leading-[26px] text-zinc-500">
          <b className="font-semibold text-brand">ByteSpace</b>{" "}
          supports individuals or entities in the creation, publication,
          <br />
          and administration of educational courses.
        </p>

        <ul className="absolute left-[632px] top-[936px]">
          {[
            "Share Your Expertise",
            "Monetize Your Passion",
            "Flexibility and Autonomy",
            "Build a Community",
          ].map((text, index) => (
            <li
              key={text}
              className="absolute left-0 flex h-[24px] items-center gap-[7px] whitespace-nowrap text-[15px] text-zinc-800"
              style={{ top: index * 33 }}
            >
              <Check />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}