"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex h-[114px] items-center justify-between px-[120px] text-white">
      <a href="/" className="flex items-center gap-[10px]">
        <Image
          src="/images/logo-mark.png"
          alt=""
          aria-hidden
          width={24}
          height={30}
          priority
        />
        <span className="text-[25px] font-bold tracking-tight">ByteSpace</span>
      </a>

      <nav aria-label="Main" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[30px] text-[14px]">
        <a href="#" className="text-[15px] font-medium">Home</a>
        <a href="#courses" className="text-white/90">Courses</a>
        <a href="#creators" className="text-white/90">Creators</a>
      </nav>

      <div className="flex items-center gap-[22px] text-[14px] text-white/90">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
      </div>
    </header>
  );
}