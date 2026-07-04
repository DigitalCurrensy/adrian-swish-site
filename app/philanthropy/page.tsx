import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

export default function PhilanthropyPage() {
  return (
    <SiteShell
      eyebrow="Philanthropy"
      title="Impact builds through culture, community, and systems."
      intro="Mission-driven initiatives and community-facing work connected to development, education, and cultural investment."
    >
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10">
          <Image src="/assets/imported/new-faces-of-philantrophy-denver-post-2009.jp2" alt="Philanthropy imagery" fill className="object-cover" />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Community</p>
          <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
            The work includes cultural programming, community engagement, social impact initiatives, and development projects designed to create both visibility and real-world opportunity.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
