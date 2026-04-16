import Image from "next/image";

const checks = [
  {
    bold: "Disponible sur demande",
    text: ", renseignez-vous à l'accueil",
  },
  {
    bold: "Valable pour tous types d'interventions",
    text: ", mécanique, carrosserie ou vitrage",
  },
  {
    bold: "Sans interruption de votre mobilité",
    text: ", on s'occupe de votre voiture, vous gardez la vôtre",
  },
];

export default function VehiculePret() {
  return (
    <section id="vehicule-pret" className="bg-bg2 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
              Service inclus
            </div>
            <h2 className="font-bebas text-3xl md:text-5xl text-text mb-4 leading-tight">
              Un véhicule
              <br />
              <span className="text-or">à votre disposition</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
              Pendant toute la durée de votre intervention, nous mettons
              à votre disposition un véhicule de prêt pour
              que votre quotidien ne soit pas impacté.
            </p>
            <div className="flex flex-col gap-4">
              {checks.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-or/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#D4521A" strokeWidth={2.5}>
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span className="text-muted text-sm">
                    <strong className="text-text">{c.bold}</strong>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with neon + float */}
          <div className="flex justify-center">
            <div className="neon-car float-car">
              <Image
                src="/voiture-pret.svg"
                alt="Véhicule de prêt"
                width={400}
                height={250}
                className="w-full max-w-[520px] -rotate-[3deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
