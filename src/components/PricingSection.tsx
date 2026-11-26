import { ArrowRight, Check, ExternalLink, KeyRound, MailCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';

interface PricingSectionProps {
  t: Translations;
}

export function PricingSection({ t }: PricingSectionProps) {
  return (
    <section id="precios" className="py-16 sm:py-24 border-t border-white/[0.07] relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#10B981]/[0.06] to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
            {t.pricing.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.pricing.title}
          </h2>
          <p className="text-base text-zinc-400">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Plan Gratis */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#1E1E1E] p-7 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{t.pricing.freePlan.name}</h3>
                <span className="rounded-full bg-[#2A2A2A] px-3 py-1 text-xs font-medium text-zinc-300">
                  {t.pricing.freePlan.badge}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white tabular-nums">
                    {t.pricing.freePlan.price}
                  </span>
                  <span className="text-sm text-zinc-400">{t.pricing.freePlan.period}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {t.pricing.freePlan.description}
                </p>
              </div>

              <ul className="space-y-3 pt-2 border-t border-white/[0.08]">
                {t.pricing.freePlan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a
                href={config.urls.webApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#2A2A2A] px-5 py-3.5 text-sm font-semibold text-white hover:border-[#10B981]/50 hover:bg-[#333333] transition-colors"
              >
                {t.pricing.freePlan.cta}
                <ExternalLink className="w-4 h-4 text-[#10B981]" />
              </a>
            </div>
          </div>

          {/* Plan Argo Pro - Licencia Perpetua */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-[#10B981] bg-gradient-to-b from-[#1E1E1E] to-[#171D1A] p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-[#10B981]/10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-white">{t.pricing.proPlan.name}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#121212]">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.pricing.proPlan.badge}
                </span>
              </div>

              <div className="rounded-2xl bg-[#121212]/70 border border-white/[0.08] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                      {t.pricing.proPlan.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#10B981] mt-1">
                    {t.pricing.proPlan.period}
                  </p>
                </div>

                <a
                  href={config.urls.hotmartCheckout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-3.5 text-sm sm:text-base font-bold text-[#121212] hover:bg-[#059669] hover:text-white transition-all shadow-lg shadow-[#10B981]/25 shrink-0"
                >
                  {t.pricing.proPlan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">{t.pricing.proPlan.description}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
                {t.pricing.proPlan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-zinc-200">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981]">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 space-y-2">
              <a
                href={config.urls.hotmartCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-6 py-4 text-base font-bold text-[#121212] hover:bg-[#059669] hover:text-white transition-all shadow-xl shadow-[#10B981]/20"
              >
                {t.pricing.proPlan.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-xs text-zinc-400">{t.pricing.proPlan.ctaNote}</p>
            </div>
          </div>
        </div>

        {/* Activación instantánea */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#1E1E1E] p-6 sm:p-8 space-y-5">
          <h3 className="font-display text-lg font-bold text-white">{t.pricing.activation.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-[#2A2A2A]/70 border border-white/[0.06] p-5 flex items-start gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981]">
                <MailCheck className="w-5 h-5" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">{t.pricing.activation.sameEmailTitle}</p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.pricing.activation.sameEmailDesc}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#2A2A2A]/70 border border-white/[0.06] p-5 flex items-start gap-3.5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981]">
                <KeyRound className="w-5 h-5" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">{t.pricing.activation.otherEmailTitle}</p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.pricing.activation.otherEmailDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Garantía 7 días Hotmart (obligatorio) */}
        <div className="rounded-2xl border border-[#10B981]/35 bg-[#10B981]/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-[#121212] shadow-lg shadow-[#10B981]/25">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10B981]">
              {t.pricing.guarantee.title}
            </p>
            <h3 className="font-display text-xl font-bold text-white">
              {t.pricing.guarantee.statement}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">{t.pricing.guarantee.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
