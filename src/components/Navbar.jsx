import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/wiki', label: t.nav.wiki },
    { to: '/projects', label: t.nav.projects },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#050508]/80 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-xl glitch-hover">
          <span className="text-white">404</span>
          <span className="gradient-text">Warp</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${location.pathname === link.to ? 'text-cyan-400' : 'text-muted-foreground hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center text-xs font-mono">
            <button
              onClick={lang === 'de' ? toggleLang : undefined}
              className={`px-2.5 py-1 rounded-l border transition-colors ${lang === 'en' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' : 'text-muted-foreground border-border hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={lang === 'en' ? toggleLang : undefined}
              className={`px-2.5 py-1 rounded-r border border-l-0 transition-colors ${lang === 'de' ? 'bg-pink-500/20 text-pink-400 border-pink-500/40' : 'text-muted-foreground border-border hover:text-white'}`}
            >
              DE
            </button>
          </div>
          <a
            href="https://github.com/404DiscNotFound"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 px-4 py-4 space-y-3 bg-[#050508]/95">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm ${location.pathname === link.to ? 'text-cyan-400' : 'text-muted-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}