import { ArrowUpRight } from 'lucide-react';
import { CONTACT, whatsappHref } from '@/constants/site';
export function FinalCta() {
  return <section className="final-cta"><div className="container final-cta-inner reveal"><span className="section-kicker">/ HAGAMOS QUE PASE</span><h2>¿Listo para llevar tu marca<br /><em>al siguiente nivel?</em></h2><p>Contanos qué necesitás y armamos una solución para tu negocio.</p><div><a href="#contacto" className="button button-orange">Quiero mi proyecto <ArrowUpRight size={19} /></a><a href={whatsappHref()} target={CONTACT.whatsapp ? '_blank' : undefined} rel={CONTACT.whatsapp ? 'noopener noreferrer' : undefined} className="button button-outline">Hablar por WhatsApp <ArrowUpRight size={19} /></a></div></div><span className="cta-corner cta-corner-one" /><span className="cta-corner cta-corner-two" /></section>;
}
