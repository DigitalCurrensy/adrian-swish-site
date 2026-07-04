import { SiteShell } from "@/components/site/SiteShell";

const services = [
  {
    title: "Music consultation",
    copy: "Artist strategy, brand positioning, release architecture, and team alignment for projects that need to land with intent.",
  },
  {
    title: "AI workflow consultation",
    copy: "Operational systems for content production, media pipelines, research, and creative automation tailored to your team.",
  },
  {
    title: "AI music",
    copy: "Music production direction, sonic systems, and AI-assisted composition sessions for modern brand and artist campaigns.",
  },
  {
    title: "Digital marketing campaigns",
    copy: "Strategy, launch planning, paid media direction, and content amplification across cultural and commercial channels.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell
      eyebrow="Services"
      title="Premium strategic services for culture, technology, and growth."
      intro="Selective engagements for founders, artists, labels, brands, and operators who need a sharp creative and commercial point of view."
    >
      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-[#19D8FF]">Offer</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{service.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#95a0ad]">{service.copy}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
