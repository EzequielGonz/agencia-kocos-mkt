import type { Route } from './+types/home';
import { seo, siteOriginFrom } from '@/lib/seo';
import { FIRM_NAME, SHARE_IMAGE_URL } from '@/constants/site';
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
import { Movimiento } from '@/components/home/movimiento';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: `Agencia de marketing digital y desarrollo web | ${FIRM_NAME}`,
    description: 'Agencia de marketing digital en Argentina: páginas web, tiendas online, automatizaciones con IA, sistemas a medida y gestión de redes sociales para empresas.',
    image: SHARE_IMAGE_URL,
    jsonLd: [businessSchema(origin), websiteSchema(origin)],
  });
}
export default function HomePage() {
  return <main><Movimiento /><Hero /><Portfolio /><Approach /><Services /><Plans /><Process /><Difference /><Faq /><FinalCta /><Contact /></main>;
}
