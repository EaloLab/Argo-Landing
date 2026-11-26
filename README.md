# Argo Landing Page (`ARGO: Wealth & Portfolio`)

Landing page oficial general y de ventas (Hotmart) para **Argo**, desarrollada por **Ealo Interactive** y lista para desplegar en **Cloudflare Pages**.

## 1. Desarrollo local

```bash
npm install
npm run dev
```

Compilar para producción:

```bash
npm run build
```

## 2. Configuración centralizada (`src/config.ts`)

Edita [`src/config.ts`](src/config.ts) para actualizar en un solo lugar:

- `urls.hotmartCheckout`: Enlace real de checkout vitalicio en Hotmart.
- `pricing.proPrice` y `pricing.currency`: Precio visible de Argo Pro (por defecto `69.99` `USD`).
- `urls.webApp`: URL de la app web (`https://argoapp.pages.dev`).
- `urls.googlePlay`: Enlace de la app en Google Play.
- `support.email`: Correo de soporte visible en el footer, FAQ y textos legales.

## 3. Logos y capturas reales de la app

Coloca tus archivos de marca dentro de `public/`:

- `public/argo_icon.png`
- `public/argo_logo_512.png`
- `public/ealo_interactive_white.png`

Coloca las 4 capturas reales dentro de `public/screenshots/`:

1. `public/screenshots/hero-accounts.png` (Cuentas / Patrimonio Neto en el Hero)
2. `public/screenshots/investments-brokers.png` (Portafolio de Inversiones y Brokers)
3. `public/screenshots/budgets-goals.png` (Presupuestos y Metas de Ahorro)
4. `public/screenshots/transactions-multicurrency.png` (Transacciones, Multimoneda y Modo Vacaciones)

> Mientras alguna captura o logo no esté en `public/`, la página muestra automáticamente previews visuales integrados con la estética oficial de Argo sin errores de imagen rota.

## 4. Despliegue en Cloudflare Pages

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- El archivo `public/_redirects` ya incluye `/* /index.html 200` para que `/terminos` y `/privacidad` funcionen directamente.
