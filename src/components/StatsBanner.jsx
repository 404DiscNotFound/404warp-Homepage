import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function StatsBanner() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {t.stats.items.map((item, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">{item.value}</div>
              <div className="text-xs font-mono text-muted-foreground tracking-wider">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}