import Link from "next/link";
import { AuthPreview } from "./AuthPreview";

type Props = { heading: string; text: string; children: React.ReactNode };

// Placeholder mark: export the real logo as SVG from Figma and drop it in here.
const Logo = () => (
  <svg viewBox="0 0 26 34" width="26" height="34" aria-hidden className="fill-lime">
    <path d="M2 4a4 4 0 0 1 4-4 4 4 0 0 1 4 4v9.6l10.4 6a4 4 0 0 1 0 6.9L8 33.4A4 4 0 0 1 2 30z" />
  </svg>
);

export function AuthShell({ heading, text, children }: Props) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand font-[family-name:var(--font-outfit)] text-white">
      {/* 120px Figma grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 xl:px-16 xl:py-[120px] min-[1440px]:px-[120px]">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="absolute left-5 top-6 xl:left-16 xl:top-[37px] min-[1440px]:left-[120px]"
        >
          <Logo />
        </Link>

        <div className="grid gap-10 xl:grid-cols-[1fr_579px] xl:gap-0">
          <div className="pt-10 xl:pt-0">
            <h2 className="font-[family-name:var(--font-poppins)] text-xl font-semibold leading-7">
              {heading}
            </h2>
            <p className="mt-3 max-w-[480px] text-base leading-7 text-white">{text}</p>
            <AuthPreview />
          </div>

          <div className="flex justify-center xl:justify-end">
            <div className="flex w-full max-w-[579px] flex-col rounded-[30px] bg-white px-8 pb-10 pt-10 text-black sm:px-12 xl:h-[784px] xl:px-16 xl:pb-[52px] xl:pt-16">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}