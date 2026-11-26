import { ArrowRight, CheckCircle2, ExternalLink, Smartphone } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';
import { AppMockup } from './AppMockup';

interface HeroProps {
  t: Translations;
}

export function Hero({ t }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-fintech-grid pointer-events-none opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3.5 py-1.5 text-xs font-medium text-[#10B981]">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.08]">
              {t.hero.titleStart}
              <span className="text-[#10B981]">{t.hero.titleHighlight}</span>
              {t.hero.titleEnd}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                <a
                  href="#precios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-base font-bold text-[#121212] hover:bg-[#059669] hover:text-white transition-all shadow-xl shadow-[#10B981]/20"
                >
                  {t.hero.primaryCta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={config.urls.webApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1E1E1E] px-6 py-3.5 text-base font-semibold text-white hover:border-[#10B981]/50 hover:bg-[#2A2A2A] transition-colors"
                >
                  {t.hero.secondaryCta}
                  <ExternalLink className="w-4 h-4 text-[#10B981]" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-400">
                <span>{t.hero.primarySubnote}</span>
                <a
                  href={config.urls.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#10B981] transition-colors underline decoration-white/20 underline-offset-4"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#10B981]" />
                  {t.hero.androidCta}
                </a>
              </div>
            </div>

            <ul className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/[0.08]">
              {t.hero.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <AppMockup
              screenshotSrc={config.assets.screenshots.heroAccounts}
              alt="Captura de Argo mostrando cuentas líquidas y patrimonio neto"
              variant="hero"
              frame="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
