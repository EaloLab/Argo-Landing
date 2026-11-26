import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Translations } from '../i18n/types';

interface FaqSectionProps {
  t: Translations;
}

export function FaqSection({ t }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-white/[0.07] bg-[#151515]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">{t.faq.title}</h2>
          <p className="text-base text-zinc-400">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-white/[0.08] bg-[#1E1E1E] overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#242424] transition-colors"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#10B981] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/[0.05]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
