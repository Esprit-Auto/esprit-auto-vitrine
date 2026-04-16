const team = [
  {
    name: "Julian",
    initials: "JU",
    role: "Accueil · Gestion · Comptabilité",
    bio: "Votre premier contact chez Esprit Auto. Julian gère l'accueil des clients, le suivi administratif et la comptabilité du garage.",
  },
  {
    name: "Mohamed",
    initials: "MO",
    role: "Carrossier · 20 ans d'expérience",
    bio: "Expert en réparation et remise en forme de carrosserie. Avec 20 ans d'expérience, Mohamed réalise des interventions soignées, du débosselage à la finition.",
  },
  {
    name: "Alexis",
    initials: "AL",
    role: "Carrossier · 20 ans d'expérience",
    bio: "Spécialiste carrosserie, Alexis maîtrise toutes les techniques de réparation. Remise en forme, redressage et finitions impeccables.",
  },
  {
    name: "Jean-Pierre",
    initials: "JP",
    role: "Mécanicien · 40 ans d'expérience",
    bio: "Vétéran de la mécanique automobile, Jean-Pierre apporte 40 ans de savoir-faire. Entretien, diagnostic et réparation toutes marques.",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="bg-bg2 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Notre équipe
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            Qui sommes-nous ?
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Une équipe passionnée, jeune et professionnelle au service
            de votre véhicule à Saint-Marcellin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-bg3 border border-bd rounded-lg p-6 text-center flex flex-col items-center gap-3 group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]"
            >
              <div className="relative w-16 h-16">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-muted"
                >
                  <circle cx="24" cy="16" r="10" />
                  <path d="M6 44c0-9.9 8.1-18 18-18s18 8.1 18 18" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-or font-bold text-sm">
                  {m.initials}
                </div>
              </div>
              <div className="font-bebas text-xl text-text">{m.name}</div>
              <div className="text-or text-[11px] uppercase tracking-wider">
                {m.role}
              </div>
              <p className="text-muted text-xs leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
