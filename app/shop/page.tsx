import { SiteShell } from "@/components/site/SiteShell";

const offers = [
  ["Ebooks", "Practical books and frameworks for music management, NIL, and commercial strategy."],
  ["Whitepaper", "An in-depth look at AI systems, creator infrastructure, and the future of digital distribution."],
  ["AI workflows", "Reusable systems for content generation, team operations, and campaign planning."],
  ["Bundles", "Combined offers for consulting, learning, and execution support."],
  ["Courses", "Instructional product for operators building in music, content, media, and growth."],
  ["Merch", "Limited premium merchandise tied to the premium visual identity."],
  ["Consulting", "Direct strategy engagements for artists, labels, founders, and brands."],
];

export default function ShopPage() {
  return (
    <SiteShell
      eyebrow="Shop"
      title="The Swish System, packaged for operators and creators."
      intro="Premium resources and offers designed for those who want deeper access to insight, systems, and execution support."
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {offers.map(([title, copy]) => (
          <div key={title} className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#95a0ad]">{copy}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
