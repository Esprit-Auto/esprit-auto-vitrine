"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-[rgba(14,14,14,0.97)] backdrop-blur-2xl border-b border-bd h-16">
      <div className="max-w-full mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-[46px] h-[46px] md:w-[38px] md:h-[38px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Esprit Auto logo"
              width={38}
              height={38}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <strong className="block font-bebas text-base text-text tracking-[1.5px]">
              ESPRIT AUTO
            </strong>
            <span className="block text-[9px] text-or tracking-[2.5px] uppercase">
              Saint-Marcellin &middot; 38160
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-0 list-none flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted text-[13px] font-medium hover:text-text transition-colors px-4 whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 hover:-translate-y-px transition-all"
          >
            Nous contacter
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-text transition-transform ${open ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-text transition-transform ${open ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg z-[200] flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text text-2xl font-bebas tracking-wider"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-or text-white text-sm font-semibold rounded-[3px] hover:bg-or2 transition-all mt-4"
            onClick={() => setOpen(false)}
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
