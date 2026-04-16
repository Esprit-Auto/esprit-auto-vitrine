import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Carrosserie et débosselage toutes marques à Saint-Marcellin | Esprit Auto",
  description: "Réparation carrosserie, débosselage sans peinture (PDR) et remise en forme toutes marques à Saint-Marcellin (38160). Devis gratuit.",
  keywords: ["carrosserie Saint-Marcellin", "débosselage sans peinture Isère", "PDR 38160"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Carrosserie et débosselage",
  provider: {
    "@type": "AutoRepair",
    name: "Esprit Auto",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Marcellin", postalCode: "38160" },
  },
  areaServed: "Saint-Marcellin, Isère",
};

export default function CarrosseriePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageLayout title="Carrosserie et débosselage toutes marques à Saint-Marcellin">
        <p>
          Un accrochage sur un parking, un choc lors d&rsquo;un créneau, une bosse suite à un grêlon ? Chez <strong>Esprit Auto</strong>, nous prenons en charge tous les travaux de <strong>carrosserie automobile</strong> à Saint-Marcellin et dans l&rsquo;Isère. Nos carrossiers cumulent plus de <strong>40 ans d&rsquo;expérience</strong> à eux deux.
        </p>

        <h2>Nos prestations carrosserie</h2>
        <ul>
          <li><strong>Débosselage sans peinture (PDR)</strong> : technique non invasive pour retirer les bosses sans toucher à la peinture d&rsquo;origine. Idéal pour les impacts de grêle et les petits chocs.</li>
          <li><strong>Redressage et remplacement de panneaux</strong> : ailes, portières, capots, pare-chocs — nous remettons en forme ou remplaçons les éléments endommagés.</li>
          <li><strong>Traitement anticorrosion</strong> : après chaque intervention, nous appliquons un traitement pour protéger les zones traitées contre la rouille.</li>
          <li><strong>Remise en état complète</strong> : pour les sinistres importants, nous réalisons une remise en état intégrale de la carrosserie.</li>
        </ul>

        <h2>Débosselage PDR : une technique précise</h2>
        <p>
          Le débosselage sans peinture est une méthode qui préserve la peinture d&rsquo;origine de votre véhicule. Grâce à des outils spécialisés, nos techniciens exercent une pression contrôlée sur la tôle pour la ramener à sa forme initiale. Cette technique est plus rapide et moins coûteuse qu&rsquo;une réparation classique.
        </p>

        <h2>Prise en charge sinistre</h2>
        <p>
          Que vous ayez eu un accident responsable ou non, nous prenons en charge votre dossier d&rsquo;assurance. <strong>Tous les assureurs sont acceptés</strong>. Nous établissons un devis détaillé, coordonnons avec l&rsquo;expert et effectuons les réparations dans les meilleurs délais.
        </p>

        <h2>Pourquoi choisir Esprit Auto pour votre carrosserie ?</h2>
        <p>
          Notre garage à <strong>Saint-Marcellin (38160)</strong> dispose d&rsquo;équipements professionnels et d&rsquo;une cabine de peinture aux normes. Avec <strong>Mohamed et Alexis</strong>, deux carrossiers avec 20 ans d&rsquo;expérience chacun, votre véhicule est entre de bonnes mains. Un véhicule de prêt est disponible pendant la durée des travaux.
        </p>
      </ServicePageLayout>
    </>
  );
}
