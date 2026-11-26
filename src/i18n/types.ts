export type Locale = 'es';

export type ModuleId =
  | 'accounts'
  | 'multicurrency'
  | 'investments'
  | 'budgets'
  | 'debts'
  | 'networth'
  | 'vacation'
  | 'reports';

export interface Translations {
  nav: {
    features: string;
    pricing: string;
    faq: string;
    openArgo: string;
    getPro: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    primaryCta: string;
    primarySubnote: string;
    secondaryCta: string;
    androidCta: string;
    iosCta: string;
    trustPoints: string[];
  };
  architecture: {
    items: Array<{
      title: string;
      description: string;
      badge: string;
    }>;
  };
  spotlights: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: 'investments' | 'budgets' | 'transactions';
      tag: string;
      title: string;
      description: string;
      bullets: string[];
      frame: 'phone' | 'browser';
    }>;
  };
  modules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: ModuleId;
      title: string;
      description: string;
      tag?: string;
    }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    freePlan: {
      name: string;
      badge: string;
      price: string;
      period: string;
      description: string;
      cta: string;
      features: string[];
    };
    proPlan: {
      name: string;
      badge: string;
      price: string;
      period: string;
      description: string;
      cta: string;
      ctaNote: string;
      features: string[];
    };
    activation: {
      title: string;
      sameEmailTitle: string;
      sameEmailDesc: string;
      otherEmailTitle: string;
      otherEmailDesc: string;
    };
    guarantee: {
      title: string;
      statement: string;
      description: string;
    };
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      id?: string;
      question: string;
      answer: string;
      steps?: Array<{
        before?: string;
        highlightUrl?: string;
        after: string;
      }>;
      note?: string;
    }>;
  };
  finalCta: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  footer: {
    description: string;
    productTitle: string;
    legalTitle: string;
    supportTitle: string;
    openWebApp: string;
    googlePlay: string;
    terms: string;
    privacy: string;
    supportLabel: string;
    developedBy: string;
    hotmartNote: string;
    copyright: string;
  };
  legal: {
    backHome: string;
    lastUpdated: string;
    terms: {
      title: string;
      sections: Array<{ heading: string; body: string[] }>;
    };
    privacy: {
      title: string;
      sections: Array<{ heading: string; body: string[] }>;
    };
  };
}
