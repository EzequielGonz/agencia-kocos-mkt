/* ============================================================================
 * ENVÍO DE FORMULARIOS (home y páginas nuevas)
 *
 *  - 'pocketbase' → la base que ya trae el hosting (colección "inquiries"). ACTIVO.
 *  - 'supabase'   → ejecutar /supabase/inquiries.sql y completar SUPABASE_CONFIG.
 *  - 'webhook'    → cualquier URL que reciba JSON (Make, Zapier, n8n, CRM).
 *  - 'none'       → no guarda nada (solo para pruebas).
 * ========================================================================== */

export type LeadsProvider = 'pocketbase' | 'supabase' | 'webhook' | 'none';

export const LEADS_PROVIDER: LeadsProvider = 'pocketbase';

/** La anon key es pública por diseño: la política RLS del SQL solo permite insertar. */
export const SUPABASE_CONFIG = { url: '', anonKey: '', table: 'inquiries' };

export const WEBHOOK_URL = '';

export type Lead = {
  full_name: string;
  whatsapp: string;
  email: string;
  business: string;
  industry: string;
  instagram: string;
  need: string;
  budget: string;
  message: string;
  /** Página desde la que llegó la consulta. */
  origen?: string;
};

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}) {
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
  if (!response.ok) throw new Error(`Error ${response.status} al enviar la consulta`);
}

export async function submitLead(lead: Lead): Promise<void> {
  const payload = { ...lead, origen: lead.origen || '/' };
  switch (LEADS_PROVIDER) {
    case 'pocketbase': {
      const { default: pb } = await import('@/lib/pocketbase-client');
      await pb.collection('inquiries').create(payload);
      return;
    }
    case 'supabase': {
      const { url, anonKey, table } = SUPABASE_CONFIG;
      if (!url || !anonKey) throw new Error('Supabase sin configurar');
      await postJson(`${url}/rest/v1/${table}`, payload, { apikey: anonKey, Authorization: `Bearer ${anonKey}`, Prefer: 'return=minimal' });
      return;
    }
    case 'webhook': {
      if (!WEBHOOK_URL) throw new Error('Webhook sin configurar');
      await postJson(WEBHOOK_URL, payload);
      return;
    }
    default:
      console.info('[leads] Proveedor "none": la consulta no se guardó.', payload);
  }
}
