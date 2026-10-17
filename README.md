# Las dos páginas del sindicato que viven fuera de Cloudflare

Servidas por GitHub Pages en `app.solimetromadrid.org`:

- **`/`** — la página de descarga, con los botones de Google Play y App Store. Es la que se
  enlaza en WhatsApp, en la bio de Instagram y en los carteles.
- **`/verificar`** — la que abre el enlace del correo cuando alguien se registra y activa su
  cuenta.

## Por qué vive aquí y no en la app

Los días de partido, los operadores españoles bloquean el rango de IP de Cloudflare donde está
`solimetromadrid.org` y el dominio deja de abrir. El 17/10/2026 pasó en medio de una racha de
sesenta y tres altas: el enlace de verificación vale veinticuatro horas, pero la página no
cargaba y la gente se quedaba sin poder entrar.

GitHub Pages sirve desde otras IP, que no entran en esos bloqueos, y el subdominio apunta aquí
**sin pasar por el proxy de Cloudflare** (la nube gris en el panel de DNS). Por eso abre siempre.

## Qué hace

Nada por su cuenta: coge el `?t=` de la dirección y se lo manda a Supabase, que es quien verifica.
No guarda nada ni tiene servidor detrás. El original vive en `public/verificar.*` del repositorio
de la app; si se cambia allí, hay que traerlo aquí.
