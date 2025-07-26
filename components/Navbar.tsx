"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-100 px-8 md:px-24 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-gray-800">
        📚 BooksGarden
      </Link>

      <button
        className="sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`sm:flex space-x-6 hidden`}>
        <li>
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/library" className="text-gray-700 hover:text-black">
            Library
          </Link>
        </li>
        <li>
          <Link href="/contact-me" className="text-gray-700 hover:text-black">
            Contact me
          </Link>
        </li>
      </ul>

      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-white px-8 py-2 sm:hidden space-y-2 shadow-md">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/library" onClick={() => setIsOpen(false)}>
              Library
            </Link>
          </li>
          <li>
            <Link href="/contact-me" onClick={() => setIsOpen(false)}>
              Contact me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
