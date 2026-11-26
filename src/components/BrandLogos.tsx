import { useState } from 'react';
import { config } from '../config';

interface ArgoLogoProps {
  size?: 'sm' | 'md';
  showWordmark?: boolean;
  subtitle?: string;
}

export function ArgoLogo({ size = 'md', showWordmark = true, subtitle = 'Patrimonio y Finanzas' }: ArgoLogoProps) {
  const [imgError, setImgError] = useState(false);
  const dim = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {!imgError ? (
        <img
          src={config.assets.logos.icon}
          alt={config.brand.appName}
          className={`${dim} rounded-xl object-contain bg-[#1E1E1E] border border-white/10`}
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className={`${dim} rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg shadow-[#10B981]/20`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#121212]" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 3L4 20h3.5l1.8-4h5.4l1.8 4H20L12 3z" strokeLinejoin="round" />
            <path d="M9.6 13.5L12 8.2l2.4 5.3H9.6z" fill="currentColor" stroke="none" />
          </svg>
        </span>
      )}
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display font-bold tracking-tight text-white text-lg">ARGO</span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">{subtitle}</span>
        </span>
      )}
    </span>
  );
}

export function EaloLogo() {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src={config.assets.logos.studioWhite}
        alt={config.brand.studioName}
        className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 border border-white/15 bg-[#1E1E1E] px-3 py-1.5 rounded-lg">
      <span className="h-2 w-2 rounded-full bg-[#10B981]" />
      {config.brand.studioName}
    </span>
  );
}
