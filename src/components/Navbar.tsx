import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';
import { ArgoLogo } from './BrandLogos';

interface NavbarProps {
  t: Translations;
  onNavigateHome: (sectionId?: string) => void;
}

export function Navbar({ t, onNavigateHome }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (sectionId?: string) => {
    setMobileOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#121212]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick();
            }}
            className="shrink-0 focus:outline-none"
          >
            <ArgoLogo />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a
              href="#funciones"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('funciones');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.features}
            </a>
            <a
              href="#precios"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('precios');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('faq');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={config.urls.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-zinc-100 hover:border-[#10B981]/50 hover:bg-[#2A2A2A] transition-colors"
            >
              {t.nav.openArgo}
              <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" />
            </a>
            <a
              href="#precios"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('precios');
              }}
              className="inline-flex items-center justify-center rounded-xl bg-[#10B981] px-4 py-2 text-sm font-bold text-[#121212] hover:bg-[#059669] hover:text-white transition-colors shadow-lg shadow-[#10B981]/20"
            >
              {t.nav.getPro}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={t.nav.menuLabel}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-[#1E1E1E] p-2 text-zinc-200 hover:bg-[#2A2A2A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#121212] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
            <a
              href="#funciones"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('funciones');
              }}
              className="rounded-lg px-3 py-2 hover:bg-[#1E1E1E] hover:text-white"
            >
              {t.nav.features}
            </a>
            <a
              href="#precios"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('precios');
              }}
              className="rounded-lg px-3 py-2 hover:bg-[#1E1E1E] hover:text-white"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('faq');
              }}
              className="rounded-lg px-3 py-2 hover:bg-[#1E1E1E] hover:text-white"
            >
              {t.nav.faq}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5 border-t border-white/[0.07]">
            <a
              href={config.urls.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1E1E1E] px-4 py-2.5 text-sm font-medium text-zinc-100"
            >
              {t.nav.openArgo}
              <ExternalLink className="w-4 h-4 text-[#10B981]" />
            </a>
            <a
              href="#precios"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('precios');
              }}
              className="inline-flex items-center justify-center rounded-xl bg-[#10B981] px-4 py-2.5 text-sm font-bold text-[#121212]"
            >
              {t.nav.getPro}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
