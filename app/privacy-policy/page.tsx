import { SiteShell } from "@/components/site/SiteShell";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell
      eyebrow="Privacy Policy"
      title="Privacy and data handling for the Adrian Swish digital headquarters."
      intro="The site is designed to provide information and contact access while respecting your privacy preferences."
    >
      <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))] p-8 sm:p-10">
        <p className="text-lg leading-8 text-[#95a0ad]">
          This website may collect standard analytics and contact information when you submit a form or choose to reach out. The data is used to improve the experience and respond to inquiries. Please contact the team directly if you have questions about privacy, data use, or consent preferences.
        </p>
      </section>
    </SiteShell>
  );
}
