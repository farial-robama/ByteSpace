import { Container, LimeButton } from "../ui";
import { GRID, Shape, tri } from "../shared";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 text-center text-white">
      <div className={GRID} />
      <Shape className="-left-8 top-2 h-12 w-40 -rotate-[25deg] rounded-full bg-lime" />
      <Shape className="left-20 top-20 h-8 w-16 rotate-12 rounded-full bg-white" />
      <Shape className={`-left-2 bottom-6 h-24 w-24 bg-white ${tri}`} />
      <Shape className="bottom-[-30px] left-12 h-32 w-32 rounded-full border-[26px] border-lime" />
      <Shape className={`right-[18%] top-6 h-20 w-20 bg-lime ${tri}`} />
      <Shape className="-right-6 top-4 h-40 w-28 rotate-12 rounded-[2rem] bg-white" />
      <Shape className="bottom-4 right-16 h-24 w-14 -rotate-12 rounded-full bg-lime" />
      <Container className="relative">
        <h2 className="mx-auto max-w-sm text-2xl font-semibold">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-white/90">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <LimeButton className="mt-6">Join as Creator</LimeButton>
      </Container>
    </section>
  );
}