/** Imágenes servidas desde el propio sitio (el CDN de Hostinger dejó de responder). */
export const LOGO_URL = '/logo-marca.png';
export const HERO_URL = '/img/marketing-hero.webp';
/** Imagen para compartir el enlace (WhatsApp, redes): 1200 × 630. */
export const SHARE_IMAGE_URL = '/img/og-compartir.jpg';

/* ============================================================================
 * DATOS DE LA AGENCIA — ÚNICO LUGAR PARA COMPLETAR
 * Home, páginas de servicios y rubros, header, footer y datos para Google leen
 * de acá. Si un valor queda vacío, ese botón o enlace no se muestra.
 * ========================================================================== */

export const FIRM_NAME = 'Kocos Marketing';

/** Dominio canónico definitivo; puede sobrescribirse con SITE_URL en el entorno. */
export const SITE_URL = 'https://kocosmkt.com';
/** Logo con dominio completo, para los datos estructurados. */
export const LOGO_ABSOLUTE_URL = `${SITE_URL}${LOGO_URL}`;

// Completar estos datos cuando estén disponibles; nunca se muestran valores ficticios.
export const CONTACT = {
  /** Solo números con código de país. Ej: '5491140000000'. Vacío → los botones llevan al formulario. */
  /** Línea de WhatsApp conectada al CRM (responde el agente de Marketing). */
  whatsapp: '5491172502391',
  /** Teléfono tal como se muestra. */
  phone: '11 7250-2391',
  email: 'agenciakocos@hotmail.com',
  instagram: 'https://www.instagram.com/kocosmkt/',
  facebook: 'https://www.facebook.com/profile.php?id=61595100234671',
  tiktok: '',
  linkedin: '',
};

/** Códigos de verificación de Google Search Console y Bing Webmaster Tools. */
export const VERIFICATION = { google: '', bing: '' };

/** Clave de IndexNow (32 letras/números) para indexación rápida en Bing y otros. */
export const INDEXNOW_KEY = '699a3be95b8f40eacd576659cd1c1ccc';

/**
 * Rangos de inversión del formulario de las páginas nuevas (sirven para
 * priorizar proyectos grandes). Actualizarlos cuando cambien los precios.
 */
export const BUDGET_RANGES = [
  'Hasta $500.000',
  '$500.000 a $1.500.000',
  '$1.500.000 a $5.000.000',
  'Más de $5.000.000',
  'Prefiero conversarlo',
];

export function whatsappHref(message = 'Hola, quiero consultar por un proyecto para mi marca.') {
  const digits = CONTACT.whatsapp.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : '#contacto';
}

export const SOCIAL_LINKS = [
  { label: 'Instagram', url: CONTACT.instagram },
  { label: 'Facebook', url: CONTACT.facebook },
  { label: 'TikTok', url: CONTACT.tiktok },
  { label: 'LinkedIn', url: CONTACT.linkedin },
].filter(link => link.url);
