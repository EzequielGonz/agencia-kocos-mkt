import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { submitLead } from '@/lib/leads';
import { track } from '@/lib/track';

type Inquiry = { full_name: string; whatsapp: string; email: string; business: string; industry: string; instagram: string; need: string; budget: string; message: string };
const initial: Inquiry = { full_name: '', whatsapp: '', email: '', business: '', industry: '', instagram: '', need: '', budget: '', message: '' };
export function Contact() {
  const [form, setForm] = useState<Inquiry>(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  useEffect(() => {
    const onPlan = (event: Event) => setForm(prev => ({ ...prev, need: (event as CustomEvent<string>).detail === 'WEB' ? 'Página web' : 'Web + redes', message: `Me interesa el plan ${(event as CustomEvent<string>).detail}.` }));
    window.addEventListener('select-plan', onPlan);
    return () => window.removeEventListener('select-plan', onPlan);
  }, []);
  const change = (key: keyof Inquiry, value: string) => setForm(prev => ({ ...prev, [key]: value }));
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await submitLead({ ...form, origen: '/' });
      track('lead_enviado', { origen: '/', need: form.need });
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }
  return <section id="contacto" className="contact section-pad"><div className="container contact-grid"><div className="contact-intro reveal"><span className="section-kicker">/ EMPECEMOS POR ACÁ</span><h2>Hablemos de<br /><em>tu próximo paso.</em></h2><p>Contanos un poco sobre tu negocio. Nosotros nos ocupamos de encontrar la mejor manera de hacerlo crecer en digital.</p><div className="contact-aside"><span>UNA IDEA PUEDE SER EL COMIENZO DE ALGO GRANDE.</span><ArrowUpRight size={45} strokeWidth={1} /></div></div><div className="contact-form-wrap reveal">{status === 'sent' ? <div className="form-success" role="status"><CheckCircle2 size={44} strokeWidth={1.5} /><h3>¡Gracias! Recibimos tu consulta.</h3><p>Nos vamos a contactar con vos a la brevedad.</p><button type="button" className="text-link" onClick={() => setStatus('idle')}>Enviar otra consulta <ArrowUpRight size={18} /></button></div> : <form onSubmit={submit}><div className="form-title"><h3>Contanos sobre tu proyecto</h3><span>01 / 01</span></div><div className="form-grid"><label>Nombre y apellido <span>*</span><input required autoComplete="name" value={form.full_name} onChange={e => change('full_name', e.target.value)} /></label><label>WhatsApp <span>*</span><input required type="tel" autoComplete="tel" value={form.whatsapp} onChange={e => change('whatsapp', e.target.value)} /></label><label>Email <span>*</span><input required type="email" autoComplete="email" value={form.email} onChange={e => change('email', e.target.value)} /></label><label>Nombre del negocio <span>*</span><input required value={form.business} onChange={e => change('business', e.target.value)} /></label><label>Rubro<input value={form.industry} onChange={e => change('industry', e.target.value)} /></label><label>Instagram<input value={form.instagram} onChange={e => change('instagram', e.target.value)} /></label><label>¿Qué necesitás? <span>*</span><select required value={form.need} onChange={e => change('need', e.target.value)}><option value="" disabled>Seleccioná una opción</option><option>Página web</option><option>Redes sociales</option><option>Web + redes</option><option>Proyecto personalizado</option></select></label><label>Presupuesto aproximado<input value={form.budget} onChange={e => change('budget', e.target.value)} /></label><label className="form-wide">Mensaje <span>*</span><textarea required rows={4} value={form.message} onChange={e => change('message', e.target.value)} /></label></div>{status === 'error' && <p className="form-error" role="alert">No pudimos enviar tu consulta. Intentá nuevamente en unos minutos.</p>}<button type="submit" disabled={status === 'sending'} className="button button-orange form-submit">{status === 'sending' ? 'Enviando consulta...' : 'Enviar consulta'} <ArrowUpRight size={19} /></button></form>}</div></div></section>;
}
