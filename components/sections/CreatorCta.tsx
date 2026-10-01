import Image from "next/image";

const LIME = "#C6FF00";
const S = "/images/shapes";

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

export function CreatorCta() {
  return (
    <section className="relative h-[490px] overflow-hidden bg-[#0435E6] font-[family-name:var(--font-poppins)] text-white">
      <div className="absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2">
        {/* grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
            backgroundSize: "79px 79px",
            backgroundPosition: "42px 41px",
          }}
        />

        {/* shapes */}
        <Deco src="lime-squiggle.png"     w={267} h={387} className="left-0 top-[-165px]" />
        <Deco src="white-squiggle-sm.png" w={176} h={176} className="left-[172px] top-[-4px]" />
        <Deco src="white-cone.png"        w={189} h={189} className="-scale-x-100 left-[-40px] top-[215px]" />
        <Deco src="lime-torus.png"        w={346} h={190} className="left-[21px] top-[300px]" />
        <Deco src="lime-squiggle.png"     w={267} h={387} className="left-[1197px] top-[227px] rotate-90 scale-[0.72]" />

        <div
          className="absolute left-[1106px] top-[44px] h-[120px] w-[128px] drop-shadow-[0_10px_12px_rgba(0,0,0,0.2)]"
          style={{ background: "linear-gradient(135deg,#d8ff2a 30%,#a8e000)", clipPath: "polygon(8% 0, 100% 72%, 0 100%)" }}
        />
        <div
          className="absolute left-[1275px] top-[55px] h-[285px] w-[175px] -rotate-[12deg] rounded-[70px/34px] shadow-[inset_-14px_-10px_24px_rgba(0,0,0,0.12)]"
          style={{ background: "linear-gradient(135deg,#fff 50%,#dfe3ee)" }}
        />

        {/* copy */}
        <h2 className="absolute inset-x-0 top-[85px] text-center text-[40px] font-semibold leading-[52px]">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>
        <p className="absolute inset-x-0 top-[231px] whitespace-nowrap text-center text-[16px] font-light leading-[30px] text-white/95">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a<br />
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your<br />
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button
          className="absolute left-1/2 top-[360px] h-[45px] w-[172px] -translate-x-1/2 rounded-full text-[16px] font-medium text-[#0a1a6b]"
          style={{ background: LIME }}
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}