import { Quote } from 'lucide-react';
// Reemplazar por testimonios verificados cuando estén disponibles.
const testimonials: { quote: string; name: string; company: string }[] = [];
export function Testimonials() {
  return <section className="testimonials section-pad"><div className="container"><span className="section-kicker reveal">/ VOCES REALES</span><h2 className="reveal">Lo que dicen <em>nuestros clientes.</em></h2><div className="testimonial-grid">{testimonials.length ? testimonials.map((item, i) => <article className="testimonial-card" key={`${item.name}-${i}`}><Quote size={28} /><p>{item.quote}</p><div><strong>{item.name}</strong><span>{item.company}</span></div></article>) : [1, 2, 3].map(i => <article className="testimonial-card testimonial-placeholder reveal" key={i}><Quote size={25} strokeWidth={1.5} /><p>Testimonio de cliente</p><div><strong>Nombre del cliente</strong><span>Empresa</span></div></article>)}</div></div></section>;
}
