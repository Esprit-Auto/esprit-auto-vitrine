import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";


const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://espritauto38.com"),
  title:
    "Esprit Auto – Carrosserie, Vitrage & Mécanique à Saint-Marcellin (38160)",
  description:
    "Garage carrosserie, pare-brise et mécanique toutes marques à Saint-Marcellin. Réparation impact, débosselage PDR, peinture, révision. Prise en charge sinistres. Devis gratuit. ☎ 07 63 76 64 31",
  keywords: [
    "carrosserie Saint-Marcellin",
    "garage Saint-Marcellin 38160",
    "pare-brise Saint-Marcellin",
    "réparation impact Saint-Marcellin",
    "carrosserie Isère",
    "garage Royans",
    "mécanique Saint-Marcellin",
    "débosselage PDR Isère",
    "réparation carrosserie Drôme",
    "peinture automobile Saint-Marcellin",
    "bris de glace assurance Isère",
    "sinistre carrosserie Saint-Marcellin",
    "LINE-X applicateur Isère",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Esprit Auto",
    title: "Esprit Auto – Carrosserie & Mécanique Saint-Marcellin",
    description: "Garage multimarque à Saint-Marcellin. 5/5 sur Google.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Esprit Auto - Carrosserie Vitrage Mécanique",
  telephone: "+33763766431",
  email: "esprit.auto38160@gmail.com",
  url: "https://espritauto38.com",
  image: "/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ZA Les Échavagnes",
    addressLocality: "Saint-Marcellin",
    postalCode: "38160",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.1535,
    longitude: 5.3215,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "51",
    bestRating: "5",
  },
  areaServed: [
    "Saint-Marcellin",
    "Isère",
    "Royans",
    "Vinay",
    "Romans-sur-Isère",
    "Saint-Antoine-l'Abbaye",
    "Chatte",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services automobile",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remplacement pare-brise",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Réparation carrosserie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Peinture automobile",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mécanique toutes marques",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Application revêtement LINE-X",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/share/1aTVYXbqV5/?mibextid=wwXIfr",
    "https://www.instagram.com/espritauto38?igsh=dGo2M2hoM2h3YTdt",
    "https://share.google/PJsNIG38o4PpFWdgk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
