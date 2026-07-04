"use client";

import Link from "next/link";
import { useState } from "react";

type SiteShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ai-suite", label: "AI Suite" },
  { href: "/investments", label: "Investments" },
  { href: "/projects", label: "Projects" },
  { href: "/mixtape-vault", label: "Mixtape Vault" },
  { href: "/video-games", label: "Video Games" },
  { href: "/shop", label: "Shop" },
  { href: "/media", label: "Media" },
  { href: "/nft-gallery", label: "NFT Gallery" },
  { href: "/philanthropy", label: "Philanthropy" },
  { href: "/panels", label: "Panels" },
  { href: "/press", label: "Press" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ eyebrow, title, intro, children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030407] text-[#f5f7fa]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(60,123,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(25,216,255,0.12),transparent_28%),linear-gradient(180deg,#030407_0%,#06080d_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />

      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <Link href="/" className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-[#dce3ea]">
          ADRIAN SWISH
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-[#dce3ea] backdrop-blur"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-white" />
            <span className="ml-auto h-px w-3.5 bg-white" />
          </span>
          Menu
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#030407]/95 backdrop-blur-xl transition ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 rounded-full border border-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.34em] text-[#dce3ea]"
        >
          Close
        </button>
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
          <p className="mb-8 text-[0.68rem] uppercase tracking-[0.42em] text-[#6f7884]">
            Command interface
          </p>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="w-fit text-3xl font-semibold tracking-[-0.03em] text-[#6f7884] transition hover:text-[#f5f7fa] sm:text-5xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-wrap gap-4 text-[0.65rem] uppercase tracking-[0.34em] text-[#6f7884]">
            <a href="https://adrianswish.book.kiwilaunch.com/" className="transition hover:text-[#19D8FF]">
              Book strategy call
            </a>
            <a href="mailto:swish@digitalcurrensy.com" className="transition hover:text-[#19D8FF]">
              swish@digitalcurrensy.com
            </a>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-24 pt-28 sm:px-8 lg:px-10">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(14,17,24,0.92),rgba(8,10,15,0.86))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.42)] sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.4em] text-[#19D8FF]">
            <span className="rounded-full border border-[#19D8FF]/20 bg-[#19D8FF]/10 px-3 py-1">{eyebrow}</span>
            <span className="text-[#6f7884]">Digital Currensy Inc.</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#f7f9fc] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#95a0ad]">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://adrianswish.book.kiwilaunch.com/"
              className="rounded-full border border-[#f5f7fa]/20 bg-[#f5f7fa] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#040508] transition hover:translate-y-[-2px]"
            >
              Book strategy call
            </a>
            <a
              href="mailto:swish@digitalcurrensy.com"
              className="rounded-full border border-white/10 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f5f7fa] transition hover:border-[#19D8FF]/50 hover:text-[#19D8FF]"
            >
              Contact Adrian
            </a>
          </div>
        </section>

        <div className="mt-10 space-y-10">{children}</div>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-sm text-[#6f7884] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Adrian Swish / Digital Currensy Inc.</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:swish@digitalcurrensy.com" className="transition hover:text-[#19D8FF]">
              swish@digitalcurrensy.com
            </a>
            <a href="https://adrianswish.book.kiwilaunch.com/" className="transition hover:text-[#19D8FF]">
              Book a consultation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
