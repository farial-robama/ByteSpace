"use client";

const LIME = "#C6FF00";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
const colX = [739, 947, 1155];

export function Footer() {
  return (
    <footer className="relative h-[520px] overflow-hidden border-t border-zinc-200 bg-white font-[family-name:var(--font-body,var(--font-poppins))] text-[#1a1a1a]">
      <div className="absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2">
        {/* logo */}
        <a href="/" className="absolute left-[120px] top-[70px] flex items-center gap-[9px]">
          <svg width="30" height="34" viewBox="0 0 30 34" fill="none">
            <rect x="0" y="0" width="10" height="34" rx="5" fill={LIME} />
            <circle cx="17" cy="21" r="13" fill={LIME} />
            <polygon points="14,15 14,27 23,21" fill="#1a1a1a" />
          </svg>
          <span className="text-[24px] font-bold tracking-tight">ByteSpace</span>
        </a>

        <p className="absolute left-[120px] top-[124px] text-[13px] font-light">
          Stay Up to date with our latest features and releases by joining our newsletter.
        </p>

        {/* newsletter */}
        <form className="absolute left-[120px] top-[191px] flex items-start gap-[25px]" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            aria-label="Email"
            placeholder="Enter your email"
            className="h-[51px] w-[376px] rounded-full border border-zinc-300 bg-white pl-[26px] text-[14px] outline-none placeholder:text-[#1a1a1a] focus:border-[#0435E6]"
          />
          <button className="h-[45px] w-[102px] rounded-full text-[17px] font-medium" style={{ background: LIME }}>
            Search
          </button>
        </form>

        <p className="absolute left-[120px] top-[264px] w-[470px] text-[11px] font-light leading-[21px]">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>

        {/* link columns */}
        {columns.map((col, i) => (
          <ul key={i} className="absolute top-[110px]" style={{ left: colX[i] }}>
            {col.map((l) => (
              <li key={l} className="h-[38.2px] text-[14px] font-light leading-[38.2px]">
                <a href="#" className="hover:text-[#0435E6]">{l}</a>
              </li>
            ))}
          </ul>
        ))}

        {/* bottom bar */}
        <div className="absolute left-[120px] top-[435px] h-px w-[1200px] bg-zinc-300" />
        <span className="absolute left-[120px] top-[458px] text-[12px] font-light leading-5">© 2023 ByteSpace. All rights reserved.</span>
        <div className="absolute right-[120px] top-[458px] flex gap-[22px] text-[12px] font-light leading-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}