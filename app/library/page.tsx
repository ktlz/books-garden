import { Navbar, ForYouPanel, Browse } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden h-screen">
      <Navbar />
      <ForYouPanel />
      <Browse />
    </main>
  );
}
