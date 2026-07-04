import { SiteShell } from "@/components/site/SiteShell";

const stack = [
  ["Signal systems", "Custom workflow design for creators, operators, and teams moving at speed."],
  ["AI production", "Compositional support, content generation, and creative iteration frameworks."],
  ["Launch infrastructure", "Campaign planning, rollout systems, and analytics-driven execution."],
];

export default function AISuitePage() {
  return (
    <SiteShell
      eyebrow="AI Suite"
      title="The intelligence layer behind modern creative operations."
      intro="A premium collection of systems, automation, media pipelines, and team workflows designed for ambitious operators."
    >
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(13,15,22,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Applied AI</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f5f7fa] sm:text-4xl">
            Build faster without sacrificing taste, precision, or signal.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
            The suite combines strategy, automation, media generation, and creative direction into a system that supports launches, campaigns, product rollouts, and long-range brand development.
          </p>
        </div>
        <div className="space-y-4">
          {stack.map(([title, copy]) => (
            <div key={title} className="rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-6">
              <h3 className="text-xl font-semibold text-[#f5f7fa]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#95a0ad]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
