import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServicePageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted text-sm hover:text-or transition-colors mb-8"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="15,18 9,12 15,6" />
            </svg>
            Retour &agrave; l&rsquo;accueil
          </Link>
          <h1 className="font-bebas text-3xl md:text-5xl text-text mb-8 leading-tight">
            {title}
          </h1>
          <div className="prose-esprit space-y-5 text-muted text-sm md:text-base leading-relaxed [&_h2]:font-bebas [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-text [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-text [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 hover:-translate-y-px transition-all min-h-[44px]"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:+33763766431"
              className="inline-flex items-center justify-center px-7 py-3 bg-transparent text-text text-sm font-semibold rounded-[3px] border border-white/20 hover:border-or hover:text-or hover:-translate-y-px transition-all min-h-[44px]"
            >
              Appeler le 07 63 76 64 31
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
