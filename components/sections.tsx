import { Brush, Code2, Laptop, Building2, Megaphone, Camera, LucideIcon } from "lucide-react";
import { categories, courses, paths, testimonials, footerLinks } from "@/lib/data";
import { Container, Logo, LimeButton, SearchBar, SectionHeading, Checklist, Stars } from "./ui";

const icons: LucideIcon[] = [Brush, Code2, Laptop, Building2, Megaphone, Camera];

export function Navbar() {
  return (
    <header className="relative z-10">
      <Container className="flex items-center justify-between py-5 text-sm text-white">
        <Logo />
        <nav aria-label="Main" className="hidden gap-8 md:flex">
          <a href="#" className="font-medium">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a>
        </nav>
        <div className="flex gap-5"><a href="/login">Sign In</a><a href="/signup">Join Us</a></div>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-center text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      <Navbar />
      <Container className="relative pt-10">
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Get Access to Hundreds Courses Available</h1>
        <p className="mx-auto mt-5 max-w-lg text-xs text-white/90 md:text-sm">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <div className="mt-8"><SearchBar /></div>
        <div className="relative mx-auto mt-12 h-72 w-full max-w-md">
          <div className="absolute bottom-[-40%] left-1/2 h-[120%] w-[120%] -translate-x-1/2 rounded-full bg-lime" />
          <div className="absolute bottom-0 left-1/2 h-64 w-48 -translate-x-1/2 rounded-t-full bg-zinc-800/80" aria-label="Student illustration placeholder" />
          <div className="absolute left-0 top-6 rounded-lg bg-white p-3 text-left text-xs text-black shadow">UI/UX Design<br /><span className="text-zinc-500">200 Courses · 1000+ Students</span></div>
          <div className="absolute right-0 top-14 w-40 rounded-lg bg-white p-3 text-left text-xs text-black shadow">Learning Progress<div className="text-3xl font-semibold">55%</div><div className="mt-1 h-1.5 rounded-full bg-zinc-200"><div className="h-full w-1/2 rounded-full bg-lime" /></div></div>
        </div>
      </Container>
    </section>
  );
}

export function LogoStrip() {
  return (
    <section className="bg-zinc-100 py-8">
      <Container className="flex flex-wrap justify-between gap-4 text-sm font-medium text-zinc-400">
        {Array.from({ length: 5 }, (_, i) => <span key={i}>Logoipsum</span>)}
      </Container>
    </section>
  );
}

export function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-2.5">
      <div className={`flex h-36 items-end rounded-xl bg-gradient-to-br ${course.tone} p-2`}>
        <div className="flex gap-1 text-[10px]">{[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((t) => <span key={t} className="rounded-full bg-white/70 px-2 py-0.5">{t}</span>)}</div>
      </div>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2"><h3 className="text-sm font-semibold">{course.title}</h3><Stars value={course.rating} /></div>
        <p className="text-[10px] text-zinc-500">by {course.author}</p>
        <div className="mt-2 flex items-center gap-2 text-[10px]"><span className="rounded-full bg-zinc-100 px-2 py-1">{course.level}</span><span className="rounded-full bg-lime px-2 py-1">26+</span></div>
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

export function LearningPaths() {
  return (
    <section className="pb-16">
      <Container>
        <SectionHeading title="Explore Diverse Learning Paths at Bytespace" text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone." />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((p, i) => { const Icon = icons[i]; return (
            <a key={p} href="#" className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 p-4 text-xs font-medium hover:border-brand">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-lime"><Icon size={16} /></span>{p}
            </a>); })}
        </div>
      </Container>
    </section>
  );
}

export function Feature({ title, text, items, reverse = false, children }: { title: string; text: React.ReactNode; items?: string[]; reverse?: boolean; children?: React.ReactNode }) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-600">{text}</p>
        {children}
        {items && <Checklist items={items} />}
      </div>
      <div className="mx-auto h-64 w-full max-w-sm rounded-3xl bg-gradient-to-br from-lime/40 to-indigo-200/60" aria-label="Illustration placeholder" />
    </div>
  );
}

export function Growth() {
  return (
    <section className="space-y-20 bg-gradient-to-b from-lime/20 via-white to-indigo-50 py-16">
      <Container>
        <Feature title="Your Path to Professional Growth Starts Here!" text="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.">
          <dl className="mt-6 flex gap-8 text-brand">
            {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => <div key={l}><dt className="text-xl font-semibold">{n}</dt><dd className="text-[10px] text-zinc-600">{l}</dd></div>)}
          </dl>
        </Feature>
      </Container>
      <Container id="creators">
        <Feature reverse title="Create & Manage Courses Easily." text="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses." items={["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"]} />
      </Container>
    </section>
  );
}

export function CreatorCta() {
  return (
    <section className="bg-brand py-16 text-center text-white">
      <Container>
        <h2 className="text-2xl font-semibold">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-white/90">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <LimeButton className="mt-6">Join as Creator</LimeButton>
      </Container>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-lime/30 py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="max-w-xs text-3xl font-semibold leading-tight">Discover What Our Community Is Saying</h2>
          <p className="text-xs leading-relaxed text-zinc-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-zinc-300" aria-hidden />
              <figcaption className="mt-3 text-sm font-semibold">{t.name}<div className="text-xs font-normal text-brand">{t.role}</div></figcaption>
              <blockquote className="mt-3 text-xs leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

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