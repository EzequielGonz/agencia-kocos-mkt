import { ArrowUpRight, Globe2, Megaphone, Layers3 } from 'lucide-react';
const items = [
  { number: '01', name: 'DISEÑO WEB', text: 'Creamos páginas profesionales, rápidas y pensadas para convertir visitas en consultas.', Icon: Globe2 },
  { number: '02', name: 'REDES SOCIALES', text: 'Contenido estratégico, diseño visual y gestión para mantener activa y profesional tu marca.', Icon: Megaphone },
  { number: '03', name: 'PRESENCIA DIGITAL', text: 'Unificamos web, redes y comunicación para que tu negocio tenga una imagen sólida y coherente.', Icon: Layers3 },
];
export function Approach() {
  return <section className="approach section-pad"><div className="container"><div className="section-heading approach-heading reveal"><div><span className="section-kicker">/ TODO LO QUE TU NEGOCIO NECESITA</span><h2>Una presencia digital<br /><em>pensada para crecer.</em></h2></div><p>En Kocos Marketing reunimos diseño web, redes sociales y estrategia en un mismo lugar. Una mirada integral para que cada parte de tu marca trabaje en la misma dirección.</p></div><div className="approach-list">{items.map(item => <article className="approach-row reveal" key={item.number}><span className="item-number" aria-hidden="true" /><item.Icon size={27} strokeWidth={1.5} /><div><h3>{item.name}</h3><p>{item.text}</p></div><ArrowUpRight className="approach-arrow" size={23} strokeWidth={1.5} /></article>)}</div></div></section>;
}
