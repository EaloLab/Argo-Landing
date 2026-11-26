# Contexto del Proyecto — Argo Landing (`ARGO: Patrimonio y Finanzas`)

> Documento de referencia técnica, comercial y bitácora completa de decisiones tomadas durante la puesta a punto, despliegue y vinculación de la landing page de **Argo**.

---

## 1. Información General

- **Producto:** ARGO: Patrimonio y Finanzas (*ARGO: Wealth & Portfolio*)
- **Estudio / Autor:** Ealo Interactive (`https://ealo.pages.dev/`)
- **Repositorio GitHub:** `https://github.com/EaloLab/Argo-Landing.git` (rama `main`)
- **Stack:** Vite 6 + React 19 + TypeScript + Tailwind CSS v4 + `lucide-react`
- **Hosting:** Cloudflare Pages (`https://argoweb.pages.dev`)
  - **Build command:** `npm run build` (`tsc -b && vite build`)
  - **Output directory:** `dist`
  - **SPA routing:** `public/_redirects` (`/* /index.html 200` para `/terminos` y `/privacidad`)

---

## 2. Datos y Variables de Entorno (`src/config.ts`)

Todo está centralizado en `src/config.ts` (con tipado de Vite en `src/vite-env.d.ts`) y puede sobreescribirse desde **Cloudflare Pages → Settings → Environment variables** sin editar código (recordando hacer **Retry deployment** después de cambiar una variable):

| Variable en Cloudflare | Valor por defecto actual | Uso en la página |
| :--- | :--- | :--- |
| `VITE_WEB_APP_URL` | `https://argoapp.pages.dev` | Botones "Abrir Argo", navegador mockup y guía de iPhone |
| `VITE_HOTMART_CHECKOUT` | `https://pay.hotmart.com/L108626040K` | Botones de compra "Obtener Argo Pro" |
| `VITE_PRO_PRICE` | `9.99` | Precio visible (`$9.99 USD`) en Hero, Precios, FAQ, CTA y Términos |
| `VITE_GOOGLE_PLAY_URL` | `https://play.google.com/store/apps/details?id=com.ealo.ealowallet` | Enlace a Google Play en Hero y Footer |
| `VITE_STUDIO_URL` | `https://ealo.pages.dev/` | Enlace del logo de Ealo Interactive en el Footer |
| `VITE_SUPPORT_EMAIL` | `luiscarlosealo@gmail.com` | Correo de soporte en Footer, FAQ y páginas legales |

---

## 3. Estructura del Proyecto

- `index.html`: metadatos SEO/OG, fuentes (`Space Grotesk`, `DM Sans`), favicon (`/argo_icon.png`) y `og:image` (`/argo_logo_512.png`).
- `src/App.tsx`: enrutado (`/`, `/terminos`, `/privacidad`), estado de idioma (`ES` / `EN` guardado en `localStorage` `argo_locale`), y control de apertura/scroll de la guía iOS en el FAQ.
- `src/i18n/`:
  - `types.ts`: interfaz `Translations` y tipo `Locale = 'es' | 'en'`.
  - `es.ts`: textos completos en español.
  - `en.ts`: textos completos en inglés.
  - `index.ts`: hook `useTranslations(locale)`.
- `src/components/`:
  - `Navbar.tsx`: navegación, selector de idioma `ES | EN` (escritorio y móvil) y CTAs.
  - `BrandLogos.tsx`: `ArgoLogo` (con subtítulo dinámico `Patrimonio y Finanzas` / `Wealth & Portfolio`) y `EaloLogo` (`h-10 sm:h-11`).
  - `Hero.tsx`: layout `6/6` con `AppMockup` grande (`size="lg"`), CTA a Hotmart, app web, Google Play y botón *"¿Usas iPhone? Instálala desde Safari"*.
  - `AppMockup.tsx`: marcos `phone` / `browser`, fallback visual y visor **lightbox clickeable** (abre la captura en pantalla completa y cierra con `Esc`, `×` o clic fuera).
  - `ArchitectureStrip.tsx`, `FeatureSpotlights.tsx`, `ModulesGrid.tsx`, `PricingSection.tsx`, `FinalCta.tsx`, `LegalPage.tsx`.
  - `FaqSection.tsx`: acordeón controlado; soporta pasos numerados (`steps`) y resaltado de URL (`highlightUrl`).
  - `Footer.tsx`: logo Argo, enlace clickeable en logo Ealo, enlaces legales y soporte.
- `public/`:
  - `argo_icon.png`, `argo_logo_512.png`, `ealo_interactive_white.png`
  - `screenshots/`: `hero-accounts.png`, `investments-brokers.png`, `budgets-goals.png`, `transactions-multicurrency.png`
- `hotmart-package/` *(excluido en `.gitignore`)*:
  - `Manual-de-Instrucciones-y-Autoria-Argo-Pro.pdf`
  - `Abrir-Argo-Web.html`
  - `Argo-Pro-Manual-y-Acceso.zip` (paquete subido a Hotmart)

---

## 4. Configuración de Hotmart

- **Producto:** `Argo Pro — Licencia Perpetua (Finanzas e Inversiones)` (ID `9049692`)
- **HotLink Página de Ventas:** `https://go.hotmart.com/L108626040K` (redirige a la página externa configurada)
- **Link de Pago / Checkout:** `https://pay.hotmart.com/L108626040K`
- **Activación para el cliente:**
  - Automática si compra con el mismo correo de su cuenta en Argo.
  - Manual canjeando el código de transacción (`HP...`) en *Ajustes → Canjear código*.

---

## 5. Bitácora Completa de la Conversación

1. **Revisión inicial de ejecución y `F5`:**
   - El proyecto compilaba (`npm run build`) y servía en Vite (`http://localhost:5173/`), pero al moverlo de carpeta `F5` y `Terminal -> New Terminal` no respondían en Windows por un bloqueo del `ptyHost` / terminal integrada del sistema.
   - Se actualizó `.vscode/tasks.json` (`reveal: "always"`, `panel: "dedicated"`, `cmd.exe /c npm run dev`), se creó `.gitignore` (reduciendo más de 6,000 archivos de `node_modules` en Git) y tras reiniciar el PC el flujo con `F5` quedó funcionando.
2. **Carga de imágenes reales:**
   - Se verificaron los 3 logos en `public/` y las 4 capturas en `public/screenshots/` (`200 image/png`).
3. **Ajustes de Hero y copy:**
   - Se amplió la imagen del Hero (`lg:col-span-6`, `max-w-[600px]`).
   - Se eliminaron todas las menciones técnicas a `SQLite` en `index.html`, `AppMockup.tsx` y `es.ts`, enfocando el mensaje en funcionamiento sin internet y sincronización entre dispositivos.
   - Se hicieron clickeables todas las capturas en `AppMockup.tsx` con visor modal a pantalla completa (`Esc` / `×`).
   - Se corrigió el copy de divisas para indicar soporte a **todas las monedas y criptomonedas** (no solo 5).
4. **Configuración de marca, precio y contacto:**
   - Precio actualizado a `9.99 USD` y conectado a `VITE_PRO_PRICE`.
   - Subtítulo oficial en español fijado en **`PATRIMONIO Y FINANZAS`**.
   - Enlace de Google Play actualizado a `com.ealo.ealowallet`.
   - Correo de soporte actualizado a `luiscarlosealo@gmail.com`.
5. **Soporte para iPhone (PWA):**
   - Se añadió enlace en el Hero (*"¿Usas iPhone? Instálala desde Safari"*) que hace scroll y expande automáticamente la pregunta `#faq-ios-install` en `FaqSection.tsx`.
   - Los 3 pasos en Safari se muestran en lista numerada con `argoapp.pages.dev` destacado en verde esmeralda.
6. **Versión en inglés y selector de idioma:**
   - Se creó `src/i18n/en.ts` con la traducción completa y se agregó el selector `ES | EN` en `Navbar.tsx` (escritorio y móvil) con persistencia en `localStorage`.
7. **Despliegue en Cloudflare Pages y variables de entorno:**
   - Se conectó el repositorio `EaloLab/Argo-Landing` en Cloudflare Pages (`argoweb.pages.dev`).
   - Se conectaron `VITE_WEB_APP_URL`, `VITE_HOTMART_CHECKOUT`, `VITE_GOOGLE_PLAY_URL`, `VITE_STUDIO_URL`, `VITE_PRO_PRICE` y `VITE_SUPPORT_EMAIL` en `src/config.ts`.
   - Se agrandó el logo de `Ealo Interactive` en el footer (`h-10 sm:h-11`) y se enlazó a `https://ealo.pages.dev/`.
8. **Finalización en Hotmart:**
   - Se generó el PDF *Manual de Instrucciones y Autoría* + `Abrir-Argo-Web.html` dentro de `hotmart-package/Argo-Pro-Manual-y-Acceso.zip`.
   - Se envió el producto a revisión en Hotmart y se vinculó el checkout real `https://pay.hotmart.com/L108626040K` en `src/config.ts`.
