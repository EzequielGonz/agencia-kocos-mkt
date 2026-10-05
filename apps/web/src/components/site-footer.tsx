import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { BrandLogo } from '@/components/brand-logo';
import { CONTACT, whatsappHref } from '@/constants/site';

const socials = [{ label: 'Instagram', url: CONTACT.instagram }, { label: 'Facebook', url: CONTACT.facebook }, { label: 'TikTok', url: CONTACT.tiktok }, { label: 'LinkedIn', url: CONTACT.linkedin }];

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-top"><div><a href="/#inicio" aria-label="Kocos Marketing, volver al inicio"><BrandLogo /></a><p>Kocos Marketing — Diseño, estrategia y presencia digital.</p></div><div className="footer-links"><span>Explorar</span><a href="/#inicio">Inicio</a><Link to="/servicios">Servicios</Link><Link to="/rubros">Rubros</Link><Link to="/guias">Guías</Link><a href="/#planes">Planes</a><a href="/#preguntas">FAQ</a><a href="#contacto">Contacto</a></div><div className="footer-links"><span>Conectemos</span><a href={whatsappHref()} target={CONTACT.whatsapp ? '_blank' : undefined} rel={CONTACT.whatsapp ? 'noopener noreferrer' : undefined}>WhatsApp <ArrowUpRight size={14} /></a>{CONTACT.email && <a href={`mailto:${CONTACT.email}`}>Email <ArrowUpRight size={14} /></a>}{socials.filter(item => item.url).map(item => <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <ArrowUpRight size={14} /></a>)}</div></div><div className="container footer-bottom"><span>© 2026 Kocos Marketing. Todos los derechos reservados.</span><span>Diseñado para ir más allá.</span></div></footer>;
}
