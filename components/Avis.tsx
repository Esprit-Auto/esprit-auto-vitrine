"use client";

import Carousel from "./Carousel";

const avis = [
  { auteur: "Angèle Donat-Magnin", date: "Il y a un mois · Visité en mars", texte: "Garage au top ! Suite à une panne, ils ont pris ma voiture en charge rapidement et la réparation a été faite efficacement. L'équipe est vraiment très gentille." },
  { auteur: "Jérémy Pagès", date: "Il y a 3 semaines", texte: "Très bon garage, accueil au top et travail de qualité." },
  { auteur: "Theo Silly", date: "Il y a un mois", texte: "Super service, rapide et efficace. À recommander !" },
  { auteur: "Nico", date: "Il y a un mois", texte: "Équipe professionnelle et sympathique. Excellent boulot." },
  { auteur: "Nassim Ben Ali", date: "Il y a un mois", texte: "Très satisfait de la prestation. Travail soigné, prix honnêtes." },
  { auteur: "Adrien Chennebault", date: "Il y a un mois", texte: "Superbe travail, délais respectés. Je reviendrai sans hésiter." },
  { auteur: "Sylvie Ameline", date: "Il y a un mois", texte: "Équipe sympathique et très compétente. Réparation rapide et parfaite avec toutes les explications nécessaires. Je recommande." },
  { auteur: "Anto", date: "Il y a un mois", texte: "Excellent garage comme il en faudrait partout ! Équipe compétente, très pro, accueil personnalisé et services au top." },
  { auteur: "Ghislaine Garcia", date: "Il y a 2 mois", texte: "Impeccable, très réactif. Récupéré ma voiture trois jours après une panne d'embrayage sur l'autoroute. Accueil très agréable, équipe sérieuse." },
  { auteur: "Frédéric Navarra", date: "Il y a 2 mois", texte: "Garage avec un accueil très chaleureux. Agréablement surpris par le professionnalisme et la rigueur." },
  { auteur: "Genaa", date: "Il y a 3 mois", texte: "Très satisfait du résultat suite à un choc. Travail soigné, équipe sympa et pro, tout s'est très bien passé. Je recommande sans hésiter." },
  { auteur: "Marie-Angèle Beswick", date: "Il y a 2 mois", texte: "Si vous cherchez un garage aussi accueillant que professionnel, vous êtes au bon endroit !" },
  { auteur: "B-C", date: "Il y a un mois", texte: "Personnel chaleureux et professionnel. Cinq étoiles bien méritées." },
  { auteur: "Zakaria Traore", date: "Il y a un mois", texte: "Très bonne expérience. Je recommande à 100%." },
  { auteur: "POURCHIER Johan", date: "Il y a 2 mois", texte: "Révision complète sur un Jeep Renegade, équipe super sympa et agréable. Je recommande à tous." },
  { auteur: "Antoine Chiaverini", date: "Il y a 2 mois", texte: "Super expérience pour le changement de mes silentblocs ! Équipe réactive, accueil chaleureux et résultat impeccable." },
  { auteur: "Kad Ya", date: "Il y a 2 mois", texte: "Super prise en charge, une équipe de vrais professionnels à l'écoute. Je recommande à 200%." },
  { auteur: "Amélie Cavagne", date: "Il y a 2 mois", texte: "Très contente de ma prestation. Travail impeccable et des prix plus que corrects. Je recommande à 100%." },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-or">
          <path d="M10 15l-5.9 3.1 1.1-6.6L.4 7l6.6-.9L10 0l2.9 6.1 6.6.9-4.8 4.5 1.1 6.6z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Avis() {
  return (
    <section id="avis" className="bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[3px] text-or font-semibold mb-3">
            Ils nous font confiance
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-text mb-3">
            Avis clients
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto mb-6">
            Ce que disent nos clients sur Google. 51 avis, note parfaite.
          </p>
          <a
            href="https://www.google.com/search?sca_esv=c191c92cef6168fa&hl=fr-FR&sxsrf=ANbL-n6M96NOByS-nMz0tvEzj-ers9-PgA:1776329753233&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcUtwWB2c87LhvLhue09eZQn4thI4IUIwB558lqJAzklE_HaPF66o5RcGL8f0qQv7hBOTXFPymhuRv1zK-1_6FRUoFysKSAs1rpNwRg-UwBBPSzRAB0HBNTZpLvnHnM2DfY0pqY%3D&q=ESPRIT+AUTO+-+CARROSSERIE/VITRAGE/MECANIQUE+Avis&sa=X&ved=2ahUKEwjG7Mf___GTAxXS9bsIHUlgHGEQ0bkNegQIIhAF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 hover:-translate-y-px transition-all min-h-[44px]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Laisser un avis Google
          </a>
        </div>
      </div>
      <div>
        <Carousel speed={0.6} gap={20} cardSelector=".rv-card">
          {avis.map((a, i) => (
            <div
              key={i}
              className="rv-card flex-shrink-0 w-[280px] md:w-[340px] bg-bg2 border border-bd rounded-lg p-5 md:p-6 group transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,82,26,0.4)] hover:shadow-[0_0_20px_rgba(212,82,26,0.15)]"
            >
              <Stars />
              <p className="text-text text-sm leading-relaxed mt-3 mb-4">
                &laquo; {a.texte} &raquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-or/20 flex items-center justify-center text-or text-xs font-bold">
                  {getInitials(a.auteur)}
                </div>
                <div>
                  <div className="text-text text-sm font-medium">
                    {a.auteur}
                  </div>
                  <div className="text-muted text-[11px]">{a.date}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
