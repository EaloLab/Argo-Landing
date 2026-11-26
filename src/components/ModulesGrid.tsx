import {
  Coins,
  FileDown,
  Handshake,
  Landmark,
  PiggyBank,
  Plane,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import type { ModuleId, Translations } from '../i18n/types';

interface ModulesGridProps {
  t: Translations;
}

const iconMap: Record<ModuleId, typeof Wallet> = {
  accounts: Wallet,
  multicurrency: Coins,
  investments: TrendingUp,
  budgets: PiggyBank,
  debts: Handshake,
  networth: Landmark,
  vacation: Plane,
  reports: FileDown,
};

export function ModulesGrid({ t }: ModulesGridProps) {
  return (
    <section id="funciones" className="py-16 sm:py-24 border-t border-white/[0.07] bg-[#151515]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
            {t.modules.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.modules.title}
          </h2>
          <p className="text-base text-zinc-400">{t.modules.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.modules.items.map((mod) => {
            const Icon = iconMap[mod.id];
            return (
              <article
                key={mod.id}
                className="group rounded-2xl border border-white/[0.07] bg-[#1E1E1E] p-6 hover:border-[#10B981]/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2A2A2A] text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#121212] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    {mod.tag && (
                      <span className="rounded-full bg-[#10B981]/15 border border-[#10B981]/30 px-2.5 py-0.5 text-[11px] font-semibold text-[#10B981]">
                        {mod.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{mod.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
