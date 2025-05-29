import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <div className="flex gap-16">
          <a href="/library">Library</a>
          <a href="/blog">Blog</a>
        </div>
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/book-logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-16">
          <a href="/about">About</a>
          <a href="/contact-me">Contact me</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
