import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

const principles = [
  ["Discipline", "Military precision underpins every campaign, release, and launch."],
  ["Cultural IQ", "The work lives in culture first, then scales through data and commerce."],
  ["Execution", "From concept to distribution, the systems are engineered to ship."],
];

export default function AboutPage() {
  return (
    <SiteShell
      eyebrow="About"
      title="The operating system behind Adrian Swish."
      intro="A founder, media operator, AI builder, investor, and cultural architect working at the intersection of music, systems, and market execution."
    >
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
            <Image src="/assets/imported/AD-PROJECT-A-ADRIAN-SWISH.webp" alt="Adrian Swish portrait" fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Founder narrative</p>
          <p className="mt-6 text-lg leading-8 text-[#95a0ad]">
            Adrian Swish operates as both a cultural commentator and a practical operator. The work spans artist development, digital campaigns, AI workflow design, content architecture, and capital strategy for creators and companies that need to move with urgency.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
            The mission is simple: create systems that make cultural work more intelligent, efficient, and commercially resilient without losing premium craft.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {principles.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-[#f5f7fa]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#95a0ad]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
