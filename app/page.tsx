import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { MediaCard } from "@/components/site/MediaCard";

const heroCards = [
  {
    title: "Command Center",
    description: "Operating across music, AI infrastructure, creator tools, and market execution.",
    image: "/assets/imported/adrian-swish-breland-nashville.jpg",
    alt: "Adrian Swish in Nashville",
  },
  {
    title: "Signal Stack",
    description: "Publishing, distribution, media, and capital strategy under one premium roof.",
    image: "/assets/imported/adrian-swish-jelly-roll-nashville.jpg",
    alt: "Adrian Swish with collaborators in Nashville",
  },
  {
    title: "Vault Access",
    description: "A curated archive of mixtapes, panels, press, and cultural assets.",
    image: "/assets/imported/adrian-swish-on-the-set-crips-bloods-mixtape.jpg",
    alt: "Adrian Swish on a mixtape set",
  },
];

export default function HomePage() {
  return (
    <SiteShell
      eyebrow="Command Center"
      title="Adrian Swish — founder, operator, systems builder."
      intro="A premium digital headquarters for music, AI, blockchain, sports technology, creator infrastructure, media, and capital strategy."
    >
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.34em] text-[#19D8FF]">
            <span className="rounded-full border border-[#19D8FF]/20 bg-[#19D8FF]/10 px-3 py-1">Digital Currensy Inc.</span>
            <span className="text-[#6f7884]">Military discipline • Cultural intelligence • AI infrastructure</span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#6f7884]">Signal</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f5f7fa] sm:text-4xl">
                From culture to infrastructure, every move is operational.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
                Adrian Swish builds teams, campaigns, music systems, AI workflows, and cultural IP that travel from concept to execution.
              </p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/10">
              <Image src="/assets/imported/AD-BLUE-89-ADRIAN-SWISH.webp" alt="Adrian Swish portrait" fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,4,7,0.65)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#19D8FF]">Now booking</p>
                <p className="mt-3 text-xl font-semibold text-[#f5f7fa]">Book a strategic consultation and align your next move.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,12,18,0.95),rgba(6,8,12,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Core routes</p>
          <div className="mt-6 space-y-4">
            {[
              ["/services", "Services"],
              ["/ai-suite", "AI Suite"],
              ["/mixtape-vault", "Mixtape Vault"],
              ["/press", "Press"],
              ["/shop", "Shop"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-[#19D8FF]/40 hover:bg-white/10">
                <span className="text-lg font-medium tracking-[-0.02em] text-[#f5f7fa]">{label}</span>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#6f7884]">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {heroCards.map((card) => (
          <MediaCard key={card.title} {...card} />
        ))}
      </section>
    </SiteShell>
  );
}
