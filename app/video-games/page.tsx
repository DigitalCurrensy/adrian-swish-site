import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

export default function VideoGamesPage() {
  return (
    <SiteShell
      eyebrow="Video Games"
      title="Interactive worlds, game concepts, and culture-forward play systems."
      intro="The gaming lane includes concept development, interactive media, and entertainment products shaped by the same discipline as the wider creative ecosystem."
    >
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10">
          <Image src="/assets/imported/ICEWEAR-VEZZO-ROP2.png" alt="Video game concept art" fill className="object-cover" />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Gaming lane</p>
          <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
            The video game work sits at the convergence of story, competition, branded entertainment, and digital culture. The systems are designed to feel native to the wider Adrian Swish ecosystem and its audience.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
