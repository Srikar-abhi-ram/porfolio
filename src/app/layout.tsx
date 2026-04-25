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
  title: "Sai Balaji Srikar Yellepeddi | Generative AI Engineer",
  description:
    "RAG, LLM integrations, FastAPI, Next.js — production AI systems with measurable cost and latency impact. Visa (Cybersource) via Grid Dynamics.",
  openGraph: {
    title: "Sai Balaji Srikar Yellepeddi | Generative AI Engineer",
    description:
      "RAG, embeddings, and LLM workflows at production scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex select-text flex-col bg-[#030305] text-zinc-200 antialiased">
        {children}
      </body>
    </html>
  );
}
