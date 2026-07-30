import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Gangaram Pai",
  description: "Personal portfolio website of Harsh Gangaram Pai. Embedded systems engineer, microcontrollers, VLSI design, and UI/UX developer.",
  keywords: [
    "Harsh Gangaram Pai",
    "Harsh Pai",
    "VIT Vellore",
    "ECE Portfolio",
    "Embedded Systems",
    "Microcontrollers",
    "VLSI Design",
    "Arduino",
    "8051",
    "UI UX Designer"
  ],
  authors: [{ name: "Harsh Gangaram Pai" }],
  icons: {
    icon: "/hp-logo.png",
    shortcut: "/hp-logo.png",
    apple: "/hp-logo.png",
  },
  openGraph: {
    title: "Harsh Gangaram Pai",
    description: "Embedded Systems, Microcontrollers, VLSI Design, and Modern UI/UX Web Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} bg-[#F2EFE7] text-[#2F2E2F] font-sans antialiased selection:bg-[#DBCDC9] selection:text-[#2F2E2F] overflow-x-hidden max-w-[100vw]`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
