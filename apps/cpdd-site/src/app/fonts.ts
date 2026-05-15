import { Barlow, Barlow_Condensed, Slabo_27px } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const slabo27px = Slabo_27px({
  variable: "--font-slabo-27px",
  weight: ["400"],
  subsets: ["latin"],
});
