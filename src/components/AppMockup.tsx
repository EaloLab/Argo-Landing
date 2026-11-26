import { useState } from 'react';
import {
  Database,
  Globe,
  Plane,
  ShieldCheck,
  TrendingUp,
  Wallet,
  AlertTriangle,
  PiggyBank,
} from 'lucide-react';

export type MockupVariant = 'hero' | 'investments' | 'budgets' | 'transactions';

interface AppMockupProps {
  screenshotSrc: string;
  alt: string;
  variant: MockupVariant;
  frame?: 'phone' | 'browser';
  size?: 'md' | 'lg';
}

function HeroFallbackPreview() {
  return (
    <div className="p-5 sm:p-6 space-y-5 bg-[#121212] text-zinc-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-zinc-400">Patrimonio Neto Total</p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums mt-0.5">
            $48,920.50 <span className="text-sm font-medium text-[#10B981]">USD</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
          <Database className="w-3 h-3" />
          Sync Activo
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#1E1E1E] border border-white/[0.06] p-3.5">
          <p className="text-[11px] text-zinc-400">Liquidez disponible</p>
          <p className="font-display text-lg font-semibold text-white tabular-nums mt-1">$14,280.00</p>
          <p className="text-[11px] text-[#10B981] mt-1">+4.2% este mes</p>
        </div>
        <div className="rounded-xl bg-[#1E1E1E] border border-white/[0.06] p-3.5">
          <p className="text-[11px] text-zinc-400">Portafolio + Bienes</p>
          <p className="font-display text-lg font-semibold text-white tabular-nums mt-1">$34,640.50</p>
          <p className="text-[11px] text-zinc-400 mt-1">3 brokers · 1 bien</p>
        </div>
      </div>

      <div className="rounded-xl bg-[#1E1E1E] border border-white/[0.06] p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-zinc-200 flex items-center gap-1.5">
            <Wallet className="w-3.5 h-3.5 text-[#10B981]" />
            Cuentas Líquidas
          </span>
          <span className="text-zinc-500">4 activas</span>
        </div>
        {[
          { name: 'Bancolombia Ahorros', cur: 'COP', amount: '$24,850,000', eq: '≈ $5,890 USD' },
          { name: 'Cuenta Global USD', cur: 'USD', amount: '$6,420.00', eq: 'Disponible' },
          { name: 'Efectivo & Tarjeta', cur: 'EUR', amount: '€1,840.00', eq: '≈ $1,970 USD' },
        ].map((acc) => (
          <div
            key={acc.name}
            className="flex items-center justify-between rounded-lg bg-[#2A2A2A]/75 px-3 py-2.5"
          >
            <div>
              <p className="text-xs font-medium text-white">{acc.name}</p>
              <p className="text-[10px] text-zinc-400">{acc.eq}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-zinc-100 tabular-nums">{acc.amount}</p>
              <p className="text-[10px] text-[#10B981] font-medium">{acc.cur}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestmentsFallbackPreview() {
  return (
    <div className="p-5 sm:p-6 space-y-4 bg-[#121212] text-zinc-100">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-zinc-400">Portafolio Multi-Broker</p>
          <p className="font-display text-2xl font-bold text-white tabular-nums">$28,450.80</p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 px-3 py-1 text-xs font-semibold text-[#10B981] tabular-nums">
          <TrendingUp className="w-3.5 h-3.5" />
          +18.4% Rentabilidad
        </div>
      </div>

      <div className="rounded-xl bg-[#1E1E1E] border border-white/[0.06] p-3.5">
        <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
          <span>Curva de capital</span>
          <span className="text-[#10B981]">Dividendos: +$412.60</span>
        </div>
        <svg viewBox="0 0 320 74" className="w-full h-16 overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="argoChartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 62 C 45 58, 70 46, 110 49 C 150 52, 180 32, 220 26 C 255 21, 285 11, 320 6 L 320 74 L 0 74 Z"
            fill="url(#argoChartGrad)"
          />
          <path
            d="M0 62 C 45 58, 70 46, 110 49 C 150 52, 180 32, 220 26 C 255 21, 285 11, 320 6"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="space-y-2">
        {[
          { ticker: 'VOO', broker: 'Interactive Brokers · ETF', val: '$14,820.00', gain: '+16.2%' },
          { ticker: 'AAPL', broker: 'Trii / Broker Local · Acción', val: '$7,190.80', gain: '+21.8%' },
          { ticker: 'BTC', broker: 'Binance · Cripto', val: '$6,440.00', gain: '+24.1%' },
        ].map((asset) => (
          <div
            key={asset.ticker}
            className="flex items-center justify-between rounded-xl bg-[#1E1E1E] border border-white/[0.06] px-3.5 py-2.5"
          >
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-lg bg-[#2A2A2A] text-xs font-display font-bold text-[#10B981] flex items-center justify-center">
                {asset.ticker}
              </span>
              <div>
                <p className="text-xs font-semibold text-white">{asset.ticker}</p>
                <p className="text-[11px] text-zinc-400">{asset.broker}</p>
              </div>
            </div>
            <div className="text-right tabular-nums">
              <p className="text-xs font-semibold text-white">{asset.val}</p>
              <p className="text-[11px] text-[#10B981]">{asset.gain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BudgetsFallbackPreview() {
  return (
    <div className="p-5 sm:p-6 space-y-4 bg-[#121212] text-zinc-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-zinc-400">Presupuestos del Mes</p>
          <p className="font-display text-xl font-bold text-white">Control por categoría</p>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#2A2A2A] text-zinc-300">Noviembre</span>
      </div>

      <div className="space-y-3 rounded-xl bg-[#1E1E1E] border border-white/[0.06] p-4">
        {[
          { label: 'Alimentación', used: '$340 / $500', pct: 68, warn: false },
          { label: 'Transporte & Movilidad', used: '$176 / $200', pct: 88, warn: true },
          { label: 'Suscripciones & Ocío', used: '$95 / $220', pct: 43, warn: false },
        ].map((b) => (
          <div key={b.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-200 font-medium flex items-center gap-1.5">
                {b.warn && <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}
                {b.label}
              </span>
              <span className="text-zinc-400 tabular-nums">{b.used}</span>
            </div>
            <div className="h-2 rounded-full bg-[#2A2A2A] overflow-hidden">
              <div
                className={`h-full rounded-full ${b.warn ? 'bg-amber-400' : 'bg-[#10B981]'}`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#1E1E1E] border border-[#10B981]/25 p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
            <PiggyBank className="w-4 h-4 text-[#10B981]" />
            Alcancía: Fondo de Emergencia
          </span>
          <span className="text-xs font-semibold text-[#10B981] tabular-nums">78%</span>
        </div>
        <div className="h-2 rounded-full bg-[#2A2A2A] overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#059669] to-[#10B981]" style={{ width: '78%' }} />
        </div>
        <p className="text-[11px] text-zinc-400 tabular-nums">$7,800 USD acumulados de $10,000 USD</p>
      </div>
    </div>
  );
}

function TransactionsFallbackPreview() {
  return (
    <div className="p-5 sm:p-6 space-y-4 bg-[#121212] text-zinc-100">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
          <Globe className="w-3.5 h-3.5" />
          Tasas en vivo
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
          <Plane className="w-3 h-3" />
          Modo Vacaciones · #Europa
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {['COP', 'USD', 'EUR', 'BTC', 'USDT'].map((cur, idx) => (
          <span
            key={cur}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
              idx === 1
                ? 'bg-[#10B981] text-[#121212] border-[#10B981]'
                : 'bg-[#1E1E1E] text-zinc-300 border-white/10'
            }`}
          >
            {cur}
          </span>
        ))}
      </div>

      <div className="space-y-2">
        {[
          { title: 'Hotel Madrid Centro', meta: 'Modo Vacaciones · EUR', val: '-€145.00', neg: true },
          { title: 'Dividendo ETF VOO', meta: 'Interactive Brokers · USD', val: '+$84.20', neg: false },
          { title: 'Supermercado', meta: 'Tarjeta Débito · COP', val: '-$186,400', neg: true },
          { title: 'Aporte USDT', meta: 'Billetera Cripto · USDT', val: '+250.00', neg: false },
        ].map((tx) => (
          <div
            key={tx.title}
            className="flex items-center justify-between rounded-xl bg-[#1E1E1E] border border-white/[0.06] px-3.5 py-2.5"
          >
            <div>
              <p className="text-xs font-medium text-white">{tx.title}</p>
              <p className="text-[10px] text-zinc-400">{tx.meta}</p>
            </div>
            <span
              className={`text-xs font-semibold tabular-nums ${
                tx.neg ? 'text-zinc-200' : 'text-[#10B981]'
              }`}
            >
              {tx.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppMockup({ screenshotSrc, alt, variant, frame = 'phone', size = 'md' }: AppMockupProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const maxWidthClass = size === 'lg' ? 'max-w-[600px]' : 'max-w-[460px]';

  const renderFallback = () => {
    switch (variant) {
      case 'hero':
        return <HeroFallbackPreview />;
      case 'investments':
        return <InvestmentsFallbackPreview />;
      case 'budgets':
        return <BudgetsFallbackPreview />;
      case 'transactions':
        return <TransactionsFallbackPreview />;
    }
  };

  return (
    <div className={`relative mx-auto w-full ${maxWidthClass}`}>
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#10B981]/20 via-[#059669]/10 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-white/10 bg-[#1E1E1E] shadow-2xl shadow-black/60 overflow-hidden">
        {frame === 'browser' ? (
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-white/[0.07]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </div>
            <span className="text-[11px] text-zinc-400 bg-[#2A2A2A] px-3 py-0.5 rounded-full">
              argoapp.pages.dev
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 py-2 bg-[#181818] border-b border-white/[0.07]">
            <span className="text-[10px] font-medium text-zinc-400">ARGO · Web &amp; Android</span>
            <span className="h-1.5 w-10 rounded-full bg-[#2A2A2A]" />
            <span className="text-[10px] text-[#10B981] font-medium">Sync</span>
          </div>
        )}

        {!imgFailed ? (
          <img
            src={screenshotSrc}
            alt={alt}
            loading="lazy"
            className="w-full h-auto block object-cover bg-[#121212]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          renderFallback()
        )}
      </div>
    </div>
  );
}
