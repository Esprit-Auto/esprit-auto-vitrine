"use client";

import Carousel from "./Carousel";

const photos = [
  { label: "Remplacement pare-brise", icon: "windshield" },
  { label: "Réparation carrosserie", icon: "body" },
  { label: "Réparation d'impact", icon: "impact" },
  { label: "Peinture & retouche", icon: "paint" },
  { label: "Intervention mécanique", icon: "mechanic" },
  { label: "Débosselage PDR", icon: "dent" },
];

function PhotoIcon({ icon }: { icon: string }) {
  const stroke = "rgba(212,82,26,.5)";
  switch (icon) {
    case "windshield":
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={1.5}>
          <rect x="4" y="16" width="40" height="22" rx="3" />
          <path d="M4 22h40M10 16l4-9h20l4 9" />
          <circle cx="15" cy="22" r="2" fill={stroke} />
          <circle cx="33" cy="22" r="2" fill={stroke} />
        </svg>
      );
    case "body":
    case "dent":
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path d="M6 34l5-18h26l5 18H6z" />
          <path d="M4 34h40v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
        </svg>
      );
    case "impact":
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={1.5}>
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 6v5M24 37v5M6 24h5M37 24h5" />
        </svg>
      );
    case "paint":
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={1.5}>
          <path d="M8 14l4-6h24l4 6v22l-4 6H12l-4-6V14z" />
          <path d="M16 20h16M16 28h10" />
        </svg>
      );
    case "mechanic":
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={1.5}>
          <circle cx="24" cy="18" r="9" />
          <path d="M9 42a15 15 0 0 1 30 0" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Realisations() {
  return (
    <section id="realisations" className="bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Nos travaux
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            R&eacute;alisations
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Quelques exemples de nos interventions, de la r&eacute;paration
            d&rsquo;impact &agrave; la carrosserie compl&egrave;te.
          </p>
        </div>
      </div>
      <div>
        <Carousel speed={0.5} gap={16} cardSelector=".ph-card">
          {photos.map((p, i) => (
            <div
              key={i}
              className="ph-card flex-shrink-0 w-[280px] md:w-[340px]"
            >
              <div className="aspect-[4/3] bg-bg3 rounded-lg border border-bd flex flex-col items-center justify-center gap-3">
                <PhotoIcon icon={p.icon} />
                <span className="text-muted text-xs">Photo &agrave; venir</span>
              </div>
              <div className="mt-2 text-sm text-text font-medium text-center">
                {p.label}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
