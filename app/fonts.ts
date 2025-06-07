// app/fonts.ts
import {  Bebas_Neue,Martian_Mono,Poiret_One, Mulish ,Roboto} from "next/font/google";

export const poiret = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poiret",
  display: "swap",
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
})

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mulish",
  display: "swap",
})

export const mart  = Martian_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mart",
  display: "swap",
})


export const beba = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-beba",
  display: "swap",
});
