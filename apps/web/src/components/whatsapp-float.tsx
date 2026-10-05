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
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3.25A12.68 12.68 0 0 0 5.05 22.3L3.4 28.35l6.2-1.62A12.7 12.7 0 1 0 16 3.25Z" />
        <path d="M12.05 10.08c-.27-.6-.56-.61-.82-.62h-.7c-.24 0-.63.09-.96.45-.33.37-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.48 3.98 6.12 5.42 3.03 1.2 3.65.96 4.31.9.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.78-1.95-1.08-2.67Z" />
      </svg>
    </a>
  );
}
