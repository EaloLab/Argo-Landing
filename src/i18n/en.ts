import { config, getFormattedProPrice } from '../config';
import type { Translations } from './types';

const formattedPrice = getFormattedProPrice();

export const en: Translations = {
  nav: {
    brandSubtitle: 'Wealth & Portfolio',
    features: 'Features',
    pricing: 'Free vs. Pro',
    faq: 'FAQ',
    openArgo: 'Open Argo',
    getPro: 'Get Argo Pro',
    menuLabel: 'Open navigation menu',
  },
  hero: {
    badge: 'ARGO: Wealth & Portfolio · Web, Android & iPhone',
    titleStart: 'Your finances, ',
    titleHighlight: 'net worth & investments',
    titleEnd: ' in one place.',
    subtitle:
      'Log expenses instantly even without internet, track your multi-broker portfolio, and manage any currency or cryptocurrency with automatic sync across Web and Android.',
    primaryCta: `Get Argo Pro — ${formattedPrice}`,
    primarySubnote: 'One-time payment · Lifetime license · No Web subscriptions',
    secondaryCta: 'Open Argo',
    androidCta: 'Available on Google Play',
    iosCta: 'Using iPhone? Install from Safari',
    trustPoints: [
      'Works 100% offline and syncs when back online',
      'Syncs Web and Android with the same account',
      `${config.pricing.guaranteeDays}-day guarantee backed by Hotmart`,
    ],
  },
  architecture: {
    items: [
      {
        badge: 'Sync',
        title: 'Your money always up to date',
        description:
          'Your transactions, budgets, and balances load instantly even offline. As soon as you reconnect, everything syncs automatically.',
      },
      {
        badge: 'Cross-Platform',
        title: 'Web, Android & iPhone connected',
        description:
          'Use Argo in your browser at argoapp.pages.dev, on your Android phone, or install it as a Web App on iPhone with one always-synced account.',
      },
      {
        badge: 'Data Ownership',
        title: 'PDF reports & CSV backups',
        description:
          'Your financial data belongs to you. Generate clean accounting statements in PDF or export full CSV backups whenever you need.',
      },
    ],
  },
  spotlights: {
    eyebrow: 'Argo in action',
    title: 'Built for real control over your money',
    subtitle:
      'From logging daily expenses in seconds to seeing your full net worth and investments across multiple brokers.',
    items: [
      {
        id: 'investments',
        tag: 'Portfolio & Investments',
        title: 'All your brokers, stocks, ETFs, and crypto in one dashboard',
        description:
          'Centralize multiple investment accounts without fragile spreadsheets. Track buys, sells, dividends, and fees to see your true capital return.',
        bullets: [
          'Support for multiple brokers and asset classes (stocks, ETFs, and cryptocurrencies)',
          'Tracking of received dividends, paid fees, and average cost',
          'Clear charts showing portfolio growth and performance',
        ],
        frame: 'browser',
      },
      {
        id: 'budgets',
        tag: 'Budgets & Goals',
        title: 'Clear monthly limits and savings jars for your goals',
        description:
          'Stay ahead before overspending. Set category budgets with visual alerts and build savings goals step by step.',
        bullets: [
          'Progressive visual alerts when a budget approaches its limit',
          'Dedicated goal jars with accumulated contributions and progress percentage',
          'Quick view of available cash flow vs. monthly commitments',
        ],
        frame: 'phone',
      },
      {
        id: 'transactions',
        tag: 'Multi-Currency & Vacation Mode',
        title: 'Daily control in any currency and trips without messing up your base',
        description:
          'Operate with live exchange rates for all world currencies and cryptocurrencies. When traveling, turn on Vacation Mode and group expenses by tag in the local currency.',
        bullets: [
          'Live exchange rates for all currencies and crypto without manual conversions',
          'Ultra-fast daily logging for cash, banks, cards, and wallets',
          'Isolated Vacation Mode by trip tag without altering your daily base currency',
        ],
        frame: 'phone',
      },
    ],
  },
  modules: {
    eyebrow: '8 integrated modules',
    title: 'Everything you need to master your net worth',
    subtitle:
      'Every module in Argo works seamlessly together inside a clean, dark, distraction-free interface.',
    items: [
      {
        id: 'accounts',
        title: 'Liquid Accounts & Transactions',
        description:
          'Manage cash, banks, credit cards, and digital wallets with fast, unlimited daily tracking.',
      },
      {
        id: 'multicurrency',
        title: 'Live Multi-Currency',
        description:
          'Support for all world currencies and cryptocurrencies with automatic up-to-date exchange rates.',
        tag: 'Pro',
      },
      {
        id: 'investments',
        title: 'Investment Portfolio & Brokers',
        description:
          'Multiple brokers, stocks, ETFs, and crypto with buys/sells, dividends, fees, and return charts.',
      },
      {
        id: 'budgets',
        title: 'Budgets & Savings Goals',
        description:
          'Monthly category tracking with visual alerts and goal-oriented savings jars.',
      },
      {
        id: 'debts',
        title: 'Debts & Loans',
        description:
          'Organized tracking of money lent to or owed to friends, family, or financial institutions.',
      },
      {
        id: 'networth',
        title: 'Net Worth & Credit Simulator',
        description:
          'Track physical assets (real estate, vehicles), liabilities, and use the installment and interest simulator.',
      },
      {
        id: 'vacation',
        title: 'Vacation Mode',
        description:
          'Log travel expenses in another currency grouped by tag without distorting your base-currency reports.',
        tag: 'Pro',
      },
      {
        id: 'reports',
        title: 'PDF & CSV Accounting Reports',
        description:
          'Export print-ready PDF statements to share or keep, and generate full CSV backups.',
        tag: 'Pro',
      },
    ],
  },
  pricing: {
    eyebrow: 'Transparent pricing',
    title: 'Start for free or unlock Argo Pro for life',
    subtitle:
      'Try the full experience free on the web and upgrade to a Lifetime License with a single payment—no mandatory monthly subscriptions.',
    freePlan: {
      name: 'Free Plan',
      badge: 'No credit card',
      price: '$0',
      period: 'Forever',
      description: 'Ideal to try Argo’s offline-first flow and organize your first accounts.',
      cta: 'Open Argo Free',
      features: [
        'Unlimited daily transactions',
        'Up to 3 liquid accounts in base currency',
        'Up to 3 monthly budgets',
        '1 savings goal jar',
        'Up to 2 debts or loans',
        '1 asset in net worth',
        '1 broker with 1 trial investment asset',
      ],
    },
    proPlan: {
      name: 'Argo Pro — Lifetime License',
      badge: 'One-Time Payment · Lifetime Access',
      price: formattedPrice,
      period: 'One-time payment (no Web subscriptions)',
      description:
        'Unlock the full power of Argo on Web and Android with the same account, forever.',
      cta: `Get Argo Pro — ${formattedPrice}`,
      ctaNote: `One-time payment of ${formattedPrice} securely processed by Hotmart.`,
      features: [
        'Unlimited liquid accounts, budgets, and goals',
        'Unlimited brokers, stocks, ETFs, and crypto assets',
        'Unlimited debts, loans, and net worth assets',
        'Live multi-currency (all fiat & cryptocurrencies)',
        'Dividend tracking, fees, and advanced charts',
        'Vacation Mode by trip tag and currency',
        'PDF statement exports and full CSV backups',
        'Lifetime access on Web and Android with one account',
      ],
    },
    activation: {
      title: 'Instant activation after purchase',
      sameEmailTitle: 'Same email as your Argo account',
      sameEmailDesc:
        'If you check out on Hotmart with the same email you use in Argo, your Pro license activates automatically when you sign in.',
      otherEmailTitle: 'Bought with a different email?',
      otherEmailDesc:
        'Enter your Hotmart transaction code (HP... format) in Settings → Redeem code inside Argo and you’re set.',
    },
    guarantee: {
      title: `${config.pricing.guaranteeDays}-day guarantee`,
      statement: `Unconditional ${config.pricing.guaranteeDays}-day satisfaction guarantee backed by Hotmart.`,
      description:
        'Try Argo Pro risk-free. If within the first 7 days you feel it’s not for you, request a full refund directly from Hotmart and get 100% of your money back—no questions asked.',
    },
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Clear answers before you get started',
    subtitle:
      'Everything you need to know about the Argo lifetime license, cross-device sync, and Hotmart’s guarantee.',
    items: [
      {
        question: 'Is it a one-time payment or monthly?',
        answer: `Argo Pro is purchased via a one-time payment of ${formattedPrice} on this page through Hotmart. You get a lifetime perpetual license with no monthly fees or recurring charges on Web (and synced with your same account on Android).`,
      },
      {
        question: 'Does it work on Android, iPhone, and Web?',
        answer:
          'Yes. You can use Argo directly in your browser at argoapp.pages.dev (Windows, Mac, Linux, iOS, or Android) and also in the native Android app on Google Play. Signing in with the same account syncs your Pro license and data across all your devices.',
      },
      {
        id: 'ios-install',
        question: 'How do I install Argo on iPhone (iOS)?',
        answer:
          'You can install Argo on your iPhone as a Web App without going through the App Store by following these 3 steps:',
        steps: [
          {
            before: 'Open ',
            highlightUrl: 'argoapp.pages.dev',
            after: ' in Safari.',
          },
          {
            after: 'Tap the Share button (square with an upward arrow).',
          },
          {
            after: 'Select "Add to Home Screen".',
          },
        ],
        note: 'It will appear with its icon on your home screen and open full-screen synced with your account.',
      },
      {
        question: 'How do I receive access after paying?',
        answer:
          'Activation is immediate. If you pay on Hotmart using the same email as your Argo account, the Pro plan activates automatically when you log in. If you used a different email, you will receive a transaction code (HP...) that you can redeem instantly in Settings → Redeem code.',
      },
      {
        question: 'Is my data safe offline and in the cloud?',
        answer:
          'Yes. Your records are stored first on your device so Argo works offline with instant speed. When you have an internet connection, they sync securely to the cloud to back up your account across Web and Android.',
      },
      {
        question: 'How does the 7-day guarantee work?',
        answer: `Your purchase is covered by an unconditional ${config.pricing.guaranteeDays}-day satisfaction guarantee backed directly by Hotmart. If for any reason Argo Pro does not meet your expectations within that period, you can request a full refund through Hotmart or by emailing us at ${config.support.email}.`,
      },
    ],
  },
  finalCta: {
    badge: `Lifetime License · ${config.pricing.guaranteeDays}-Day Guarantee`,
    title: 'Take full control of your net worth today',
    subtitle:
      'Start free in seconds or lock in lifetime access to Argo Pro with a single payment and no monthly fees.',
    primaryCta: `Get Argo Pro — ${formattedPrice}`,
    secondaryCta: 'Open Argo',
    note: `One-time payment of ${formattedPrice} · Instant activation · Backed by Hotmart`,
  },
  footer: {
    description:
      'ARGO: Wealth & Portfolio. Personal finance, net worth, and investment portfolio app for Web and Android.',
    productTitle: 'Platform',
    legalTitle: 'Legal',
    supportTitle: 'Direct support',
    openWebApp: 'Open Argo Web',
    googlePlay: 'Download on Google Play',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    supportLabel: 'Support email',
    developedBy: 'Developed by',
    hotmartNote: `Payments securely processed by Hotmart with an unconditional ${config.pricing.guaranteeDays}-day guarantee.`,
    copyright: `© ${config.brand.year} ${config.brand.studioName}. All rights reserved.`,
  },
  legal: {
    backHome: 'Back to home page',
    lastUpdated: 'Last updated: November 2026',
    terms: {
      title: 'Terms and Conditions of Use',
      sections: [
        {
          heading: '1. Owner identification',
          body: [
            `ARGO: Wealth & Portfolio ("Argo") is software developed and operated by ${config.brand.studioName}. For any commercial, technical, or support inquiries, you can write to ${config.support.email}.`,
          ],
        },
        {
          heading: '2. Nature of the service',
          body: [
            'Argo is a digital tool for recording, organizing, and analyzing personal finances, net worth, budgets, debts, and informational tracking of investment portfolios.',
            'Argo is not a financial institution, certified investment advisor, stockbroker, or custodian of funds. Information displayed is strictly for informational and personal management purposes.',
          ],
        },
        {
          heading: '3. Free Plan and Argo Pro Lifetime License',
          body: [
            'The Free Plan lets you use essential Argo features with limits on the number of accounts, budgets, goals, debts, assets, and trial investments.',
            `Argo Pro is offered on this website via a one-time payment of ${formattedPrice} processed by Hotmart. This purchase grants a personal, non-transferable lifetime license to use Pro features on the Web application (${config.urls.webApp}) and the Android application linked to the same user account.`,
          ],
        },
        {
          heading: '4. License activation and acceptable use',
          body: [
            'Activation is automatic when the email used on Hotmart matches the email registered in Argo, or manual using the transaction code (HP...) in Settings → Redeem code.',
            'Reselling, commercial transfer, reverse engineering, or mass sharing of a single individual license among multiple users is prohibited.',
          ],
        },
        {
          heading: '5. Guarantee and refund policy',
          body: [
            `All Argo Pro purchases made through Hotmart include an unconditional ${config.pricing.guaranteeDays}-calendar-day satisfaction guarantee counted from payment confirmation.`,
            'During that period, you may request a full refund directly from the Hotmart portal or by contacting our support email.',
          ],
        },
        {
          heading: '6. Availability and support',
          body: [
            `${config.brand.studioName} makes continuous efforts to maintain cloud sync availability and security updates. Because data is stored locally on the device, the user retains operational access to their records even offline.`,
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: '1. Data controller',
          body: [
            `${config.brand.studioName}, creator of ARGO: Wealth & Portfolio, respects the financial privacy of its users. To exercise rights of access, rectification, or deletion of data, contact us at ${config.support.email}.`,
          ],
        },
        {
          heading: '2. Data we collect and synchronization',
          body: [
            'Argo stores your transactions, accounts, budgets, goals, debts, net worth, and investments locally on your device to ensure speed and offline functionality.',
            'When you use an account with cloud sync, we store strictly necessary data (authentication email and your synced financial records) to keep your information available across Web and Android.',
          ],
        },
        {
          heading: '3. Use of information and payments',
          body: [
            'We do not sell, rent, or share your personal financial information with third parties for advertising purposes.',
            'Argo Pro payments are processed entirely through Hotmart. We do not store full credit card numbers or banking credentials; we only receive transaction confirmation and the email/code needed to activate your license.',
          ],
        },
        {
          heading: '4. Data export, backup, and deletion',
          body: [
            'You can export your transactions and reports in PDF and CSV formats at any time from the application.',
            `If you wish to delete your account and cloud-synced records, you can request it by writing from your registered email to ${config.support.email}.`,
          ],
        },
        {
          heading: '5. Changes to this policy',
          body: [
            'Any relevant updates to this Privacy Policy will be published on this same page indicating the last updated date.',
          ],
        },
      ],
    },
  },
};
