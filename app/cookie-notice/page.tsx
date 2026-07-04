import { SiteShell } from "@/components/site/SiteShell";

export default function CookieNoticePage() {
  return (
    <SiteShell
      eyebrow="Cookie Notice"
      title="Cookie notice and site preference information."
      intro="This site may use standard browser technologies to improve performance and understand engagement."
    >
      <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
        <p className="text-lg leading-8 text-[#95a0ad]">
          Cookies may be used to remember preferences and support site analytics. If you prefer not to allow cookies, you can adjust your browser settings at any time.
        </p>
      </section>
    </SiteShell>
  );
}
