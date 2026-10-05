import { Plus } from 'lucide-react';
const faqs = [
  ['¿Qué incluye una landing page?', 'Incluye una página diseñada para presentar tu negocio y convertir visitas en consultas, adaptable a todos los dispositivos, con botones de contacto, formulario y SEO básico.'],
  ['¿El hosting y dominio están incluidos?', 'No. El hosting y el dominio se contratan por separado. Te orientamos para elegir la opción más conveniente para tu proyecto.'],
  ['¿Puedo contratar solamente la web?', 'Sí. Podés elegir el plan Web sin contratar gestión de redes sociales.'],
  ['¿Pueden manejar también mis redes sociales?', 'Sí. Contamos con planes que incluyen la gestión de Instagram, contenidos, diseño y planificación mensual.'],
  ['¿Puedo pedir cambios después de publicar la web?', 'Sí. Podemos coordinar actualizaciones y mantenimiento según las necesidades de tu sitio y el alcance de tu plan.'],
  ['¿Trabajan con negocios de cualquier rubro?', 'Sí. Primero conocemos tu negocio y sus objetivos para definir una solución adecuada a tu actividad.'],
  ['¿Pueden conectar WhatsApp y formularios?', 'Sí. Integramos canales de contacto para facilitar las consultas de tus potenciales clientes.'],
  ['¿Realizan proyectos personalizados?', 'Sí. Si necesitás algo fuera de nuestros planes, contanos tu idea y preparamos una propuesta a medida.'],
];
export function Faq() {
  return <section className="faq section-pad" id="preguntas"><div className="container faq-layout"><div className="reveal"><span className="section-kicker">/ RESOLVEMOS TUS DUDAS</span><h2>Preguntas <em>frecuentes.</em></h2><p>¿Tenés otra pregunta? Estamos para ayudarte a encontrar el mejor camino para tu marca.</p><a href="#contacto" className="text-link">Hacenos tu consulta <span>↗</span></a></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="reveal"><summary><span>{question}</span><Plus size={20} className="faq-plus" /></summary><p>{answer}</p></details>)}</div></div></section>;
}
