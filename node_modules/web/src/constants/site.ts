export const LOGO_URL = 'https://horizons-cdn.hostinger.com/275ad696-7806-4d8b-9e1a-0ca4a8f99744/ee6bb9c676fd6486656c51b85c38eeb3.png';
export const HERO_URL = 'https://images.hostinger.com/c71752f2-3dd3-4e13-9bfe-a13e3ffcc5b8.png';

/* ============================================================================
 * DATOS DE LA AGENCIA — ÚNICO LUGAR PARA COMPLETAR
 * Home, páginas de servicios y rubros, header, footer y datos para Google leen
 * de acá. Si un valor queda vacío, ese botón o enlace no se muestra.
 * ========================================================================== */

export const FIRM_NAME = 'Kocos Marketing';

/** Dominio definitivo con https y sin barra final. Ej: 'https://www.kocosmarketing.com.ar'. */
export const SITE_URL = '';

// Completar estos datos cuando estén disponibles; nunca se muestran valores ficticios.
export const CONTACT = {
  /** Solo números con código de país. Ej: '5491140000000'. Vacío → los botones llevan al formulario. */
  whatsapp: '',
  email: '',
  instagram: '', // URL completa. Ej: 'https://www.instagram.com/kocosmarketing'
  facebook: '',
  tiktok: '',
  linkedin: '',
};

/** Códigos de verificación de Google Search Console y Bing Webmaster Tools. */
export const VERIFICATION = { google: '', bing: '' };

/** Clave de IndexNow (32 letras/números) para indexación rápida en Bing y otros. */
export const INDEXNOW_KEY = '';

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
