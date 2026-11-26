import { Check } from 'lucide-react';
import { config } from '../config';
import type { Translations } from '../i18n/types';
import { AppMockup } from './AppMockup';

interface FeatureSpotlightsProps {
  t: Translations;
}

export function FeatureSpotlights({ t }: FeatureSpotlightsProps) {
  const screenshotMap = {
    investments: config.assets.screenshots.investmentsBrokers,
    budgets: config.assets.screenshots.budgetsGoals,
    transactions: config.assets.screenshots.transactionsMulticurrency,
  } as const;

  const altMap = {
    investments: 'Captura de portafolio de inversiones y brokers en Argo',
    budgets: 'Captura de presupuestos y metas de ahorro en Argo',
    transactions: 'Captura de transacciones, multimoneda en vivo y Modo Vacaciones en Argo',
  } as const;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
            {t.spotlights.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.spotlights.title}
          </h2>
          <p className="text-base text-zinc-400">{t.spotlights.subtitle}</p>
        </div>

        <div className="space-y-20 sm:space-y-24">
          {t.spotlights.items.map((item, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-6 space-y-5 ${reversed ? 'lg:order-2' : ''}`}>
                  <span className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-semibold text-[#10B981]">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-zinc-300 leading-relaxed">{item.description}</p>
                  <ul className="space-y-3 pt-1">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981]/15 text-[#10B981]">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : ''}`}>
                  <AppMockup
                    screenshotSrc={screenshotMap[item.id]}
                    alt={altMap[item.id]}
                    variant={item.id}
                    frame={item.frame}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
