import { SiteShell } from "@/components/site/SiteShell";

export default function NewsletterPage() {
  return (
    <SiteShell
      eyebrow="Newsletter"
      title="The signal feed for updates, launches, and field notes."
      intro="A direct line for releases, AI systems, media moments, and cultural updates from the Adrian Swish network."
    >
      <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
        <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Subscribe</p>
        <p className="mt-5 text-lg leading-8 text-[#95a0ad]">
          The newsletter keeps followers close to new releases, partnerships, media commentary, AI workflow alerts, and operator-level insight.
        </p>
      </section>
    </SiteShell>
  );
}
