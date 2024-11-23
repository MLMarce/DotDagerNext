import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/components/NavMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dot Dager",
  description: "Dot Dager Landing Page",
  icons: "/profilexs_favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-hidden scroll-smooth transitio`}
      >
        {children}
        <NavMenu />
      </body>
    </html>
  );
}
