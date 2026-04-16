import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Réparation d'impact pare-brise à Saint-Marcellin | Esprit Auto",
  description: "Réparation d'impact pare-brise en 30 minutes à Saint-Marcellin (38160). Résultat invisible garanti. Prise en charge assurance. Devis gratuit.",
  keywords: ["réparation impact Saint-Marcellin", "étoile pare-brise Isère"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Réparation d'impact pare-brise",
  provider: {
    "@type": "AutoRepair",
    name: "Esprit Auto",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Marcellin", postalCode: "38160" },
  },
  areaServed: "Saint-Marcellin, Isère",
};

export default function ImpactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageLayout title="Réparation d&rsquo;impact pare-brise &mdash; résultat invisible garanti">
        <p>
          Un caillou projeté sur l&rsquo;autoroute, un gravillon sur une route de campagne, et voilà votre pare-brise marqué d&rsquo;un impact. Bonne nouvelle : s&rsquo;il est pris à temps, <strong>l&rsquo;impact peut être réparé en moins de 30 minutes</strong> chez Esprit Auto à Saint-Marcellin.
        </p>

        <h2>Comment fonctionne la réparation d&rsquo;impact ?</h2>
        <p>
          La réparation consiste à injecter une <strong>résine spéciale</strong> dans la zone impactée du pare-brise. Cette résine comble la fissure, restaure la solidité du verre et rend l&rsquo;impact quasiment invisible. Le procédé est rapide, efficace et économique par rapport à un remplacement complet.
        </p>

        <h2>Quand réparer plutôt que remplacer ?</h2>
        <p>
          La réparation est possible lorsque :
        </p>
        <ul>
          <li>L&rsquo;impact est <strong>plus petit qu&rsquo;une pièce de 2€</strong></li>
          <li>Il est situé <strong>en dehors du champ de vision direct</strong> du conducteur</li>
          <li>Il n&rsquo;y a <strong>pas de fissure partant de l&rsquo;impact</strong></li>
          <li>Le pare-brise n&rsquo;a pas déjà été réparé au même endroit</li>
        </ul>
        <p>
          Si l&rsquo;impact est trop important ou mal placé, nous vous orienterons vers un <strong>remplacement complet du pare-brise</strong> avec prise en charge assurance.
        </p>

        <h2>Résultat invisible garanti</h2>
        <p>
          Notre technique de réparation d&rsquo;impact offre un <strong>résultat invisible à l&rsquo;œil nu</strong>. La résine utilisée est transparente et durable. Vous retrouvez un pare-brise net et solide, sans avoir à le remplacer. La réparation est couverte par une <strong>garantie</strong>.
        </p>

        <h2>Prise en charge et tarifs</h2>
        <p>
          La réparation d&rsquo;impact est généralement <strong>prise en charge à 100% par votre assurance</strong> bris de glace, sans franchise et sans impact sur votre bonus. Venez avec votre carte verte, nous gérons les démarches administratives à votre place.
        </p>

        <h2>Intervention rapide à Saint-Marcellin</h2>
        <p>
          Chez <strong>Esprit Auto, ZA Les Échavagnes, 38160 Saint-Marcellin</strong>, la réparation d&rsquo;impact se fait <strong>sans rendez-vous</strong> dans la mesure du possible. Passez directement au garage ou appelez-nous pour vérifier la disponibilité.
        </p>
      </ServicePageLayout>
    </>
  );
}
