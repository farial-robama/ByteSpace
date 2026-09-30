"use client";

import { footerLinks } from "@/lib/data";
import { Container, Logo, LimeButton } from "../ui";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white pt-10 text-xs">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Logo dark /><p className="mt-3 text-[11px] text-zinc-600">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email" className="flex-1 rounded-full border border-zinc-300 px-4 py-2.5 outline-none focus:border-brand" />
              <LimeButton>Search</LimeButton>
            </form>
            <p className="mt-3 max-w-xs text-[10px] text-zinc-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {footerLinks.map((col, i) => <ul key={i} className="space-y-3">{col.map((l) => <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>)}</ul>)}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-zinc-200 py-5 text-[10px] text-zinc-600">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <span className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span>
        </div>
      </Container>
    </footer>
  );
}