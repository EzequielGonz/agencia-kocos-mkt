# Estrategia SEO — Kocos Marketing

Se sumaron **45 páginas de contenido** en tres silos, sin cambiar el diseño de la home. Todas usan la misma estética que el inicio: negro, crema y naranja, Outfit y Manrope, los kickers "/ TEXTO", la sombra naranja desplazada, el mismo formulario y la misma banda final.

El alcance es **nacional**. El contenido apunta a empresas con capacidad de inversión y a proyectos más grandes que una web simple: automatizaciones, IA, CRM y sistemas a medida. Los planes de la home siguen siendo la puerta de entrada para negocios que empiezan.

## 1. Qué se agregó

| Silo | URL | Páginas |
|---|---|---|
| Servicios | `/servicios` | 12 servicios (web, landing, e-commerce, rediseño, mantenimiento, redes, contenido, estrategia, automatizaciones, asistentes de WhatsApp con IA, CRM y software a medida) y 10 ciudades en `/agencia-de-marketing-digital/...` |
| Rubros | `/rubros` | 12 industrias: hoteles, estudios jurídicos, salud, inmobiliarias, concesionarias, gastronomía, retail, educación, industria B2B, profesionales, seguros y prepagas, construcción |
| Guías | `/guias` | **Calculadora de ahorro por automatización** y 8 guías para decidir (cuánto cuesta una web, agencia o freelancer, a medida o plantilla, landing o sitio, qué automatizar, IA para empresas, retorno de redes, cómo elegir agencia) |

Cada página tiene:
- Título y descripción para Google, migas de pan e índice lateral.
- **CTA a mitad del texto**, con el estilo del bloque "¿Necesitás algo diferente?".
- Preguntas frecuentes y páginas relacionadas.
- La banda final.
- **El formulario de la home, precargado según la página.** Por ejemplo, en Automatizaciones llega con "Automatización o IA" y en Hoteles con el rubro completo.
- Datos estructurados (ProfessionalService, Service, Article, BreadcrumbList y FAQPage). Todas entran solas en `/sitemap.xml`.

## 2. Dónde completar los datos

**`apps/web/src/constants/site.ts`** es el archivo que ya existía y ahora centraliza todo:
- `CONTACT`: WhatsApp, email, Instagram, Facebook, TikTok y LinkedIn. Mientras el WhatsApp esté vacío, los botones llevan al formulario, igual que hoy. Al completarlo, cada página abre WhatsApp con un mensaje que dice desde qué página escribe la persona.
- `SITE_URL`, `VERIFICATION` (Google y Bing) e `INDEXNOW_KEY`.
- `BUDGET_RANGES`: los rangos de inversión del formulario de las páginas nuevas. Conviene actualizarlos cuando cambien los precios.

**`apps/web/src/constants/cta.ts`** tiene los textos de todos los llamados a la acción.

## 3. Base de datos

El formulario **ya guardaba en PocketBase** (colección `inquiries`) y sigue igual. Se sumó una migración (`apps/pocketbase/pb_migrations/1790800000_inquiries_nuevas_opciones.js`) que hace dos cosas:
- Agrega tres opciones a "¿Qué necesitás?": E-commerce, Automatización o IA, y Sistema o software a medida.
- Suma el campo `origen`, con la página de la que vino cada consulta.

La migración está probada sobre el PocketBase del proyecto: acepta las opciones nuevas, guarda el origen y la home sigue funcionando.

Para pasar a otra base, cambiá `LEADS_PROVIDER` en **`apps/web/src/lib/leads.ts`**:
- `'supabase'`: ejecutar `supabase/inquiries.sql`, que tiene los mismos campos más `estado` y `notas` para seguimiento comercial, y completar `SUPABASE_CONFIG`.
- `'webhook'`: Make, Zapier, n8n o un CRM.

Aplica tanto al formulario de la home como a los de las páginas nuevas. Si instalan Google Tag Manager, quedan listos los eventos `click_whatsapp` y `lead_enviado`.

## 4. Cambios en la home (sin tocar el diseño)

- **Header**:
  - "Servicios" ahora lleva a la sección de servicios en lugar del ancla, y se sumó "Rubros".
  - Las anclas empiezan con `/#` para funcionar desde cualquier página.
  - Entre 761 y 1000 px se oculta "Inicio" para que el menú no se apile. El logo cumple esa función.
- **Footer**: suma Servicios, Rubros y Guías.
- **Metadatos**: título orientado a "agencia de marketing digital y desarrollo web" y datos estructurados de la agencia.
- **Formulario**: mismo diseño y campos. Ahora envía a través de `leads.ts`, que por defecto sigue usando PocketBase.

## 5. Contenido: cómo crecer

- **Casos de éxito**: es lo que más va a potenciar el SEO y la conversión. Cuando tengan proyectos para mostrar, suman en la sección de trabajos de la home y como párrafos en las páginas de rubro.
- **Ciudades**: dicen que trabajan a distancia con todo el país. Si tienen clientes en alguna ciudad, conviene contarlo ahí. Para agregar ciudades, se suman en `guias-ciudades.server.ts`.
- **Precios**: el contenido no publica precios de proyectos a medida. La guía de cuánto cuesta una web deriva a los planes de la home para lo simple y a una propuesta para lo grande.
- **Nuevas páginas**: sumarlas al archivo del silo en `apps/web/src/content/` y agregar su ruta a un grupo de `HUBS` en `index.server.ts`. Para enlaces internos dentro del texto: `[texto](/ruta)`.

## 6. Checklist de lanzamiento

1. Completar `CONTACT` y `SITE_URL` en `site.ts`.
2. Conectar el dominio. Mientras el sitio esté en un dominio temporal de Hostinger, `robots.txt` bloquea la indexación a propósito.
3. Verificar el sitio en **Google Search Console** y enviar `/sitemap.xml`. Hacer lo mismo en **Bing Webmaster Tools**.
4. Cargar `INDEXNOW_KEY`, publicar y correr `node scripts/indexnow.mjs https://tudominio`.
5. Crear el **Google Business Profile** (categoría "Agencia de marketing") y el perfil de **LinkedIn** de la agencia. Para B2B, LinkedIn es clave.
6. En Search Console, pedir la indexación manual de los pilares, automatizaciones, asistentes de WhatsApp con IA, software a medida y las guías de costos.
