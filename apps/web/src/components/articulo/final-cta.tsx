import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

/** Banda final: misma estructura y clases que la de la home (con las esquinas naranjas). */
export function ArticleFinalCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <span className="section-kicker">{CTA.final.kicker}</span>
        <h2>{CTA.final.title}<br /><em>{CTA.final.titleEm}</em></h2>
        <p>{CTA.final.text}</p>
        <div><ContactButtons whatsappMessage={whatsappMessage} origen={origen} primaryLabel={CTA.final.primary} whatsappLabel={CTA.final.whatsapp} /></div>
      </div>
      <span className="cta-corner cta-corner-one" />
      <span className="cta-corner cta-corner-two" />
    </section>
  );
}
