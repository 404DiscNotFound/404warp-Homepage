import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-4"
        >
          <span className="gradient-text">{t.cta.title}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-8"
        >
          {t.cta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://github.com/404DiscNotFound"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors neon-cyan"
          >
            <Download className="w-4 h-4" /> {t.cta.download}
          </a>
          <a
            href="https://discord.gg/gsQEWZScuX"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> {t.cta.discord}
          </a>
        </motion.div>
      </div>
    </section>
  );
}