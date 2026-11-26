import { config, getFormattedProPrice } from '../config';
import type { Translations } from './types';

const formattedPrice = getFormattedProPrice();

export const es: Translations = {
  nav: {
    features: 'Funciones',
    pricing: 'Gratis vs. Pro',
    faq: 'Preguntas frecuentes',
    openArgo: 'Abrir Argo',
    getPro: 'Obtener Argo Pro',
    menuLabel: 'Abrir menú de navegación',
  },
  hero: {
    badge: 'ARGO: Patrimonio y Finanzas · Offline-First · Web & Android',
    titleStart: 'Tus finanzas, ',
    titleHighlight: 'patrimonio e inversiones',
    titleEnd: ' en un solo lugar.',
    subtitle:
      'Registra gastos al instante incluso sin internet, sigue tu portafolio multi-broker y opera en cualquier moneda o criptomoneda con sincronización automática entre Web y Android.',
    primaryCta: `Obtener Argo Pro — ${formattedPrice}`,
    primarySubnote: 'Pago único · Licencia perpetua · Sin mensualidades en Web',
    secondaryCta: 'Abrir Argo',
    androidCta: 'Disponible en Google Play',
    trustPoints: [
      'Funciona 100% sin internet y sincroniza al reconectar',
      'Sincroniza Web y Android con la misma cuenta',
      `Garantía de ${config.pricing.guaranteeDays} días respaldada por Hotmart`,
    ],
  },
  architecture: {
    items: [
      {
        badge: 'Sincronización',
        title: 'Tu dinero siempre al día',
        description:
          'Tus movimientos, presupuestos y saldos cargan al instante incluso sin conexión. Cuando vuelves a estar en línea, todo se sincroniza automáticamente.',
      },
      {
        badge: 'Multiplataforma',
        title: 'Web y Android conectados',
        description:
          'Usa Argo desde el navegador en argoapp.pages.dev o desde tu celular Android con una sola cuenta y el mismo progreso siempre actualizado.',
      },
      {
        badge: 'Propiedad de Datos',
        title: 'Reportes PDF y respaldo CSV',
        description:
          'Tu información financiera es tuya. Genera extractos contables limpios en PDF o exporta respaldos completos en CSV cuando lo necesites.',
      },
    ],
  },
  spotlights: {
    eyebrow: 'Argo en acción',
    title: 'Diseñado para el control real de tu dinero',
    subtitle:
      'Desde el registro diario en segundos hasta la visión completa de tu patrimonio neto y tus inversiones en múltiples brokers.',
    items: [
      {
        id: 'investments',
        tag: 'Portafolio e Inversiones',
        title: 'Todos tus brokers, acciones, ETFs y cripto en un tablero',
        description:
          'Centraliza múltiples cuentas de inversión sin hojas de cálculo frágiles. Registra compras, ventas, dividendos y comisiones para conocer la rentabilidad real de tu capital.',
        bullets: [
          'Soporte para múltiples brokers y clases de activos (acciones, ETFs y criptomonedas)',
          'Seguimiento de dividendos recibidos, comisiones pagadas y costo promedio',
          'Gráficos claros de evolución y rentabilidad de tu portafolio',
        ],
        frame: 'browser',
      },
      {
        id: 'budgets',
        tag: 'Presupuestos y Metas',
        title: 'Límites mensuales claros y alcancías para tus objetivos',
        description:
          'Anticípate antes de excederte. Configura presupuestos por categoría con alertas visuales y construye metas de ahorro paso a paso.',
        bullets: [
          'Alertas visuales progresivas cuando un presupuesto se acerca al límite',
          'Alcancías dedicadas por objetivo con aporte acumulado y porcentaje de avance',
          'Vista rápida de flujo disponible frente a compromisos del mes',
        ],
        frame: 'phone',
      },
      {
        id: 'transactions',
        tag: 'Multimoneda y Modo Vacaciones',
        title: 'Control diario en cualquier moneda y viajes sin descuadrar tu base',
        description:
          'Opera con tasas de cambio en vivo para todas las divisas del mundo y criptomonedas. Cuando viajes, activa el Modo Vacaciones y agrupa tus gastos por etiqueta en la moneda local.',
        bullets: [
          'Tasas en vivo para todas las divisas y criptomonedas sin conversiones manuales',
          'Registro diario ultrarrápido de efectivo, bancos, tarjetas y billeteras',
          'Modo Vacaciones aislado por etiqueta de viaje sin alterar tu moneda base diaria',
        ],
        frame: 'phone',
      },
    ],
  },
  modules: {
    eyebrow: '8 módulos integrados',
    title: 'Todo lo que necesitas para dominar tu patrimonio',
    subtitle:
      'Cada módulo de Argo trabaja conectado entre sí dentro de una interfaz oscura, limpia y sin distracciones.',
    items: [
      {
        id: 'accounts',
        title: 'Cuentas Líquidas y Transacciones',
        description:
          'Administra efectivo, bancos, tarjetas de crédito y billeteras digitales con registro diario rápido y sin límites.',
      },
      {
        id: 'multicurrency',
        title: 'Multimoneda en Vivo',
        description:
          'Soporte para todas las divisas y criptomonedas con tasas de cambio automáticas actualizadas.',
        tag: 'Pro',
      },
      {
        id: 'investments',
        title: 'Portafolio de Inversiones y Brokers',
        description:
          'Múltiples brokers, acciones, ETFs y criptomonedas con compras/ventas, dividendos, comisiones y gráficos de rentabilidad.',
      },
      {
        id: 'budgets',
        title: 'Presupuestos y Metas de Ahorro',
        description:
          'Control mensual por categorías con alertas visuales y alcancías de ahorro enfocadas en tus objetivos.',
      },
      {
        id: 'debts',
        title: 'Deudas y Préstamos',
        description:
          'Seguimiento ordenado de dinero prestado o por pagar a amigos, familiares o entidades financieras.',
      },
      {
        id: 'networth',
        title: 'Patrimonio Neto y Créditos',
        description:
          'Registra bienes (inmuebles, vehículos), pasivos y utiliza el simulador de cuotas e intereses.',
      },
      {
        id: 'vacation',
        title: 'Modo Vacaciones',
        description:
          'Registra gastos de viaje en otra divisa agrupados por etiqueta sin alterar tus reportes en moneda base.',
        tag: 'Pro',
      },
      {
        id: 'reports',
        title: 'Reportes Contables PDF y CSV',
        description:
          'Exporta extractos listos para imprimir o compartir en PDF y genera respaldos completos en CSV.',
        tag: 'Pro',
      },
    ],
  },
  pricing: {
    eyebrow: 'Planes transparentes',
    title: 'Empieza gratis o desbloquea Argo Pro de por vida',
    subtitle:
      'Prueba la experiencia completa gratis en la web y pasa a Licencia Perpetua con un único pago, sin suscripciones mensuales obligatorias.',
    freePlan: {
      name: 'Plan Gratis',
      badge: 'Sin tarjeta de crédito',
      price: '$0',
      period: 'Para siempre',
      description: 'Ideal para probar el flujo offline-first de Argo y organizar tus primeras cuentas.',
      cta: 'Abrir Argo Gratis',
      features: [
        'Transacciones diarias ilimitadas',
        'Hasta 3 cuentas líquidas en moneda base',
        'Hasta 3 presupuestos mensuales',
        '1 meta de ahorro (alcancía)',
        'Hasta 2 deudas o préstamos',
        '1 bien en patrimonio neto',
        '1 broker con 1 activo de inversión de prueba',
      ],
    },
    proPlan: {
      name: 'Argo Pro — Licencia Perpetua',
      badge: 'Pago Único · Acceso Vitalicio',
      price: formattedPrice,
      period: 'Pago único (sin mensualidades en Web)',
      description:
        'Desbloquea toda la potencia de Argo en Web y Android con la misma cuenta y para siempre.',
      cta: `Obtener Argo Pro — ${formattedPrice}`,
      ctaNote: `Pago único de ${formattedPrice} procesado de forma segura por Hotmart.`,
      features: [
        'Cuentas líquidas, presupuestos y metas ilimitadas',
        'Brokers, acciones, ETFs y criptoactivos ilimitados',
        'Deudas, préstamos y bienes en patrimonio ilimitados',
        'Multimoneda en vivo (todas las divisas y criptomonedas)',
        'Registro de dividendos, comisiones y gráficos avanzados',
        'Modo Vacaciones por etiqueta y divisa de viaje',
        'Exportación de extractos en PDF y respaldo completo CSV',
        'Acceso vitalicio en Web y Android con la misma cuenta',
      ],
    },
    activation: {
      title: 'Activación instantánea tras tu compra',
      sameEmailTitle: 'Mismo correo de tu cuenta Argo',
      sameEmailDesc:
        'Si pagas en Hotmart con el mismo correo que usas en Argo, tu licencia Pro se activa automáticamente al iniciar sesión.',
      otherEmailTitle: '¿Compraste con otro correo?',
      otherEmailDesc:
        'Ingresa tu código de transacción de Hotmart (formato HP...) en Ajustes → Canjear código dentro de Argo y listo.',
    },
    guarantee: {
      title: `Garantía de ${config.pricing.guaranteeDays} días`,
      statement: `Garantía incondicional de satisfacción de ${config.pricing.guaranteeDays} días respaldada por Hotmart.`,
      description:
        'Prueba Argo Pro sin riesgo. Si durante los primeros 7 días sientes que no es para ti, solicitas el reembolso directo desde Hotmart y recuperas el 100% de tu dinero sin preguntas.',
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas antes de empezar',
    subtitle:
      'Todo lo que necesitas saber sobre la licencia perpetua de Argo, la sincronización entre dispositivos y la garantía de Hotmart.',
    items: [
      {
        question: '¿Es un pago único o mensual?',
        answer: `Argo Pro se adquiere mediante un pago único de ${formattedPrice} en esta página a través de Hotmart. Obtienes una licencia perpetua de por vida sin mensualidades ni cobros recurrentes en la versión Web (y sincronizada con tu misma cuenta en Android).`,
      },
      {
        question: '¿Funciona en Android y Web?',
        answer:
          'Sí. Puedes usar Argo directamente en el navegador desde argoapp.pages.dev (Windows, Mac, Linux, iOS o Android) y también en la app nativa de Android en Google Play. Al iniciar sesión con la misma cuenta, tu licencia Pro y tus datos sincronizan entre ambas plataformas.',
      },
      {
        question: '¿Cómo recibo mi acceso tras pagar?',
        answer:
          'La activación es inmediata. Si realizas el pago en Hotmart con el mismo correo de tu cuenta en Argo, el plan Pro se activa automáticamente al iniciar sesión. Si usaste un correo distinto, recibirás un código de transacción (HP...) que puedes canjear al instante en Ajustes → Canjear código.',
      },
      {
        question: '¿Mis datos están seguros offline y en la nube?',
        answer:
          'Sí. Tus registros se guardan primero en tu dispositivo para funcionar sin internet y con respuesta instantánea. Cuando tienes conexión, se sincronizan de forma segura en la nube para respaldar tu cuenta entre Web y Android.',
      },
      {
        question: '¿Cómo funciona la garantía de 7 días?',
        answer: `Tu compra cuenta con una garantía incondicional de satisfacción de ${config.pricing.guaranteeDays} días respaldada directamente por Hotmart. Si por cualquier motivo Argo Pro no cumple tus expectativas dentro de ese plazo, puedes solicitar el reembolso completo desde la plataforma de Hotmart o escribiéndonos a ${config.support.email}.`,
      },
    ],
  },
  finalCta: {
    badge: `Licencia Perpetua · Garantía de ${config.pricing.guaranteeDays} días`,
    title: 'Toma el control definitivo de tu patrimonio hoy',
    subtitle:
      'Empieza gratis en segundos o asegura tu acceso vitalicio a Argo Pro por un único pago y sin mensualidades.',
    primaryCta: `Obtener Argo Pro — ${formattedPrice}`,
    secondaryCta: 'Abrir Argo',
    note: `Pago único de ${formattedPrice} · Activación inmediata · Respaldado por Hotmart`,
  },
  footer: {
    description:
      'ARGO: Patrimonio y Finanzas. Aplicación de finanzas personales, patrimonio neto y portafolio de inversiones offline-first para Web y Android.',
    productTitle: 'Plataforma',
    legalTitle: 'Legal',
    supportTitle: 'Soporte directo',
    openWebApp: 'Abrir Argo Web',
    googlePlay: 'Descargar en Google Play',
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
    supportLabel: 'Correo de soporte',
    developedBy: 'Desarrollado por',
    hotmartNote: `Pagos procesados de forma segura por Hotmart con garantía incondicional de ${config.pricing.guaranteeDays} días.`,
    copyright: `© ${config.brand.year} ${config.brand.studioName}. Todos los derechos reservados.`,
  },
  legal: {
    backHome: 'Volver a la página principal',
    lastUpdated: 'Última actualización: noviembre de 2026',
    terms: {
      title: 'Términos y Condiciones de Uso',
      sections: [
        {
          heading: '1. Identificación del titular',
          body: [
            `${config.brand.appFullName} ("Argo") es un software desarrollado y operado por ${config.brand.studioName}. Para cualquier consulta comercial, técnica o de soporte puedes escribir a ${config.support.email}.`,
          ],
        },
        {
          heading: '2. Naturaleza del servicio',
          body: [
            'Argo es una herramienta digital de registro, organización y análisis de finanzas personales, patrimonio neto, presupuestos, deudas y seguimiento informativo de portafolios de inversión.',
            'Argo no es una entidad financiera, asesor de inversiones certificado, corredor de bolsa ni custodio de fondos. La información mostrada tiene fines exclusivamente informativos y de gestión personal.',
          ],
        },
        {
          heading: '3. Plan Gratis y Licencia Perpetua Argo Pro',
          body: [
            'El Plan Gratis permite utilizar funciones esenciales de Argo con límites en el número de cuentas, presupuestos, metas, deudas, bienes y activos de prueba.',
            `Argo Pro se comercializa en esta web mediante un pago único de ${formattedPrice} procesado por Hotmart. Esta compra otorga una licencia perpetua personal e intransferible para utilizar las funciones Pro en la aplicación Web (${config.urls.webApp}) y en la aplicación Android vinculadas a la misma cuenta de usuario.`,
          ],
        },
        {
          heading: '4. Activación de la licencia y uso aceptable',
          body: [
            'La activación se realiza de forma automática cuando el correo utilizado en Hotmart coincide con el correo registrado en Argo, o manualmente mediante el código de transacción (HP...) en Ajustes → Canjear código.',
            'Queda prohibida la reventa, cesión comercial, ingeniería inversa o compartición masiva de una misma licencia individual entre múltiples usuarios.',
          ],
        },
        {
          heading: '5. Garantía y política de reembolsos',
          body: [
            `Todas las compras de Argo Pro realizadas a través de Hotmart cuentan con una garantía incondicional de satisfacción de ${config.pricing.guaranteeDays} días calendario contados a partir de la confirmación del pago.`,
            'Durante ese periodo puedes solicitar la devolución íntegra del importe directamente desde el portal de Hotmart o contactando a nuestro correo de soporte.',
          ],
        },
        {
          heading: '6. Disponibilidad y soporte',
          body: [
            `${config.brand.studioName} realiza esfuerzos continuos para mantener la disponibilidad de la sincronización en la nube y las actualizaciones de seguridad. Gracias a que los datos se guardan localmente en el dispositivo, el usuario conserva acceso operativo a sus registros incluso sin conexión.`,
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad',
      sections: [
        {
          heading: '1. Responsable del tratamiento',
          body: [
            `${config.brand.studioName}, creador de ${config.brand.appFullName}, respeta la privacidad financiera de sus usuarios. Para ejercer derechos de acceso, rectificación o eliminación de datos, contáctanos en ${config.support.email}.`,
          ],
        },
        {
          heading: '2. Datos que recopilamos y sincronización',
          body: [
            'Argo almacena tus transacciones, cuentas, presupuestos, metas, deudas, patrimonio e inversiones localmente en tu dispositivo para garantizar rapidez y funcionamiento sin internet.',
            'Cuando utilizas una cuenta con sincronización en la nube, almacenamos los datos estrictamente necesarios (correo de autenticación y tus registros financieros sincronizados) para mantener tu información disponible entre Web y Android.',
          ],
        },
        {
          heading: '3. Uso de la información y pagos',
          body: [
            'No vendemos, alquilamos ni compartimos tu información financiera personal con terceros con fines publicitarios.',
            'Los pagos de Argo Pro se procesan íntegramente a través de Hotmart. Nosotros no almacenamos números completos de tarjeta de crédito ni credenciales bancarias; únicamente recibimos la confirmación de transacción y el correo/código necesario para activar tu licencia.',
          ],
        },
        {
          heading: '4. Exportación, respaldo y eliminación de datos',
          body: [
            'Puedes exportar tus movimientos y reportes en formatos PDF y CSV en cualquier momento desde la aplicación.',
            `Si deseas eliminar tu cuenta y los registros sincronizados en la nube, puedes solicitarlo escribiendo desde tu correo registrado a ${config.support.email}.`,
          ],
        },
        {
          heading: '5. Cambios en esta política',
          body: [
            'Cualquier actualización relevante de esta Política de Privacidad se publicará en esta misma página indicando la fecha de última actualización.',
          ],
        },
      ],
    },
  },
};
