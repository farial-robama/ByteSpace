import { Container, Logo } from "../ui";

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