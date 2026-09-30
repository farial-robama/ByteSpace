import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Container } from "../ui";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div aria-hidden className="absolute -right-10 top-0 h-80 w-96 rounded-full bg-lime/40 blur-3xl" />
      <div aria-hidden className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="max-w-xs text-3xl font-semibold leading-tight">Discover What Our Community Is Saying</h2>
          <p className="text-xs leading-relaxed text-zinc-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="mt-10 grid items-start gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <figcaption className="mt-3 text-sm font-semibold">{t.name}<div className="text-xs font-normal text-brand">{t.role}</div></figcaption>
              <blockquote className="mt-3 text-xs leading-relaxed text-zinc-600">&ldquo;{t.text}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}