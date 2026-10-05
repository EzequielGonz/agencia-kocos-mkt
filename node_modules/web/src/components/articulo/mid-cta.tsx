import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

/** CTA a mitad del artículo: el bloque negro con sombra naranja de "¿Necesitás algo diferente?". */
export function MidCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <aside className="doc-cta" aria-label="Hablemos de tu proyecto">
      <span className="section-kicker">{CTA.mid.kicker}</span>
      <p className="doc-cta-title">{CTA.mid.title}</p>
      <p className="doc-cta-text">{CTA.mid.text}</p>
      <div className="doc-cta-actions">
        <ContactButtons whatsappMessage={whatsappMessage} origen={origen} primaryLabel={CTA.mid.primary} whatsappLabel={CTA.mid.whatsapp} />
      </div>
    </aside>
  );
}
