// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CosmicDev Portfolio",
  description: "Exploring the universe of code and creativity",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          flex flex-col h-full
          bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
          antialiased overflow-x-hidden
        `}
      >
        {/* No pt-20 here, since no navbar */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
