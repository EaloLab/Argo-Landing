import { ArrowRight, ExternalLink } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';

interface FinalCtaProps {
  t: Translations;
}

export function FinalCta({ t }: FinalCtaProps) {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.07]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#10B981]/30 bg-gradient-to-br from-[#1E1E1E] via-[#19231F] to-[#121212] p-8 sm:p-12 text-center space-y-6">
          <span className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3.5 py-1 text-xs font-semibold text-[#10B981]">
            {t.finalCta.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            {t.finalCta.title}
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto">{t.finalCta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={config.urls.hotmartCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-7 py-3.5 text-base font-bold text-[#121212] hover:bg-[#059669] hover:text-white transition-all shadow-xl shadow-[#10B981]/20"
            >
              {t.finalCta.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={config.urls.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1E1E1E] px-7 py-3.5 text-base font-semibold text-white hover:border-[#10B981]/50 hover:bg-[#2A2A2A] transition-colors"
            >
              {t.finalCta.secondaryCta}
              <ExternalLink className="w-4 h-4 text-[#10B981]" />
            </a>
          </div>

          <p className="text-xs text-zinc-400">{t.finalCta.note}</p>
        </div>
      </div>
    </section>
  );
}
