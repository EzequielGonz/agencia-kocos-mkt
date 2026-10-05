import { LOGO_URL } from '@/constants/site';

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <span className="brand-lockup"><span className="brand-mark"><img src={LOGO_URL} alt="Símbolo de Kocos Marketing" width="500" height="500" /></span>{!compact && <span className="brand-name">KOCOS<span>MARKETING</span></span>}</span>;
}
