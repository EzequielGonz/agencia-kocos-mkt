/**
 * Registro central de las páginas SEO (solo servidor: el contenido no se suma
 * al JavaScript del visitante).
 *
 * Para agregar una página: sumala al archivo del silo y agregá su ruta a un
 * grupo de HUBS para que quede enlazada desde el pilar.
 */
import type { HubGroup, Page, PageData, RelatedLink } from './types';
import { serviciosPilar, servicioPages, serviciosPresencia, serviciosMarca, serviciosEficiencia } from './servicios.server';
import { rubroPages, rubrosPilar } from './rubros.server';
import { calculadoraPage, ciudadPages, guiaPages } from './guias-ciudades.server';

const S = '/servicios';
const R = '/rubros';

const ALL: Page[] = [serviciosPilar, ...servicioPages, ...ciudadPages, rubrosPilar, ...rubroPages, calculadoraPage, ...guiaPages];

const PUBLISHED = ALL.filter(page => page.status !== 'borrador');
const BY_PATH = new Map(PUBLISHED.map(page => [page.path, page]));

const toLink = (page: Page): RelatedLink => ({ path: page.path, nav: page.nav, description: page.description });
const linksFor = (paths: string[]) =>
  paths.map(path => BY_PATH.get(path)).filter((page): page is Page => Boolean(page)).map(toLink);
const paths = (pages: Page[]) => pages.map(page => page.path);

const HUBS: Record<string, { title: string; paths: string[] }[]> = {
  [S]: [
    { title: 'Web y e-commerce', paths: serviciosPresencia },
    { title: 'Automatización, IA y sistemas', paths: serviciosEficiencia },
    { title: 'Redes y estrategia', paths: serviciosMarca },
    { title: 'Guías para decidir', paths: [calculadoraPage.path, ...paths(guiaPages)] },
    { title: 'Dónde trabajamos', paths: paths(ciudadPages) },
  ],
  [R]: [
    { title: 'Soluciones por rubro', paths: paths(rubroPages) },
    { title: 'Servicios más pedidos', paths: [`${S}/automatizaciones`, `${S}/chatbots-whatsapp-ia`, `${S}/desarrollo-web`, `${S}/gestion-de-redes-sociales`] },
  ],
};

const resolveHub = (groups: { title: string; paths: string[] }[]): HubGroup[] =>
  groups.map(group => ({ title: group.title, links: linksFor(group.paths) })).filter(group => group.links.length > 0);

const PILLAR_BY_SILO: Record<Page['silo'], { name: string; path: string }> = {
  servicios: { name: 'Servicios', path: S },
  rubros: { name: 'Rubros', path: R },
  guias: { name: 'Guías', path: '/guias' },
};

function relatedFor(page: Page): RelatedLink[] {
  const chosen = linksFor(page.related ?? []).filter(link => link.path !== page.path);
  if (chosen.length >= 3) return chosen.slice(0, 3);
  const taken = new Set([page.path, ...chosen.map(link => link.path)]);
  const candidates = PUBLISHED.filter(other => other.silo === page.silo && !taken.has(other.path) && other.kind !== 'pilar');
  const sameKind = candidates.filter(other => other.kind === page.kind);
  const rest = candidates.filter(other => other.kind !== page.kind && other.kind !== 'ciudad');
  return [...chosen, ...sameKind.map(toLink), ...rest.map(toLink)].slice(0, 3);
}

export function getPageData(path: string): PageData | null {
  const page = BY_PATH.get(path.replace(/\/+$/, '') || '/');
  if (!page) return null;
  const breadcrumbs = [{ name: 'Inicio', path: '/' }];
  if (page.kind !== 'pilar') breadcrumbs.push(PILLAR_BY_SILO[page.silo]);
  breadcrumbs.push({ name: page.nav, path: page.path });
  return {
    page,
    breadcrumbs,
    related: page.kind === 'pilar' ? [] : relatedFor(page),
    hub: page.kind === 'pilar' ? resolveHub(HUBS[page.path] ?? []) : [],
  };
}

/** Todo el contenido publicado, agrupado, para /guias. */
export function getGuiasHub(): HubGroup[] {
  return [
    { title: 'Guías para decidir', links: linksFor([calculadoraPage.path, ...paths(guiaPages)]) },
    { title: 'Servicios', links: linksFor([S, ...paths(servicioPages)]) },
    { title: 'Soluciones por rubro', links: linksFor([R, ...paths(rubroPages)]) },
    { title: 'Dónde trabajamos', links: linksFor(paths(ciudadPages)) },
  ].filter(group => group.links.length > 0);
}

export function sitemapEntries(): { path: string; lastmod: string }[] {
  const latest = PUBLISHED.reduce((max, page) => (page.updated > max ? page.updated : max), '');
  return [...PUBLISHED.map(page => ({ path: page.path, lastmod: page.updated })), { path: '/guias', lastmod: latest }];
}
