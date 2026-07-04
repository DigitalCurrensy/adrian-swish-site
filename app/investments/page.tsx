import { SiteShell } from "@/components/site/SiteShell";

const investments = [
  ["Digital Currensy Inc", "The operating entity behind music, culture, media, and AI strategy initiatives."],
  ["Label IQ AI", "Technology and systems work supporting creators, labels, and media operators."],
  ["The U Basketball Prep", "Education and athlete development infrastructure with strategic and community impact."],
  ["The Sixth Man App", "Sports technology and creator-oriented product ecosystems in development."],
];

export default function InvestmentsPage() {
  return (
    <SiteShell
      eyebrow="Investments"
      title="Capital with culture, operational rigor, and long-range intent."
      intro="Select ventures and infrastructure plays connected to media, talent, technology, and next-generation creator economics."
    >
      <section className="grid gap-6 md:grid-cols-2">
        {investments.map(([name, copy]) => (
          <div key={name} className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{name}</h2>
            <p className="mt-4 text-lg leading-8 text-[#95a0ad]">{copy}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
