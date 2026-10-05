import { Link } from 'react-router';
import { FIRM_NAME } from '@/constants/site';
import { CTA } from '@/constants/cta';
import { formatDate } from '@/lib/text';
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
export function DocHero({ label, h1, h1Em, lead, breadcrumbs, updated, origen, whatsappMessage }: Props) {
  return (
    <section className="doc-hero" id="inicio">
      <div className="container doc-hero-inner">
        <nav className="doc-breadcrumb" aria-label="Ruta de navegación">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path}>
                {index < breadcrumbs.length - 1 ? <Link to={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="hero-eyebrow"><span className="eyebrow-line" /> {label}</div>
        <h1>{h1}{h1Em && <><br /><em>{h1Em}</em></>}</h1>
        <div className="doc-hero-bottom">
          <p>{lead}</p>
          <div className="hero-actions">
            <ContactButtons whatsappMessage={whatsappMessage} origen={origen} primaryLabel={CTA.hero.primary} whatsappLabel={CTA.hero.whatsapp} />
          </div>
        </div>
      </div>
      <div className="trust-strip doc-meta">
        <span>{FIRM_NAME.toUpperCase()}</span>
        <span className="trust-plus">+</span>
        <span>TODO EL PAÍS</span>
        {updated && <><span className="trust-plus">+</span><span>ACTUALIZADO <time dateTime={updated}>{formatDate(updated).toUpperCase()}</time></span></>}
      </div>
    </section>
  );
}
