import { SplitContent, Quote } from "@/components";

const Hero = () => {
  return (
    <section className="max-w-auto mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome to ReadTrack!
      </h1>
      <Quote />
      <SplitContent />
    </section>
  );
};

export default Hero;
