// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { beba ,mart,mulish,poiret, roboto} from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Ninth Planet",
  description: "Музыкальный дуэт Yamadzhi & Furcade",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${beba.variable} ${mart.variable} ${poiret.variable} ${mulish.variable} ${roboto.variable}`}>
      <body style={{ fontFamily: "var(--font-beba)" }} className="bg-black text-white antialiased">
        <Navbar/>
        <div className="fixed inset-0 z-[-1]">
              </div>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
