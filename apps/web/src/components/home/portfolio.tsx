import { ArrowUpRight } from 'lucide-react';

// Trabajos reales publicados. Las capturas son de los sitios en producción (09/11/2026);
// al desplazarse, cada captura recorre su página dentro del navegador y del celular.
const trabajos = [
  {
    id: 'vita',
    nombre: 'VITA Abogados',
    rubro: 'Estudio jurídico de accidentes de tránsito y laborales',
    hicimos: ['Portada con las dos consultas que abren WhatsApp ya redactado', 'Sello de guilloché con el grabado de la marca', 'Croquis del choque y recorrido del reclamo animados', 'Guías y páginas para buscadores'],
    dominio: 'estudiojuridicovita.com',
    url: 'https://www.estudiojuridicovita.com/',
  },
  {
    id: 'cob',
    nombre: 'Compara Tu Obra Social',
    rubro: 'Comparador de prepagas y obras sociales',
    hicimos: ['Perfil de cobertura en cuatro preguntas que llega armado a WhatsApp', 'Recibo de sueldo y comparación ilustrativos', 'Contenido para cada situación de las redes', 'Guías, cotizador de aportes y páginas por zona'],
    dominio: 'comparatuobrasocial.com',
    url: 'https://www.comparatuobrasocial.com/',
  },
];

export function Portfolio() {
  return (
    <section className="seccion trabajos" id="trabajos">
      <div className="contenedor">
        <div className="trabajos-cabeza">
          <h2 className="revela">Trabajos publicados</h2>
          <p className="seccion-bajada">Dos sitios que diseñamos y desarrollamos, con su WhatsApp, sus guías y sus animaciones. Están en línea: podés entrar y probarlos.</p>
        </div>
        <div className="trabajos-lista">
          {trabajos.map((t, i) => (
            <article className={`trabajo${i % 2 ? ' trabajo-invertido' : ''}`} key={t.id}>
              <div className="trabajo-texto">
                <h3>{t.nombre}</h3>
                <p className="trabajo-rubro">{t.rubro}</p>
                <ul>{t.hicimos.map(item => <li key={item}>{item}</li>)}</ul>
                <a className="enlace-flecha" href={t.url} target="_blank" rel="noopener noreferrer">Ver el sitio <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
              <div className="trabajo-equipos" aria-hidden="true">
                <div className="navegador">
                  <div className="navegador-barra"><i /><i /><i /><span>{t.dominio}</span></div>
                  <div className="navegador-pantalla">
                    <img className="captura" src={`/img/trabajos/${t.id}-escritorio.webp`} alt="" width="1280" height="2578" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="celular">
                  <div className="celular-pantalla">
                    <img className="captura" src={`/img/trabajos/${t.id}-celular.webp`} alt="" width="430" height="2977" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
