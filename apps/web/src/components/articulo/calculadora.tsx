import { useId, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Ahorro anual estimado por automatización:
 *   horas/semana × personas × semanas laborables × % automatizable → horas/año
 *   horas/año × costo por hora → pesos/año
 */
const SEMANAS = 48;
const pesos = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
const numero = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
const parse = (value: string) => Number(value.replace(/\./g, '').replace(',', '.'));
const PORCENTAJES = [30, 50, 70];

export function CalculadoraAutomatizacion() {
  const uid = useId();
  const [horas, setHoras] = useState('');
  const [personas, setPersonas] = useState('1');
  const [costo, setCosto] = useState('');
  const [porcentaje, setPorcentaje] = useState('50');

  const h = parse(horas);
  const p = parse(personas);
  const c = parse(costo);
  const pct = Number(porcentaje) / 100;
  const valido = h > 0 && h <= 60 && p >= 1 && p <= 500 && c > 0;
  const horasAnio = valido ? h * p * SEMANAS * pct : 0;
  const ahorro = horasAnio * c;

  return (
    <section className="doc-calc" aria-labelledby={`${uid}-titulo`}>
      <div className="form-title"><h3 id={`${uid}-titulo`}>Calculá tu ahorro</h3><span>01 / 01</span></div>
      <div className="form-grid">
        <label htmlFor={`${uid}-h`}>Horas por semana en tareas repetitivas (por persona)<input id={`${uid}-h`} inputMode="decimal" placeholder="Ej: 8" value={horas} onChange={e => setHoras(e.target.value)} /></label>
        <label htmlFor={`${uid}-p`}>Personas que hacen esas tareas<input id={`${uid}-p`} inputMode="numeric" placeholder="Ej: 3" value={personas} onChange={e => setPersonas(e.target.value)} /></label>
        <label htmlFor={`${uid}-c`}>Costo aproximado por hora ($)<input id={`${uid}-c`} inputMode="numeric" placeholder="Ej: 10.000" value={costo} onChange={e => setCosto(e.target.value)} /></label>
        <label htmlFor={`${uid}-pct`}>¿Cuánto se podría automatizar?<select id={`${uid}-pct`} value={porcentaje} onChange={e => setPorcentaje(e.target.value)}>{PORCENTAJES.map(value => <option key={value} value={value}>{value}%{value === 50 ? ' (estimación habitual)' : ''}</option>)}</select></label>
      </div>
      <div className="doc-calc-result" aria-live="polite">
        {valido ? (
          <>
            <div className="doc-calc-figures">
              <p><span>Horas recuperadas por año</span><strong>{numero.format(horasAnio)}</strong></p>
              <p><span>Ahorro estimado por año</span><strong>{pesos.format(ahorro)}</strong></p>
            </div>
            <p className="doc-calc-note">Estimación orientativa sobre {SEMANAS} semanas laborables. El ahorro real depende de cada proceso: lo calculamos con precisión en el diagnóstico.</p>
            <a className="button button-orange" href="#contacto">Quiero automatizar mi empresa <ArrowUpRight size={19} /></a>
          </>
        ) : (
          <p className="doc-calc-note">Completá las horas, las personas y el costo por hora para ver tu estimación.</p>
        )}
      </div>
    </section>
  );
}
