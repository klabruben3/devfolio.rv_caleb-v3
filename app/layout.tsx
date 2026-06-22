import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/utils/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://devfolio-rv-caleb-v3.vercel.app"),

  title: "Ruben Caleb | Full-Stack Developer",
  description:
    "Portfolio of Ruben Caleb — building modern web applications with React, Next.js, and TypeScript.",

  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },

  openGraph: {
    title: "Ruben Caleb | Full-Stack Developer",
    description: "Projects, experiments, and web development work.",
    url: "/",
    siteName: "Ruben Caleb Portfolio",
    type: "website",
    images: [
      {
        url: "https://devfolio-rv-caleb-v3.vercel.app/og",
        width: 1200,
        height: 630,
        alt: "Ruben Caleb Portfolio — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ruben Caleb | Full-Stack Developer",
    description: "Projects, experiments, and web development work.",
    images: [
      {
        url: "https://devfolio-rv-caleb-v3.vercel.app/og",
        width: 1200,
        height: 630,
        alt: "Ruben Caleb Portfolio — Full-Stack Developer",
      },
    ],
  },

  keywords: [
    "Ruben Caleb",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
