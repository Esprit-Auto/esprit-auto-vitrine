import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mécanique toutes marques à Saint-Marcellin | Esprit Auto",
  description: "Mécanique automobile toutes marques à Saint-Marcellin (38160). Révision, entretien, diagnostic, freins, embrayage. Devis gratuit.",
  keywords: ["mécanicien Saint-Marcellin", "révision voiture Isère", "entretien auto 38160"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mécanique toutes marques",
  provider: {
    "@type": "AutoRepair",
    name: "Esprit Auto",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Marcellin", postalCode: "38160" },
  },
  areaServed: "Saint-Marcellin, Isère",
};

export default function MecaniquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicePageLayout title="Mécanique toutes marques à Saint-Marcellin">
        <p>
          Besoin d&rsquo;une révision, d&rsquo;un changement de freins ou d&rsquo;un diagnostic complet ? <strong>Esprit Auto</strong> propose un service de <strong>mécanique générale toutes marques</strong> à Saint-Marcellin. Avec <strong>Jean-Pierre</strong> et ses 40 ans d&rsquo;expérience, votre véhicule est entre les mains d&rsquo;un expert.
        </p>

        <h2>Nos prestations mécaniques</h2>
        <ul>
          <li><strong>Révision et entretien</strong> : vidange, filtre à huile, filtre à air, filtre d&rsquo;habitacle, bougies, courroie de distribution.</li>
          <li><strong>Freinage</strong> : remplacement des plaquettes, disques, étriers. Purge du circuit de freinage.</li>
          <li><strong>Embrayage</strong> : remplacement du kit embrayage complet (mécanisme, disque, butée).</li>
          <li><strong>Suspension et direction</strong> : amortisseurs, silentblocs, rotules, crémaillère.</li>
          <li><strong>Diagnostic électronique</strong> : lecture des codes défaut, identification des pannes, remise à zéro des voyants.</li>
          <li><strong>Pré-contrôle technique</strong> : nous vérifions les points de contrôle pour vous éviter une contre-visite.</li>
        </ul>

        <h2>40 ans d&rsquo;expérience mécanique</h2>
        <p>
          Jean-Pierre, notre mécanicien, possède <strong>40 ans d&rsquo;expérience</strong> en mécanique automobile. Des voitures anciennes aux modèles récents, il maîtrise les systèmes mécaniques et électroniques de toutes les marques. Son expertise vous garantit un diagnostic précis et des réparations durables.
        </p>

        <h2>Toutes marques, tous modèles</h2>
        <p>
          Peugeot, Renault, Citroën, Volkswagen, BMW, Mercedes, Toyota, Ford, Opel, Fiat et bien d&rsquo;autres. Chez Esprit Auto, <strong>nous intervenons sur toutes les marques</strong> sans exception. Véhicule de tourisme, utilitaire ou SUV, notre équipement professionnel nous permet de répondre à tous vos besoins.
        </p>

        <h2>Votre garage mécanique à Saint-Marcellin</h2>
        <p>
          Situé <strong>ZA Les Échavagnes, 38160 Saint-Marcellin</strong>, notre garage est ouvert du lundi au samedi. Prenez rendez-vous par téléphone ou via notre formulaire en ligne. Un véhicule de prêt peut être mis à disposition pendant la durée de l&rsquo;intervention.
        </p>
      </ServicePageLayout>
    </>
  );
}
