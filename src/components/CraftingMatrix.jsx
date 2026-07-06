import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const recipes = [
  {
    grid: [null, '💎', null, '💎', '💎', '💎', null, '💎', null],
    result: '🔮',
  },
  {
    grid: [null, '💎', null, '💎', '📖', '💎', null, '💎', null],
    result: '📕',
  },
];

export default function CraftingMatrix() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">{t.crafting.title}</h2>
          <p className="text-muted-foreground">{t.crafting.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {recipes.map((recipe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-heading font-bold text-cyan-400 mb-6">
                {i === 0 ? t.crafting.stoneTitle : t.crafting.bookTitle}
              </h3>
              <div className="flex items-center justify-center gap-6">
                <div className="grid grid-cols-3 gap-1.5 p-3 rounded-xl glass-panel">
                  {recipe.grid.map((cell, j) => (
                    <div
                      key={j}
                      className={`w-14 h-14 rounded-lg border flex items-center justify-center text-2xl ${cell ? 'bg-cyan-500/5 border-cyan-500/20' : 'bg-black/40 border-white/5'}`}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
                <ArrowRight className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div className="w-14 h-14 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-2xl neon-cyan">
                  {recipe.result}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {i === 0 ? t.crafting.stoneDesc : t.crafting.bookDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}