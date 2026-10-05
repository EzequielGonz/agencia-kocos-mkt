import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),

	// Silo 1 — Servicios (web, e-commerce, automatización/IA, sistemas, redes) + ciudades
	route('servicios', 'routes/seo-servicios.tsx'),
	route('servicios/:slug', 'routes/seo-servicios-slug.tsx'),
	route('agencia-de-marketing-digital/:slug', 'routes/seo-ciudad.tsx'),

	// Silo 2 — Soluciones por rubro
	route('rubros', 'routes/seo-rubros.tsx'),
	route('rubros/:slug', 'routes/seo-rubros-slug.tsx'),

	// Silo 3 — Guías y calculadora
	route('guias', 'routes/seo-guias.tsx'),
	route('guias/calculadora-de-automatizacion', 'routes/seo-calculadora.tsx'),
	route('guias/:slug', 'routes/seo-guias-slug.tsx'),

	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('indexnow.txt', 'routes/indexnow.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
