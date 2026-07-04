import { SiteShell } from "@/components/site/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell
      eyebrow="Contact"
      title="Executive intake for strategic partnerships and direct consultation."
      intro="Use the booking link for a strategy session or reach out directly by email for music, AI, media, and growth opportunities."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Direct access</p>
          <div className="mt-6 space-y-4 text-lg leading-8 text-[#95a0ad]">
            <p>Book a consultation through the official scheduling link.</p>
            <p>For broader partnerships, media, and brand inquiries, email directly.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://adrianswish.book.kiwilaunch.com/" className="rounded-full border border-[#f5f7fa]/20 bg-[#f5f7fa] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#040508] transition hover:translate-y-[-2px]">Book strategy call</a>
            <a href="mailto:swish@digitalcurrensy.com" className="rounded-full border border-white/10 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#f5f7fa] transition hover:border-[#19D8FF]/50 hover:text-[#19D8FF]">Email Adrian</a>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#19D8FF]">Priority areas</p>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-[#95a0ad]">
            <li>• Music consultation and artist development</li>
            <li>• AI workflow strategy and automation</li>
            <li>• Brand campaigns and media partnerships</li>
            <li>• Venture and creator-economy opportunities</li>
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
