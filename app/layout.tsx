import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const leagueGothic = localFont({
  src: "../public/fonts/LeagueGothic-Italic.ttf",
  variable: "--font-league-gothic-italic",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reto Eight",
  description: "Reto cycling club website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
