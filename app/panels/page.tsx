import { SiteShell } from "@/components/site/SiteShell";

const panels = [
  ["Music and technology", "Thought leadership on creator infrastructure, AI tools, and the evolution of modern artist operations."],
  ["Culture and capital", "Conversation on the relationship between culture, media property, and investment strategy."],
  ["Sports and innovation", "Panels focused on athlete development, media systems, and emerging digital opportunities."],
];

export default function PanelsPage() {
  return (
    <SiteShell
      eyebrow="Panels"
      title="Conference appearances and strategic cultural conversations."
      intro="High-signal appearances where the work moves from private strategy into public dialogue."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {panels.map(([title, copy]) => (
          <div key={title} className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#95a0ad]">{copy}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
