import Image from "next/image";
import Link from "next/link";
import { AuthPreview } from "./AuthPreview";

type Props = {
  heading: string;
  lines?: string[];
  text?: string; 
  children: React.ReactNode;
};

export function AuthShell({ heading, lines, text, children }: Props) {
  const rows = lines ?? (text ? [text] : []);

  return (
    <main className="relative h-[1020px] min-h-screen overflow-hidden bg-brand font-[family-name:var(--font-outfit)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[3120px] -translate-x-1/2"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="absolute left-1/2 top-0 h-[1020px] w-[1440px] -translate-x-1/2">
        <Link href="/" aria-label="ByteSpace home" className="absolute left-[123px] top-[30px] z-10">
          <Image src="/images/logo-mark.png" alt="" aria-hidden width={29} height={32} priority />
        </Link>

        <h2 className="absolute left-[123px] top-[113px] font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[28px]">
          {heading}
        </h2>

        <p className="absolute left-[123px] top-[155px] whitespace-nowrap text-[16px] leading-[29.5px]">
          {rows.map((l, i) => (
            <span key={i} className="block">{l}</span>
          ))}
        </p>

        <AuthPreview />

        {/* form card */}
        <div className="absolute left-[741px] top-[116px] flex h-[784px] w-[579px] flex-col rounded-[30px] bg-white px-[63px] pb-[48px] pt-16 text-black">
          {children}
        </div>
      </div>
    </main>
  );
}