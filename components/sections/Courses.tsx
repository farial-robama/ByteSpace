import Image from "next/image";
import { Star } from "lucide-react";

import { courses } from "@/lib/data";
import { StudentAvatars } from "@/components/shared/StudentAvatars";

const LIME = "#C6FF00";

const chipRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

function LevelBadge({ level }: { level: string }) {
  return (
    <span className="flex h-[28px] items-center gap-[7px] rounded-full bg-zinc-100 px-[12px] text-[12px] text-zinc-600">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="#71717a"
        aria-hidden="true"
      >
        <rect x="0" y="7" width="3" height="5" rx="1" />
        <rect x="4.5" y="4" width="3" height="8" rx="1" />
        <rect x="9" y="0" width="3" height="12" rx="1" opacity=".35" />
      </svg>

      {level}
    </span>
  );
}

function CourseMeta({
  lessons,
  duration,
  comments,
}: {
  lessons: number;
  duration: string;
  comments: number;
}) {
  const items = [
    `${lessons} Lessons`,
    duration,
    `${comments} Comments`,
  ];

  return (
    <div className="absolute bottom-[16px] left-[14px] flex gap-[14px]">
      {items.map((item) => (
        <span
          key={item}
          className="h-[26px] whitespace-nowrap rounded-full bg-white/60 px-[11px] text-[12px] leading-[26px] text-zinc-600 backdrop-blur-md"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function CourseCard({
  course,
}: {
  course: (typeof courses)[number];
}) {
  return (
    <article className="h-[384px] rounded-[26px] border border-zinc-200 bg-white p-[15px]">
      {/* Image */}
      <div className="relative h-[197px] overflow-hidden rounded-[18px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="360px"
          className="object-cover"
        />

        <CourseMeta
          lessons={course.lessons}
          duration={course.duration}
          comments={course.comments}
        />
      </div>

      {/* Title + Rating */}
      <div className="mt-[19px] flex h-[28px] items-center justify-between gap-2 px-[2px]">
        <h3 className="min-w-0 flex-1 truncate text-[20px] font-semibold text-[#0a0a2a]">
          {course.title}
        </h3>

        <span className="flex shrink-0 items-center gap-1.5 text-[14px] text-zinc-500">
          {course.rating}

          <Star
            className="h-[16px] w-[16px] fill-zinc-300 text-zinc-300"
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Author */}
      <p className="h-[18px] px-[2px] text-[12px] leading-[18px] text-zinc-500">
        by{" "}
        <span className="text-[#0435E6]">
          {course.author}
        </span>
      </p>

      {/* Level + Student Avatars */}
      <div className="mt-[17px] flex h-[28px] items-center gap-[13px] px-[2px]">
        <LevelBadge level={course.level} />

        <StudentAvatars
          label="26+"
          className="scale-[0.9] origin-left"
        />
      </div>

      {/* Price */}
      <p className="mt-[16px] h-[26px] px-[2px] text-[18px] font-semibold leading-[26px] text-[#0435E6]">
        ${course.price}

        <span className="text-[12px] font-normal text-zinc-500">
          /lifetime
        </span>
      </p>
    </article>
  );
}

export function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-white pb-[70px] pt-[42px] font-[family-name:var(--font-body,var(--font-poppins))]"
    >
      <div className="relative left-1/2 w-[1200px] -translate-x-1/2">
        {/* Heading */}
        <h2 className="text-center text-[40px] font-semibold leading-[54px] text-[#0a0a2a]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="mx-auto mt-[16px] text-center text-[16px] font-light leading-[29px] text-zinc-400">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different
          <br />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>

        {/* Category Chips */}
        <div className="mt-[43px] flex flex-col items-center gap-[22px]">
          {chipRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center gap-[16px]"
            >
              {row.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`h-[42px] whitespace-nowrap rounded-full px-[20px] text-[15px] ${
                    category === "Featured"
                      ? "font-medium text-[#0a0a2a]"
                      : "bg-zinc-100 text-zinc-600"
                  }`}
                  style={
                    category === "Featured"
                      ? { background: LIME }
                      : undefined
                  }
                >
                  {category}
                </button>
              ))}

              {rowIndex === 2 && (
                <span className="px-1 text-[15px] text-[#0435E6]">
                  + More
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Course Cards */}
        <div className="mt-[79px] grid grid-cols-3 gap-x-[40px] gap-y-[40px]">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}