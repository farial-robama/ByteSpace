"use client";

import Link from "next/link";
import { Field } from "./Field";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
    <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden>
    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
  </svg>
);


export function LoginForm() {
  return (
    <>
      <p className="text-base leading-6 text-brand">Sign In</p>
      <h1 className="mt-1 font-[family-name:var(--font-poppins)] text-5xl font-semibold leading-[54px]">
        Welcome Back
      </h1>

      <form className="mt-8 space-y-[22px]" onSubmit={(e) => e.preventDefault()}>
        <Field id="email" label="Email" type="email" placeholder="designer@example.com" autoComplete="email" />
        <Field id="password" label="Password" type="password" placeholder="********" autoComplete="current-password" />
        <div className="flex justify-end pt-2">
          <button type="submit" className="h-[46px] rounded-full bg-lime px-6 text-base font-medium text-black transition hover:brightness-95">
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-20 flex items-center gap-3 text-sm text-zinc-500">
        <span className="h-px flex-1 bg-zinc-300" />or<span className="h-px flex-1 bg-zinc-300" />
      </div>

      <div className="mt-9 flex justify-center gap-3.5">
        <button type="button" aria-label="Continue with Facebook" className="grid h-[66px] w-[72px] place-items-center rounded-[14px] border border-zinc-200 hover:bg-zinc-50">
          <FacebookIcon />
        </button>
        <button type="button" aria-label="Continue with Google" className="grid h-[66px] w-[72px] place-items-center rounded-[14px] border border-zinc-200 hover:bg-zinc-50">
          <GoogleIcon />
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-zinc-500 xl:mt-auto">
        New user?{" "}
        <Link href="/signup" className="text-brand hover:underline">Create an account</Link>
      </p>
    </>
  );
}