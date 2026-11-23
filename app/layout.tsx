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
  metadataBase: new URL("https://www.adrianswish.xyz"),
  title: "Adrian Swish — Founder · Music · AI · Sports · Capital",
  description:
    "Official founder site for Adrian Swish — music, AI, sports tech, and Digital Currensy Inc. Book a call, walk the vault, or open Label IQ AI.",
  applicationName: "Adrian Swish",
  authors: [{ name: "Adrian Swish" }],
  keywords: [
    "Adrian Swish",
    "Digital Currensy",
    "Label IQ AI",
    "adrianswish.xyz",
    "music executive",
    "sports tech",
    "founder",
  ],
  alternates: {
    canonical: "https://adrianswish.xyz",
  },
  icons: {
    icon: "/brand/adrian-swish-cryptopunk.jpg",
    apple: "/brand/adrian-swish-cryptopunk.jpg",
  },
  openGraph: {
    title: "Adrian Swish — Founder · Music · AI · Sports · Capital",
    description:
      "Official founder site for Adrian Swish — music, AI, sports tech, and Digital Currensy Inc.",
    url: "https://adrianswish.xyz",
    siteName: "Adrian Swish",
    type: "website",
    images: [
      {
        url: "https://www.adrianswish.xyz/og/swish-og.jpg",
        width: 1200,
        height: 630,
        alt: "SWISH chrome wordmark on black for Adrian Swish at adrianswish.xyz",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Swish",
    description:
      "Official founder site for Adrian Swish — music, AI, sports tech, and Digital Currensy Inc.",
    creator: "@IAmAdrianSwish",
    images: [
      {
        url: "https://www.adrianswish.xyz/og/swish-og.jpg",
        alt: "SWISH chrome wordmark on black for Adrian Swish at adrianswish.xyz",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
