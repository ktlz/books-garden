import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Books Garden",
  description: "Online library",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50"}>
        <Navbar />
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
