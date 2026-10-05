/**
 * Modelo de contenido de las páginas SEO.
 *
 * Dentro de cualquier texto se pueden poner enlaces internos con la forma
 * [texto del enlace](/ruta). Así se arma el enlazado de los silos.
 */

export type Silo = 'servicios' | 'rubros' | 'guias';

export type PageKind = 'pilar' | 'guia' | 'servicio' | 'rubro' | 'ciudad' | 'herramienta';

export type Block =
  | { p: string }
  | { h3: string }
  | { list: string[] }
  | { steps: { title: string; text: string }[] }
  | { note: string };

export type Section = { title: string; blocks: Block[] };

export type Faq = { q: string; a: string };

/** Opciones de "¿Qué necesitás?" del formulario (las 4 de la home + 3 nuevas). */
export type ConsultaTipo =
  | 'Página web'
  | 'Redes sociales'
  | 'Web + redes'
  | 'Proyecto personalizado'
  | 'E-commerce'
  | 'Automatización o IA'
  | 'Sistema o software a medida';

export type Page = {
  /** Ruta completa, sin barra final. Ej: '/servicios/automatizaciones'. */
  path: string;
  silo: Silo;
  kind: PageKind;
  /** 'borrador' = no se publica ni entra al sitemap (para enriquecer antes de lanzar). */
  status?: 'publicado' | 'borrador';
  /** Título para Google (≈ 60 caracteres). */
  title: string;
  /** Descripción para Google (120-160 caracteres). */
  description: string;
  /** Texto corto sobre el título (igual que las etiquetas de sección de la home). */
  label: string;
  h1: string;
  /** Segunda línea del título, en el tono dorado de la home. */
  h1Em?: string;
  lead: string;
  /** Nombre corto para listados, migas de pan y enlaces relacionados. */
  nav: string;
  published: string;
  updated: string;
  sections: Section[];
  faqs?: Faq[];
  /** Rutas de artículos relacionados (enlazado interno del silo). */
  related?: string[];
  tipo: ConsultaTipo;
  /** Precarga "Rubro" en el formulario (ej. 'Hotelería'). */
  rubro?: string;
};

export type HubGroup = { title: string; links: { path: string; nav: string; description: string }[] };

export type RelatedLink = { path: string; nav: string; description: string };

export type PageData = {
  page: Page;
  breadcrumbs: { name: string; path: string }[];
  related: RelatedLink[];
  hub: HubGroup[];
};
