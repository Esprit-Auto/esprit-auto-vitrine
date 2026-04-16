"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const prestations = [
  "Remplacement pare-brise",
  "Réparation d'impact",
  "Carrosserie / Débosselage",
  "Peinture / Retouche",
  "Mécanique",
  "Autre",
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      telephone: (form.elements.namedItem("telephone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      prestation: (form.elements.namedItem("prestation") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-bg3 border border-bd rounded-md px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:outline-none focus:border-or transition-colors";

  return (
    <section id="contact" className="bg-bg2 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Prenez contact
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            Nous contacter
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            Remplissez le formulaire ou appelez-nous directement au{" "}
            <a href="tel:+33763766431" className="text-or hover:underline whitespace-nowrap">
              07 63 76 64 31
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="nom"
                type="text"
                placeholder="Nom"
                required
                className={inputClasses}
              />
              <input
                name="prenom"
                type="text"
                placeholder="Prénom"
                required
                className={inputClasses}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="telephone"
                type="tel"
                placeholder="Téléphone"
                required
                pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                className={inputClasses}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className={inputClasses}
              />
            </div>
            <select name="prestation" required className={inputClasses}>
              <option value="">Type de prestation</option>
              {prestations.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Votre message..."
              rows={5}
              required
              className={`${inputClasses} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center px-7 py-3 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer"}
            </button>

            {status === "success" && (
              <div className="text-green-400 text-sm text-center p-3 bg-green-400/10 rounded-md">
                Message envoyé avec succès ! Nous vous répondrons rapidement.
              </div>
            )}
            {status === "error" && (
              <div className="text-red-400 text-sm text-center p-3 bg-red-400/10 rounded-md">
                Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
              </div>
            )}
          </form>

          {/* Map + Infos */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden border border-bd aspect-video md:aspect-auto md:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.5!2d5.3215!3d45.1535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA5JzEyLjYiTiA1wrAxOScxNy40IkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Esprit Auto - Saint-Marcellin"
              />
            </div>
            <div className="bg-bg3 border border-bd rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-or flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className="text-text text-sm">ZA Les Échavagnes, 38160 Saint-Marcellin</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-or flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+33763766431" className="text-text text-sm hover:text-or transition-colors whitespace-nowrap">
                  07 63 76 64 31
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-or flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
                <a href="mailto:esprit.auto38160@gmail.com" className="text-text text-sm hover:text-or transition-colors break-all">
                  esprit.auto38160@gmail.com
                </a>
              </div>
              <div className="text-muted text-xs leading-relaxed pt-2 border-t border-bd">
                <strong className="text-text">Horaires :</strong> Lun-Ven 8h00-12h00 / 14h00-18h00 &middot; Sam &amp; Dim : Fermé
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-bd">
                <a
                  href="https://www.facebook.com/share/1aTVYXbqV5/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-or transition-colors"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/espritauto38?igsh=dGo2M2hoM2h3YTdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-or transition-colors"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <span className="text-muted text-xs">Suivez-nous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
