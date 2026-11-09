import { Link } from 'react-router';
import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

type Props = {
  label: string;
  h1: string;
  h1Em?: string;
  lead: string;
  breadcrumbs: { name: string; path: string }[];
  updated?: string;
  origen: string;
  whatsappMessage: string;
};

/** Cabecera oscura con la tipografía, etiqueta y botones del hero de la home. */
export function DocHero({ h1, h1Em, lead, breadcrumbs, origen, whatsappMessage }: Props) {
  return (
    <section className="doc-hero" id="inicio">
      <div className="container doc-hero-inner">
        {breadcrumbs.length > 1 && <Link className="doc-volver" to={breadcrumbs[breadcrumbs.length - 2].path}>← {breadcrumbs[breadcrumbs.length - 2].name}</Link>}
        
        <h1>{h1}{h1Em && <><br /><em>{h1Em}</em></>}</h1>
        <div className="doc-hero-bottom">
          <p>{lead}</p>
          <div className="hero-actions">
            <ContactButtons whatsappMessage={whatsappMessage} origen={origen} primaryLabel={CTA.hero.primary} whatsappLabel={CTA.hero.whatsapp} />
          </div>
        </div>
      </div>
    </section>
  );
}
