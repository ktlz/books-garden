import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Books Garden",
  description: "Online library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
