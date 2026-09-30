import Image from "next/image";
import { courses } from "@/lib/data";
import { Container } from "../ui";
import { Shape, FloatCard, HappyStudents, Feature } from "../shared";

export function Growth() {
  const c = courses[0];
  return (
    <section className="relative space-y-20 overflow-hidden bg-white py-16">
      <div aria-hidden className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-lime/40 blur-3xl" />
      <div aria-hidden className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
      <div aria-hidden className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      <Container className="relative">
        <Feature
          title="Your Path to Professional Growth Starts Here!"
          text="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          visual={<>
            <Image src="/images/hero.png" alt="Student learning with a laptop" width={520} height={490} className="absolute bottom-0 right-0 h-auto w-72 drop-shadow-2xl" />
            <div className="absolute left-0 top-4 w-48 rounded-2xl bg-white p-2 shadow-xl">
              <div className="relative h-24 overflow-hidden rounded-xl"><Image src={c.image} alt="" fill sizes="200px" className="object-cover" /></div>
              <p className="mt-2 text-[11px] font-semibold">{c.title}</p>
              <p className="text-[9px] text-zinc-500">by {c.author}</p>
              <div className="mt-1 flex items-center justify-between text-[9px]"><span className="rounded-full bg-zinc-100 px-2 py-0.5">{c.level}</span><b className="text-brand">${c.price}</b></div>
            </div>
            <FloatCard className="bottom-14 right-2 w-40 bg-white text-black"><div className="text-[9px] text-zinc-500">Learning Progress</div><div className="text-2xl font-semibold">55%</div><div className="mt-1 h-1.5 rounded-full bg-zinc-200"><div className="h-full w-[55%] rounded-full bg-lime" /></div></FloatCard>
          </>}
        >
          <dl className="mt-6 flex gap-8 text-brand">
            {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => <div key={l}><dt className="text-xl font-semibold">{n}</dt><dd className="text-[10px] text-zinc-600">{l}</dd></div>)}
          </dl>
        </Feature>
      </Container>
      <Container id="creators" className="relative">
        <Feature
          reverse
          title="Create & Manage Courses Easily."
          text="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
          items={["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"]}
          visual={<>
            <Shape className="left-2 top-24 z-0 block h-14 w-28 -rotate-[20deg] rounded-full bg-lime" />
            <Image src="/images/create-and-manage-course-easily.png" alt="Creator holding a tablet" width={500} height={500} className="absolute bottom-0 left-1/2 h-auto w-72 -translate-x-1/2" />
            <FloatCard className="left-0 top-4 bg-brand text-white"><div className="text-[9px] text-white/80">Total Revenue</div><div className="text-lg font-semibold">$120.29</div></FloatCard>
            <FloatCard className="left-0 top-24 bg-brand text-white"><div className="text-[9px] text-white/80">Year to Date</div><div className="text-lg font-semibold">$1,200.38</div></FloatCard>
            <HappyStudents className="bottom-6 right-0" />
          </>}
        />
      </Container>
    </section>
  );
}