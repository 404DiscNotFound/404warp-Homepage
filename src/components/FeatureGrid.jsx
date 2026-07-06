import { motion } from 'framer-motion';
import { Gem, Share2, Globe, Zap, Shield, Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const iconMap = { Gem, Share2, Globe, Zap, Shield, Languages };

export default function FeatureGrid() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">{t.features.title}</h2>
          <p className="text-muted-foreground">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Gem;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel glass-panel-hover chromatic-border rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}