import Image from "next/image";
import { categories, courses } from "@/lib/data";
import { Container, SectionHeading, Stars } from "../ui";
import { Avatars } from "../shared";

export function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-2.5">
      <div className="relative h-36 overflow-hidden rounded-xl">
        <Image src={course.image} alt={course.title} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex gap-1 text-[9px]">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((t) => <span key={t} className="rounded-full bg-white/60 px-2 py-0.5 backdrop-blur">{t}</span>)}
        </div>
      </div>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2"><h3 className="text-sm font-semibold">{course.title}</h3><Stars value={course.rating} /></div>
        <p className="text-[10px] text-zinc-500">by {course.author}</p>
        <div className="mt-2 flex items-center gap-2 text-[10px]"><span className="rounded-full bg-zinc-100 px-2 py-1">{course.level}</span><Avatars label="26+" /></div>
        <p className="mt-2 text-sm font-semibold text-brand">${course.price}<span className="text-[10px] font-normal text-zinc-500">/lifetime</span></p>
      </div>
    </article>
  );
}

export function Courses() {
  return (
    <section id="courses" className="py-16">
      <Container>
        <SectionHeading title="Discover Your Passion, Build Your Skills" text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life." />
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-[11px]">
          {categories.map((c, i) => <button key={c} className={`rounded-full px-3 py-1.5 ${i === 0 ? "bg-lime font-medium" : "bg-zinc-100"}`}>{c}</button>)}
          <span className="px-2 py-1.5 text-brand">+ More</span>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{courses.map((c) => <CourseCard key={c.title} course={c} />)}</div>
      </Container>
    </section>
  );
}