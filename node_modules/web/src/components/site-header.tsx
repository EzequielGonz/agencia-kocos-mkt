import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { BrandLogo } from '@/components/brand-logo';

// "Servicios" y "Rubros" llevan a las secciones SEO (Servicios reemplaza al ancla
// de la home). Las anclas llevan "/" para funcionar desde cualquier página;
// el botón "Quiero mi proyecto" queda en "#contacto" porque todas las páginas
// tienen su formulario con ese id.
const links: { label: string; href: string; route?: boolean }[] = [{ label: 'Inicio', href: '/#inicio' }, { label: 'Servicios', href: '/servicios', route: true }, { label: 'Rubros', href: '/rubros', route: true }, { label: 'Planes', href: '/#planes' }, { label: 'Preguntas frecuentes', href: '/#preguntas' }];

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const next = window.scrollY;
      setHidden(next > 130 && next > previous + 3 && !open);
      if (next < previous - 3) setHidden(false);
      previous = next;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);
  return <header className={`site-header ${hidden ? 'site-header--hidden' : ''}`}><div className="header-inner">
    <a href="/#inicio" className="logo-link" aria-label="Kocos Marketing, ir al inicio" onClick={() => setOpen(false)}><BrandLogo /></a>
    <nav className={`header-nav ${open ? 'header-nav--open' : ''}`} aria-label="Navegación principal">{links.map(link => link.route ? <Link key={link.href} to={link.href} prefetch="intent" onClick={() => setOpen(false)}>{link.label}</Link> : <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="mobile-nav-cta" href="#contacto" onClick={() => setOpen(false)}>Quiero mi proyecto <ArrowUpRight size={17} /></a></nav>
    <a href="#contacto" className="header-cta">Quiero mi proyecto <ArrowUpRight size={16} /></a>
    <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X size={24} /> : <Menu size={24} />}</button>
  </div></header>;
}
