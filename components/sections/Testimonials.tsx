import Image from "next/image";
import { testimonials } from "@/lib/data";

function Glow({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
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

const intro = [
  "At ByteSpace, our vibrant community of learners and creators is at the",
  "heart of what we do. Hear directly from those who have experienced the",
  "transformative journey of learning and creating on our platform. Explore",
  "testimonials that reflect the diverse perspectives of enthusiastic learners",
  "and accomplished creators.",
];

const cards = [
  {
    left: 122,
    height: 430,
    dy: 0,
    lines: [
      "\u201CByteSpace has transformed my",
      "approach to learning. The diverse range",
      "of courses and the quality of content",
      "provided by creators have exceeded my",
      "expectations. The platform truly fosters a",
      "sense of community and lifelong",
      "learning.\u201D",
    ],
  },
  {
    left: 535,
    height: 433,
    dy: 3,
    lines: [
      "\u201CI\u2019ve tried several online learning",
      "platforms, and ByteSpace stands out for",
      "its vibrant community and the variety of",
      "courses available. The easy navigation",
      "and engaging content make it a go-to",
      "platform for continuous skill",
      "development.\u201D",
    ],
  },
  {
    left: 949,
    height: 406,
    dy: 3,
    lines: [
      "\u201CAs a creator, ByteSpace has been a",
      "game-changer for me. The Course Editor",
      "is user-friendly, and the support from the",
      "community is incredible. It\u2019s fulfilling to",
      "see my courses making a positive impact",
      "on learners globally.\u201D",
    ],
  },
];

export function Testimonials() {
  return (
    <section className="relative h-[774px] overflow-hidden bg-white font-[family-name:var(--font-outfit)]">
      <div className="absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2">
        {/* glows */}
        <Glow cx={722} cy={215} r={190} color="rgba(198,255,0,0.42)" />
        <Glow cx={1440} cy={310} r={300} color="rgba(198,255,0,0.30)" />
        <Glow cx={45} cy={690} r={210} color="rgba(120,140,255,0.34)" />
        <Glow cx={1400} cy={720} r={260} color="rgba(198,255,0,0.12)" />

        {/* heading */}
        <h2 className="absolute left-[122px] top-[111px] font-[family-name:var(--font-poppins)] text-[40px] font-semibold leading-[54px] text-zinc-900">
          Discover What Our
          <br />
          Community Is Saying
        </h2>

        {/* intro */}
        <p className="absolute left-[739px] top-[71px] whitespace-nowrap text-[16px] font-light leading-[29px] text-zinc-600">
          {intro.map((l, i) => (
            <span key={i} className="block">{l}</span>
          ))}
        </p>

        {/* cards */}
        {cards.map((c, i) => {
          const t = testimonials[i];
          return (
            <figure
              key={t.name}
              className="absolute top-[290px] w-[372px] rounded-[22px] bg-white shadow-[0_4px_24px_rgba(20,30,80,0.06)]"
              style={{ left: c.left, height: c.height }}
            >
              <Image
                src={t.image}
                alt={t.name}
                width={79}
                height={79}
                className="absolute left-[24px] top-[23px] h-[79px] w-[79px] rounded-full object-cover"
              />

              <figcaption>
                <div
                  className="absolute left-[24px] font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[28px] text-zinc-900"
                  style={{ top: 124 + c.dy }}
                >
                  {t.name}
                </div>
                <div
                  className="absolute left-[24px] text-[16px] leading-[24px] text-brand"
                  style={{ top: 153 + c.dy }}
                >
                  {t.role}
                </div>
              </figcaption>

              <blockquote
                className="absolute left-[24px] whitespace-nowrap text-[15px] font-light leading-[29px] text-zinc-600"
                style={{ top: 204 + c.dy }}
              >
                {c.lines.map((l, j) => (
                  <span key={j} className="block">{l}</span>
                ))}
              </blockquote>
            </figure>
          );
        })}
      </div>
    </section>
  );
}