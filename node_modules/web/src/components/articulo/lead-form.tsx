import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUDGET_RANGES } from '@/constants/site';
import { CTA } from '@/constants/cta';
import type { ConsultaTipo } from '@/content/types';
import { submitLead, type Lead } from '@/lib/leads';
import { track } from '@/lib/track';

const NEEDS: ConsultaTipo[] = ['Página web', 'Redes sociales', 'Web + redes', 'Proyecto personalizado', 'E-commerce', 'Automatización o IA', 'Sistema o software a medida'];

type Props = { need: ConsultaTipo; industry?: string; origen: string };

/**
 * Formulario de las páginas nuevas: mismo diseño, campos y base de datos que el
 * de la home. Suma opciones en "¿Qué necesitás?" (e-commerce, automatización,
 * software), rangos de inversión para priorizar proyectos grandes, y llega
 * precargado según la página. Usa id="contacto", igual que la home.
 */
export function LeadForm({ need, industry = '', origen }: Props) {
  const initial: Omit<Lead, 'origen'> = { full_name: '', whatsapp: '', email: '', business: '', industry, instagram: '', need, budget: '', message: '' };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const change = (key: keyof typeof initial, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await submitLead({ ...form, origen });
      track('lead_enviado', { origen, need: form.need });
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contacto" className="contact section-pad">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="section-kicker">{CTA.form.kicker}</span>
          <h2>{CTA.form.title}<br /><em>{CTA.form.titleEm}</em></h2>
          <p>{CTA.form.intro}</p>
          <div className="contact-aside"><span>{CTA.form.aside}</span><ArrowUpRight size={45} strokeWidth={1} /></div>
        </div>
        <div className="contact-form-wrap">
          {status === 'sent' ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={44} strokeWidth={1.5} />
              <h3>{CTA.form.successTitle}</h3>
              <p>{CTA.form.successText}</p>
              <button type="button" className="text-link" onClick={() => setStatus('idle')}>Enviar otra consulta <ArrowUpRight size={18} /></button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-title"><h3>{CTA.form.formTitle}</h3><span>01 / 01</span></div>
              <div className="form-grid">
                <label>Nombre y apellido <span>*</span><input required autoComplete="name" value={form.full_name} onChange={e => change('full_name', e.target.value)} /></label>
                <label>WhatsApp <span>*</span><input required type="tel" autoComplete="tel" value={form.whatsapp} onChange={e => change('whatsapp', e.target.value)} /></label>
                <label>Email <span>*</span><input required type="email" autoComplete="email" value={form.email} onChange={e => change('email', e.target.value)} /></label>
                <label>Nombre del negocio <span>*</span><input required value={form.business} onChange={e => change('business', e.target.value)} /></label>
                <label>Rubro<input value={form.industry} onChange={e => change('industry', e.target.value)} /></label>
                <label>Instagram<input value={form.instagram} onChange={e => change('instagram', e.target.value)} /></label>
                <label>¿Qué necesitás? <span>*</span><select required value={form.need} onChange={e => change('need', e.target.value)}><option value="" disabled>Seleccioná una opción</option>{NEEDS.map(option => <option key={option}>{option}</option>)}</select></label>
                <label>Inversión estimada<select value={form.budget} onChange={e => change('budget', e.target.value)}><option value="">Seleccioná una opción</option>{BUDGET_RANGES.map(option => <option key={option}>{option}</option>)}</select></label>
                <label className="form-wide">Mensaje <span>*</span><textarea required rows={4} value={form.message} onChange={e => change('message', e.target.value)} placeholder="Contanos qué querés lograr y cómo funciona hoy tu negocio." /></label>
              </div>
              {status === 'error' && <p className="form-error" role="alert">{CTA.form.errorText}</p>}
              <button type="submit" disabled={status === 'sending'} className="button button-orange form-submit">{status === 'sending' ? 'Enviando consulta...' : CTA.form.submit} <ArrowUpRight size={19} /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
