import { SiteShell } from "@/components/site/SiteShell";
import { MediaCard } from "@/components/site/MediaCard";

const pressItems = [
  {
    title: "Press kit",
    description: "Founder bio, key talking points, and background for interviews, panels, and media requests.",
    image: "/assets/imported/AD - COMPTONFORNIA 2.JPG",
    alt: "Adrian Swish press photo",
    href: "https://adrianswish.book.kiwilaunch.com/",
  },
  {
    title: "Media coverage",
    description: "Selected appearances and cultural commentary connected to music, AI, and creator economy stories.",
    image: "/assets/imported/DTLA-SOUND-ADRIAN-SWISH-PROJECT.png",
    alt: "Adrian Swish cover artwork",
  },
  {
    title: "Asset library",
    description: "Image assets and visual references for press, editorial, and campaign use.",
    image: "/assets/imported/ICEWEAR-VEZZO-CLARITY-6.png",
    alt: "Adrian Swish asset",
  },
];

export default function PressPage() {
  return (
    <SiteShell
      eyebrow="Press"
      title="A polished press room for interviews, coverage, and visual assets."
      intro="Media-ready material for interviews, feature stories, and editorial requests tied to the Adrian Swish ecosystem."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {pressItems.map((item) => (
          <MediaCard key={item.title} {...item} />
        ))}
      </section>
    </SiteShell>
  );
}
