import Image from "next/image";
import { Search } from "lucide-react";

import { Navbar } from "./Navbar";
import { FloatCard, HappyStudents } from "../shared";

const LIME = "#C6FF00";

const S = "/images/shapes";

/* =========================================================
   REUSABLE DECORATIVE IMAGE
   ========================================================= */

function Deco({
  src,
  w,
  h,
  className = "",
}: {
  src: string;
  w: number;
  h: number;
  className?: string;
}) {
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

/* =========================================================
   HERO
   ========================================================= */

export function Hero() {
  return (
    <section className="relative h-[1014px] overflow-hidden bg-[#0435E6] font-[family-name:var(--font-poppins)] text-white">
      {/* =====================================================
          1440px DESIGN STAGE
          ===================================================== */}

      <div className="absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2">
        {/* ===================================================
            GRID
            =================================================== */}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
          }}
        />

        {/* ===================================================
            LARGE LIME CIRCLE
            =================================================== */}

        <div
          className="absolute left-1/2 top-[581px] h-[1112px] w-[1112px] -translate-x-1/2 rounded-full"
          style={{ background: LIME }}
        />

        {/* ===================================================
            DECORATIVE SHAPES
            Image assets include their own shading
            =================================================== */}

        <Deco
          src="lime-squiggle.png"
          w={267}
          h={387}
          className="left-0 top-[221px]"
        />

        <Deco
          src="white-squiggle-sm.png"
          w={176}
          h={176}
          className="left-[176px] top-[475px]"
        />

        <Deco
          src="white-torus.png"
          w={346}
          h={343}
          className="left-[17px] top-[676px]"
        />

        <Deco
          src="white-cone.png"
          w={189}
          h={189}
          className="left-[1098px] top-[464px]"
        />

        <Deco
          src="white-squiggle-lg.png"
          w={317}
          h={332}
          className="left-[1108px] top-[638px] scale-[0.85]"
        />

        <Deco
          src="lime-cylinder.png"
          w={213}
          h={372}
          className="left-[1227px] top-[268px]"
        />

        {/* ===================================================
            NAVBAR
            =================================================== */}

        <Navbar />

        {/* ===================================================
            HEADING
            =================================================== */}

        <h1 className="absolute inset-x-0 top-[166px] text-center text-[72px] font-semibold leading-[87px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* ===================================================
            DESCRIPTION
            =================================================== */}

        <p className="absolute inset-x-0 top-[372px] text-center text-[16px] text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* ===================================================
            SEARCH
            =================================================== */}

        <div className="absolute left-1/2 top-[458px] flex -translate-x-1/2 items-center gap-[18px]">
          <label className="flex h-[52px] w-[456px] items-center gap-3 rounded-full bg-white px-6 text-[15px] text-zinc-500">
            <Search className="h-5 w-5 shrink-0" />

            <input
              placeholder="Course, topic, creator"
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />
          </label>

          <button
            className="h-[50px] w-[104px] rounded-full text-[15px] font-medium text-[#0a1a6b]"
            style={{ background: LIME }}
          >
            Search
          </button>
        </div>

        {/* ===================================================
            STUDENT IMAGE
            =================================================== */}

        <Image
          src="/images/hero.png"
          alt="Smiling student with headset and laptop"
          width={520}
          height={490}
          priority
          className="absolute bottom-0 left-1/2 ml-[30px] h-auto w-[470px] -translate-x-1/2"
        />

        {/* ===================================================
            UI/UX FLOATING CARD
            =================================================== */}

        <FloatCard
          className="
            left-[404px]
            top-[634px]
            bg-white
            text-black
          "
        >
          <div className="text-[14px] font-medium">
            UI/UX Design
          </div>

          <div className="mt-0.5 text-[11px] text-zinc-500">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </div>
        </FloatCard>

        {/* ===================================================
            LEARNING PROGRESS CARD
            =================================================== */}

        <FloatCard
          className="
            right-[372px]
            top-[645px]
            h-[131px]
            w-[230px]
            bg-white
            p-4
            text-black
          "
        >
          <div className="text-[12px]">
            Learning Progress
          </div>

          <div className="mt-1 text-[40px] font-semibold leading-tight">
            55%
          </div>

          <div className="mt-2 h-[8px] rounded-full bg-zinc-200">
            <div
              className="h-full w-[55%] rounded-full"
              style={{ background: LIME }}
            />
          </div>
        </FloatCard>

        {/* ===================================================
            HAPPY STUDENTS
            =================================================== */}

        <HappyStudents
          className="
            bottom-[64px]
            left-[328px]
            w-[255px]
            rounded-xl
            bg-white
            px-4
            py-3
          "
        />
      </div>
    </section>
  );
}