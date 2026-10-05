import { ArrowUpRight, Check } from 'lucide-react';
const plans = [{
  name: 'WEB',
  price: '$299.000',
  features: ['Landing page profesional', 'Diseño responsive', 'Botones de WhatsApp', 'Formulario de contacto', 'SEO básico', 'Publicación online'],
  note: 'Pago único. Hosting y dominio no incluidos.',
  cta: 'Quiero mi web'
}, {
  name: 'WEB + REDES',
  price: '$499.000',
  features: ['Landing page profesional', 'Diseño responsive', 'WhatsApp', 'Formulario de contacto', 'SEO básico', 'Publicación online', 'Gestión de Instagram', '8 publicaciones mensuales', 'Stories', 'Diseño + copy', 'Calendario de contenido'],
  note: 'Implementación inicial + gestión mensual. Hosting y dominio no incluidos.',
  cta: 'Quiero este plan',
  featured: true
}, {
  name: 'TODO INCLUIDO',
  price: '$699.000',
  features: ['Landing page profesional', 'Gestión de Instagram', '12 publicaciones mensuales', 'Mayor cantidad de stories', 'Diseño y copy', 'Calendario de contenido', 'Mantenimiento web', 'Actualización de contenidos', 'Optimización mensual', 'Soporte'],
  note: 'Implementación inicial + gestión mensual. Hosting y dominio no incluidos.',
  cta: 'Quiero este plan'
}];
export function Plans() {
  return <section className="plans section-pad" id="planes"><div className="container"><div className="plans-heading reveal"><span className="section-kicker">/ SOLUCIONES A TU MEDIDA</span><h2>Elegí cómo <em>querés crecer.</em></h2><p>Soluciones simples, profesionales y adaptadas a las necesidades de tu negocio.</p></div><div className="plans-grid">{plans.map(plan => <article key={plan.name} className={`plan-card reveal ${plan.featured ? 'plan-featured' : ''}`}><h3>{plan.name}</h3><div className="plan-price"><small>Desde</small><strong>{plan.price}</strong></div><div className="plan-divider" /><ul>{plan.features.map(feature => <li key={feature}><Check size={16} strokeWidth={2} />{feature}</li>)}</ul><div className="plan-end"><p>{plan.note}</p><a className={`button ${plan.featured ? 'button-orange' : 'button-dark'}`} href={`#contacto?plan=${encodeURIComponent(plan.name)}`} onClick={event => {
              event.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth'
              });
              window.dispatchEvent(new CustomEvent('select-plan', {
                detail: plan.name
              }));
            }}>{plan.cta}<ArrowUpRight size={18} /></a></div></article>)}</div><div className="custom-plan reveal"><div><h3>¿Necesitás algo diferente?</h3><p>También desarrollamos proyectos personalizados. Diseñamos cualquier tipo de sistema, automatizaciones, crms, softwares, entre otros. Consúltanos.&nbsp;</p></div><a href="#contacto" className="button button-orange custom-plan-cta">Contanos qué necesitás <ArrowUpRight size={20} /></a></div></div></section>;
}