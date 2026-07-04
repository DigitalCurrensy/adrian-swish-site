import { SiteShell } from "@/components/site/SiteShell";

const projects = [
  ["Music and artist strategy", "Launch systems, artist development, and release positioning for breakthrough projects."],
  ["Media and publishing", "Premium content architecture for interviews, editorial, campaigns, and digital releases."],
  ["Technology and tooling", "Workflow design, AI integrations, and product strategy for creative businesses."],
];

export default function ProjectsPage() {
  return (
    <SiteShell
      eyebrow="Projects"
      title="A portfolio built for signal, systems, and scale."
      intro="The project archive spans campaign execution, creative direction, builder work, and infrastructure that supports cultural businesses."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {projects.map(([title, copy]) => (
          <div key={title} className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#95a0ad]">{copy}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
