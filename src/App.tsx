import { useEffect, useState } from 'react';
import { ArchitectureStrip } from './components/ArchitectureStrip';
import { FaqSection } from './components/FaqSection';
import { FeatureSpotlights } from './components/FeatureSpotlights';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LegalPage } from './components/LegalPage';
import { ModulesGrid } from './components/ModulesGrid';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { useTranslations } from './i18n';
import type { Locale } from './i18n/types';

type RouteView = 'home' | 'terms' | 'privacy';

function getInitialLocale(): Locale {
  const saved = window.localStorage.getItem('argo_locale');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function getRouteFromPath(pathname: string): RouteView {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '');
  if (normalized === '/terminos') return 'terms';
  if (normalized === '/privacidad') return 'privacy';
  return 'home';
}

export function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const t = useTranslations(locale);
  const [route, setRoute] = useState<RouteView>(() => getRouteFromPath(window.location.pathname));
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('argo_locale', locale);
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateHome = (sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setRoute('home');
    }
    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateLegal = (page: 'terms' | 'privacy') => {
    const path = page === 'terms' ? '/terminos' : '/privacidad';
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setRoute(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openIosGuide = () => {
    const iosIdx = t.faq.items.findIndex((item) => item.id === 'ios-install');
    if (iosIdx !== -1) {
      setOpenFaqIndex(iosIdx);
    }
    requestAnimationFrame(() => {
      document.getElementById('faq-ios-install')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-zinc-100">
      <Navbar t={t} locale={locale} onChangeLocale={setLocale} onNavigateHome={navigateHome} />

      {route === 'home' ? (
        <main className="flex-1">
          <Hero t={t} onOpenIosGuide={openIosGuide} />
          <ArchitectureStrip t={t} />
          <FeatureSpotlights t={t} />
          <ModulesGrid t={t} />
          <PricingSection t={t} />
          <FaqSection
            t={t}
            openIndex={openFaqIndex}
            onToggle={(idx) => setOpenFaqIndex((prev) => (prev === idx ? null : idx))}
          />
          <FinalCta t={t} />
        </main>
      ) : (
        <div className="flex-1">
          <LegalPage t={t} type={route} onBackHome={() => navigateHome()} />
        </div>
      )}

      <Footer t={t} onNavigateLegal={navigateLegal} />
    </div>
  );
}

export default App;
