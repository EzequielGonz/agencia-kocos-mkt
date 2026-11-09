import { Link } from 'react-router';
import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { CONTACT, whatsappHref } from '@/constants/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="/#inicio" aria-label="Kocos Marketing, volver al inicio"><BrandLogo /></a>
          <p>Webs, tiendas online, WhatsApp con CRM, automatizaciones y redes para pymes de Argentina.</p>
          <a className="footer-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Hablar por WhatsApp</a>
        </div>
        <nav className="footer-links" aria-label="Servicios">
          <h3>Servicios</h3>
          <Link to="/servicios">Servicios</Link>
          <Link to="/rubros">Rubros</Link>
          <a href="/#planes">Planes</a>
          <Link to="/guias">Guías</Link>
        </nav>
        <nav className="footer-links" aria-label="Ayuda">
          <h3>Ayuda</h3>
          <a href="/#preguntas">Preguntas frecuentes</a>
          <a href="/#contacto">Dejar mis datos</a>
        </nav>
        <div className="footer-links footer-contact">
          <h3>Contacto</h3>
          {CONTACT.phone && <a href={`tel:+${CONTACT.whatsapp}`}><Phone size={16} strokeWidth={1.6} aria-hidden="true" /> {CONTACT.phone}</a>}
          {CONTACT.email && <a href={`mailto:${CONTACT.email}`}><Mail size={16} strokeWidth={1.6} aria-hidden="true" /> {CONTACT.email}</a>}
          {CONTACT.instagram && <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} strokeWidth={1.6} aria-hidden="true" /> @kocosmkt</a>}
          {CONTACT.facebook && <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={16} strokeWidth={1.6} aria-hidden="true" /> Facebook</a>}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Kocos Marketing</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
