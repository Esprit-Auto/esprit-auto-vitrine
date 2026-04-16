const steps = [
  {
    num: "01",
    title: "Prise de contact",
    desc: "Appelez-nous ou remplissez le formulaire. On vous répond rapidement.",
  },
  {
    num: "02",
    title: "Diagnostic",
    desc: "Évaluation sur place, explication des travaux, validation ensemble.",
  },
  {
    num: "03",
    title: "Intervention",
    desc: "Travaux réalisés avec soin. Suivi de l'avancement si besoin.",
  },
  {
    num: "04",
    title: "Restitution",
    desc: "Clés remises en parfait état. Prise en charge assurance possible.",
  },
];

export default function Methode() {
  return (
    <section id="methode" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Comment &ccedil;a marche
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            Simple &amp; rapide
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Quatre &eacute;tapes claires du premier contact &agrave; la remise
            des cl&eacute;s. Sans surprise, sans stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-bg2 border border-bd rounded-lg p-6 text-center group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]"
            >
              <div className="font-bebas text-4xl text-or/30 mb-2">
                {s.num}
              </div>
              <h3 className="font-bebas text-xl text-text mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
