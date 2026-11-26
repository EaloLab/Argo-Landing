/**
 * Archivo único de configuración de Argo Landing.
 * Edita aquí el enlace de checkout de Hotmart, el precio, el enlace de Google Play,
 * el correo de soporte y las rutas de logos/capturas.
 */
const envProPrice = Number(import.meta.env.VITE_PRO_PRICE);
const envWebApp = import.meta.env.VITE_WEB_APP_URL?.trim();
const envHotmart = import.meta.env.VITE_HOTMART_CHECKOUT?.trim();
const envGooglePlay = import.meta.env.VITE_GOOGLE_PLAY_URL?.trim();
const envSupportEmail = import.meta.env.VITE_SUPPORT_EMAIL?.trim();

export const config = {
  brand: {
    appName: 'Argo',
    appFullName: 'ARGO: Patrimonio y Finanzas',
    studioName: 'Ealo Interactive',
    year: 2026,
  },
  urls: {
    webApp: envWebApp || 'https://argoapp.pages.dev',
    hotmartCheckout: envHotmart || 'https://pay.hotmart.com/TU_CHECKOUT_VITALICIO',
    googlePlay: envGooglePlay || 'https://play.google.com/store/apps/details?id=com.ealo.ealowallet',
  },
  pricing: {
    proPrice: Number.isFinite(envProPrice) && envProPrice > 0 ? envProPrice : 9.99,
    currency: 'USD',
    guaranteeDays: 7,
  },
  support: {
    email: envSupportEmail || 'luiscarlosealo@gmail.com',
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

export function getWebAppDomain(): string {
  return config.urls.webApp.replace(/^https?:\/\//i, '').replace(/\/+$/, '');
}
