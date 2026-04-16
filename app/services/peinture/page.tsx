import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Peinture automobile et retouche à Saint-Marcellin | Esprit Auto",
  description: "Peinture automobile, raccord couleur et retouche à Saint-Marcellin (38160). Toutes teintes, finition parfaite. Devis gratuit.",
  keywords: ["peinture auto Saint-Marcellin", "raccord couleur Isère", "retouche peinture 38"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Peinture automobile et retouche",
  provider: {
    "@type": "AutoRepair",
    name: "Esprit Auto",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Marcellin", postalCode: "38160" },
  },
  areaServed: "Saint-Marcellin, Isère",
};

export default function PeinturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageLayout title="Peinture automobile et retouche à Saint-Marcellin">
        <p>
          Une rayure profonde, un éclat de peinture, ou un élément de carrosserie remplacé qui nécessite une mise en teinte ? Chez <strong>Esprit Auto</strong>, nous réalisons des <strong>travaux de peinture automobile</strong> de qualité professionnelle à Saint-Marcellin. Notre objectif : un résultat invisible, comme si rien ne s&rsquo;était passé.
        </p>

        <h2>Nos prestations peinture</h2>
        <ul>
          <li><strong>Raccord couleur</strong> : nous reproduisons exactement la teinte d&rsquo;origine de votre véhicule grâce à un système de colorimétrie de précision.</li>
          <li><strong>Peinture complète d&rsquo;éléments</strong> : capots, ailes, portières, pare-chocs — nous peignons ou repeignons chaque élément en cabine.</li>
          <li><strong>Retouche et éclats</strong> : pour les petits défauts, nous réalisons des retouches localisées sans avoir à repeindre l&rsquo;ensemble de la pièce.</li>
          <li><strong>Vernis et protection</strong> : chaque peinture est finalisée par un vernis haute résistance pour une tenue dans le temps.</li>
        </ul>

        <h2>Processus de mise en peinture</h2>
        <p>
          Chaque intervention suit un processus rigoureux : <strong>préparation de surface</strong> (ponçage, apprêt, masticage si nécessaire), <strong>application de la teinte</strong> en cabine ventilée et chauffée, puis <strong>vernissage</strong> et polissage final. Ce processus garantit une finition durable et une teinte parfaitement raccordée.
        </p>

        <h2>Toutes les teintes disponibles</h2>
        <p>
          Que votre véhicule soit blanc nacré, noir métallisé, rouge vif ou toute autre couleur, notre système de mélange nous permet de <strong>retrouver la teinte exacte</strong> à partir du code couleur constructeur. Nous travaillons avec toutes les marques automobiles.
        </p>

        <h2>Peinture auto à Saint-Marcellin : votre garage de confiance</h2>
        <p>
          Notre atelier situé <strong>ZA Les Échavagnes, 38160 Saint-Marcellin</strong> est équipé d&rsquo;une cabine de peinture professionnelle. Notre équipe vous accueille du lundi au samedi. Contactez-nous pour un devis gratuit et personnalisé.
        </p>
      </ServicePageLayout>
    </>
  );
}
