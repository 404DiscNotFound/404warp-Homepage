import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { wikiSections } from '@/data/wikiContent';
import WikiContentRenderer from '@/components/WikiContentRenderer';

export default function Wiki() {
  const { t, lang } = useLanguage();
  const sections = wikiSections[lang];
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {t.wiki.backToHome}
      </Link>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">{t.wiki.title}</h1>
      <p className="text-muted-foreground mb-12">{t.wiki.subtitle}</p>
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${activeSection === s.id ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400' : 'text-muted-foreground hover:text-white border-l-2 border-transparent'}`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </aside>
        <div className="space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-cyan-purple mb-6">{s.title}</h2>
              <div className="glass-panel rounded-2xl p-6 md:p-8">
                <WikiContentRenderer content={s.content} />
              </div>
            </section>
          ))}
          <div className="glass-panel chromatic-border rounded-2xl p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-white mb-2">{t.wiki.nextStep.title}</h3>
            <p className="text-muted-foreground mb-4">{t.wiki.nextStep.desc}</p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-sm hover:bg-cyan-500/20 transition-colors">
              {t.wiki.nextStep.buttonText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}