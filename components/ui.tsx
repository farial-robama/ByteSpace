"use client";

import { ReactNode } from "react";
import { Star, Search, Check } from "lucide-react";

export const Container = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <div id={id} className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>
);

export const Logo = ({ dark = false }: { dark?: boolean }) => (
  <span className={`flex items-center gap-2 text-lg font-semibold ${dark ? "text-black" : "text-white"}`}>
    <span className="grid h-6 w-6 place-items-center rounded-md bg-lime font-bold text-black">b</span>
    ByteSpace
  </span>
);

export const LimeButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <button className={`rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}>{children}</button>
);

export const SearchBar = () => (
  <form className="mx-auto flex w-full max-w-xl items-center gap-3" onSubmit={(e) => e.preventDefault()}>
    <label className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-3 text-sm text-zinc-500">
      <Search size={16} aria-hidden />
      <input className="w-full bg-transparent outline-none" placeholder="Course, topic, creator" aria-label="Search courses" />
    </label>
    <LimeButton>Search</LimeButton>
  </form>
);

export const SectionHeading = ({ title, text }: { title: string; text: string }) => (
  <div className="mx-auto max-w-xl text-center">
    <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
    <p className="mt-3 text-xs leading-relaxed text-zinc-500">{text}</p>
  </div>
);

export const Checklist = ({ items }: { items: string[] }) => (
  <ul className="mt-5 space-y-2 text-xs">
    {items.map((i) => (
      <li key={i} className="flex items-center gap-2">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-brand text-white"><Check size={10} /></span>{i}
      </li>
    ))}
  </ul>
);

export const Stars = ({ value }: { value: number }) => (
  <span className="flex items-center gap-1 text-xs text-zinc-500">{value}<Star size={12} className="fill-zinc-300 text-zinc-300" /></span>
);