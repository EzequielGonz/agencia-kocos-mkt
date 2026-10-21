import type { Route } from './+types/home';
import { seo, siteOriginFrom } from '@/lib/seo';
import { FIRM_NAME, HERO_URL } from '@/constants/site';
import { businessSchema, websiteSchema } from '@/lib/schema';
import { Hero } from '@/components/home/hero';
import { Approach } from '@/components/home/approach';
import { Services } from '@/components/home/services';
import { Plans } from '@/components/home/plans';
import { Process } from '@/components/home/process';
import { Difference } from '@/components/home/difference';
import { Portfolio } from '@/components/home/portfolio';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';
import { Contact } from '@/components/home/contact';
import { SeccionCta } from '@/components/seccion-cta';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: `Agencia de marketing digital y desarrollo web | ${FIRM_NAME}`,
    description: 'Agencia de marketing digital en Argentina: páginas web, tiendas online, automatizaciones con IA, sistemas a medida y gestión de redes sociales para empresas.',
    image: HERO_URL,
    jsonLd: [businessSchema(origin), websiteSchema(origin)],
  });
}
export default function HomePage() {
  return <main><Hero /><Approach /><Services />
    <SeccionCta titulo="¿Qué servicio necesita tu marca?" texto="Contanos tu negocio y te decimos por dónde empezar: redes, diseño, web o campañas." mensaje="Hola Kocos Marketing, vi sus servicios y quiero saber cuál le conviene a mi negocio." />
    <Plans />
    <SeccionCta titulo="¿Dudás entre dos planes?" texto="Te ayudamos a elegir el que encaja con tu etapa y tu inversión." mensaje="Hola Kocos Marketing, quiero que me asesoren sobre qué plan me conviene." boton="Elegir mi plan" />
    <Process /><Difference /><Portfolio />
    <SeccionCta titulo="¿Querés resultados como estos?" texto="Mirá cómo trabajamos con otras marcas y armemos la tuya." mensaje="Hola Kocos Marketing, vi sus trabajos y quiero algo así para mi marca." />
    <Faq /><FinalCta /><Contact /></main>;
}
