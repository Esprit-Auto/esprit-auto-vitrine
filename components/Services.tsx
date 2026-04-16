const services = [
  {
    title: "Remplacement\nde pare-brise",
    desc: "Toutes marques. Prise en charge assurance.",
    tag: "Rapide",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10 text-or">
        <rect x="4" y="16" width="40" height="22" rx="3" />
        <path d="M4 22h40M12 38v4M36 38v4M10 16l4-9h20l4 9" />
        <circle cx="15" cy="22" r="2" fill="currentColor" />
        <circle cx="33" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Réparation\nd'impact",
    desc: "En 30 min. Résultat invisible, garantie incluse.",
    tag: "Dès 30 min",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10 text-or">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="5" />
        <path d="M24 6v5M24 37v5M6 24h5M37 24h5" />
      </svg>
    ),
  },
  {
    title: "Carrosserie\n& débosselage",
    desc: "Remise en forme, PDR, accrochages.",
    tag: "Sur devis",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10 text-or">
        <path d="M6 34l5-18h26l5 18H6z" />
        <path d="M4 34h40v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
        <path d="M15 16l3-7h12l3 7" />
        <circle cx="16" cy="37" r="2" fill="currentColor" />
        <circle cx="32" cy="37" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Peinture\n& retouche",
    desc: "Raccords parfaits avec la teinte d'origine.",
    tag: "Toutes teintes",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10 text-or">
        <path d="M8 14l4-6h24l4 6v22l-4 6H12l-4-6V14z" />
        <path d="M16 20h16M16 28h10" />
        <circle cx="36" cy="28" r="4" />
        <path d="M36 24v-8" />
      </svg>
    ),
  },
  {
    title: "Mécanique\ntoutes marques",
    desc: "Entretien, diagnostic, révision.",
    tag: "Toutes marques",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10 text-or">
        <circle cx="24" cy="18" r="9" />
        <path d="M9 42a15 15 0 0 1 30 0" />
        <path d="M20 18h8M24 14v8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg2 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Ce qu&rsquo;on fait
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            Nos services
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Du remplacement de pare-brise express &agrave; la carrosserie
            compl&egrave;te, du diagnostic &agrave; la restitution, on
            s&rsquo;occupe de tout.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-bg3 border border-bd rounded-lg p-5 md:p-6 text-center flex flex-col items-center justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]"
            >
              <div className="flex flex-col items-center gap-3">
                {s.icon}
                <h3 className="font-bebas text-lg md:text-xl text-text whitespace-pre-line leading-tight">
                  {s.title}
                </h3>
                <p className="text-muted text-xs md:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <span className="inline-block mt-4 px-3 py-1 text-[10px] md:text-[11px] uppercase tracking-wider text-or border border-or/30 rounded-full">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
