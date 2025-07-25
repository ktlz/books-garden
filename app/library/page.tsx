import { Navbar, ForYouPanel, Browse } from "@/components";

export default function Home() {
  return (
    <section className="max-w-auto mx-auto px-4">
      <ForYouPanel />
      <Browse />
    </section>
  );
}
