import { Mail } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';
import { ArgoLogo, EaloLogo } from './BrandLogos';

interface FooterProps {
  t: Translations;
  onNavigateLegal: (page: 'terms' | 'privacy') => void;
}

export function Footer({ t, onNavigateLegal }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#101010] pt-14 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <ArgoLogo subtitle={t.nav.brandSubtitle} />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">{t.footer.description}</p>
            <div className="pt-1 flex items-center gap-3">
              <span className="text-xs text-zinc-500">{t.footer.developedBy}</span>
              <EaloLogo />
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {t.footer.productTitle}
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={config.urls.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#10B981] transition-colors"
                >
                  {t.footer.openWebApp}
                </a>
              </li>
              <li>
                <a
                  href={config.urls.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#10B981] transition-colors"
                >
                  {t.footer.googlePlay}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {t.footer.legalTitle}
            </p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href="/terminos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateLegal('terms');
                  }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="/privacidad"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateLegal('privacy');
                  }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {t.footer.supportTitle}
            </p>
            <p className="text-xs text-zinc-500">{t.footer.supportLabel}</p>
            <a
              href={`mailto:${config.support.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#10B981] hover:text-white transition-colors break-all"
            >
              <Mail className="w-4 h-4 shrink-0" />
              {config.support.email}
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed pt-1">{t.footer.hotmartNote}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>{t.footer.copyright}</p>
          <p>{config.brand.appFullName}</p>
        </div>
      </div>
    </footer>
  );
}
