/**
 * Vol. 13 inline images, keyed by the `[IMAGE nn]` marker in
 * `content/newsletter/vol-13.md`. Files live in `public/newsletter/vol-13/`
 * as `<id>-<width>.webp`. `width`/`height` are the intrinsic size of the
 * largest file. The Substack post has no captions, so none are rendered —
 * `alt` is the only added text.
 */
export type LetterImage = {
  widths: [number, number];
  width: number;
  height: number;
  alt: string;
  /** Transparent logo art: shown smaller and centered instead of full width. */
  logo?: boolean;
};

export const IMAGE_BASE = "/newsletter/vol-13";

export const images: Record<string, LetterImage> = {
  "01": {
    widths: [800, 1600],
    width: 1600,
    height: 1349,
    alt: "DigitalCurrensy on GitHub: public repositories including desks, module-kinetic-showcase, compton-one, open-hood, first-bucket-studios and healthie, above a contribution graph reading 9,133 contributions in the last year.",
  },
  "02": {
    widths: [800, 1600],
    width: 1600,
    height: 1277,
    alt: "Compton One: Fix home screen with the headline “One problem. One path forward.”, a language switcher for English, Español, Tagalog and Chinese, and a Start a report button.",
  },
  "03": {
    widths: [800, 1600],
    width: 1600,
    height: 1072,
    alt: "The U Basketball Prep Academy website: “Pro basketball skills training for middle & high school athletes” beside a photo of a player rising for a shot in The Dojo gym.",
  },
  "04": {
    widths: [480, 960],
    width: 960,
    height: 1059,
    alt: "Sixth Man App wordmark in orange basketball-leather lettering.",
    logo: true,
  },
  "05": {
    widths: [800, 1600],
    width: 1600,
    height: 844,
    alt: "Icewear Vezzo ROP 4 campaign site showing the Rich Off Pints 4 album cover, a polaroid of a car grille, and buttons to listen, watch and play the ROP 4 game.",
  },
  "06": {
    widths: [800, 1600],
    width: 1600,
    height: 778,
    alt: "AIO.GEO command-line page with a pixel-art AIO.GEO logo, the line “Know what AI sees · Fix it · Prove it”, and three steps: health check, audit a domain, closed loop.",
  },
  "07": {
    widths: [800, 1600],
    width: 1600,
    height: 1115,
    alt: "Product Hunt page for AIO.GEO Protocol showing a #22 Day Rank beside the product description and gallery.",
  },
  "08": {
    widths: [800, 1600],
    width: 1600,
    height: 868,
    alt: "First Bucket Studio landing page: “Rip the pack. Send the card.” beside a foil Season 82 Prospect Pack card with a red hawk crest.",
  },
  "09": {
    widths: [800, 1200],
    width: 1200,
    height: 630,
    alt: "Open Hood banner: “Owner’s book · Not a shop” above a yellow ticket reading VIN → Spec card → Marked-up RO.",
  },
  "10": {
    widths: [800, 1600],
    width: 1600,
    height: 900,
    alt: "Module Kinetic illustration of EV chargers at night with the line “Seven checks. One sealed energy record.” and a seven-step chain ending in a sealed record.",
  },
  "11": {
    widths: [800, 1000],
    width: 1000,
    height: 549,
    alt: "Healthie logo: a green letter H wrapped by a multicolor heart, a leaf and a heartbeat line.",
    logo: true,
  },
};
