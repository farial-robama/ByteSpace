import { Hero, LogoStrip, Courses, LearningPaths, Growth, CreatorCta, Testimonials, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Courses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}