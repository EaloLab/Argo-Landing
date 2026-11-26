/**
 * Archivo único de configuración de Argo Landing.
 * Edita aquí el enlace de checkout de Hotmart, el precio, el enlace de Google Play,
 * el correo de soporte y las rutas de logos/capturas.
 */
export const config = {
  brand: {
    appName: 'Argo',
    appFullName: 'ARGO: Wealth & Portfolio',
    studioName: 'Ealo Interactive',
    year: 2026,
  },
  urls: {
    webApp: 'https://argoapp.pages.dev',
    hotmartCheckout: 'https://pay.hotmart.com/TU_CHECKOUT_VITALICIO',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ealointeractive.argo',
  },
  pricing: {
    proPrice: 69.99,
    currency: 'USD',
    guaranteeDays: 7,
  },
  support: {
    email: 'soporte@ealointeractive.com',
  },
  assets: {
    logos: {
      icon: '/argo_icon.png',
      logo512: '/argo_logo_512.png',
      studioWhite: '/ealo_interactive_white.png',
    },
    screenshots: {
      heroAccounts: '/screenshots/hero-accounts.png',
      investmentsBrokers: '/screenshots/investments-brokers.png',
      budgetsGoals: '/screenshots/budgets-goals.png',
      transactionsMulticurrency: '/screenshots/transactions-multicurrency.png',
    },
  },
} as const;

export function getFormattedProPrice(): string {
  return `$${config.pricing.proPrice.toFixed(2)} ${config.pricing.currency}`;
}
