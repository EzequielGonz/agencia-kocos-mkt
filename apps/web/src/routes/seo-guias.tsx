import type { Route } from './+types/seo-guias';
import { HubGroups } from '@/components/articulo/article-page';
import { DocHero } from '@/components/articulo/doc-hero';
import { ArticleFinalCta } from '@/components/articulo/final-cta';
import { LeadForm } from '@/components/articulo/lead-form';
import { getGuiasHub } from '@/content/index.server';
import { withBrand } from '@/lib/page-meta';
import { breadcrumbSchema, businessSchema } from '@/lib/schema';
import { seo, siteOriginFrom } from '@/lib/seo';

const PATH = '/guias';
const BREADCRUMBS = [{ name: 'Inicio', path: '/' }, { name: 'Guías', path: PATH }];
const WHATSAPP_MESSAGE = 'Hola, leí las guías de su web y quiero consultar por un proyecto.';

export function loader() {
  return { groups: getGuiasHub() };
}

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: withBrand('Guías de marketing digital para empresas'),
    description: 'Guías para decidir sobre tu presencia digital: cuánto cuesta una web, qué automatizar, IA para empresas, redes sociales y cómo elegir una agencia.',
    path: PATH,
    jsonLd: [businessSchema(origin), breadcrumbSchema(origin, BREADCRUMBS)],
  });
}

export default function GuiasPage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="doc-page">
      <DocHero
        label="/ GUÍAS Y RECURSOS"
        h1="Todo para decidir"
        h1Em="con información clara."
        lead="Guías sobre webs, automatizaciones, inteligencia artificial y redes sociales, pensadas para dueños y equipos de empresas."
        breadcrumbs={BREADCRUMBS}
        origen={PATH}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
      <div className="doc-body">
        <div className="container">
          <div className="doc-article doc-article-wide"><HubGroups groups={loaderData.groups} /></div>
        </div>
      </div>
      <ArticleFinalCta whatsappMessage={WHATSAPP_MESSAGE} origen={PATH} />
      <LeadForm need="Proyecto personalizado" origen={PATH} />
    </main>
  );
}
