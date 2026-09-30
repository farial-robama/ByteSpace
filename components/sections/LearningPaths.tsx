import { Brush, Code2, Laptop, Building2, Megaphone, Camera, LucideIcon } from "lucide-react";
import { paths } from "@/lib/data";
import { Container, SectionHeading } from "../ui";

const icons: LucideIcon[] = [Brush, Code2, Laptop, Building2, Megaphone, Camera];

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