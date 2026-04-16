import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-garage.webp"
          alt="Garage Esprit Auto"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/80 to-bg" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-or/10 rounded-full blur-[120px] z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 py-16 md:py-24">
        {/* Logo with neon effect */}
        <div
          className="mb-8 rounded-full neon-logo-pulse"
          style={{
            boxShadow:
              "0 0 18px rgba(212,82,26,.35), 0 0 40px rgba(212,82,26,.15), inset 0 0 20px rgba(212,82,26,.05)",
          }}
        >
          <Image
            src="/logo.png"
            alt="Esprit Auto"
            width={180}
            height={180}
            className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-2 border-or/60"
            priority
          />
        </div>

        {/* Badge localisation */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-bd bg-bg2/60 text-[11px] md:text-xs text-muted tracking-widest uppercase mb-6">
          Saint-Marcellin &middot; ZA Les Échavagnes
        </div>

        {/* H1 */}
        <h1 className="font-bebas text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,6vw,7rem)] leading-[0.92] tracking-tight mb-6">
          Carrosserie, Mécanique
          <br />
          <span className="text-or">&amp; Pare-Brise.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-muted text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          Remplacement de pare-brise, réparation d&rsquo;impact,
          carrosserie complète et mécanique, intervention rapide
          à Saint-Marcellin.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 hover:-translate-y-px transition-all min-h-[44px]"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3 bg-transparent text-text text-sm font-semibold rounded-[3px] border border-white/20 hover:border-or hover:text-or hover:-translate-y-px transition-all min-h-[44px]"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
