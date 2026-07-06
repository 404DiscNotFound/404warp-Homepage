import { motion } from 'framer-motion';
import { Download, MessageCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const LOGO_URL = 'https://media.base44.com/images/public/user_696f6c19e19dc7322bc90c15/b05eb98df_404Warp-Logo.png';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img src={LOGO_URL} alt="404Warp Logo" className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain glitch-hover animate-float" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-sm font-mono mb-6"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-3"
        >
          <span className="text-white">404</span>
          <span className="gradient-text">Warp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl font-heading font-bold mb-4"
        >
          <span className="gradient-text">{t.hero.titleHighlight}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-sm text-muted-foreground/60 max-w-xl mx-auto mb-8"
        >
          {t.hero.warning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="https://github.com/404DiscNotFound"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors neon-cyan"
          >
            <Download className="w-4 h-4" /> {t.hero.download}
          </a>
          <a
            href="https://discord.gg/gsQEWZScuX"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> {t.hero.discord}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <img src="https://img.shields.io/bstats/servers/32437?style=for-the-badge&label=Servers&color=00F5FF&labelColor=0A0A0F" alt="Servers" />
          <img src="https://img.shields.io/bstats/players/32437?style=for-the-badge&label=Players&color=FF0055&labelColor=0A0A0F" alt="Players" />
        </motion.div>
      </div>
    </section>
  );
}