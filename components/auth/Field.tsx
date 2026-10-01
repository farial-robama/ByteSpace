import { InputHTMLAttributes } from "react";

type Props = { label: string; id: string } & InputHTMLAttributes<HTMLInputElement>;

export function Field({ label, id, ...props }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-normal leading-5 text-zinc-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="h-[50px] w-full rounded-[12px] border border-zinc-200 bg-zinc-50 px-6 text-base text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}