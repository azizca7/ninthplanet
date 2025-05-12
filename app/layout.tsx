import "./globals.css";
import type { Metadata } from "next";
import { spaceGrotesk } from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Ninth Planet",
  description: "Музыкальный дуэт Yamadzhi & Furcade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={spaceGrotesk.variable}>
      <body className="font-sans bg-black text-white antialiased">
        
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
