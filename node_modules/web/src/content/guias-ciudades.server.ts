import type { Page } from './types';

const D = '2026-09-30';
const S = '/servicios';
const base = { silo: 'guias', kind: 'guia', published: D, updated: D, tipo: 'Proyecto personalizado' } as const;

/* ================================ GUÍAS ================================ */

export const calculadoraPage: Page = {
  ...base,
  kind: 'herramienta',
  tipo: 'Automatización o IA',
  path: '/guias/calculadora-de-automatizacion',
  title: 'Calculadora de ahorro por automatización',
  description: 'Calculá cuántas horas y cuánto dinero por año podría ahorrar tu empresa automatizando tareas repetitivas. Estimación simple en segundos.',
  label: '/ CALCULADORA',
  h1: '¿Cuánto te cuesta',
  h1Em: 'hacerlo a mano?',
  lead: 'Ingresá cuántas horas por semana dedica tu equipo a tareas repetitivas y el costo aproximado de cada hora. Te mostramos cuánto podrías recuperar por año automatizando.',
  nav: 'Calculadora de automatización',
  sections: [
    {
      title: 'Cómo se calcula',
      blocks: [
        { p: 'Multiplicamos las horas semanales por las personas involucradas, por el costo por hora y por las semanas laborables del año. Después aplicamos el porcentaje de esas tareas que se podría automatizar.' },
        { p: 'No todo se automatiza: siempre queda una parte que necesita criterio humano. Por eso el resultado es una estimación, que después afinamos en el diagnóstico.' },
      ],
    },
    {
      title: 'Qué tareas contar',
      blocks: [
        { list: ['Copiar datos de formularios, emails o chats a planillas o sistemas.', 'Responder las mismas preguntas una y otra vez.', 'Armar reportes semanales o mensuales.', 'Hacer seguimiento manual de clientes o cotizaciones.', 'Enviar recordatorios, confirmaciones o avisos.'] },
        { note: 'Mirá ejemplos concretos en [qué se puede automatizar en una empresa](/guias/que-automatizar-en-una-empresa).' },
      ],
    },
  ],
  faqs: [{ q: '¿El ahorro se traduce en despidos?', a: 'No necesariamente. En la mayoría de las empresas, el tiempo recuperado se reasigna a tareas de más valor, como vender, atender mejor o planificar.' }],
  related: [`${S}/automatizaciones`, '/guias/que-automatizar-en-una-empresa', `${S}/chatbots-whatsapp-ia`],
};

export const guiaPages: Page[] = [
  {
    ...base,
    tipo: 'Página web',
    path: '/guias/cuanto-cuesta-una-pagina-web',
    title: 'Cuánto cuesta una página web profesional en Argentina',
    description: 'Qué define el precio de una página web: tipo de sitio, diseño, funcionalidades, integraciones y mantenimiento. Cómo comparar presupuestos sin equivocarte.',
    label: '/ GUÍA',
    h1: '¿Cuánto cuesta',
    h1Em: 'una página web?',
    lead: 'La respuesta honesta es: depende de qué necesitás que haga. Te explicamos qué factores definen el precio para que puedas comparar presupuestos con criterio.',
    nav: 'Cuánto cuesta una página web',
    sections: [
      {
        title: 'Los factores que definen el precio',
        blocks: [
          { h3: 'Tipo de sitio' },
          { p: 'Una [landing page](/servicios/landing-pages) de una sola página no requiere el mismo trabajo que un [sitio corporativo](/servicios/desarrollo-web) con muchas secciones o una [tienda online](/servicios/tiendas-online).' },
          { h3: 'Diseño a medida o plantilla' },
          { p: 'Una plantilla reduce costos; un diseño a medida refleja mejor tu marca y tus objetivos. Lo comparamos en [web a medida o plantilla](/guias/web-a-medida-o-plantilla).' },
          { h3: 'Funcionalidades e integraciones' },
          { p: 'Reservas, pagos, buscadores, CRM o sistemas internos suman desarrollo. Cada integración tiene su complejidad.' },
          { h3: 'Contenido' },
          { p: 'Textos, fotos y videos: si los tenés o si hay que producirlos.' },
          { h3: 'Mantenimiento' },
          { p: 'Hosting, dominio, actualizaciones y mejoras continuas son costos que se repiten.' },
        ],
      },
      {
        title: 'Cómo comparar presupuestos',
        blocks: [
          { list: ['Pedí que el alcance esté detallado por escrito.', 'Preguntá qué pasa con el posicionamiento en Google.', 'Verificá si los formularios quedan conectados a una base de datos.', 'Consultá quién es dueño del sitio y de los accesos.', 'Pedí ejemplos de trabajos similares.'] },
          { note: 'Para negocios que empiezan, tenemos [planes con precio publicado](/#planes). Para proyectos más grandes, preparamos una propuesta a medida.' },
        ],
      },
    ],
    faqs: [{ q: '¿Por qué hay presupuestos tan distintos?', a: 'Porque no siempre incluyen lo mismo. Dos sitios que parecen iguales pueden diferir mucho en velocidad, posicionamiento, integraciones y soporte.' }],
    related: [`${S}/desarrollo-web`, '/guias/web-a-medida-o-plantilla', '/guias/agencia-o-freelancer'],
  },
  {
    ...base,
    path: '/guias/agencia-o-freelancer',
    title: 'Agencia o freelancer: qué conviene para tu empresa',
    description: 'Diferencias entre contratar una agencia de marketing o un freelancer: alcance, continuidad, costos y cuándo conviene cada opción.',
    label: '/ GUÍA',
    h1: 'Agencia o freelancer:',
    h1Em: 'qué te conviene.',
    lead: 'Las dos opciones pueden funcionar. La diferencia está en el alcance del proyecto, la continuidad que necesitás y cuántas disciplinas están involucradas.',
    nav: 'Agencia o freelancer',
    sections: [
      {
        title: 'Cuándo conviene un freelancer',
        blocks: [{ list: ['Proyectos acotados de una sola disciplina.', 'Presupuestos ajustados.', 'Cuando ya tenés quien coordine el trabajo.'] }],
      },
      {
        title: 'Cuándo conviene una agencia',
        blocks: [
          { list: ['Proyectos que combinan web, redes, contenido y automatización.', 'Cuando necesitás continuidad aunque cambien las personas.', 'Cuando buscás estrategia además de ejecución.', 'Proyectos con integraciones o sistemas.'] },
          { note: 'Lo importante es que el alcance, los tiempos y la propiedad de lo desarrollado queden claros por escrito, sea quien sea.' },
        ],
      },
    ],
    related: ['/guias/como-elegir-una-agencia-de-marketing', '/servicios', '/guias/cuanto-cuesta-una-pagina-web'],
  },
  {
    ...base,
    tipo: 'Página web',
    path: '/guias/web-a-medida-o-plantilla',
    title: 'Web a medida o plantilla: ventajas de cada opción',
    description: 'Cuándo conviene una web basada en plantilla y cuándo un desarrollo a medida: costos, diferenciación, velocidad, escalabilidad e integraciones.',
    label: '/ GUÍA',
    h1: 'Web a medida',
    h1Em: 'o plantilla.',
    lead: 'No siempre hace falta un desarrollo a medida, y no siempre alcanza con una plantilla. Te ayudamos a decidir según tu caso.',
    nav: 'Web a medida o plantilla',
    sections: [
      { title: 'Plantilla', blocks: [{ list: ['Menor costo y tiempo.', 'Buena opción para empezar.', 'Menos diferenciación y más límites para crecer.'] }] },
      { title: 'A medida', blocks: [{ list: ['Diseño alineado a tu marca y tus objetivos.', 'Mejor rendimiento y posicionamiento.', 'Permite integraciones y funcionalidades propias.', 'Escala con tu negocio.'] }] },
      { title: 'Cómo decidir', blocks: [{ p: 'Si tu web es un canal comercial importante, necesita integrarse con otros sistemas o querés diferenciarte de la competencia, conviene [a medida](/servicios/desarrollo-web). Si necesitás salir rápido con algo profesional, una [landing page](/servicios/landing-pages) bien hecha puede ser el primer paso.' }] },
    ],
    related: [`${S}/desarrollo-web`, '/guias/cuanto-cuesta-una-pagina-web', `${S}/software-a-medida`],
  },
  {
    ...base,
    tipo: 'Página web',
    path: '/guias/landing-page-o-sitio-web',
    title: 'Landing page o sitio web: cuál necesita tu negocio',
    description: 'Diferencias entre una landing page y un sitio web completo: objetivos, estructura, SEO, campañas y cuándo conviene cada uno.',
    label: '/ GUÍA',
    h1: 'Landing page',
    h1Em: 'o sitio web.',
    lead: 'Una landing page busca una sola acción; un sitio web presenta todo tu negocio. Muchas empresas necesitan las dos cosas en distintos momentos.',
    nav: 'Landing page o sitio web',
    sections: [
      { title: 'Landing page', blocks: [{ list: ['Un objetivo: que te contacten o compren.', 'Ideal para campañas y lanzamientos.', 'Rápida de producir.'] }] },
      { title: 'Sitio web', blocks: [{ list: ['Presenta todos tus servicios, tu equipo y tu historia.', 'Permite sumar muchas páginas para aparecer en Google.', 'Es la base de tu presencia digital a largo plazo.'] }] },
      { title: 'Lo mejor de los dos', blocks: [{ p: 'Una landing puede crecer y convertirse en sitio, sumando páginas de servicios y guías sin cambiar su diseño. Es una de las formas más eficientes de empezar. Ver [landing pages](/servicios/landing-pages).' }] },
    ],
    related: [`${S}/landing-pages`, `${S}/desarrollo-web`, '/guias/cuanto-cuesta-una-pagina-web'],
  },
  {
    ...base,
    tipo: 'Automatización o IA',
    path: '/guias/que-automatizar-en-una-empresa',
    title: 'Qué se puede automatizar en una empresa: ejemplos',
    description: 'Ejemplos concretos de procesos que se pueden automatizar en ventas, atención, administración y marketing, con y sin inteligencia artificial.',
    label: '/ GUÍA',
    h1: 'Qué se puede automatizar',
    h1Em: 'en tu empresa.',
    lead: 'La automatización no es solo para grandes corporaciones. Estos son ejemplos concretos que cualquier empresa puede aplicar.',
    nav: 'Qué automatizar en una empresa',
    sections: [
      { title: 'Ventas', blocks: [{ list: ['Ingreso automático de consultas de la web, WhatsApp y redes a un CRM.', 'Respuesta inmediata con información inicial.', 'Recordatorios de seguimiento a vendedores.', 'Envío de propuestas y avisos de vencimiento.'] }] },
      { title: 'Atención al cliente', blocks: [{ list: ['Asistente de WhatsApp que responde preguntas frecuentes.', 'Confirmación y recordatorio de turnos o reservas.', 'Encuestas de satisfacción después de la compra.'] }] },
      { title: 'Administración', blocks: [{ list: ['Carga de facturas y comprobantes.', 'Conciliación de pagos.', 'Reportes que se generan y envían solos.'] }] },
      { title: 'Marketing', blocks: [{ list: ['Segmentación automática de contactos.', 'Campañas por email o WhatsApp según el comportamiento.', 'Tableros de métricas actualizados.'] }, { note: 'Estimá tu ahorro con la [calculadora de automatización](/guias/calculadora-de-automatizacion).' }] },
    ],
    related: [`${S}/automatizaciones`, '/guias/calculadora-de-automatizacion', '/guias/ia-para-empresas'],
  },
  {
    ...base,
    tipo: 'Automatización o IA',
    path: '/guias/ia-para-empresas',
    title: 'Inteligencia artificial para empresas: usos concretos',
    description: 'Cómo pueden usar las empresas la inteligencia artificial hoy: atención al cliente, ventas, contenido, análisis y procesos internos, con cuidados.',
    label: '/ GUÍA',
    h1: 'Inteligencia artificial',
    h1Em: 'aplicada a tu empresa.',
    lead: 'Más allá de la novedad, la IA ya resuelve problemas concretos en empresas de todos los tamaños. Estos son los usos con más impacto y los cuidados que requieren.',
    nav: 'IA para empresas',
    sections: [
      { title: 'Usos con más impacto', blocks: [{ list: ['Atención al cliente con [asistentes de WhatsApp](/servicios/chatbots-whatsapp-ia).', 'Clasificación y resumen de consultas, emails o documentos.', 'Borradores de propuestas y respuestas.', 'Análisis de datos de ventas y clientes.', 'Producción de contenido con revisión humana.'] }] },
      { title: 'Cuidados', blocks: [{ list: ['Definir qué decide la IA y qué revisa una persona.', 'Proteger los datos sensibles de clientes.', 'Entrenarla con información actualizada del negocio.', 'Medir resultados y ajustar.'] }, { note: 'La IA funciona mejor integrada a tus procesos que como una herramienta aislada.' }] },
    ],
    related: [`${S}/chatbots-whatsapp-ia`, `${S}/automatizaciones`, '/guias/que-automatizar-en-una-empresa'],
  },
  {
    ...base,
    tipo: 'Redes sociales',
    path: '/guias/como-medir-el-retorno-de-las-redes',
    title: 'Cómo medir el retorno de las redes sociales',
    description: 'Qué métricas mirar para saber si tus redes generan negocio: alcance, interacción, clics, consultas y ventas. Cómo conectar redes con resultados.',
    label: '/ GUÍA',
    h1: 'Cómo medir',
    h1Em: 'si tus redes funcionan.',
    lead: 'Los seguidores y los "me gusta" no pagan las cuentas. Te explicamos cómo conectar tus redes con consultas y ventas reales.',
    nav: 'Medir el retorno de las redes',
    sections: [
      { title: 'Las métricas que importan', blocks: [{ list: ['Alcance: cuánta gente nueva ve tu contenido.', 'Interacción: si el contenido genera interés.', 'Clics y mensajes: cuántos pasan de mirar a consultar.', 'Consultas atribuidas: cuántas llegan desde redes.', 'Ventas: cuántas de esas consultas se concretan.'] }] },
      { title: 'Cómo conectarlas', blocks: [{ p: 'Usá enlaces con seguimiento, preguntá en el formulario cómo te conocieron y registrá cada consulta en un [CRM](/servicios/crm-a-medida). Así cada mes sabés qué contenido trae clientes.' }] },
    ],
    related: [`${S}/gestion-de-redes-sociales`, `${S}/estrategia-digital`, `${S}/crm-a-medida`],
  },
  {
    ...base,
    path: '/guias/como-elegir-una-agencia-de-marketing',
    title: 'Cómo elegir una agencia de marketing digital',
    description: 'Qué preguntar antes de contratar una agencia de marketing: experiencia, proceso, alcance, propiedad, métricas y comunicación.',
    label: '/ GUÍA',
    h1: 'Cómo elegir',
    h1Em: 'una agencia de marketing.',
    lead: 'Elegir bien ahorra meses y dinero. Estas son las preguntas que conviene hacer antes de firmar.',
    nav: 'Cómo elegir una agencia',
    sections: [
      { title: 'Preguntas clave', blocks: [{ list: ['¿Cómo es su proceso de trabajo?', '¿Qué incluye exactamente la propuesta?', '¿Quién es dueño del sitio, las cuentas y el contenido?', '¿Qué métricas van a reportar y cada cuánto?', '¿Cómo es la comunicación durante el proyecto?', '¿Qué pasa si quiero terminar el servicio?'] }] },
      { title: 'Señales de alerta', blocks: [{ list: ['Promesas de resultados garantizados.', 'Presupuestos sin detalle de alcance.', 'Falta de acceso a tus propias cuentas.', 'Reportes que solo muestran seguidores.'] }] },
    ],
    related: ['/guias/agencia-o-freelancer', `${S}/estrategia-digital`, '/servicios'],
  },
];

/* =============================== CIUDADES =============================== */

type Ciudad = { slug: string; nombre: string; en: string; perfil: string; rubros: string[]; status?: 'publicado' | 'borrador' };

const C = '/agencia-de-marketing-digital';

export const ciudades: Ciudad[] = [
  { slug: 'buenos-aires', nombre: 'Buenos Aires', en: 'en Buenos Aires', perfil: 'Buenos Aires concentra la mayor cantidad de empresas del país y la competencia digital más intensa. Diferenciarse exige una presencia profesional, rápida y bien posicionada.', rubros: ['estudios-juridicos', 'salud-y-clinicas', 'inmobiliarias', 'retail-y-ecommerce'] },
  { slug: 'cordoba', nombre: 'Córdoba', en: 'en Córdoba', perfil: 'Córdoba combina industria, servicios y un ecosistema tecnológico en crecimiento, con empresas que buscan profesionalizar su presencia digital y sus procesos.', rubros: ['industria-y-b2b', 'educacion', 'concesionarias-y-agencias-de-autos', 'construccion-y-desarrollos'] },
  { slug: 'rosario', nombre: 'Rosario', en: 'en Rosario', perfil: 'Rosario es un polo agroindustrial y de servicios, con empresas B2B y comercios que compiten cada vez más en el canal digital.', rubros: ['industria-y-b2b', 'gastronomia', 'inmobiliarias', 'retail-y-ecommerce'] },
  { slug: 'mendoza', nombre: 'Mendoza', en: 'en Mendoza', perfil: 'En Mendoza, el turismo, la vitivinicultura y los servicios empujan la demanda de webs con reservas, e-commerce y redes con contenido de experiencia.', rubros: ['hoteles-y-turismo', 'gastronomia', 'retail-y-ecommerce', 'construccion-y-desarrollos'] },
  { slug: 'la-plata', nombre: 'La Plata', en: 'en La Plata', perfil: 'La Plata reúne profesionales, instituciones educativas y comercios con un público muy digital, sobre todo universitario.', rubros: ['profesionales-y-consultoras', 'educacion', 'salud-y-clinicas', 'gastronomia'] },
  { slug: 'mar-del-plata', nombre: 'Mar del Plata', en: 'en Mar del Plata', perfil: 'En Mar del Plata el turismo marca el ritmo: hoteles, gastronomía y comercios necesitan vender más en temporada y sostener la demanda el resto del año.', rubros: ['hoteles-y-turismo', 'gastronomia', 'inmobiliarias', 'retail-y-ecommerce'] },
  { slug: 'neuquen', nombre: 'Neuquén', en: 'en Neuquén', perfil: 'Neuquén vive un crecimiento impulsado por la energía, con empresas de servicios, construcción e inmobiliarias que necesitan escalar rápido.', rubros: ['industria-y-b2b', 'construccion-y-desarrollos', 'inmobiliarias', 'concesionarias-y-agencias-de-autos'] },
  { slug: 'tucuman', nombre: 'Tucumán', en: 'en Tucumán', perfil: 'Tucumán es el centro comercial y de servicios del norte del país, con empresas que buscan diferenciarse en un mercado regional competitivo.', rubros: ['salud-y-clinicas', 'educacion', 'retail-y-ecommerce', 'profesionales-y-consultoras'] },
  { slug: 'salta', nombre: 'Salta', en: 'en Salta', perfil: 'En Salta, el turismo y los servicios crecen junto con la demanda de presencia digital profesional para atraer visitantes y clientes.', rubros: ['hoteles-y-turismo', 'gastronomia', 'inmobiliarias', 'profesionales-y-consultoras'] },
  { slug: 'santa-fe', nombre: 'Santa Fe', en: 'en Santa Fe', perfil: 'La ciudad de Santa Fe combina administración pública, industria y servicios profesionales con una demanda creciente de soluciones digitales.', rubros: ['profesionales-y-consultoras', 'industria-y-b2b', 'salud-y-clinicas', 'educacion'] },
];

function ciudadToPage(c: Ciudad): Page {
  return {
    silo: 'servicios',
    kind: 'ciudad',
    status: c.status ?? 'publicado',
    tipo: 'Proyecto personalizado',
    published: D,
    updated: D,
    path: `${C}/${c.slug}`,
    title: `Agencia de marketing digital ${c.en}: web, redes e IA`.length <= 62 ? `Agencia de marketing digital ${c.en}: web, redes e IA` : `Agencia de marketing digital ${c.en}`,
    description: `Desarrollo web, automatizaciones con IA, sistemas a medida y gestión de redes para empresas ${c.en}. Trabajamos a distancia con todo el país.`,
    label: `/ ${c.nombre.toUpperCase()}`,
    h1: 'Marketing digital',
    h1Em: `para empresas ${c.en}.`,
    lead: `Diseñamos webs, automatizamos procesos y gestionamos redes para empresas ${c.en}, con el mismo nivel de trabajo que en cualquier ciudad del país.`,
    nav: c.nombre,
    sections: [
      { title: `Empresas ${c.en}`, blocks: [{ p: c.perfil }] },
      {
        title: 'Rubros con los que trabajamos',
        blocks: [{ list: c.rubros.map(slug => `[${RUBRO_NOMBRE[slug]}](/rubros/${slug})`) }],
      },
      {
        title: 'Qué hacemos',
        blocks: [
          { list: [
            '[Desarrollo web](/servicios/desarrollo-web) y [tiendas online](/servicios/tiendas-online).',
            '[Automatizaciones](/servicios/automatizaciones) y [asistentes de WhatsApp con IA](/servicios/chatbots-whatsapp-ia).',
            '[CRM](/servicios/crm-a-medida) y [software a medida](/servicios/software-a-medida).',
            '[Gestión de redes sociales](/servicios/gestion-de-redes-sociales) y [contenido](/servicios/creacion-de-contenido).',
          ] },
        ],
      },
      {
        title: 'Cómo trabajamos a distancia',
        blocks: [
          { steps: [
            { title: 'Reunión inicial por videollamada', text: 'Conocemos tu negocio y lo que querés lograr.' },
            { title: 'Propuesta por escrito', text: 'Alcance, tiempos y presupuesto claros.' },
            { title: 'Avances compartidos', text: 'Ves el proyecto en cada etapa y das tu feedback.' },
            { title: 'Lanzamiento y acompañamiento', text: 'Publicamos, medimos y seguimos mejorando.' },
          ] },
          { note: 'La distancia no cambia la calidad del trabajo: la comunicación es directa y constante durante todo el proyecto.' },
        ],
      },
    ],
    faqs: [
      { q: `¿Trabajan con empresas ${c.en}?`, a: `Sí. Trabajamos a distancia con empresas ${c.en} y de todo el país.` },
      { q: '¿Hace falta reunirse en persona?', a: 'No. Todo el proceso se puede hacer por videollamada y canales digitales.' },
    ],
    related: c.rubros.slice(0, 2).map(slug => `/rubros/${slug}`).concat(`${S}/automatizaciones`),
  };
}

const RUBRO_NOMBRE: Record<string, string> = {
  'hoteles-y-turismo': 'Hoteles y turismo', 'estudios-juridicos': 'Estudios jurídicos', 'salud-y-clinicas': 'Salud y clínicas',
  inmobiliarias: 'Inmobiliarias', 'concesionarias-y-agencias-de-autos': 'Concesionarias y agencias de autos', gastronomia: 'Gastronomía',
  'retail-y-ecommerce': 'Retail y e-commerce', educacion: 'Educación', 'industria-y-b2b': 'Industria y B2B',
  'profesionales-y-consultoras': 'Profesionales y consultoras', 'construccion-y-desarrollos': 'Construcción y desarrollos',
};

export const ciudadPages: Page[] = ciudades.map(ciudadToPage);
