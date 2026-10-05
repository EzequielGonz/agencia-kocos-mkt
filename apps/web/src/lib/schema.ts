/** Datos estructurados (JSON-LD): no se ven, le explican a Google qué es la agencia y cada página. */
import { CONTACT, FIRM_NAME, LOGO_URL, SOCIAL_LINKS } from '@/constants/site';

const CONTEXT = 'https://schema.org';
export const firmId = (origin: string) => `${origin}/#agencia`;

export function businessSchema(origin: string) {
  return {
    '@context': CONTEXT,
    '@type': 'ProfessionalService',
    '@id': firmId(origin),
    name: FIRM_NAME,
    description: 'Agencia de marketing digital en Argentina: desarrollo web, e-commerce, automatizaciones con IA, sistemas a medida y gestión de redes sociales para empresas.',
    url: `${origin}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    email: CONTACT.email || undefined,
    areaServed: { '@type': 'Country', name: 'Argentina' },
    knowsAbout: ['Desarrollo web', 'Landing pages', 'E-commerce', 'Automatización de procesos', 'Inteligencia artificial', 'CRM', 'Software a medida', 'Gestión de redes sociales', 'Marketing digital'],
    sameAs: SOCIAL_LINKS.length ? SOCIAL_LINKS.map(link => link.url) : undefined,
  };
}

export function websiteSchema(origin: string) {
  return { '@context': CONTEXT, '@type': 'WebSite', '@id': `${origin}/#sitio`, url: `${origin}/`, name: FIRM_NAME, inLanguage: 'es-AR', publisher: { '@id': firmId(origin) } };
}

export function breadcrumbSchema(origin: string, items: { name: string; path: string }[]) {
  return { '@context': CONTEXT, '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${origin}${item.path}` })) };
}

export function articleSchema(origin: string, article: { path: string; title: string; description: string; updated: string; published: string }) {
  const url = `${origin}${article.path}`;
  return {
    '@context': CONTEXT, '@type': 'Article', '@id': `${url}#articulo`, mainEntityOfPage: url,
    headline: article.title.slice(0, 110), description: article.description, inLanguage: 'es-AR',
    datePublished: article.published, dateModified: article.updated, image: LOGO_URL,
    author: { '@id': firmId(origin) }, publisher: { '@id': firmId(origin) },
  };
}

/** Para las páginas de servicio: le indica a Google que es un servicio que ofrece la agencia. */
export function serviceSchema(origin: string, service: { path: string; name: string; description: string }) {
  return {
    '@context': CONTEXT, '@type': 'Service', name: service.name, description: service.description,
    url: `${origin}${service.path}`, provider: { '@id': firmId(origin) }, areaServed: { '@type': 'Country', name: 'Argentina' },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': CONTEXT, '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })),
  };
}
