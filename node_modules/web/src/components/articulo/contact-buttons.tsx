import { ArrowUpRight } from 'lucide-react';
import { CONTACT, whatsappHref } from '@/constants/site';
import { track } from '@/lib/track';

type Props = { whatsappMessage: string; origen: string; primaryLabel: string; whatsappLabel: string; /** 'dark' sobre fondo negro, 'light' sobre crema. */ tone?: 'dark' | 'light' };

/** Botón principal al formulario + WhatsApp, con las mismas clases que la home. */
export function ContactButtons({ whatsappMessage, origen, primaryLabel, whatsappLabel, tone = 'dark' }: Props) {
  const hasWhatsapp = Boolean(CONTACT.whatsapp);
  return (
    <>
      <a href="#contacto" className="button button-orange">{primaryLabel} <ArrowUpRight size={19} /></a>
      <a
        href={whatsappHref(whatsappMessage)}
        target={hasWhatsapp ? '_blank' : undefined}
        rel={hasWhatsapp ? 'noopener noreferrer' : undefined}
        className={`button ${tone === 'dark' ? 'button-outline' : 'button-dark'}`}
        onClick={hasWhatsapp ? () => track('click_whatsapp', { origen }) : undefined}
      >
        {whatsappLabel} <ArrowUpRight size={19} />
      </a>
    </>
  );
}
