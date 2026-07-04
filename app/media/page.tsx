import { SiteShell } from "@/components/site/SiteShell";
import { MediaCard } from "@/components/site/MediaCard";

const mediaItems = [
  {
    title: "Press and interviews",
    description: "High-signal coverage, founder commentary, and media moments across culture and technology.",
    image: "/assets/imported/AD-DJ-OFFICIAL-ADRIAN-SWISH-COMPTONFORNIA.JPG",
    alt: "Adrian Swish media portrait",
  },
  {
    title: "Panels and talks",
    description: "Conference speaking, panel discussions, and cultural strategy appearances.",
    image: "/assets/imported/DCI-EVENT.JPG",
    alt: "Adrian Swish at an event",
  },
  {
    title: "Archive assets",
    description: "Photographs, event stills, and visual material from collaborations across the ecosystem.",
    image: "/assets/imported/ROLLING-LAND-ADRIAN-SWISH-JUSTIN-CREDIBLE.JPG",
    alt: "Adrian Swish archive image",
  },
];

export default function MediaPage() {
  return (
    <SiteShell
      eyebrow="Media"
      title="A living archive of campaigns, events, and cultural moments."
      intro="An editorial and visual layer that keeps the work visible across media, story, and distribution."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {mediaItems.map((item) => (
          <MediaCard key={item.title} {...item} />
        ))}
      </section>
    </SiteShell>
  );
}
