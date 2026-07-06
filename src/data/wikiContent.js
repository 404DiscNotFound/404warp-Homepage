export const wikiSections = {
  en: [
    {
      id: 'overview',
      title: 'Overview',
      content: [
        { type: 'paragraph', text: '404Warp is a survival-friendly warp plugin that is completely item-based — no cheat commands. Players craft Warp Stones and a Warp Book to create, manage, and share personal warps. Admins can create global Server Warps for spawn, shops, or events, and manage all player warps via an Admin GUI.' },
        { type: 'paragraph', text: 'Full multi-language support (English/German/Custom) with editable language files and automatic merge on updates.' },
      ],
    },
    {
      id: 'player-warps',
      title: 'Player Warps',
      content: [
        { type: 'list', items: [
          'Warp Stone crafted from diamonds (cross shape), right-click a block to set a warp point',
          'Warp Book crafted from a book + diamonds, opens a GUI showing all warps',
          'Tornado swirl particles at active warp points — multi-layered rotating funnel with ender sparks',
          '10 particle colors (Cyan, Blue, Purple, Pink, Green, Yellow, Orange, Red, White, Gray)',
          'Toggle Active: Deactivate/reactivate warps — deactivated warps remain saved',
          'Toggle Particles: Hide/show particles per warp — warp stays active and teleportable',
          '5-second teleport countdown with animated spiral particles, portal effects, and sounds',
          'Cancelled on movement (>0.15 blocks), damage, combat, world change, or disconnect',
        ]},
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ba26b0169_Thewarpmenuforplayers.png', caption: 'The Warp Book GUI showing all player warps with coordinates and status' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/557d2ac54_Warpcountdown.png', caption: '5-second teleport countdown with spiral particles' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ffc98c25d_Warppointwithparticles.png', caption: 'Warp point with tornado swirl particles in the world' },
      ],
    },
    {
      id: 'warp-management',
      title: 'Warp Management',
      content: [
        { type: 'list', items: [
          'Edit name via chat input (no slash)',
          'Set icon by clicking an item in your inventory (item is not consumed)',
          'Choose particle color from 10 options (displayed as stained glass panes)',
          'Delete warp with confirmation GUI',
          'All sub-menus have back buttons',
        ]},
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/d60b1b2f9_Optionforaplayerwarppoint.png', caption: 'Warp Options menu — toggle particles, rename, delete, and more' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/30b5f4d45_Chooseawarpicon.png', caption: 'Set Warp Icon — click any item from your inventory (item is not consumed)' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/6adec2321_Choosetheparticlecolorofyourwarppoint.png', caption: 'Warp Color — choose from 10 particle colors' },
      ],
    },
    {
      id: 'warp-sharing',
      title: 'Warp Sharing',
      content: [
        { type: 'list', items: [
          'Share warps with other players via chat name input',
          'Access levels: Can Use for teleport rights, Contributor for editing rights',
          'Contributor permissions: rename, change icon/color, toggle (configurable)',
          'Real player heads in shared players GUI',
          'Owner can modify access or remove players at any time',
        ]},
      ],
    },
    {
      id: 'server-warps',
      title: 'Server Warps',
      content: [
        { type: 'paragraph', text: 'Server Warp Stone (NETHER_STAR): /survivalwarps give serverstone <player> — not craftable.' },
        { type: 'list', items: [
          'Creates global warps visible to all players under the "Server Warps" tab',
          'Full admin management: name, icon, color, active/inactive, particle toggle, delete',
        ]},
      ],
    },
    {
      id: 'xp-cooldown',
      title: 'XP Cost & Cooldown',
      content: [
        { type: 'list', items: [
          'XP Cost: Configurable XP level cost per teleport — charged only on successful teleport',
          'Per-warp-type settings: Player warps, shared warps, server warps configurable independently',
          'Cooldown: Configurable cooldown between teleports (e.g. 60s) — per player, not per warp',
          'In-memory only, no persistence needed — resets on server restart',
          'Admin bypass permissions for both XP and cooldown (default op)',
        ]},
      ],
    },
    {
      id: 'admin-management',
      title: 'Admin Management',
      content: [
        { type: 'paragraph', text: '/survivalwarps admin — opens the Admin Manage GUI' },
        { type: 'list', items: [
          'Player Overview: All warp owners as real player heads with warp counts, paginated',
          'Player Warps: View, teleport to, and manage any player\'s warps',
          'Admin Warp Options: Full control — teleport, rename, delete, icon, color, particles, active toggle',
          'Admin teleports skip the countdown (configurable)',
          'Permission-based: survivalwarps.admin.manage or survivalwarps.admin',
        ]},
      ],
    },
    {
      id: 'i18n',
      title: 'Multilingual (i18n)',
      content: [
        { type: 'list', items: [
          'Three language modes: en_us (English), de_de (German), custom (your own)',
          'Language files in plugins/404Warp/locale/',
          'Auto-merge on update: New strings from plugin updates are added to local files — your edits stay intact',
          '/survivalwarps reload triggers merge and reload',
          'All ~200 strings translatable',
        ]},
        { type: 'paragraph', text: 'Custom Translation: Set lang: custom in config.yml, edit plugins/404Warp/locale/custom.yml, run /survivalwarps reload.' },
      ],
    },
    {
      id: 'crafting',
      title: 'Crafting',
      content: [
        { type: 'heading', text: 'Warp Stone' },
        { type: 'paragraph', text: '5 diamonds in cross shape → Warp Stone' },
        { type: 'heading', text: 'Warp Book' },
        { type: 'paragraph', text: 'Book + 4 diamonds → Warp Book' },
      ],
    },
    {
      id: 'commands-permissions',
      title: 'Commands & Permissions',
      content: [
        { type: 'paragraph', text: 'Aliases: /404warp, /warpsystem, /swarps' },
        { type: 'table', headers: ['Command', 'Permission', 'Description'], rows: [
          ['/survivalwarps reload', 'admin', 'Reload config, data & language'],
          ['/survivalwarps give stone <player> [amount]', 'admin', 'Give Warp Stones'],
          ['/survivalwarps give book <player> [amount]', 'admin', 'Give Warp Books'],
          ['/survivalwarps give serverstone <player> [amount]', 'serverwarps.give', 'Give Server Warp Stones'],
          ['/survivalwarps admin', 'admin.manage', 'Open Admin Manage GUI'],
        ]},
        { type: 'table', headers: ['Permission', 'Default', 'Description'], rows: [
          ['survivalwarps.use', 'true', 'Use Warp Book & teleport'],
          ['survivalwarps.create', 'true', 'Create warps with Warp Stone'],
          ['survivalwarps.manage', 'true', 'Manage own warps'],
          ['survivalwarps.share', 'true', 'Share own warps'],
          ['survivalwarps.shared.use', 'true', 'Use shared warps'],
          ['survivalwarps.shared.contribute', 'true', 'Contributor rights on shared warps'],
          ['survivalwarps.serverwarps.use', 'true', 'View & use Server Warps'],
          ['survivalwarps.serverwarps.create', 'op', 'Create Server Warps'],
          ['survivalwarps.serverwarps.manage', 'op', 'Manage Server Warps'],
          ['survivalwarps.serverwarps.give', 'op', 'Give Server Warp Stones'],
          ['survivalwarps.teleport.bypassxp', 'op', 'Bypass XP teleport cost'],
          ['survivalwarps.teleport.bypasscooldown', 'op', 'Bypass teleport cooldown'],
          ['survivalwarps.admin.manage', 'op', 'Access Admin Manage GUI'],
          ['survivalwarps.admin', 'op', 'Full admin access'],
        ]},
      ],
    },
    {
      id: 'gui-overview',
      title: 'GUI Overview',
      content: [
        { type: 'code', code: `Warp Book (right-click)
  └─ Warp Overview
       ├─ Tab: My Warps
       │    ├─ Left-click → Teleport (5s countdown)
       │    └─ Right-click → Warp Options
       │         ├─ Teleport
       │         ├─ Edit Name (chat)
       │         ├─ Toggle Active
       │         ├─ Delete (→ confirmation GUI)
       │         ├─ Set Icon (→ click in inventory)
       │         ├─ Color (→ 10-color GUI)
       │         ├─ Particles Toggle (ON/OFF)
       │         ├─ Share Warp (chat name input)
       │         ├─ Shared Players
       │         │    └─ Player Access (Can Use / Contributor / Remove)
       │         └─ Back (→ Overview)
       │
       ├─ Tab: Shared Warps
       │    ├─ Left-click → Teleport (if can_use)
       │    └─ Right-click → Warp Options (if Contributor)
       │
       └─ Tab: Server Warps
            ├─ Left-click → Teleport
            └─ Right-click → Server Warp Options (admins)
                 ├─ Teleport
                 ├─ Edit Name
                 ├─ Delete
                 ├─ Set Icon
                 ├─ Color
                 ├─ Particles Toggle
                 ├─ Toggle Active
                 └─ Back (→ Overview)

Admin Manage GUI (/survivalwarps admin)
  └─ Player Overview (paginated, real heads)
       ├─ Player Head → Player Warps
       │    ├─ Left-click → Teleport (instant)
       │    └─ Right-click → Admin Warp Options
       │         ├─ Teleport / Rename / Delete / Icon / Color
       │         ├─ Toggle Active / Toggle Particles
       │         └─ Back
       │
       └─ Server Warps Button → Server Warp List` },
      ],
    },
    {
      id: 'configuration',
      title: 'Configuration',
      content: [
        { type: 'paragraph', text: 'plugins/404Warp/config.yml:' },
        { type: 'code', code: `# Language: en_us, de_de, custom
lang: en_us

teleport:
  countdown_seconds: 5
  cancel_on_move: true
  cancel_on_damage: true
  cancel_on_attack: true
  allow_teleport_to_inactive_warps: false

  # XP cost per teleport
  xp_cost_enabled: false
  xp_cost_levels: 1
  xp_cost_apply_to_player_warps: true
  xp_cost_apply_to_shared_warps: true
  xp_cost_apply_to_server_warps: true

  # Cooldown between teleports
  cooldown_enabled: false
  cooldown_seconds: 60
  cooldown_apply_to_player_warps: true
  cooldown_apply_to_shared_warps: true
  cooldown_apply_to_server_warps: true

warps:
  max_warps_per_player: 10

particles:
  enabled: true
  range_blocks: 32
  default_color: "CYAN"

sharing:
  enabled: true
  max_shared_players_per_warp: 10

server_warps:
  enabled: true
  default_icon: "NETHER_STAR"

admin:
  manage_gui_enabled: true
  manage_gui_teleport_uses_countdown: false` },
      ],
    },
    {
      id: 'data-storage',
      title: 'Data Storage',
      content: [
        { type: 'paragraph', text: 'Warps are stored in plugins/404Warp/warps.yml.' },
        { type: 'code', code: `players:
  "<owner_uuid>":
    warps:
      "<warpId>":
        type: "PLAYER"
        owner_uuid: "<uuid>"
        owner_name: "PlayerName"
        name: "Home"
        world: "world"
        x: 123.5 / y: 65.0 / z: -42.5
        active: true
        particles_enabled: true
        icon_material: "DIAMOND"
        particle_color: "CYAN"
        shared:
          "<friend_uuid>":
            player_name: "Friend"
            can_use: true
            contributor: false

server_warps:
  "<warpId>":
    type: "SERVER"
    owner_uuid: "SERVER"
    owner_name: "Server"
    name: "Spawn"
    ...` },
        { type: 'paragraph', text: 'Old warps missing type or shared fields are automatically migrated — no data loss.' },
      ],
    },
    {
      id: 'teleport-sequence',
      title: 'Teleport Sequence',
      content: [
        { type: 'list', items: [
          'Player opens Warp Book → selects warp → left-click',
          'Checks: access → active → safe destination → cooldown → XP requirement',
          'GUI closes, 5-second countdown begins',
          'During countdown: Colored dust particles rotate around the player (blue→purple), portal particles rise, ping sounds at 3s/1s',
          'Cancelled by: Moving, taking/dealing damage, changing worlds, disconnecting',
          'On success: XP is charged, cooldown is set, expanding particle rings + portal burst + enderman sound at start and destination',
        ]},
      ],
    },
    {
      id: 'particle-effect',
      title: 'Particle Effect (Warp Point)',
      content: [
        { type: 'paragraph', text: 'Every active warp point displays a multi-layered tornado swirl:' },
        { type: 'list', items: [
          '4 rotating rings in funnel shape (wide at bottom, narrow at top)',
          '3 base rings with faster rotation for the ground swirl',
          'Center glow with larger particles',
          'Electric sparks at the top (~2.2 blocks high)',
          'Only visible to players within 32 blocks (performance optimized)',
        ]},
      ],
    },
    {
      id: 'installation',
      title: 'Installation & Requirements',
      content: [
        { type: 'heading', text: 'Installation' },
        { type: 'list', items: [
          'Copy 404warp-0.1b.jar into the plugins/ folder',
          'Start or reload the server',
          'Done — no external database or additional dependencies required',
        ]},
        { type: 'heading', text: 'Requirements' },
        { type: 'list', items: [
          'Spigot / Paper 1.26.1 (API 26.1)',
          'Java 25',
          'Kotlin stdlib is bundled (shaded JAR)',
        ]},
      ],
    },
    {
      id: 'bstats-notes',
      title: 'bStats & Notes',
      content: [
        { type: 'paragraph', text: 'This plugin uses bStats to collect anonymous usage statistics. Plugin ID: 32437.' },
        { type: 'list', items: [
          'What is tracked: Server count, player count, plugin version, Minecraft version, Java version, OS, country, and language',
          'Opt-out: Set enabled: false in plugins/bStats/config.yml',
          'Relocated: bStats is shaded and relocated to de.f0fdiscnotfound.404warp.bstats',
        ]},
        { type: 'heading', text: 'Notes' },
        { type: 'list', items: [
          'Alpha version — features and behavior may change in future releases',
          'load: POSTWORLD — warps are loaded after worlds are ready',
          'Player heads use Bukkit.getOfflinePlayer(uuid) (local cache, no web requests)',
          'XP is only charged on successful teleport, not on cancelled attempts',
          'Cooldowns are in-memory and reset on server restart',
          'Maximum warp name length: 32 characters',
        ]},
      ],
    },
  ],
  de: [
    {
      id: 'overview',
      title: 'Überblick',
      content: [
        { type: 'paragraph', text: '404Warp ist ein survival-freundliches Warp-Plugin, das komplett item-basiert ist — keine Cheat-Befehle. Spieler craften Warp Stones und ein Warp Book, um persönliche Warps zu erstellen, zu verwalten und zu teilen. Admins können globale Server-Warps für Spawn, Shops oder Events erstellen und alle Spieler-Warps über ein Admin-GUI verwalten.' },
        { type: 'paragraph', text: 'Volle Mehrsprachen-Unterstützung (Englisch/Deutsch/Custom) mit bearbeitbaren Sprachdateien und automatischem Merge bei Updates.' },
      ],
    },
    {
      id: 'player-warps',
      title: 'Spieler-Warps',
      content: [
        { type: 'list', items: [
          'Warp Stone aus Diamanten gecraftet (Kreuzform), Rechtsklick auf einen Block um Warp-Punkt zu setzen',
          'Warp Book aus Buch + Diamanten gecraftet, öffnet ein GUI mit allen Warps',
          'Tornado-Swirl-Partikel an aktiven Warp-Punkten — mehrschichtiger rotierender Trichter mit Ender-Sparks',
          '10 Partikel-Farben (Cyan, Blau, Lila, Pink, Grün, Gelb, Orange, Rot, Weiß, Grau)',
          'Aktiv umschalten: Deaktivieren/Reaktivieren von Warps — deaktivierte Warps bleiben gespeichert',
          'Partikel umschalten: Verstecken/Anzeigen von Partikeln pro Warp — Warp bleibt aktiv und teleportierbar',
          '5-Sekunden Teleport-Countdown mit animierten Spiral-Partikeln, Portal-Effekten und Sounds',
          'Abgebrochen bei Bewegung (>0.15 Blöcke), Schaden, Kampf, Weltwechsel oder Disconnect',
        ]},
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ba26b0169_Thewarpmenuforplayers.png', caption: 'Das Warp Book GUI mit allen Spieler-Warps, Koordinaten und Status' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/557d2ac54_Warpcountdown.png', caption: '5-Sekunden Teleport-Countdown mit Spiral-Partikeln' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ffc98c25d_Warppointwithparticles.png', caption: 'Warp-Punkt mit Tornado-Swirl-Partikeln in der Welt' },
      ],
    },
    {
      id: 'warp-management',
      title: 'Warp-Verwaltung',
      content: [
        { type: 'list', items: [
          'Namen per Chat-Eingabe bearbeiten (kein Slash)',
          'Icon durch Klicken auf ein Item im Inventar setzen (Item wird nicht verbraucht)',
          'Partikel-Farbe aus 10 Optionen wählen (angezeigt als stained glass panes)',
          'Warp mit Bestätigungs-GUI löschen',
          'Alle Untermenüs haben Zurück-Buttons',
        ]},
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/d60b1b2f9_Optionforaplayerwarppoint.png', caption: 'Warp-Optionen-Menü — Partikel umschalten, umbenennen, löschen und mehr' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/30b5f4d45_Chooseawarpicon.png', caption: 'Icon setzen — klicke ein Item aus deinem Inventar an (wird nicht verbraucht)' },
        { type: 'image', src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/6adec2321_Choosetheparticlecolorofyourwarppoint.png', caption: 'Warp-Farbe — wähle aus 10 Partikel-Farben' },
      ],
    },
    {
      id: 'warp-sharing',
      title: 'Warp-Sharing',
      content: [
        { type: 'list', items: [
          'Warps mit anderen Spielern per Chat-Namenseingabe teilen',
          'Zugriffsstufen: Can Use für Teleport-Rechte, Contributor für Bearbeitungs-Rechte',
          'Contributor-Berechtigungen: Umbenennen, Icon/Farbe ändern, Umschalten (konfigurierbar)',
          'Echte Spielerköpfe im Shared-Players-GUI',
          'Besitzer kann Zugriffe jederzeit ändern oder Spieler entfernen',
        ]},
      ],
    },
    {
      id: 'server-warps',
      title: 'Server-Warps',
      content: [
        { type: 'paragraph', text: 'Server Warp Stone (NETHER_STAR): /survivalwarps give serverstone <player> — nicht craftbar.' },
        { type: 'list', items: [
          'Erstellt globale Warps, die für alle Spieler im "Server Warps" Tab sichtbar sind',
          'Volle Admin-Verwaltung: Name, Icon, Farbe, Aktiv/Inaktiv, Partikel umschalten, Löschen',
        ]},
      ],
    },
    {
      id: 'xp-cooldown',
      title: 'XP-Kosten & Cooldown',
      content: [
        { type: 'list', items: [
          'XP-Kosten: Konfigurierbare XP-Level-Kosten pro Teleport — nur bei erfolgreichem Teleport abgezogen',
          'Pro Warp-Typ einstellbar: Spieler-Warps, geteilte Warps, Server-Warps unabhängig konfigurierbar',
          'Cooldown: Konfigurierbarer Cooldown zwischen Teleporten (z.B. 60s) — pro Spieler, nicht pro Warp',
          'Nur im Arbeitsspeicher, keine Persistenz nötig — wird bei Server-Neustart zurückgesetzt',
          'Admin-Bypass-Berechtigungen für XP und Cooldown (Standard: op)',
        ]},
      ],
    },
    {
      id: 'admin-management',
      title: 'Admin-Verwaltung',
      content: [
        { type: 'paragraph', text: '/survivalwarps admin — öffnet das Admin-Verwaltungs-GUI' },
        { type: 'list', items: [
          'Spielerübersicht: Alle Warp-Besitzer als echte Spielerköpfe mit Warp-Anzahl, paginiert',
          'Spieler-Warps: Ansehen, Teleportieren und Verwalten aller Warps eines Spielers',
          'Admin Warp-Optionen: Volle Kontrolle — Teleport, Umbenennen, Löschen, Icon, Farbe, Partikel, Aktiv umschalten',
          'Admin-Teleporte überspringen den Countdown (konfigurierbar)',
          'Berechtigungsbasiert: survivalwarps.admin.manage oder survivalwarps.admin',
        ]},
      ],
    },
    {
      id: 'i18n',
      title: 'Mehrsprachig (i18n)',
      content: [
        { type: 'list', items: [
          'Drei Sprachmodi: en_us (Englisch), de_de (Deutsch), custom (eigene)',
          'Sprachdateien in plugins/404Warp/locale/',
          'Auto-Merge bei Update: Neue Strings aus Plugin-Updates werden zu lokalen Dateien hinzugefügt — deine Bearbeitungen bleiben erhalten',
          '/survivalwarps reload löst Merge und Reload aus',
          'Alle ~200 Strings übersetzbar',
        ]},
        { type: 'paragraph', text: 'Eigene Übersetzung: lang: custom in config.yml setzen, plugins/404Warp/locale/custom.yml bearbeiten, /survivalwarps reload ausführen.' },
      ],
    },
    {
      id: 'crafting',
      title: 'Crafting',
      content: [
        { type: 'heading', text: 'Warp Stone' },
        { type: 'paragraph', text: '5 Diamanten in Kreuzform → Warp Stone' },
        { type: 'heading', text: 'Warp Book' },
        { type: 'paragraph', text: 'Buch + 4 Diamanten → Warp Book' },
      ],
    },
    {
      id: 'commands-permissions',
      title: 'Befehle & Berechtigungen',
      content: [
        { type: 'paragraph', text: 'Aliase: /404warp, /warpsystem, /swarps' },
        { type: 'table', headers: ['Befehl', 'Berechtigung', 'Beschreibung'], rows: [
          ['/survivalwarps reload', 'admin', 'Konfiguration, Daten & Sprache neu laden'],
          ['/survivalwarps give stone <player> [amount]', 'admin', 'Warp Stones geben'],
          ['/survivalwarps give book <player> [amount]', 'admin', 'Warp Books geben'],
          ['/survivalwarps give serverstone <player> [amount]', 'serverwarps.give', 'Server Warp Stones geben'],
          ['/survivalwarps admin', 'admin.manage', 'Admin-Verwaltungs-GUI öffnen'],
        ]},
        { type: 'table', headers: ['Berechtigung', 'Standard', 'Beschreibung'], rows: [
          ['survivalwarps.use', 'true', 'Warp Book nutzen & teleportieren'],
          ['survivalwarps.create', 'true', 'Warps mit Warp Stone erstellen'],
          ['survivalwarps.manage', 'true', 'Eigene Warps verwalten'],
          ['survivalwarps.share', 'true', 'Eigene Warps teilen'],
          ['survivalwarps.shared.use', 'true', 'Geteilte Warps nutzen'],
          ['survivalwarps.shared.contribute', 'true', 'Contributor-Rechte für geteilte Warps'],
          ['survivalwarps.serverwarps.use', 'true', 'Server-Warps ansehen & nutzen'],
          ['survivalwarps.serverwarps.create', 'op', 'Server-Warps erstellen'],
          ['survivalwarps.serverwarps.manage', 'op', 'Server-Warps verwalten'],
          ['survivalwarps.serverwarps.give', 'op', 'Server Warp Stones geben'],
          ['survivalwarps.teleport.bypassxp', 'op', 'XP-Teleport-Kosten umgehen'],
          ['survivalwarps.teleport.bypasscooldown', 'op', 'Teleport-Cooldown umgehen'],
          ['survivalwarps.admin.manage', 'op', 'Admin-Verwaltungs-GUI öffnen'],
          ['survivalwarps.admin', 'op', 'Vollständiger Admin-Zugriff'],
        ]},
      ],
    },
    {
      id: 'gui-overview',
      title: 'GUI-Übersicht',
      content: [
        { type: 'code', code: `Warp Book (Rechtsklick)
  └─ Warp-Übersicht
       ├─ Tab: Meine Warps
       │    ├─ Linksklick → Teleport (5s Countdown)
       │    └─ Rechtsklick → Warp-Optionen
       │         ├─ Teleport
       │         ├─ Namen bearbeiten (Chat)
       │         ├─ Aktiv umschalten
       │         ├─ Löschen (→ Bestätigungs-GUI)
       │         ├─ Icon setzen (→ Inventar klicken)
       │         ├─ Farbe (→ 10-Farben-GUI)
       │         ├─ Partikel umschalten (AN/AUS)
       │         ├─ Warp teilen (Chat-Namenseingabe)
       │         ├─ Geteilte Spieler
       │         │    └─ Spieler-Zugriff (Can Use / Contributor / Entfernen)
       │         └─ Zurück (→ Übersicht)
       │
       ├─ Tab: Geteilte Warps
       │    ├─ Linksklick → Teleport (wenn can_use)
       │    └─ Rechtsklick → Warp-Optionen (wenn Contributor)
       │
       └─ Tab: Server-Warps
            ├─ Linksklick → Teleport
            └─ Rechtsklick → Server Warp-Optionen (Admins)
                 ├─ Teleport
                 ├─ Namen bearbeiten
                 ├─ Löschen
                 ├─ Icon setzen
                 ├─ Farbe
                 ├─ Partikel umschalten
                 ├─ Aktiv umschalten
                 └─ Zurück (→ Übersicht)

Admin-Verwaltungs-GUI (/survivalwarps admin)
  └─ Spielerübersicht (paginiert, echte Köpfe)
       ├─ Spielerkopf → Spieler-Warps
       │    ├─ Linksklick → Teleport (sofort)
       │    └─ Rechtsklick → Admin Warp-Optionen
       │         ├─ Teleport / Umbenennen / Löschen / Icon / Farbe
       │         ├─ Aktiv umschalten / Partikel umschalten
       │         └─ Zurück
       │
       └─ Server-Warps-Button → Server-Warp-Liste` },
      ],
    },
    {
      id: 'configuration',
      title: 'Konfiguration',
      content: [
        { type: 'paragraph', text: 'plugins/404Warp/config.yml:' },
        { type: 'code', code: `# Sprache: en_us, de_de, custom
lang: en_us

teleport:
  countdown_seconds: 5
  cancel_on_move: true
  cancel_on_damage: true
  cancel_on_attack: true
  allow_teleport_to_inactive_warps: false

  # XP-Kosten pro Teleport
  xp_cost_enabled: false
  xp_cost_levels: 1
  xp_cost_apply_to_player_warps: true
  xp_cost_apply_to_shared_warps: true
  xp_cost_apply_to_server_warps: true

  # Cooldown zwischen Teleporten
  cooldown_enabled: false
  cooldown_seconds: 60
  cooldown_apply_to_player_warps: true
  cooldown_apply_to_shared_warps: true
  cooldown_apply_to_server_warps: true

warps:
  max_warps_per_player: 10

particles:
  enabled: true
  range_blocks: 32
  default_color: "CYAN"

sharing:
  enabled: true
  max_shared_players_per_warp: 10

server_warps:
  enabled: true
  default_icon: "NETHER_STAR"

admin:
  manage_gui_enabled: true
  manage_gui_teleport_uses_countdown: false` },
      ],
    },
    {
      id: 'data-storage',
      title: 'Datenspeicherung',
      content: [
        { type: 'paragraph', text: 'Warps werden in plugins/404Warp/warps.yml gespeichert.' },
        { type: 'code', code: `players:
  "<owner_uuid>":
    warps:
      "<warpId>":
        type: "PLAYER"
        owner_uuid: "<uuid>"
        owner_name: "PlayerName"
        name: "Home"
        world: "world"
        x: 123.5 / y: 65.0 / z: -42.5
        active: true
        particles_enabled: true
        icon_material: "DIAMOND"
        particle_color: "CYAN"
        shared:
          "<friend_uuid>":
            player_name: "Friend"
            can_use: true
            contributor: false

server_warps:
  "<warpId>":
    type: "SERVER"
    owner_uuid: "SERVER"
    owner_name: "Server"
    name: "Spawn"
    ...` },
        { type: 'paragraph', text: 'Alte Warps ohne type oder shared Felder werden automatisch migriert — kein Datenverlust.' },
      ],
    },
    {
      id: 'teleport-sequence',
      title: 'Teleport-Ablauf',
      content: [
        { type: 'list', items: [
          'Spieler öffnet Warp Book → wählt Warp → Linksklick',
          'Prüfungen: Zugriff → Aktiv → Sicheres Ziel → Cooldown → XP-Anforderung',
          'GUI schließt, 5-Sekunden-Countdown beginnt',
          'Während Countdown: Farbige Staub-Partikel rotieren um den Spieler (Blau→Lila), Portal-Partikel steigen, Ping-Sounds bei 3s/1s',
          'Abgebrochen durch: Bewegung, Schaden nehmen/austeilen, Weltwechsel, Disconnect',
          'Bei Erfolg: XP wird abgezogen, Cooldown wird gesetzt, expandierende Partikel-Ringe + Portal-Ausbruch + Enderman-Sound am Start- und Zielort',
        ]},
      ],
    },
    {
      id: 'particle-effect',
      title: 'Partikel-Effekt (Warp-Punkt)',
      content: [
        { type: 'paragraph', text: 'Jeder aktive Warp-Punkt zeigt einen mehrschichtigen Tornado-Swirl:' },
        { type: 'list', items: [
          '4 rotierende Ringe in Trichterform (unten breit, oben schmal)',
          '3 Basis-Ringe mit schnellerer Rotation für den Boden-Swirl',
          'Zentrum-Glow mit größeren Partikeln',
          'Elektrische Funken oben (~2.2 Blöcke hoch)',
          'Nur sichtbar für Spieler innerhalb von 32 Blöcken (Performance optimiert)',
        ]},
      ],
    },
    {
      id: 'installation',
      title: 'Installation & Anforderungen',
      content: [
        { type: 'heading', text: 'Installation' },
        { type: 'list', items: [
          '404warp-0.1b.jar in den plugins/ Ordner kopieren',
          'Server starten oder neu laden',
          'Fertig — keine externe Datenbank oder zusätzliche Abhängigkeiten erforderlich',
        ]},
        { type: 'heading', text: 'Anforderungen' },
        { type: 'list', items: [
          'Spigot / Paper 1.26.1 (API 26.1)',
          'Java 25',
          'Kotlin stdlib ist gebündelt (shaded JAR)',
        ]},
      ],
    },
    {
      id: 'bstats-notes',
      title: 'bStats & Hinweise',
      content: [
        { type: 'paragraph', text: 'Dieses Plugin verwendet bStats, um anonyme Nutzungsstatistiken zu sammeln. Plugin-ID: 32437.' },
        { type: 'list', items: [
          'Was erfasst wird: Server-Anzahl, Spieler-Anzahl, Plugin-Version, Minecraft-Version, Java-Version, OS, Land und Sprache',
          'Opt-out: enabled: false in plugins/bStats/config.yml setzen',
          'Relokiert: bStats ist shaded und relokiert zu de.f0fdiscnotfound.404warp.bstats',
        ]},
        { type: 'heading', text: 'Hinweise' },
        { type: 'list', items: [
          'Alpha-Version — Features und Verhalten können sich in zukünftigen Releases ändern',
          'load: POSTWORLD — Warps werden geladen, nachdem Welten bereit sind',
          'Spielerköpfe verwenden Bukkit.getOfflinePlayer(uuid) (lokaler Cache, keine Web-Requests)',
          'XP wird nur bei erfolgreichem Teleport abgezogen, nicht bei abgebrochenen Versuchen',
          'Cooldowns sind im Arbeitsspeicher und werden bei Server-Neustart zurückgesetzt',
          'Maximale Warp-Namenslänge: 32 Zeichen',
        ]},
      ],
    },
  ],
};