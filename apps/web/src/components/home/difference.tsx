import { ArrowUpRight } from 'lucide-react';
const points = ['Diseño profesional', 'Comunicación clara', 'Soluciones pensadas para vender', 'Acompañamiento'];
export function Difference() {
  return <section className="difference section-pad"><div className="container difference-grid"><div className="reveal"><span className="section-kicker">/ EL VALOR DE HACERLO BIEN</span><h2>Más que <em>diseño.</em></h2><p className="difference-lead">No se trata solamente de tener una web linda o publicar en Instagram. Se trata de construir una presencia digital coherente, profesional y pensada para generar oportunidades.</p><a href="#contacto" className="text-link">Hablemos de tu marca <ArrowUpRight size={20} /></a></div><div className="difference-list">{points.map((point, i) => <div className="reveal" key={point}><span>0{i + 1}</span><h3>{point}</h3><ArrowUpRight size={20} strokeWidth={1.5} /></div>)}</div></div></section>;
}
