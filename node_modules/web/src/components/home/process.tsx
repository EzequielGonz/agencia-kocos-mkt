const steps = [
  ['01', 'Nos contás', 'Completás el formulario y nos contás sobre tu negocio.'],
  ['02', 'Definimos', 'Analizamos lo que necesitás y definimos la mejor solución.'],
  ['03', 'Creamos', 'Diseñamos y desarrollamos tu proyecto.'],
  ['04', 'Publicamos', 'Ponemos todo online y dejamos tu presencia digital lista para crecer.'],
];
export function Process() {
  return <section className="process section-pad"><div className="container"><span className="section-kicker reveal">/ NUESTRO PROCESO</span><h2 className="reveal">Así <em>trabajamos.</em></h2><div className="process-grid">{steps.map(([number, title, text]) => <article className="process-step reveal" key={number}><span className="process-number">{number}</span><div className="process-dot" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
