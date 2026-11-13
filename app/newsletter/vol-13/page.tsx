import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { inlineText, parseLetter, type Block, type Inline } from "@/lib/letter";
import { IMAGE_BASE, images } from "./images";
import styles from "./letter.module.css";

export const dynamic = "force-static";

// Same families the main site loads, self-hosted here by next/font.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

// The letter is rendered word for word from this file. Edit copy there only.
const source = fs.readFileSync(
  path.join(process.cwd(), "content/newsletter/vol-13.md"),
  "utf8",
);
const blocks = parseLetter(source);

const firstHeading = blocks.find(
  (block) => block.type === "heading" && block.level === 1,
);
const HEADLINE =
  firstHeading?.type === "heading" ? inlineText(firstHeading.children) : "";

const PAGE_URL = "https://www.adrianswish.xyz/newsletter/vol-13";
const SUBSTACK_URL = "https://valuecompute.substack.com";
const OG_IMAGE = {
  url: `${IMAGE_BASE}/og.jpg`,
  width: 1200,
  height: 1012,
  alt: images["01"].alt,
};

// Self-referencing canonical: this site page is the original. Substack and
// Medium should point their canonical tags here after they publish.
// TODO(go-live): set to the public Substack post URL
// (https://valuecompute.substack.com/p/...) once the post is published.
// const SUBSTACK_POST_URL = "";

// TODO(go-live): set to the Medium version of this letter, then uncomment the
// "Read on Medium" link in the footer below.
// const MEDIUM_POST_URL = "";

// Every sentence here is taken verbatim from the letter.
const DESCRIPTION =
  "Building In Public Vol. 13. This series documents the build in public. Volume 13 is the moment the hands became mine.";

export const metadata: Metadata = {
  title: `${HEADLINE} | Adrian Swish`,
  description: DESCRIPTION,
  authors: [{ name: "Adrian Swish", url: "https://adrianswish.xyz" }],
  // Overrides the site-wide canonical inherited from app/layout.tsx
  // (which points at the home page) with this page's own URL.
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    title: HEADLINE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Adrian Swish",
    authors: ["Adrian Swish"],
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HEADLINE,
    description: DESCRIPTION,
    creator: "@IAmAdrianSwish",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: HEADLINE,
  description: DESCRIPTION,
  inLanguage: "en",
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  image: [`https://www.adrianswish.xyz${OG_IMAGE.url}`],
  author: {
    "@type": "Person",
    name: "Adrian Swish",
    url: "https://adrianswish.xyz",
    sameAs: ["https://x.com/IAmAdrianSwish", "https://medium.com/@labeliqai"],
  },
  publisher: {
    "@type": "Organization",
    name: "Digital Currensy Inc.",
    url: "https://www.digitalcurrensy.com",
  },
  // TODO(go-live): add datePublished (and sameAs: SUBSTACK_POST_URL) once the
  // Substack post is published — the date is not invented here.
};

function renderInline(nodes: Inline[]): ReactNode {
  return nodes.map((node, i) => {
    switch (node.type) {
      case "text":
        return node.value;
      case "break":
        return <br key={i} />;
      case "code":
        return <code key={i}>{node.value}</code>;
      case "strong":
        return <strong key={i}>{renderInline(node.children)}</strong>;
      case "em":
        return <em key={i}>{renderInline(node.children)}</em>;
      case "link":
        return (
          <a key={i} href={node.href} target="_blank" rel="noopener noreferrer">
            {renderInline(node.children)}
          </a>
        );
    }
  });
}

function LetterImage({ id, first }: { id: string; first: boolean }) {
  const image = images[id];
  if (!image) throw new Error(`vol-13: no image registered for [IMAGE ${id}]`);
  const [small, large] = image.widths;
  return (
    <figure className={image.logo ? styles.logo : styles.figure}>
      {/* Pre-sized static WebP with srcset; next/image would re-encode at runtime. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${IMAGE_BASE}/${id}-${large}.webp`}
        srcSet={`${IMAGE_BASE}/${id}-${small}.webp ${small}w, ${IMAGE_BASE}/${id}-${large}.webp ${large}w`}
        sizes={
          image.logo
            ? "(max-width: 480px) calc(100vw - 40px), 420px"
            : "(max-width: 760px) calc(100vw - 40px), 720px"
        }
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={first ? "eager" : "lazy"}
        fetchPriority={first ? "high" : "auto"}
        decoding={first ? "sync" : "async"}
      />
    </figure>
  );
}

function renderBlock(block: Block, i: number, firstImageId: string | undefined) {
  switch (block.type) {
    case "heading":
      return block.level === 1 ? (
        <h1 key={i}>{renderInline(block.children)}</h1>
      ) : (
        <h2 key={i}>{renderInline(block.children)}</h2>
      );
    case "paragraph":
      // The line directly under the title is the Substack subtitle.
      return (
        <p key={i} className={i === 1 ? styles.subtitle : undefined}>
          {renderInline(block.children)}
        </p>
      );
    case "list":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "image":
      return <LetterImage key={i} id={block.id} first={block.id === firstImageId} />;
    case "rule":
      return <hr key={i} />;
  }
}

export default function Page() {
  const firstImage = blocks.find((block) => block.type === "image");
  const firstImageId = firstImage?.type === "image" ? firstImage.id : undefined;

  return (
    <div
      className={`${styles.page} ${archivo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className={styles.bar}>
        <Link className={styles.brand} href="/" prefetch={false}>
          Adrian Swish
        </Link>
        <a
          className={styles.subscribe}
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe on Substack
        </a>
      </header>

      <main>
        <article className={styles.letter}>
          {blocks.map((block, i) => renderBlock(block, i, firstImageId))}
        </article>
      </main>

      <footer className={styles.footer}>
        <a
          className={styles.subscribe}
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe on Substack
        </a>
        {/* TODO(go-live): uncomment once MEDIUM_POST_URL is set.
        <a href={MEDIUM_POST_URL} target="_blank" rel="noopener noreferrer">
          Read on Medium
        </a>
        */}
        <Link className={styles.home} href="/" prefetch={false}>
          adrianswish.xyz
        </Link>
      </footer>
    </div>
  );
}
