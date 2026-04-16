"use client";
import Carousel from "./Carousel";
import Image from "next/image";

const photos = [
  { src: "/realisations/r1.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r2.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r3.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r4.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r5.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r6.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r7.jpg", alt: "Réalisation Esprit Auto" },
  { src: "/realisations/r8.jpg", alt: "Réalisation Esprit Auto" },
];

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
              <div className="aspect-[4/3] bg-bg3 rounded-lg border border-bd overflow-hidden relative">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
