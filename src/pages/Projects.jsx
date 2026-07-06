import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

const PTERIOS_BANNER = 'https://media.base44.com/images/public/user_696f6c19e19dc7322bc90c15/e3efbfa55_KopievonDesignohneTitel.png';
const STATS_BANNER = 'https://media.base44.com/images/public/user_696f6c19e19dc7322bc90c15/e7a4a8716_404statsbanner.png';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    { banner: PTERIOS_BANNER, title: t.projects.pterios.title, desc: t.projects.pterios.desc, url: 'https://pterios.404gnf.de' },
    { banner: STATS_BANNER, title: t.projects.stats.title, desc: t.projects.stats.desc, url: 'https://mcstats.404gnf.de' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {t.projects.backToHome}
      </Link>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">{t.projects.title}</h1>
      <p className="text-muted-foreground mb-12">{t.projects.subtitle}</p>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel chromatic-border rounded-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
              <img src={p.banner} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">{p.title}</h2>
              <p className="text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex gap-3">
                <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> {t.projects.visit}
                </a>
                <a href="https://github.com/404DiscNotFound" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/10 text-muted-foreground hover:bg-white/5 transition-colors">
                  <Github className="w-3.5 h-3.5" /> {t.projects.github}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}