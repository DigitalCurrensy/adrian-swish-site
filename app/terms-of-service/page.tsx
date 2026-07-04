import { SiteShell } from "@/components/site/SiteShell";

export default function TermsOfServicePage() {
  return (
    <SiteShell
      eyebrow="Terms of Service"
      title="Terms for use of the Adrian Swish digital headquarters."
      intro="By using this website, you agree to interact with it responsibly and within the boundaries of public online conduct."
    >
      <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
        <p className="text-lg leading-8 text-[#95a0ad]">
          All content is presented for informational and promotional purposes. The site may include third-party links, references to partnerships, and media assets owned by their respective creators. Please contact the team if you need clarification on the use of any material.
        </p>
      </section>
    </SiteShell>
  );
}
