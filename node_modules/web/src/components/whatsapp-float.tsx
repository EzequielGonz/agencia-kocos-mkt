import { MessageCircle } from 'lucide-react';
import { CONTACT, whatsappHref } from '@/constants/site';
import { track } from '@/lib/track';

export function WhatsAppFloat() {
  if (!CONTACT.whatsapp) return null;

  return (
    <a
      className="whatsapp-float"
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      onClick={() => track('click_whatsapp', { origen: window.location.pathname })}
    >
      <MessageCircle size={23} aria-hidden="true" />
      <span>Hablemos por WhatsApp</span>
    </a>
  );
}
