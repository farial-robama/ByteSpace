"use client";

import Link from "next/link";
import { Field } from "./Field";

export function SignupForm() {
  return (
    <>
      <p className="text-base leading-6 text-brand">Create an Account</p>
      <h1 className="mt-1 font-[family-name:var(--font-poppins)] text-5xl font-semibold leading-[54px]">
        Welcome to
        <br />
        ByteSpace
      </h1>

      <form className="mt-[34px] space-y-[22px]" onSubmit={(e) => e.preventDefault()}>
        <Field id="name" label="Full Name" type="text" placeholder="Jamie Davis" autoComplete="name" />
        <Field id="email" label="Email" type="email" placeholder="designer@example.com" autoComplete="email" />
        <Field id="password" label="Password" type="password" placeholder="********" minLength={8} autoComplete="new-password" />
        <div className="flex justify-end pt-[5px]">
          <button
            type="submit"
            className="h-[45px] rounded-full bg-lime px-[26px] text-base font-medium text-black transition hover:brightness-95"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="mt-auto text-center text-[15px] leading-5 text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="text-brand hover:underline">Login</Link>
      </p>
    </>
  );
}