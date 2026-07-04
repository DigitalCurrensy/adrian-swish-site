import Image from "next/image";

type MediaCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

export function MediaCard({ title, description, image, alt, href }: MediaCardProps) {
  const content = (
    <div className="group overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,14,20,0.95),rgba(8,10,15,0.9))] transition hover:-translate-y-1 hover:border-[#19D8FF]/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#f5f7fa]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#95a0ad]">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
