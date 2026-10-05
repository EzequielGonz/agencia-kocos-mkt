-- ============================================================================
-- Tabla de consultas para Supabase (mismos campos que la colección "inquiries"
-- de PocketBase, para migrar sin cambiar los formularios).
-- 1) Ejecutar este archivo en Supabase → SQL Editor.
-- 2) En apps/web/src/lib/leads.ts: LEADS_PROVIDER = 'supabase' y completar
--    SUPABASE_CONFIG con la URL del proyecto y la anon key (Settings → API).
-- El sitio solo puede INSERTAR. Ver y gestionar consultas queda para el equipo.
-- ============================================================================

create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  full_name   text not null check (char_length(full_name) between 1 and 160),
  whatsapp    text not null check (char_length(whatsapp) between 1 and 60),
  email       text not null check (char_length(email) <= 254),
  business    text not null check (char_length(business) between 1 and 160),
  industry    text check (char_length(industry) <= 120),
  instagram   text check (char_length(instagram) <= 200),
  need        text not null check (need in ('Página web', 'Redes sociales', 'Web + redes', 'Proyecto personalizado', 'E-commerce', 'Automatización o IA', 'Sistema o software a medida')),
  budget      text check (char_length(budget) <= 100),
  message     text not null check (char_length(message) between 1 and 3000),
  origen      text check (char_length(origen) <= 300),  -- página desde la que llegó
  -- Seguimiento comercial (lo completa el equipo, no el sitio)
  estado      text not null default 'nueva' check (estado in ('nueva', 'contactada', 'propuesta enviada', 'ganada', 'perdida')),
  notas       text
);

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);

alter table public.inquiries enable row level security;

drop policy if exists "formulario publico inserta" on public.inquiries;
create policy "formulario publico inserta"
  on public.inquiries for insert to anon
  with check (estado = 'nueva' and notas is null);

drop policy if exists "equipo gestiona consultas" on public.inquiries;
create policy "equipo gestiona consultas"
  on public.inquiries for all to authenticated
  using (true) with check (true);
