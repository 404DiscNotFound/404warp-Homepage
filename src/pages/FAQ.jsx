import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const FAQS = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about the 404Warp Minecraft warp plugin',
    backToHome: 'Back to home',
    items: [
      {
        q: 'What is 404Warp?',
        a: '404Warp is a survival-friendly warp plugin for Minecraft that replaces command-based teleportation with an item-based crafting system. Players craft Warp Stones from diamonds and Warp Books to create, manage, and share warp points — no cheat commands or operator permissions required. Every teleport includes a five-second countdown with tornado-swirl particles, keeping fast travel grounded in the survival experience.',
      },
      {
        q: 'How do players create warps in 404Warp?',
        a: 'Players craft a Warp Stone by placing five diamonds in a cross pattern in a crafting table. They then right-click with the Warp Stone at the desired location to set a warp point. To view and teleport to saved warps, players craft a Warp Book from a book and four diamonds. The Warp Book opens a GUI showing all personal, shared, and server warps organized into separate tabs.',
      },
      {
        q: 'Is 404Warp survival-friendly?',
        a: 'Yes. 404Warp was designed from the ground up to be survival-friendly. Warps are crafted from diamonds — a valuable survival resource — so players must invest resources to unlock fast travel. Server owners can additionally configure XP-level costs per teleport and per-player cooldowns, with charges applied only on successful teleportation. This means warps complement the server economy rather than bypassing it.',
      },
      {
        q: 'Can players share warps with friends?',
        a: 'Yes. 404Warp supports granular warp sharing with two access levels. "Can Use" allows a friend to teleport to a shared warp but not modify it. "Contributor" grants editing rights, letting friends rename, recolor, or manage the shared warp. Shared warps appear in their own dedicated tab in the Warp Book GUI, and real player heads are displayed for visual clarity.',
      },
      {
        q: 'What are Server Warps?',
        a: 'Server Warps are global warps created by server admins or operators. They are visible to all players in a separate tab within the Warp Book and are ideal for marking spawn points, shop districts, event locations, or community areas. Creating Server Warps requires the survivalwarps.serverwarps.create permission, which defaults to operators only.',
      },
      {
        q: 'Which Minecraft versions does 404Warp support?',
        a: '404Warp is built for Spigot and Paper servers running Minecraft 26.1 and above. The plugin is currently in open beta, with active development and feature updates based on community feedback from server owners and players.',
      },
      {
        q: 'Is 404Warp available in multiple languages?',
        a: 'Yes. 404Warp ships with English and German translations out of the box. Server owners can also create custom language files for any language. The plugin auto-merges new translation keys on every update, so approximately two hundred translatable strings stay up to date without overwriting custom translations.',
      },
      {
        q: 'How do admins manage warps on the server?',
        a: 'Admins have access to a full management GUI accessible via the /survivalwarps admin command. This interface displays all warps on the server with real player heads, and allows admins to teleport to, rename, delete, change the icon, and recolor any warp. Admins can also give Warp Stones and Warp Books to players using the /survivalwarps give command.',
      },
      {
        q: 'Is 404Warp free to use?',
        a: 'Yes, 404Warp is free to download and use on any Minecraft server. The plugin is developed by 404DiscNotFound as part of the 404GameNotFound community and is currently in open beta.',
      },
      {
        q: 'Where can I get help or report a bug?',
        a: 'The fastest way to get support is through the 404GameNotFound Discord community, where you can ask questions, report bugs, and suggest features. You can also visit the contact page on this website to send a message directly to the development team.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Alles, was du über das 404Warp Minecraft-Warp-Plugin wissen musst',
    backToHome: 'Zurück zur Startseite',
    items: [
      {
        q: 'Was ist 404Warp?',
        a: '404Warp ist ein survival-freundliches Warp-Plugin für Minecraft, das befehlsbasierte Teleportation durch ein item-basiertes Crafting-System ersetzt. Spieler craften Warp Stones aus Diamanten und Warp Books, um Warp-Punkte zu erstellen, zu verwalten und zu teilen — keine Cheat-Befehle oder Operator-Rechte nötig. Jeder Teleport beinhaltet einen Fünf-Sekunden-Countdown mit Tornado-Partikeln, sodass schnelles Reisen im Survival-Erlebnis verankert bleibt.',
      },
      {
        q: 'Wie erstellen Spieler Warps in 404Warp?',
        a: 'Spieler craften einen Warp Stone, indem sie fünf Diamanten in Kreuzform in einen Crafting-Table legen. Dann rechtsklicken sie mit dem Warp Stone an der gewünschten Stelle, um einen Warp-Punkt zu setzen. Um gespeicherte Warps zu sehen und dorthin zu teleportieren, craften Spieler ein Warp Book aus einem Buch und vier Diamanten. Das Warp Book öffnet ein GUI mit allen persönlichen, geteilten und Server-Warps in separaten Tabs.',
      },
      {
        q: 'Ist 404Warp survival-freundlich?',
        a: 'Ja. 404Warp wurde von Grund auf als survival-freundlich entwickelt. Warps werden aus Diamanten — einer wertvollen Survival-Ressource — gecraftet, sodass Spieler Ressourcen investieren müssen, um schnelles Reisen freizuschalten. Server-Besitzer können zusätzlich XP-Level-Kosten pro Teleport und Pro-Spieler-Cooldowns konfigurieren, wobei Gebühren nur bei erfolgreichem Teleport fällig werden. Das bedeutet, dass Warps die Server-Wirtschaft ergänzen statt sie zu umgehen.',
      },
      {
        q: 'Können Spieler Warps mit Freunden teilen?',
        a: 'Ja. 404Warp unterstützt granulares Warp-Sharing mit zwei Zugriffsstufen. „Can Use" erlaubt einem Freund, zu einem geteilten Warp zu teleportieren, ihn aber nicht zu bearbeiten. „Contributor" gewährt Bearbeitungsrechte und lässt Freunde den geteilten Warp umbenennen, umfärben oder verwalten. Geteilte Warps erscheinen in einem eigenen Tab im Warp Book GUI, und echte Spielerköpfe werden zur besseren Übersicht angezeigt.',
      },
      {
        q: 'Was sind Server-Warps?',
        a: 'Server-Warps sind globale Warps, die von Server-Admins oder Operatoren erstellt wurden. Sie sind für alle Spieler in einem separaten Tab innerhalb des Warp Books sichtbar und eignen sich ideal zum Markieren von Spawn-Punkten, Shop-Vierteln, Event-Locations oder Community-Bereichen. Das Erstellen von Server-Warps erfordert die survivalwarps.serverwarps.create Berechtigung, die standardmäßig nur Operatoren haben.',
      },
      {
        q: 'Welche Minecraft-Versionen unterstützt 404Warp?',
        a: '404Warp ist für Spigot- und Paper-Server ab Minecraft 26.1 entwickelt. Das Plugin befindet sich derzeit in offener Beta, mit aktiver Entwicklung und Feature-Updates basierend auf Community-Feedback von Server-Besitzern und Spielern.',
      },
      {
        q: 'Ist 404Warp in mehreren Sprachen verfügbar?',
        a: 'Ja. 404Warp wird mit englischen und deutschen Übersetzungen ausgeliefert. Server-Besitzer können auch eigene Sprachdateien für jede Sprache erstellen. Das Plugin führt neue Übersetzungs-Keys bei jedem Update automatisch zusammen, sodass die ungefähr zweihundert übersetzbaren Strings aktuell bleiben, ohne eigene Übersetzungen zu überschreiben.',
      },
      {
        q: 'Wie verwalten Admins Warps auf dem Server?',
        a: 'Admins haben Zugriff auf ein vollständiges Verwaltungs-GUI über den Befehl /survivalwarps admin. Diese Oberfläche zeigt alle Warps auf dem Server mit echten Spielerköpfen an und erlaubt Admins, zu jedem Warp zu teleportieren, ihn umzubenennen, zu löschen, das Symbol zu ändern und umzufärben. Admins können auch Warp Stones und Warp Books über den Befehl /survivalwarps give an Spieler geben.',
      },
      {
        q: 'Ist 404Warp kostenlos nutzbar?',
        a: 'Ja, 404Warp ist kostenlos zum Herunterladen und Nutzen auf jedem Minecraft-Server. Das Plugin wird von 404DiscNotFound als Teil der 404GameNotFound-Community entwickelt und befindet sich derzeit in offener Beta.',
      },
      {
        q: 'Wo bekomme ich Hilfe oder melde einen Bug?',
        a: 'Der schnellste Weg zum Support ist die 404GameNotFound Discord-Community, wo du Fragen stellen, Bugs melden und Features vorschlagen kannst. Du kannst auch die Kontaktseite auf dieser Website besuchen, um eine Nachricht direkt an das Entwicklungs-Team zu senden.',
      },
    ],
  },
};

export default function FAQ() {
  const { lang } = useLanguage();
  const c = FAQS[lang] || FAQS.en;
  const [openIdx, setOpenIdx] = useState(0);

  // Inject FAQ structured data for AI-search citability
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {c.backToHome}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">{c.title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{c.subtitle}</p>

        <div className="space-y-3">
          {c.items.map((item, i) => (
            <div key={i} className="glass-panel rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading font-semibold text-white text-sm md:text-base">{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}