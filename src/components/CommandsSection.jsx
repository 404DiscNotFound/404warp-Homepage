import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CommandsSection() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-white">{t.commands.title}</h2>
            <p className="text-muted-foreground">{t.commands.subtitle}</p>
          </div>
          <div className="glass-panel rounded-2xl overflow-hidden overflow-x-auto custom-scrollbar">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {t.commands.headers.map((h, i) => (
                    <th key={i} className="text-left py-3 px-4 text-cyan-400 font-mono text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.commands.items.map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-mono text-cyan-300 whitespace-nowrap">{item.cmd}</td>
                    <td className="py-3 px-4 font-mono text-pink-400 whitespace-nowrap">{item.perm}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-mono text-muted-foreground mt-3 text-center">{t.commands.aliases}</p>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{t.permissions.title}</h2>
          </div>
          <div className="glass-panel rounded-2xl overflow-hidden overflow-x-auto custom-scrollbar">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {t.permissions.headers.map((h, i) => (
                    <th key={i} className="text-left py-3 px-4 text-cyan-400 font-mono text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.permissions.items.map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-mono text-cyan-300 whitespace-nowrap">{item.perm}</td>
                    <td className="py-3 px-4 font-mono text-pink-400">{item.def}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}