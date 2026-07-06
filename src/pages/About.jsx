import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gem, Share2, Globe, Zap, Shield, Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const CONTENT = {
  en: {
    title: 'About 404Warp',
    subtitle: 'Survival-friendly warps, crafted — not commanded',
    intro: '404Warp is a survival-friendly warp plugin for Minecraft that makes fast travel feel like part of the game rather than a cheat. Instead of typing commands or needing operator privileges, players craft physical items — Warp Stones from diamonds and a Warp Book from a book and diamonds — to create, manage, and share their own warp points. Every teleport triggers a five-second countdown with tornado-swirl particles, so movement stays grounded in the survival experience.',
    who: 'The plugin is built for survival and semi-survival Minecraft servers that want a fair, economy-integrated teleport system. Server owners can configure XP-level costs per teleport and per-player cooldowns — charges apply only on successful teleportation — so warps complement the economy rather than bypassing it. Admins get a full management GUI with real player heads to teleport, rename, delete, recolor, and manage every warp on the server.',
    features: 'Beyond personal warps, 404Warp supports shared warps with granular access levels — players can grant "Can Use" or "Contributor" rights to friends, with shared warps appearing in their own GUI tab alongside global Server Warps created by staff for spawn, shops, and events. The plugin ships fully multilingual with English and German out of the box, plus custom language files that auto-merge new keys on every update, so every string across the roughly two-hundred-message interface is translatable.',
    builtBy: '404Warp is developed by 404DiscNotFound, part of the 404GameNotFound community. The project is in open beta and evolves with feedback from server owners and players alike.',
    pillarTitle: 'Core design pillars',
    pillars: [
      { icon: Gem, title: 'Item-based mechanics', desc: 'Craft Warp Stones and Warp Books — no commands, no OP required.' },
      { icon: Share2, title: 'Granular sharing', desc: 'Share warps with access levels for friends and contributors.' },
      { icon: Globe, title: 'Server warps', desc: 'Global warps for spawn, shops, and events — visible to all.' },
      { icon: Zap, title: 'XP cost & cooldown', desc: 'Configurable economy integration — charged only on success.' },
      { icon: Shield, title: 'Admin GUI', desc: 'Full management with real player heads, rename, delete, recolor.' },
      { icon: Languages, title: 'Multilingual', desc: 'EN, DE, and custom languages with auto-merge on updates.' },
    ],
    backToHome: 'Back to home',
  },
  de: {
    title: 'Über 404Warp',
    subtitle: 'Survival-freundliche Warps, gecraftet — nicht befohlen',
    intro: '404Warp ist ein survival-freundliches Warp-Plugin für Minecraft, das schnelles Reisen als Teil des Spiels statt als Cheat fühlen lässt. Statt Befehle einzutippen oder Operator-Rechte zu benötigen, craften Spieler physische Items — Warp Stones aus Diamanten und ein Warp Book aus einem Buch und Diamanten — um eigene Warp-Punkte zu erstellen, zu verwalten und zu teilen. Jeder Teleport löst einen Fünf-Sekunden-Countdown mit Tornado-Partikeln aus, sodass Bewegung im Survival-Erlebnis verankert bleibt.',
    who: 'Das Plugin ist für Survival- und Semi-Survival-Minecraft-Server gedacht, die ein faires, wirtschaftsintegriertes Teleportsystem wollen. Server-Besitzer können XP-Level-Kosten pro Teleport und Pro-Spieler-Cooldowns konfigurieren — Gebühren werden nur bei erfolgreichem Teleport fällig — sodass Warps die Wirtschaft ergänzen statt sie zu umgehen. Admins erhalten ein vollständiges Verwaltungs-GUI mit echten Spielerköpfen zum Teleportieren, Umbenennen, Löschen, Umfärben und Verwalten jedes Warps auf dem Server.',
    features: 'Über persönliche Warps hinaus unterstützt 404Warp geteilte Warps mit granularen Zugriffsstufen — Spieler können Freunden „Can Use"- oder „Contributor"-Rechte geben, wobei geteilte Warps in einem eigenen GUI-Tab erscheinen neben globalen Server-Warps, die vom Team für Spawn, Shops und Events erstellt werden. Das Plugin ist vollständig mehrsprachig mit Englisch und Deutsch vorinstalliert, plus eigene Sprachdateien, die neue Keys bei jedem Update automatisch zusammenführen, sodass jeder String der rund zweihundert Nachrichten umfassenden Oberfläche übersetzbar ist.',
    builtBy: '404Warp wird von 404DiscNotFound entwickelt, Teil der 404GameNotFound-Community. Das Projekt ist in offener Beta und wächst mit Feedback von Server-Besitzern und Spielern.',
    pillarTitle: 'Kern-Designsäulen',
    pillars: [
      { icon: Gem, title: 'Item-basierte Mechanik', desc: 'Craft Warp Stones und Warp Books — keine Befehle, kein OP nötig.' },
      { icon: Share2, title: 'Granulares Teilen', desc: 'Teile Warps mit Zugriffsstufen für Freunde und Contributor.' },
      { icon: Globe, title: 'Server-Warps', desc: 'Globale Warps für Spawn, Shops und Events — für alle sichtbar.' },
      { icon: Zap, title: 'XP-Kosten & Cooldown', desc: 'Konfigurierbare Wirtschaftsintegration — nur bei Erfolg fällig.' },
      { icon: Shield, title: 'Admin-GUI', desc: 'Vollständige Verwaltung mit echten Köpfen, Umbenennen, Löschen.' },
      { icon: Languages, title: 'Mehrsprachig', desc: 'EN, DE und eigene Sprachen mit Auto-Merge bei Updates.' },
    ],
    backToHome: 'Zurück zur Startseite',
  },
};

export default function About() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.en;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {c.backToHome}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">{c.title}</h1>
        <p className="text-lg text-cyan-400 mb-8">{c.subtitle}</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>{c.intro}</p>
          <p>{c.who}</p>
          <p>{c.features}</p>
          <p>{c.builtBy}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-heading font-bold text-white mb-6">{c.pillarTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="glass-panel glass-panel-hover rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}