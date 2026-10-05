import type { Page } from './types';

const D = '2026-09-30';
const R = '/rubros';
const S = '/servicios';

export const rubrosPilar: Page = {
  silo: 'rubros',
  kind: 'pilar',
  tipo: 'Proyecto personalizado',
  published: D,
  updated: D,
  path: R,
  title: 'Marketing digital y automatización por rubro',
  description: 'Soluciones digitales para cada industria: hoteles, estudios jurídicos, salud, inmobiliarias, concesionarias, gastronomía, e-commerce, educación e industria.',
  label: '/ SOLUCIONES POR RUBRO',
  h1: 'Cada rubro',
  h1Em: 'tiene su forma de crecer.',
  lead: 'Un hotel, un estudio jurídico y una concesionaria no necesitan lo mismo. Conocemos los desafíos de cada industria y diseñamos soluciones que responden a cómo vende cada una.',
  nav: 'Rubros',
  sections: [
    {
      title: 'Por qué importa conocer el rubro',
      blocks: [
        { p: 'Las mejores soluciones digitales parten de entender cómo compra el cliente de cada industria: cuánto tarda en decidir, qué dudas tiene, por qué canal consulta y qué necesita ver antes de confiar.' },
        { p: 'Con esa base definimos qué [web](/servicios/desarrollo-web) conviene, qué procesos [automatizar](/servicios/automatizaciones) y qué contenido publicar en [redes](/servicios/gestion-de-redes-sociales).' },
        { note: '¿Tu rubro no está en la lista? Trabajamos con negocios de todo tipo. Contanos a qué te dedicás y te proponemos una solución.' },
      ],
    },
  ],
  faqs: [{ q: '¿Trabajan con cualquier rubro?', a: 'Sí. Primero conocemos tu negocio y sus objetivos para definir una solución adecuada a tu actividad.' }],
  related: ['/servicios', `${S}/automatizaciones`, '/guias/que-automatizar-en-una-empresa'],
};

type Rubro = {
  slug: string;
  nombre: string;
  /** Texto con el que se precarga el campo "Rubro" del formulario. */
  rubro: string;
  titulo: string;
  h1Em: string;
  intro: string;
  desafios: string[];
  web: string[];
  automatizar: string[];
  redes: string[];
  faq: { q: string; a: string };
  related: string[];
};

const rubros: Rubro[] = [
  {
    slug: 'hoteles-y-turismo', nombre: 'Hoteles y turismo', rubro: 'Hotelería y turismo',
    titulo: 'Marketing digital para hoteles: web, reservas y redes',
    h1Em: 'más reservas directas, menos comisiones.',
    intro: 'Ayudamos a hoteles, cabañas y emprendimientos turísticos a vender más por sus propios canales, con webs que reservan, redes que inspiran y respuestas automáticas.',
    desafios: ['Dependencia de plataformas de reserva con comisiones altas.', 'Consultas repetidas por disponibilidad y precios.', 'Temporadas marcadas que exigen planificar con anticipación.'],
    web: ['Sitio con motor de reservas directas.', 'Fotos y recorridos que muestran la experiencia.', 'Páginas por tipo de habitación, servicios y temporada.'],
    automatizar: ['Respuestas de disponibilidad y tarifas por WhatsApp.', 'Confirmaciones y recordatorios de reserva.', 'Pedidos de reseña después de la estadía.'],
    redes: ['Contenido de experiencias y destino.', 'Campañas por temporada.', 'Colaboraciones con creadores de contenido.'],
    faq: { q: '¿Se puede reservar directo desde la web?', a: 'Sí. Integramos un motor de reservas para que el huésped reserve sin intermediarios.' },
    related: [`${S}/desarrollo-web`, `${S}/chatbots-whatsapp-ia`, `${S}/gestion-de-redes-sociales`],
  },
  {
    slug: 'estudios-juridicos', nombre: 'Estudios jurídicos', rubro: 'Estudio jurídico',
    titulo: 'Marketing digital para estudios jurídicos y abogados',
    h1Em: 'más consultas calificadas, con ética profesional.',
    intro: 'Webs y estrategias de posicionamiento para estudios jurídicos que quieren recibir consultas de calidad, respetando las normas de publicidad de la profesión.',
    desafios: ['Mucha competencia en búsquedas locales.', 'Consultas que no corresponden a la especialidad del estudio.', 'Normas de ética que limitan cómo se comunica.'],
    web: ['Sitio con páginas por área de práctica.', 'Guías que responden las dudas de los clientes y atraen búsquedas de Google.', 'Formularios que califican el tipo de caso.'],
    automatizar: ['Registro ordenado de cada consulta.', 'Asignación de consultas por área.', 'Seguimiento de casos y recordatorios de plazos internos.'],
    redes: ['Contenido educativo sobre derechos.', 'Presencia profesional en LinkedIn e Instagram.', 'Casos explicados sin datos sensibles.'],
    faq: { q: '¿El contenido respeta las normas del Colegio de Abogados?', a: 'Sí. Redactamos sin prometer resultados y el estudio revisa todo antes de publicar.' },
    related: [`${S}/desarrollo-web`, `${S}/crm-a-medida`, `${S}/creacion-de-contenido`],
  },
  {
    slug: 'salud-y-clinicas', nombre: 'Salud y clínicas', rubro: 'Salud',
    titulo: 'Marketing digital para clínicas, consultorios y salud',
    h1Em: 'turnos ordenados y pacientes informados.',
    intro: 'Soluciones para clínicas, consultorios, centros de estética y profesionales de la salud: webs que generan confianza, turnos más simples y comunicación clara.',
    desafios: ['Gestión de turnos por teléfono y WhatsApp.', 'Ausencias a turnos sin aviso.', 'Necesidad de transmitir confianza y profesionalismo.'],
    web: ['Sitio con especialidades, profesionales y coberturas.', 'Reserva de turnos online.', 'Contenido que responde dudas frecuentes de pacientes.'],
    automatizar: ['Recordatorios de turnos por WhatsApp.', 'Confirmación o reprogramación automática.', 'Respuestas a preguntas frecuentes sobre coberturas y horarios.'],
    redes: ['Contenido de prevención y educación.', 'Presentación del equipo profesional.', 'Novedades de servicios y tecnologías.'],
    faq: { q: '¿Cómo cuidan los datos de los pacientes?', a: 'Diseñamos los flujos para no exponer información sensible y limitar el acceso solo a quien corresponde.' },
    related: [`${S}/chatbots-whatsapp-ia`, `${S}/desarrollo-web`, `${S}/automatizaciones`],
  },
  {
    slug: 'inmobiliarias', nombre: 'Inmobiliarias', rubro: 'Inmobiliaria',
    titulo: 'Marketing digital para inmobiliarias: web y CRM',
    h1Em: 'más consultas y seguimiento sin perder ninguna.',
    intro: 'Webs con propiedades, CRM para seguimiento de interesados y automatizaciones que ayudan a las inmobiliarias a responder rápido y cerrar más operaciones.',
    desafios: ['Consultas que llegan por muchos portales y canales.', 'Interesados que se enfrían por falta de seguimiento.', 'Carga repetida de propiedades en distintos sitios.'],
    web: ['Sitio con buscador de propiedades.', 'Fichas con fotos, videos y ubicación.', 'Páginas por barrio o tipo de propiedad para Google.'],
    automatizar: ['Ingreso de todas las consultas a un CRM.', 'Respuesta inmediata con información de la propiedad.', 'Recordatorios de seguimiento y visitas.'],
    redes: ['Presentación de propiedades en video.', 'Contenido del mercado y de los barrios.', 'Campañas para propiedades destacadas.'],
    faq: { q: '¿Se integra con los portales inmobiliarios?', a: 'Depende del portal y de sus opciones de integración. Lo evaluamos en el diagnóstico.' },
    related: [`${S}/crm-a-medida`, `${S}/automatizaciones`, `${S}/desarrollo-web`],
  },
  {
    slug: 'concesionarias-y-agencias-de-autos', nombre: 'Concesionarias y agencias de autos', rubro: 'Automotor',
    titulo: 'Marketing digital para concesionarias y agencias de autos',
    h1Em: 'más consultas calificadas por cada modelo.',
    intro: 'Webs con páginas por marca y modelo, formularios que califican al comprador y automatizaciones para responder al instante, en un rubro donde la velocidad define la venta.',
    desafios: ['Consultas que llegan sin datos para cotizar.', 'Competencia fuerte por precio.', 'Seguimiento largo entre la consulta y la compra.'],
    web: ['Páginas por marca, modelo y forma de pago.', 'Simuladores de cuota.', 'Formularios con anticipo, usado y plazo de compra.'],
    automatizar: ['Respuesta inmediata con información del modelo.', 'Asignación de consultas a vendedores.', 'Seguimiento automático de interesados.'],
    redes: ['Presentación de modelos y entregas.', 'Contenido de financiación y planes de ahorro.', 'Campañas por modelo.'],
    faq: { q: '¿Pueden armar páginas para cada modelo?', a: 'Sí. Es una de las estrategias que más consultas genera en Google para el rubro.' },
    related: [`${S}/desarrollo-web`, `${S}/crm-a-medida`, `${S}/chatbots-whatsapp-ia`],
  },
  {
    slug: 'gastronomia', nombre: 'Gastronomía', rubro: 'Gastronomía',
    titulo: 'Marketing digital para restaurantes y gastronomía',
    h1Em: 'mesas llenas y pedidos directos.',
    intro: 'Redes que abren el apetito, webs con menú y reservas, y pedidos directos sin depender de intermediarios.',
    desafios: ['Dependencia de aplicaciones de delivery con comisiones.', 'Reservas desordenadas por teléfono y mensajes.', 'Necesidad de contenido constante y atractivo.'],
    web: ['Sitio con menú actualizable.', 'Reservas online.', 'Pedidos directos para retiro o envío.'],
    automatizar: ['Confirmación de reservas por WhatsApp.', 'Respuestas sobre horarios, menú y ubicación.', 'Campañas a clientes frecuentes.'],
    redes: ['Fotos y videos de platos.', 'Novedades, eventos y promociones.', 'Contenido del equipo y la cocina.'],
    faq: { q: '¿Pueden actualizar el menú seguido?', a: 'Sí. Te dejamos el menú fácil de editar o nos ocupamos nosotros.' },
    related: [`${S}/gestion-de-redes-sociales`, `${S}/creacion-de-contenido`, `${S}/landing-pages`],
  },
  {
    slug: 'retail-y-ecommerce', nombre: 'Retail y e-commerce', rubro: 'Retail / e-commerce',
    titulo: 'E-commerce y marketing digital para marcas y retail',
    h1Em: 'ventas online que crecen todos los meses.',
    intro: 'Tiendas online integradas, automatizaciones de postventa y contenido que convierte seguidores en clientes.',
    desafios: ['Stock desincronizado entre canales.', 'Carritos abandonados.', 'Atención por WhatsApp desbordada.'],
    web: ['Tienda online con catálogo y pagos.', 'Integración con stock y facturación.', 'Páginas de colección optimizadas para Google.'],
    automatizar: ['Recuperación de carritos abandonados.', 'Avisos de envío y postventa.', 'Respuestas sobre talles, stock y envíos.'],
    redes: ['Catálogo en redes.', 'Contenido de producto y uso.', 'Lanzamientos y campañas estacionales.'],
    faq: { q: '¿Ya tengo tienda, pueden mejorarla?', a: 'Sí. Hacemos una auditoría y priorizamos las mejoras que más impactan en las ventas.' },
    related: [`${S}/tiendas-online`, `${S}/automatizaciones`, `${S}/creacion-de-contenido`],
  },
  {
    slug: 'educacion', nombre: 'Educación', rubro: 'Educación',
    titulo: 'Marketing digital para colegios, institutos y cursos',
    h1Em: 'más inscripciones con menos trabajo administrativo.',
    intro: 'Webs, campañas de inscripción y automatizaciones para colegios, institutos, universidades y creadores de cursos.',
    desafios: ['Picos de consultas en períodos de inscripción.', 'Información dispersa sobre carreras y aranceles.', 'Seguimiento manual de interesados.'],
    web: ['Sitio con oferta académica clara.', 'Páginas por carrera o curso.', 'Formularios de preinscripción.'],
    automatizar: ['Respuestas sobre carreras, horarios y requisitos.', 'Seguimiento de interesados hasta la inscripción.', 'Comunicaciones a alumnos y familias.'],
    redes: ['Vida institucional y logros.', 'Testimonios de alumnos y egresados.', 'Campañas de inscripción.'],
    faq: { q: '¿Pueden manejar los picos de consultas?', a: 'Sí. Un asistente automático responde lo frecuente y deriva los casos particulares al equipo.' },
    related: [`${S}/chatbots-whatsapp-ia`, `${S}/desarrollo-web`, `${S}/gestion-de-redes-sociales`],
  },
  {
    slug: 'industria-y-b2b', nombre: 'Industria y B2B', rubro: 'Industria / B2B',
    titulo: 'Marketing digital para industrias y empresas B2B',
    h1Em: 'presencia a la altura de tu capacidad.',
    intro: 'Webs corporativas, catálogos técnicos y sistemas que ayudan a empresas industriales y de servicios B2B a generar oportunidades y ordenar sus procesos.',
    desafios: ['Webs desactualizadas que no reflejan la capacidad real.', 'Ciclos de venta largos con varios decisores.', 'Procesos internos apoyados en planillas.'],
    web: ['Sitio corporativo con capacidades y certificaciones.', 'Catálogo técnico de productos.', 'Formularios de cotización detallados.'],
    automatizar: ['Circuito de cotizaciones.', 'Reportes comerciales automáticos.', 'Integración entre áreas y sistemas.'],
    redes: ['Presencia en LinkedIn.', 'Casos de aplicación y proyectos.', 'Contenido técnico para decisores.'],
    faq: { q: '¿Pueden desarrollar sistemas internos?', a: 'Sí. Desarrollamos [software a medida](/servicios/software-a-medida) para procesos que no encajan en herramientas estándar.' },
    related: [`${S}/software-a-medida`, `${S}/desarrollo-web`, `${S}/crm-a-medida`],
  },
  {
    slug: 'profesionales-y-consultoras', nombre: 'Profesionales y consultoras', rubro: 'Servicios profesionales',
    titulo: 'Marketing digital para consultoras y profesionales',
    h1Em: 'una marca personal que genera clientes.',
    intro: 'Para contadores, arquitectos, consultores y profesionales independientes: una presencia digital que transmite experiencia y ordena las consultas.',
    desafios: ['Dependencia del boca a boca.', 'Poco tiempo para ocuparse de lo digital.', 'Dificultad para explicar el valor del servicio.'],
    web: ['Sitio o landing con servicios y casos.', 'Agenda de reuniones online.', 'Contenido que demuestra experiencia.'],
    automatizar: ['Agenda y recordatorios de reuniones.', 'Propuestas y seguimiento de clientes.', 'Facturación y reportes periódicos.'],
    redes: ['Marca personal en LinkedIn e Instagram.', 'Contenido educativo.', 'Casos y resultados.'],
    faq: { q: '¿Sirve para un profesional independiente?', a: 'Sí. Podemos empezar con una [landing page](/servicios/landing-pages) y sumar redes y automatizaciones según crezcas.' },
    related: [`${S}/landing-pages`, `${S}/creacion-de-contenido`, `${S}/automatizaciones`],
  },
  {
    slug: 'seguros-y-salud-prepaga', nombre: 'Seguros y prepagas', rubro: 'Seguros / prepagas',
    titulo: 'Marketing digital para brokers de seguros y prepagas',
    h1Em: 'leads calificados y seguimiento automático.',
    intro: 'Para productores de seguros y asesores de prepagas: webs que atraen búsquedas por marca y zona, formularios que califican y seguimiento que no deja consultas sin responder.',
    desafios: ['Leads de baja calidad por formularios genéricos.', 'Seguimiento manual de cotizaciones.', 'Competencia con comparadores y portales.'],
    web: ['Páginas por compañía, plan y zona.', 'Cotizadores y calculadoras.', 'Formularios con datos para cotizar.'],
    automatizar: ['Calificación automática de cada consulta.', 'Seguimiento de cotizaciones enviadas.', 'Avisos de renovaciones.'],
    redes: ['Contenido que explica coberturas simple.', 'Casos reales de uso.', 'Campañas por segmento.'],
    faq: { q: '¿Pueden armar un cotizador?', a: 'Sí. Una calculadora orientativa atrae búsquedas y genera consultas calificadas.' },
    related: [`${S}/desarrollo-web`, `${S}/crm-a-medida`, `${S}/automatizaciones`],
  },
  {
    slug: 'construccion-y-desarrollos', nombre: 'Construcción y desarrollos', rubro: 'Construcción / desarrollos',
    titulo: 'Marketing digital para constructoras y desarrolladoras',
    h1Em: 'proyectos que se venden antes de terminarse.',
    intro: 'Webs de emprendimientos, contenido de avance de obra y sistemas de seguimiento para constructoras y desarrolladoras inmobiliarias.',
    desafios: ['Venta en pozo que requiere generar confianza.', 'Consultas de inversores con distintos perfiles.', 'Comunicación del avance de obra.'],
    web: ['Sitio por emprendimiento con unidades disponibles.', 'Renders, planos y ubicación.', 'Formularios para inversores y compradores.'],
    automatizar: ['Seguimiento de interesados por unidad.', 'Envío de avances de obra.', 'Recordatorios de cuotas o hitos.'],
    redes: ['Avance de obra en video.', 'Contenido del barrio y la inversión.', 'Campañas de lanzamiento.'],
    faq: { q: '¿Pueden mostrar la disponibilidad de unidades?', a: 'Sí, con una grilla de unidades actualizable desde un panel.' },
    related: [`${S}/desarrollo-web`, `${S}/software-a-medida`, `${S}/gestion-de-redes-sociales`],
  },
];

function rubroToPage(r: Rubro): Page {
  return {
    silo: 'rubros',
    kind: 'rubro',
    tipo: 'Proyecto personalizado',
    rubro: r.rubro,
    published: D,
    updated: D,
    path: `${R}/${r.slug}`,
    title: r.titulo,
    description: (() => {
      const conPais = `${r.intro} Para empresas de todo el país.`;
      if (conPais.length <= 160) return conPais;
      return r.intro.length <= 160 ? r.intro : `${r.intro.slice(0, 157).replace(/\s+\S*$/, '')}…`;
    })(),
    label: `/ ${r.nombre.toUpperCase()}`,
    h1: r.nombre,
    h1Em: r.h1Em,
    lead: r.intro,
    nav: r.nombre,
    sections: [
      { title: 'Los desafíos del rubro', blocks: [{ list: r.desafios }] },
      { title: 'La web que necesitás', blocks: [{ list: r.web }, { p: 'Ver [desarrollo web](/servicios/desarrollo-web).' }] },
      { title: 'Qué podés automatizar', blocks: [{ list: r.automatizar }, { p: 'Estimá el tiempo que podrías ahorrar con la [calculadora de automatización](/guias/calculadora-de-automatizacion).' }] },
      { title: 'Redes sociales', blocks: [{ list: r.redes }, { note: 'Cada propuesta parte de un diagnóstico de tu negocio: no aplicamos recetas iguales para todos.' }] },
    ],
    faqs: [r.faq, { q: '¿Trabajan con empresas de todo el país?', a: 'Sí. Trabajamos a distancia con empresas de distintas ciudades de Argentina.' }],
    related: r.related,
  };
}

export const rubroPages: Page[] = rubros.map(rubroToPage);
