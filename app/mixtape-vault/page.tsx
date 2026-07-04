import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

const mixtapes = [
  ["Cultural Pressure", "BRICC BABY • DJ SCREAM", "/assets/imported/BRICC-BABY-ADRIAN-SWISH-DJ-SCREAM-MIXTAPE-KITCHEN.webp"],
  ["The Signal Drop", "VORY • DJ RADIO OVERDOSE", "/assets/imported/vory-adrian-swish-dj-radio-overdose-mixtape.webp"],
  ["The Ice Circuit", "ICEWEAR VEZZO", "/assets/imported/icewear-vezzo-solitaires-adrian-swish-djbj3525-dj-outtaspace.webp"],
];

export default function MixtapeVaultPage() {
  return (
    <SiteShell
      eyebrow="Mixtape Vault"
      title="A black chrome vault of project artwork, mixtape culture, and sonic memory."
      intro="The archive brings together releases, collaborations, and visuals from the creative systems built around the Adrian Swish ecosystem."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {mixtapes.map(([title, artist, image]) => (
          <div key={title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))]">
            <div className="relative aspect-square">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.4em] text-[#19D8FF]">{artist}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{title}</h2>
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
