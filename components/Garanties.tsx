const marques = [
  "Peugeot", "Renault", "Citroën", "Volkswagen", "BMW",
  "Mercedes", "Audi", "Toyota", "Ford", "Opel", "Fiat",
];

const checks = [
  {
    bold: "Ouvert à tous les assureurs",
    text: ", vous n'avez pas besoin d'être dans un réseau partenaire pour venir chez nous.",
  },
  {
    bold: "On gère les démarches à votre place",
    text: ", déclaration, suivi du dossier et lien avec votre assurance.",
  },
  {
    bold: "Réparations rapides et soignées",
    text: ", notre équipe traite votre véhicule avec le même soin.",
  },
  {
    bold: "Un seul interlocuteur",
    text: ", vous passez par nous, on s'occupe du reste.",
  },
];

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-or/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="#D4521A" strokeWidth={2}>
        <polyline points="2,6 5,9 10,3" />
      </svg>
    </div>
  );
}

export default function Garanties() {
  return (
    <section id="garanties" className="bg-bg2">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Multi-marques */}
          <div className="p-8 md:p-12 lg:p-16 border-b-2 border-b-transparent transition-all duration-300 hover:border-b-[rgba(212,82,26,0.7)] hover:shadow-[0_4px_20px_rgba(212,82,26,0.3)]">
            <svg className="w-12 h-12 text-or mb-4" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <rect x="4" y="18" width="48" height="26" rx="4" />
              <path d="M4 26h48M14 44v4M42 44v4M12 18l5-10h22l5 10" />
              <circle cx="18" cy="26" r="2.5" fill="currentColor" />
              <circle cx="38" cy="26" r="2.5" fill="currentColor" />
            </svg>
            <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-2">
              Toutes marques
            </div>
            <h2 className="font-bebas text-3xl md:text-4xl text-text mb-4 leading-tight">
              Votre garage

              multimarque
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Quelle que soit la marque ou le mod&egrave;le de votre
              v&eacute;hicule, notre &eacute;quipe est form&eacute;e pour
              intervenir avec le m&ecirc;me niveau d&rsquo;exigence. Voiture de
              ville, SUV, utilitaire ou v&eacute;hicule de sport, on s&rsquo;en
              occupe.
            </p>
            <div className="flex flex-wrap gap-2">
              {marques.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1 text-[11px] text-muted border border-bd rounded-full"
                >
                  {m}
                </span>
              ))}
              <span className="px-3 py-1 text-[11px] text-or border border-or/30 rounded-full">
                + toutes marques
              </span>
            </div>
          </div>

          {/* Multi-assurances */}
          <div className="p-8 md:p-12 lg:p-16 border-t md:border-t-0 md:border-l border-bd border-b-2 border-b-transparent transition-all duration-300 hover:border-b-[rgba(212,82,26,0.7)] hover:shadow-[0_4px_20px_rgba(212,82,26,0.3)]">
            <svg className="w-12 h-12 text-or mb-4" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="M28 6L8 14v16c0 12 9 22 20 24 11-2 20-12 20-24V14L28 6z" />
              <path d="M18 28l6 6 14-14" />
            </svg>
            <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-2">
              Prise en charge assurance
            </div>
            <h2 className="font-bebas text-3xl md:text-4xl text-text mb-4 leading-tight">
              Prise en charge assurance

              
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Bris de glace, carrosserie, pare-chocs... Quel que soit votre assureur, venez directement chez nous.
              On prend en
              main votre dossier de A &agrave; Z et on fait le lien avec votre
              compagnie.
            </p>
            <div className="flex flex-col gap-4">
              {checks.map((c, i) => (
                <div key={i} className="flex gap-3">
                  <CheckIcon />
                  <p className="text-muted text-sm leading-relaxed">
                    <strong className="text-text">{c.bold}</strong>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
