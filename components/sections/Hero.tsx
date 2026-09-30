import Image from "next/image";
import { Container, SearchBar } from "../ui";
import { GRID, Shape, tri, FloatCard, HappyStudents } from "../shared";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-center text-white">
      <div className={GRID} />
      <Shape className="-left-10 top-44 h-14 w-44 -rotate-[25deg] rounded-full bg-lime" />
      <Shape className="left-28 top-[17rem] h-9 w-20 rotate-[20deg] rounded-full bg-white" />
      <Shape className="bottom-8 left-8 h-36 w-36 rounded-full border-[30px] border-white" />
      <Shape className="-right-8 top-40 h-40 w-32 -rotate-[15deg] rounded-[2.5rem] bg-lime" />
      <Shape className={`right-[12%] top-[22rem] h-24 w-24 bg-white ${tri}`} />
      <Shape className="bottom-12 right-6 h-24 w-16 rotate-12 rounded-full bg-white" />
      <Navbar />
      <Container className="relative pt-8">
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Get Access to Hundreds Courses Available</h1>
        <p className="mx-auto mt-5 max-w-lg text-xs text-white/90 md:text-sm">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <div className="mt-8"><SearchBar /></div>
        <div className="relative mx-auto mt-10 h-[340px] max-w-3xl md:h-[400px]">
          <div className="absolute left-1/2 top-16 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-lime" />
          <Image src="/images/hero.png" alt="Smiling student with headset and laptop" width={520} height={490} priority className="absolute bottom-0 left-1/2 h-auto w-[280px] -translate-x-1/2 md:w-[340px]" />
          <FloatCard className="left-0 top-10 bg-white text-black md:left-[4%]"><div className="font-medium">UI/UX Design</div><div className="text-[9px] text-zinc-500">200 Courses · 1000+ Students</div></FloatCard>
          <FloatCard className="right-0 top-20 w-40 bg-white text-black md:right-[4%]"><div className="text-[9px] text-zinc-500">Learning Progress</div><div className="text-3xl font-semibold">55%</div><div className="mt-1 h-1.5 rounded-full bg-zinc-200"><div className="h-full w-[55%] rounded-full bg-lime" /></div></FloatCard>
          <HappyStudents className="bottom-4 left-0 md:left-[2%]" />
        </div>
      </Container>
    </section>
  );
}