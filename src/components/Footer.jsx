import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();
  const aboutLabel = lang === 'de' ? 'Über uns' : 'About';
  const contactLabel = lang === 'de' ? 'Kontakt' : 'Contact';
  const faqLabel = 'FAQ';
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="font-heading font-bold text-2xl">
          <span className="text-white">404</span>
          <span className="gradient-text">Warp</span>
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-cyan-400 transition-colors">{aboutLabel}</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-cyan-400 transition-colors">{contactLabel}</Link>
          <Link to="/faq" className="text-muted-foreground hover:text-cyan-400 transition-colors">{faqLabel}</Link>
          <a href="https://mcstats.404gnf.de" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">{t.footer.website}</a>
          <a href="https://github.com/404DiscNotFound" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">{t.footer.github}</a>
          <a href="https://discord.gg/gsQEWZScuX" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">{t.footer.discord}</a>
        </div>
        <p className="text-xs text-muted-foreground/50">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}