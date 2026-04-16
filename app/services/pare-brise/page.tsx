import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Remplacement et réparation de pare-brise à Saint-Marcellin | Esprit Auto",
  description: "Remplacement et réparation de pare-brise toutes marques à Saint-Marcellin (38160). Prise en charge bris de glace, réparation impact. Devis gratuit.",
  keywords: ["pare-brise Saint-Marcellin", "bris de glace Isère", "remplacement pare-brise 38", "réparation impact"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remplacement et réparation de pare-brise",
  provider: {
    "@type": "AutoRepair",
    name: "Esprit Auto",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Marcellin", postalCode: "38160" },
  },
  areaServed: "Saint-Marcellin, Isère",
  description: "Service de remplacement et réparation de pare-brise toutes marques avec prise en charge assurance.",
};

export default function PareBrisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageLayout title="Remplacement et réparation de pare-brise à Saint-Marcellin">
        <p>
          Votre pare-brise est fêlé, impacté ou cassé ? Chez <strong>Esprit Auto</strong>, nous intervenons rapidement pour le <strong>remplacement ou la réparation de votre pare-brise</strong> à Saint-Marcellin et dans toute l&rsquo;Isère. Notre équipe est équipée pour traiter tous les types de vitrages automobiles, quelle que soit la marque ou le modèle de votre véhicule.
        </p>

        <h2>Pourquoi faire réparer ou remplacer votre pare-brise rapidement ?</h2>
        <p>
          Un impact non traité peut s&rsquo;étendre sous l&rsquo;effet des vibrations, des changements de température ou d&rsquo;un simple nid-de-poule. Ce qui était une simple réparation d&rsquo;impact peut vite devenir un remplacement complet. En intervenant dès les premiers signes, vous économisez du temps et de l&rsquo;argent.
        </p>
        <p>
          De plus, un pare-brise endommagé réduit la visibilité et peut constituer un danger lors du contrôle technique. N&rsquo;attendez pas que la situation s&rsquo;aggrave.
        </p>

        <h2>Notre procédure de remplacement</h2>
        <ul>
          <li><strong>Diagnostic gratuit</strong> : nous évaluons l&rsquo;état de votre vitrage et vous conseillons la meilleure option (réparation ou remplacement).</li>
          <li><strong>Commande du vitrage</strong> : nous commandons un pare-brise homologué, compatible avec votre véhicule.</li>
          <li><strong>Pose professionnelle</strong> : nos techniciens réalisent la pose dans le respect des normes constructeur.</li>
          <li><strong>Recalibrage caméra ADAS</strong> : si votre véhicule est équipé d&rsquo;un système d&rsquo;aide à la conduite, nous effectuons le recalibrage nécessaire.</li>
        </ul>

        <h2>Prise en charge assurance bris de glace</h2>
        <p>
          Vous bénéficiez d&rsquo;une garantie bris de glace ? Nous gérons directement les démarches avec votre assureur. <strong>Aucune avance de frais</strong> dans la plupart des cas. Amenez simplement votre constat et votre carte verte, on s&rsquo;occupe du reste.
        </p>

        <h2>Pare-brise à Saint-Marcellin : pourquoi choisir Esprit Auto ?</h2>
        <p>
          Situés au cœur de la <strong>ZA Les Échavagnes à Saint-Marcellin (38160)</strong>, nous sommes facilement accessibles depuis Vinay, Romans-sur-Isère, Chatte et tout le Royans. Notre équipe expérimentée assure un service rapide, soigné et transparent. Avec <strong>51 avis 5/5 sur Google</strong>, la qualité de notre travail parle d&rsquo;elle-même.
        </p>
      </ServicePageLayout>
    </>
  );
}
