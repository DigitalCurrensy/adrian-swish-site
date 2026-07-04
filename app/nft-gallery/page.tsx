import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

const nfts = [
  ["The Chairman Series", "Art on Chain / Collector Edition", "/assets/imported/THE-CHAIRMEN-BEAT-ART-GALLERY-Music-NFT-Instrumental-Project.jpg"],
  ["The Signal Drop", "Generative audio / visual collectible", "/assets/imported/ADRIAN-SWISH-NFT NYC.JPG"],
  ["Cultural Currency", "Limited release / on-chain artifact", "/assets/imported/LEABEL-IQ-AI.png"],
];

export default function NFTGalleryPage() {
  return (
    <SiteShell
      eyebrow="NFT Gallery"
      title="Art on Chain, curated for collectors and cultural operators."
      intro="A gallery of digital pieces that blend music, visual culture, and on-chain ownership into a premium collectible experience."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {nfts.map(([title, label, image]) => (
          <div key={title} className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(7,9,14,0.92))]">
            <div className="relative aspect-[4/5]">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f7fa]">{title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#19D8FF]">{label}</p>
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
