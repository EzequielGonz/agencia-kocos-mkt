import { ArrowUpRight } from 'lucide-react';
import { CONTACT, whatsappHref } from '@/constants/site';

/**
 * Llamado a la acción entre secciones (21/10). Cada uno abre WhatsApp con un
 * mensaje propio de la sección, así el agente sabe qué le interesa a la persona.
 */
export function SeccionCta({ titulo, texto, mensaje, boton = 'Hablar por WhatsApp' }: { titulo: string; texto: string; mensaje: string; boton?: string }) {
  const externo = Boolean(CONTACT.whatsapp);
  return (
    <section className="seccion-cta" aria-label={titulo}>
      <div className="container seccion-cta-inner reveal">
        <div>
          <h2 className="seccion-cta-titulo">{titulo}</h2>
          <p className="seccion-cta-texto">{texto}</p>
        </div>
        <div className="seccion-cta-acciones">
          <a href={whatsappHref(mensaje)} target={externo ? '_blank' : undefined} rel={externo ? 'noopener noreferrer' : undefined} className="button button-orange">
            {boton} <ArrowUpRight size={18} />
          </a>
          <a href="#contacto" className="button button-outline">Dejar mis datos</a>
        </div>
      </div>
    </section>
  );
}
