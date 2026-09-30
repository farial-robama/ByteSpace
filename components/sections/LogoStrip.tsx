import { Container } from "../ui";

export function LogoStrip() {
  return (
    <section className="bg-zinc-100 py-8">
      <Container className="flex flex-wrap justify-between gap-4 text-sm font-medium text-zinc-400">
        {Array.from({ length: 5 }, (_, i) => <span key={i}>Logoipsum</span>)}
      </Container>
    </section>
  );
}