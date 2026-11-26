import { ArrowLeft } from 'lucide-react';
import type { Translations } from '../i18n/types';

interface LegalPageProps {
  t: Translations;
  type: 'terms' | 'privacy';
  onBackHome: () => void;
}

export function LegalPage({ t, type, onBackHome }: LegalPageProps) {
  const doc = type === 'terms' ? t.legal.terms : t.legal.privacy;

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <button
        type="button"
        onClick={onBackHome}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-zinc-200 hover:border-[#10B981]/50 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-[#10B981]" />
        {t.legal.backHome}
      </button>

      <article className="rounded-3xl border border-white/[0.08] bg-[#1E1E1E] p-7 sm:p-10 space-y-8">
        <header className="space-y-2 border-b border-white/[0.08] pb-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{doc.title}</h1>
          <p className="text-xs text-zinc-400">{t.legal.lastUpdated}</p>
        </header>

        <div className="space-y-7">
          {doc.sections.map((section) => (
            <section key={section.heading} className="space-y-2.5">
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#10B981]">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
