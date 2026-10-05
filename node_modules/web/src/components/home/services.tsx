import { ArrowUpRight } from 'lucide-react';
const services = [
  ['Landing Pages', 'Una primera impresión enfocada en convertir visitas en oportunidades.'],
  ['Diseño Web', 'Sitios a medida que combinan funcionalidad, estética y claridad.'],
  ['Gestión de Instagram', 'Una presencia activa y coherente, sin que tengas que ocuparte de todo.'],
  ['Creación de contenido', 'Ideas y piezas que cuentan tu historia de forma relevante.'],
  ['Diseño de piezas gráficas', 'Visuales cuidados que hacen reconocible a tu marca.'],
  ['Estrategia digital', 'Decisiones con dirección, alineadas a tus objetivos de negocio.'],
  ['Optimización y mantenimiento web', 'Tu sitio actualizado, ágil y funcionando como debe.'],
  ['WhatsApp y formularios', 'Canales directos para que cada consulta llegue a vos.'],
];
export function Services() {
  return <section className="services section-pad" id="servicios"><div className="container"><div className="section-heading reveal"><div><span className="section-kicker">/ NUESTROS SERVICIOS</span><h2>Lo hacemos <em>simple.</em></h2></div><p>Desde el primer clic hasta la primera conversación: resolvemos lo digital para que vos puedas enfocarte en tu negocio.</p></div><div className="services-grid">{services.map(([name, text]) => <article className="service-card reveal" key={name}><ArrowUpRight size={20} strokeWidth={1.6} /><div><h3>{name}</h3><p>{text}</p></div></article>)}</div></div></section>;
}
