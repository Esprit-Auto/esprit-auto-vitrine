import Image from "next/image";

export default function Partenaires() {
  return (
    <section
      id="partenaires"
      className="bg-bg py-16 md:py-[72px] border-t border-b border-bd"
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Ils nous font confiance
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text">
            Nos partenaires
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LINE-X */}
          <div className="bg-bg2 border border-bd rounded-lg p-6 md:p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]">
            <div className="w-[140px] h-[80px] bg-black rounded-lg flex items-center justify-center p-2">
              <Image
                src="/partners/linex.jpg"
                alt="LINE-X"
                width={120}
                height={60}
                className="object-contain max-w-full"
              />
            </div>
            <h3 className="font-bebas text-xl text-text">
              LINE-X &mdash; Applicateur agr&eacute;&eacute;
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Protection de surfaces ultra-r&eacute;sistante. Rev&ecirc;tement
              professionnel pour b&egrave;nes, ch&acirc;ssis et surfaces
              expos&eacute;es.
            </p>
          </div>

          {/* RPB */}
          <div className="bg-bg2 border border-bd rounded-lg p-6 md:p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]">
            <div className="w-[140px] h-[80px] bg-white rounded-lg flex items-center justify-center p-2">
              <Image
                src="/partners/rpb.jpg"
                alt="RPB"
                width={120}
                height={60}
                className="object-contain max-w-full"
              />
            </div>
            <h3 className="font-bebas text-xl text-text">
              RPB &mdash; Vitrage automobile
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Fournisseur de vitrages de qualit&eacute; premi&egrave;re pour
              tous types de v&eacute;hicules. Pare-brise, vitres
              lat&eacute;rales et lunettes arri&egrave;re.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
