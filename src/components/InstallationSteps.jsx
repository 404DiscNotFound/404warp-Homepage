import { motion } from 'framer-motion';
import { Package, RefreshCw, Rocket } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Package, RefreshCw, Rocket];

export default function InstallationSteps() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">{t.installation.title}</h2>
          <p className="text-muted-foreground">{t.installation.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.installation.steps.map((step, i) => {
            const Icon = icons[i] || Package;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-panel glass-panel-hover rounded-2xl p-8 text-center relative"
              >
                <div className="text-5xl font-heading font-bold text-white/5 absolute top-4 right-6">{step.num}</div>
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}