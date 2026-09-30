import Image from "next/image";

const STUDENTS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/student${n}.png`);

export function StudentAvatars({ label = "2K+", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex -space-x-2">
        {STUDENTS.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-full object-cover ring-2 ring-white"
          />
        ))}
      </div>
      <span className="-ml-2 grid h-[36px] w-[36px] place-items-center rounded-full bg-[#454E3B] text-[11px] font-semibold text-white">
        {label}
      </span>
    </div>
  );
}