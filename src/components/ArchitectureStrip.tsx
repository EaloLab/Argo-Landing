import { Cloud, Database, FileSpreadsheet } from 'lucide-react';
import type { Translations } from '../i18n/types';

interface ArchitectureStripProps {
  t: Translations;
}

const icons = [Database, Cloud, FileSpreadsheet];

export function ArchitectureStrip({ t }: ArchitectureStripProps) {
  return (
    <section className="border-y border-white/[0.07] bg-[#161616]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.architecture.items.map((item, idx) => {
            const Icon = icons[idx] ?? Database;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.07] bg-[#1E1E1E] p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#10B981]">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="rounded-full bg-[#2A2A2A] px-3 py-1 text-[11px] font-medium text-zinc-300">
                    {item.badge}
                  </span>
                </div>
                <h2 className="font-display text-lg font-bold text-white">{item.title}</h2>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
