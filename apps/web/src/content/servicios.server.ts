import type { ConsultaTipo, Page } from './types';

const D = '2026-09-30';
const S = '/servicios';

export const serviciosPilar: Page = {
  silo: 'servicios',
  kind: 'pilar',
  tipo: 'Proyecto personalizado',
  published: D,
  updated: D,
  path: S,
  title: 'Servicios de marketing digital, web y automatización',
  description: 'Desarrollo web, e-commerce, automatizaciones con IA, CRM, software a medida y gestión de redes sociales para empresas de toda Argentina.',
  label: '/ SERVICIOS PARA EMPRESAS',
  h1: 'Todo lo digital',
  h1Em: 'que tu empresa necesita.',
  lead: 'Desde un sitio corporativo hasta una automatización con inteligencia artificial o un sistema a medida. Diseñamos, desarrollamos y gestionamos la presencia digital de empresas de todo el país.',
  nav: 'Servicios',
  sections: [
    {
      title: 'Una mirada integral',
      blocks: [
        { p: 'La mayoría de las empresas tiene su web por un lado, sus redes por otro y sus procesos en planillas y chats. Nuestro trabajo es que todo eso funcione junto: que la web genere consultas, que las redes construyan marca y que cada consulta llegue ordenada a quien tiene que responderla.' },
        { list: [
          'Presencia: [desarrollo web](/servicios/desarrollo-web), [landing pages](/servicios/landing-pages), [tiendas online](/servicios/tiendas-online) y [rediseño](/servicios/rediseno-web).',
          'Marca: [gestión de redes sociales](/servicios/gestion-de-redes-sociales), [creación de contenido](/servicios/creacion-de-contenido) y [estrategia digital](/servicios/estrategia-digital).',
          'Eficiencia: [automatizaciones](/servicios/automatizaciones), [asistentes de WhatsApp con IA](/servicios/chatbots-whatsapp-ia), [CRM a medida](/servicios/crm-a-medida) y [software a medida](/servicios/software-a-medida).',
        ] },
      ],
    },
    {
      title: 'Cómo trabajamos',
      blocks: [
        { steps: [
          { title: 'Diagnóstico', text: 'Entendemos tu negocio, tus objetivos y cómo funcionan hoy tus procesos y canales.' },
          { title: 'Propuesta', text: 'Definimos alcance, tiempos y presupuesto por escrito, sin letra chica.' },
          { title: 'Desarrollo', text: 'Diseñamos y construimos con entregas parciales para que veas el avance.' },
          { title: 'Lanzamiento y mejora', text: 'Publicamos, medimos y ajustamos. Si corresponde, seguimos con gestión o mantenimiento.' },
        ] },
        { note: '¿Buscás algo simple para empezar? Nuestros [planes](/#planes) cubren web y redes para negocios que dan sus primeros pasos. Para proyectos más grandes, preparamos una propuesta a medida.' },
      ],
    },
    {
      title: 'Trabajamos con empresas de todo el país',
      blocks: [
        { p: 'Trabajamos a distancia, con reuniones por videollamada y un canal directo de comunicación, con empresas de distintas ciudades y rubros. Mirá las [soluciones por rubro](/rubros).' },
      ],
    },
  ],
  faqs: [
    { q: '¿Trabajan con empresas grandes?', a: 'Sí. Además de nuestros planes para negocios que empiezan, desarrollamos proyectos a medida para empresas que necesitan sitios complejos, integraciones, automatizaciones o sistemas propios.' },
    { q: '¿Cómo se presupuesta un proyecto a medida?', a: 'Después de una primera conversación, te enviamos una propuesta con alcance, etapas, tiempos y costo. Así sabés exactamente qué incluye.' },
    { q: '¿Pueden trabajar con mi equipo interno?', a: 'Sí. Podemos integrarnos con tu equipo de marketing, comercial o sistemas, o encargarnos de todo.' },
  ],
  related: [`${S}/automatizaciones`, `${S}/desarrollo-web`, '/rubros'],
};

type Servicio = {
  slug: string;
  nombre: string;
  need: ConsultaTipo;
  titulo: string;
  h1: string;
  h1Em: string;
  intro: string;
  incluye: string[];
  paraQuien: string[];
  clave: { title: string; items: string[] };
  extra?: { title: string; text: string };
  faqs: { q: string; a: string }[];
  related: string[];
};

const servicios: Servicio[] = [
  {
    slug: 'desarrollo-web', nombre: 'Desarrollo web', need: 'Página web',
    titulo: 'Desarrollo web para empresas: sitios a medida',
    h1: 'Desarrollo web', h1Em: 'para empresas que van en serio.',
    intro: 'Sitios corporativos diseñados a medida, rápidos, seguros y pensados para convertir visitas en oportunidades comerciales.',
    incluye: ['Arquitectura de contenidos y diseño a medida, alineado a tu marca.', 'Desarrollo responsive, optimizado para velocidad.', 'Formularios conectados a tu base de datos o CRM.', 'SEO técnico desde la estructura: URLs, metadatos, datos estructurados y sitemap.', 'Integraciones con WhatsApp, analítica y herramientas de tu empresa.', 'Capacitación para que tu equipo actualice contenidos.'],
    paraQuien: ['Empresas cuyo sitio actual no refleja su nivel.', 'Organizaciones con varias áreas, servicios o sedes.', 'Marcas que necesitan que la web genere consultas, no solo que exista.'],
    clave: { title: 'Qué hace que un sitio funcione', items: ['Mensajes claros para cada tipo de cliente.', 'Velocidad de carga, sobre todo en el celular.', 'Llamados a la acción visibles en cada página.', 'Medición: saber de dónde llegan las consultas.'] },
    extra: { title: 'Posicionamiento desde el primer día', text: 'Un sitio bien estructurado puede sumar decenas de páginas pensadas para aparecer en Google, sin cambiar su diseño principal.' },
    faqs: [
      { q: '¿Cuánto tarda un sitio a medida?', a: 'Depende del alcance. Un sitio corporativo suele llevar algunas semanas; los proyectos con integraciones o muchas secciones, más. Te damos un cronograma en la propuesta.' },
      { q: '¿Puedo actualizar el contenido yo mismo?', a: 'Sí. Te dejamos el sitio listo para editar y capacitamos a tu equipo.' },
    ],
    related: [`${S}/landing-pages`, `${S}/rediseno-web`, '/guias/cuanto-cuesta-una-pagina-web'],
  },
  {
    slug: 'landing-pages', nombre: 'Landing pages', need: 'Página web',
    titulo: 'Landing pages que convierten: diseño y desarrollo',
    h1: 'Landing pages', h1Em: 'pensadas para convertir.',
    intro: 'Páginas enfocadas en un solo objetivo: que la persona que llega deje sus datos, escriba por WhatsApp o compre.',
    incluye: ['Estructura persuasiva: propuesta de valor, beneficios, pruebas y llamados a la acción.', 'Diseño a medida y responsive.', 'Formulario y botón de WhatsApp conectados.', 'Medición de conversiones para campañas.', 'Velocidad optimizada para anuncios.'],
    paraQuien: ['Campañas de publicidad que necesitan una página de destino.', 'Lanzamientos de productos o servicios.', 'Negocios que quieren empezar con una presencia profesional.'],
    clave: { title: 'Qué hace que una landing convierta', items: ['Un mensaje principal claro en los primeros segundos.', 'Un solo llamado a la acción, repetido.', 'Pruebas de confianza: casos, datos, garantías.', 'Formularios cortos o calificados, según el objetivo.'] },
    faqs: [
      { q: '¿Landing page o sitio completo?', a: 'Depende de tu objetivo. Lo explicamos en [landing page o sitio web](/guias/landing-page-o-sitio-web).' },
      { q: '¿Se puede ampliar después?', a: 'Sí. Muchas empresas empiezan con una landing y la convierten en un sitio completo con más secciones.' },
    ],
    related: [`${S}/desarrollo-web`, `${S}/estrategia-digital`, '/guias/landing-page-o-sitio-web'],
  },
  {
    slug: 'tiendas-online', nombre: 'Tiendas online', need: 'E-commerce',
    titulo: 'Tiendas online y e-commerce para empresas',
    h1: 'Tiendas online', h1Em: 'que venden todos los días.',
    intro: 'Diseñamos y desarrollamos e-commerce sobre plataformas o a medida, integrados con tus medios de pago, tu stock y tu logística.',
    incluye: ['Elección de la plataforma adecuada o desarrollo a medida.', 'Catálogo, fichas de producto y buscador.', 'Medios de pago y envíos.', 'Integración con stock, facturación o sistemas de gestión.', 'Automatización de avisos al cliente por email o WhatsApp.', 'Medición de ventas y embudo de compra.'],
    paraQuien: ['Marcas que venden por redes y quieren profesionalizar la venta.', 'Distribuidores y mayoristas con catálogo B2B.', 'Comercios que suman un canal de venta online.'],
    clave: { title: 'Qué define un buen e-commerce', items: ['Fichas de producto claras, con buenas fotos.', 'Un proceso de compra corto.', 'Stock sincronizado para no vender lo que no hay.', 'Atención rápida por WhatsApp durante la compra.'] },
    faqs: [
      { q: '¿Plataforma o desarrollo a medida?', a: 'Para la mayoría de las tiendas, una plataforma bien configurada es lo más eficiente. Recomendamos desarrollo a medida cuando hay reglas de negocio complejas, listas de precios B2B o integraciones especiales.' },
      { q: '¿Se integra con mi sistema de gestión?', a: 'En muchos casos sí. Lo evaluamos en el diagnóstico según el sistema que uses.' },
    ],
    related: [`${S}/automatizaciones`, '/rubros/retail-y-ecommerce', `${S}/crm-a-medida`],
  },
  {
    slug: 'rediseno-web', nombre: 'Rediseño web', need: 'Página web',
    titulo: 'Rediseño web: renová tu sitio sin perder posicionamiento',
    h1: 'Rediseño web', h1Em: 'sin perder lo que ya ganaste.',
    intro: 'Renovamos sitios desactualizados cuidando lo más valioso que tienen: el posicionamiento en Google y las consultas que ya generan.',
    incluye: ['Auditoría del sitio actual: contenidos, velocidad y SEO.', 'Nuevo diseño y arquitectura.', 'Migración de contenidos.', 'Redirecciones para no perder posiciones en Google.', 'Mejora de velocidad y experiencia en celulares.'],
    paraQuien: ['Empresas con sitios de hace varios años.', 'Sitios lentos o que no se ven bien en el celular.', 'Marcas que cambiaron su identidad o sus servicios.'],
    clave: { title: 'El riesgo de rediseñar mal', items: ['Cambiar las URLs sin redirecciones hace perder posiciones.', 'Eliminar contenido que atraía visitas.', 'Priorizar la estética sobre la conversión.'] },
    faqs: [{ q: '¿Pierdo el posicionamiento al rediseñar?', a: 'No si se planifica bien: mapeamos las páginas actuales, mantenemos o redirigimos las URLs y conservamos el contenido que funciona.' }],
    related: [`${S}/desarrollo-web`, `${S}/mantenimiento-web`, '/guias/web-a-medida-o-plantilla'],
  },
  {
    slug: 'mantenimiento-web', nombre: 'Mantenimiento web', need: 'Página web',
    titulo: 'Mantenimiento web y optimización mensual',
    h1: 'Mantenimiento web:', h1Em: 'tu sitio siempre funcionando.',
    intro: 'Un sitio necesita actualizaciones, respaldos y mejoras continuas. Nos ocupamos para que vos no tengas que pensar en eso.',
    incluye: ['Actualizaciones técnicas y de seguridad.', 'Respaldos periódicos.', 'Cambios de contenido.', 'Monitoreo de velocidad y errores.', 'Mejoras mensuales según las métricas.'],
    paraQuien: ['Empresas sin equipo técnico propio.', 'Sitios que generan ventas o consultas todos los días.', 'Marcas que actualizan contenido seguido.'],
    clave: { title: 'Por qué no conviene descuidarlo', items: ['Un sitio caído es un cliente perdido.', 'Los formularios rotos no avisan: simplemente dejan de llegar consultas.', 'Google premia los sitios rápidos y actualizados.'] },
    faqs: [{ q: '¿Mantienen sitios que no hicieron ustedes?', a: 'Sí, después de una revisión técnica inicial para conocer cómo está construido.' }],
    related: [`${S}/rediseno-web`, `${S}/desarrollo-web`, `${S}/estrategia-digital`],
  },
  {
    slug: 'gestion-de-redes-sociales', nombre: 'Gestión de redes sociales', need: 'Redes sociales',
    titulo: 'Gestión de redes sociales para empresas',
    h1: 'Gestión de redes sociales', h1Em: 'con estrategia.',
    intro: 'Una presencia activa, coherente y profesional en Instagram y otras redes, con contenido pensado para tu negocio y no solo para publicar.',
    incluye: ['Estrategia y línea editorial.', 'Calendario mensual de contenido.', 'Diseño de piezas y redacción.', 'Publicaciones y stories.', 'Informe mensual con métricas y aprendizajes.'],
    paraQuien: ['Empresas que no tienen tiempo de ocuparse de sus redes.', 'Marcas con redes inactivas o sin coherencia visual.', 'Negocios que quieren que las redes generen consultas.'],
    clave: { title: 'Qué hace que las redes generen negocio', items: ['Constancia antes que volumen.', 'Contenido útil para tu cliente, no solo promocional.', 'Un camino claro de la red a la consulta: WhatsApp, formulario o web.', 'Medición mensual para ajustar.'] },
    faqs: [
      { q: '¿Qué redes gestionan?', a: 'Principalmente Instagram, y otras según tu público. Lo definimos en la estrategia.' },
      { q: '¿Cómo se mide el resultado?', a: 'Con métricas de alcance, interacción y, sobre todo, consultas generadas. Lo explicamos en [cómo medir el retorno de las redes](/guias/como-medir-el-retorno-de-las-redes).' },
    ],
    related: [`${S}/creacion-de-contenido`, `${S}/estrategia-digital`, '/guias/como-medir-el-retorno-de-las-redes'],
  },
  {
    slug: 'creacion-de-contenido', nombre: 'Creación de contenido', need: 'Redes sociales',
    titulo: 'Creación de contenido y diseño para redes',
    h1: 'Contenido', h1Em: 'que cuenta tu historia.',
    intro: 'Ideas, diseño y textos que hacen reconocible a tu marca y explican con claridad por qué elegirte.',
    incluye: ['Ideas y guiones de contenido.', 'Diseño de piezas gráficas y carruseles.', 'Redacción de textos y copys.', 'Adaptación de formatos para cada red.', 'Piezas para campañas y lanzamientos.'],
    paraQuien: ['Marcas que publican sin una identidad visual clara.', 'Empresas con equipo de redes que necesita producción.', 'Lanzamientos que requieren piezas en poco tiempo.'],
    clave: { title: 'Qué hace que el contenido funcione', items: ['Una identidad visual consistente.', 'Mensajes simples y directos.', 'Contenido educativo que demuestra experiencia.', 'Llamados a la acción claros.'] },
    faqs: [{ q: '¿Pueden trabajar con nuestro manual de marca?', a: 'Sí. Si ya tenés identidad definida, la respetamos y la aplicamos en cada pieza.' }],
    related: [`${S}/gestion-de-redes-sociales`, `${S}/estrategia-digital`, `${S}/landing-pages`],
  },
  {
    slug: 'estrategia-digital', nombre: 'Estrategia digital', need: 'Web + redes',
    titulo: 'Estrategia digital para empresas: plan y medición',
    h1: 'Estrategia digital:', h1Em: 'decisiones con dirección.',
    intro: 'Antes de invertir en web, redes o automatizaciones, conviene saber qué canal mueve la aguja. Te ayudamos a definirlo con datos.',
    incluye: ['Diagnóstico de tu presencia digital actual.', 'Análisis de competidores.', 'Definición de objetivos y métricas.', 'Plan de acción por etapas.', 'Tablero de seguimiento.'],
    paraQuien: ['Empresas que invierten en digital sin ver resultados claros.', 'Equipos que necesitan priorizar.', 'Marcas que entran a un mercado nuevo.'],
    clave: { title: 'Qué define una buena estrategia', items: ['Objetivos medibles, no solo "tener presencia".', 'Prioridades claras según el impacto.', 'Revisión periódica con datos reales.'] },
    faqs: [{ q: '¿La estrategia incluye la ejecución?', a: 'Puede incluirla o no. Algunas empresas la ejecutan con su equipo; otras nos la encargan completa.' }],
    related: [`${S}/gestion-de-redes-sociales`, `${S}/desarrollo-web`, '/guias/como-elegir-una-agencia-de-marketing'],
  },
  {
    slug: 'automatizaciones', nombre: 'Automatizaciones', need: 'Automatización o IA',
    titulo: 'Automatización de procesos para empresas con IA',
    h1: 'Automatizá', h1Em: 'lo que hoy se hace a mano.',
    intro: 'Conectamos tus herramientas y automatizamos tareas repetitivas: carga de datos, seguimiento de consultas, reportes, avisos y más. Tu equipo gana tiempo para lo que importa.',
    incluye: ['Relevamiento de procesos y detección de tareas automatizables.', 'Integración entre formularios, CRM, planillas, email y WhatsApp.', 'Flujos automáticos de seguimiento comercial.', 'Reportes que se generan solos.', 'Uso de inteligencia artificial para clasificar, resumir o responder.', 'Documentación y capacitación.'],
    paraQuien: ['Equipos que pasan horas copiando datos entre sistemas.', 'Empresas que pierden consultas por falta de seguimiento.', 'Áreas comerciales y administrativas con tareas repetitivas.'],
    clave: { title: 'Qué conviene automatizar primero', items: ['Tareas frecuentes y siempre iguales.', 'Procesos donde un error cuesta caro.', 'El seguimiento de consultas y clientes.', 'Reportes que alguien arma todas las semanas.'] },
    extra: { title: '¿Cuánto podés ahorrar?', text: 'Hacé una estimación con la [calculadora de ahorro por automatización](/guias/calculadora-de-automatizacion) y mirá [qué se puede automatizar en una empresa](/guias/que-automatizar-en-una-empresa).' },
    faqs: [
      { q: '¿Necesito cambiar mis sistemas actuales?', a: 'Casi nunca. En la mayoría de los casos conectamos las herramientas que ya usás.' },
      { q: '¿Es seguro automatizar con IA?', a: 'Diseñamos los flujos con controles: definimos qué decide la IA, qué revisa una persona y cómo se protegen los datos.' },
    ],
    related: [`${S}/chatbots-whatsapp-ia`, `${S}/crm-a-medida`, '/guias/calculadora-de-automatizacion'],
  },
  {
    slug: 'chatbots-whatsapp-ia', nombre: 'Asistentes de WhatsApp con IA', need: 'Automatización o IA',
    titulo: 'Chatbots y asistentes de WhatsApp con IA',
    h1: 'Asistentes de WhatsApp', h1Em: 'que responden al instante.',
    intro: 'Un asistente con inteligencia artificial que responde consultas frecuentes, califica a cada cliente y deriva a tu equipo cuando hace falta, las 24 horas.',
    incluye: ['Diseño de la conversación según tu negocio.', 'Respuestas con IA entrenadas con tu información.', 'Calificación de consultas: qué necesita, presupuesto, urgencia.', 'Derivación a una persona cuando corresponde.', 'Registro de cada conversación en tu CRM o planilla.'],
    paraQuien: ['Empresas que reciben muchas consultas repetidas.', 'Equipos comerciales que no llegan a responder rápido.', 'Negocios que atienden fuera del horario de oficina.'],
    clave: { title: 'Qué hace que un asistente funcione', items: ['Información actualizada y precisa del negocio.', 'Una salida clara hacia una persona.', 'Tono de marca en cada respuesta.', 'Revisión periódica de las conversaciones.'] },
    faqs: [
      { q: '¿El asistente reemplaza a mi equipo?', a: 'No. Resuelve lo repetitivo y ordena las consultas para que tu equipo dedique su tiempo a cerrar y atender mejor.' },
      { q: '¿Funciona con mi número actual?', a: 'Depende de cómo uses WhatsApp hoy. Lo evaluamos en el diagnóstico y te explicamos las opciones.' },
    ],
    related: [`${S}/automatizaciones`, `${S}/crm-a-medida`, '/guias/ia-para-empresas'],
  },
  {
    slug: 'crm-a-medida', nombre: 'CRM a medida', need: 'Sistema o software a medida',
    titulo: 'CRM a medida para equipos comerciales',
    h1: 'Un CRM', h1Em: 'hecho para tu forma de vender.',
    intro: 'Centralizamos tus consultas, clientes y oportunidades en un solo lugar, con los estados, alertas y reportes que tu equipo necesita.',
    incluye: ['Relevamiento del proceso comercial.', 'Implementación de un CRM existente o desarrollo a medida.', 'Ingreso automático de consultas desde la web, WhatsApp y redes.', 'Etapas, tareas y recordatorios.', 'Tableros con métricas de ventas.'],
    paraQuien: ['Equipos que manejan clientes en planillas y chats.', 'Empresas con varios vendedores o sucursales.', 'Negocios que quieren medir cuántas consultas terminan en venta.'],
    clave: { title: '¿Existente o a medida?', items: ['Un CRM existente es rápido de implementar y alcanza para muchos casos.', 'Uno a medida conviene cuando tu proceso es particular o necesitás integrarlo con sistemas propios.', 'En ambos casos, lo importante es que tu equipo lo use todos los días.'] },
    faqs: [{ q: '¿Pueden migrar mis datos actuales?', a: 'Sí, desde planillas u otros sistemas, con una revisión previa de la información.' }],
    related: [`${S}/automatizaciones`, `${S}/software-a-medida`, `${S}/chatbots-whatsapp-ia`],
  },
  {
    slug: 'software-a-medida', nombre: 'Software a medida', need: 'Sistema o software a medida',
    titulo: 'Software y sistemas a medida para empresas',
    h1: 'Software a medida', h1Em: 'para procesos únicos.',
    intro: 'Plataformas, sistemas internos, portales de clientes y aplicaciones web diseñadas para resolver problemas concretos de tu negocio.',
    incluye: ['Relevamiento y diseño funcional.', 'Diseño de interfaz pensado para quien lo usa.', 'Desarrollo por etapas con entregas parciales.', 'Integraciones con tus sistemas.', 'Puesta en producción, soporte y evolución.'],
    paraQuien: ['Empresas cuyos procesos no encajan en herramientas estándar.', 'Negocios que quieren ofrecer un portal propio a sus clientes.', 'Equipos que dependen de planillas complejas y frágiles.'],
    clave: { title: 'Cómo reducimos el riesgo', items: ['Alcance definido por escrito.', 'Entregas cortas para validar antes de avanzar.', 'Prioridad a lo que más valor genera.', 'Documentación para que el sistema no dependa de una sola persona.'] },
    faqs: [
      { q: '¿Cuánto cuesta un sistema a medida?', a: 'Depende del alcance y las integraciones. Después del relevamiento te presentamos una propuesta por etapas.' },
      { q: '¿El sistema queda a mi nombre?', a: 'Definimos la propiedad del código y los accesos en la propuesta, antes de empezar.' },
    ],
    related: [`${S}/crm-a-medida`, `${S}/automatizaciones`, '/guias/web-a-medida-o-plantilla'],
  },
];

function servicioToPage(s: Servicio): Page {
  return {
    silo: 'servicios',
    kind: 'servicio',
    tipo: s.need,
    published: D,
    updated: D,
    path: `${S}/${s.slug}`,
    title: s.titulo,
    description: `${s.intro} Para empresas de toda Argentina.`.length <= 160 ? `${s.intro} Para empresas de toda Argentina.` : s.intro.slice(0, 158),
    label: `/ ${s.nombre.toUpperCase()}`,
    h1: s.h1,
    h1Em: s.h1Em,
    lead: s.intro,
    nav: s.nombre,
    sections: [
      { title: 'Qué incluye', blocks: [{ list: s.incluye }] },
      { title: 'Para quién es', blocks: [{ list: s.paraQuien }] },
      { title: s.clave.title, blocks: [{ list: s.clave.items }] },
      ...(s.extra ? [{ title: s.extra.title, blocks: [{ p: s.extra.text }] }] : []),
      {
        title: 'Cómo trabajamos',
        blocks: [
          { steps: [
            { title: 'Nos contás', text: 'Qué necesitás, cómo funciona hoy tu negocio y qué querés lograr.' },
            { title: 'Definimos', text: 'Te enviamos una propuesta con alcance, tiempos y presupuesto.' },
            { title: 'Creamos', text: 'Diseñamos y desarrollamos con entregas parciales.' },
            { title: 'Publicamos y medimos', text: 'Lanzamos, medimos y ajustamos para que siga funcionando.' },
          ] },
        ],
      },
    ],
    faqs: s.faqs,
    related: s.related,
  };
}

export const servicioPages: Page[] = servicios.map(servicioToPage);
export const serviciosPresencia = ['desarrollo-web', 'landing-pages', 'tiendas-online', 'rediseno-web', 'mantenimiento-web'].map(slug => `${S}/${slug}`);
export const serviciosMarca = ['gestion-de-redes-sociales', 'creacion-de-contenido', 'estrategia-digital'].map(slug => `${S}/${slug}`);
export const serviciosEficiencia = ['automatizaciones', 'chatbots-whatsapp-ia', 'crm-a-medida', 'software-a-medida'].map(slug => `${S}/${slug}`);
