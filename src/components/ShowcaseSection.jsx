import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

const showcaseImages = {
  en: [
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ba26b0169_Thewarpmenuforplayers.png', caption: 'Warp Book GUI — all player warps with coordinates and status' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/557d2ac54_Warpcountdown.png', caption: '5-second teleport countdown with spiral particles' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ffc98c25d_Warppointwithparticles.png', caption: 'Warp point with tornado swirl particles in the world' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/d60b1b2f9_Optionforaplayerwarppoint.png', caption: 'Warp Options — toggle particles, rename, delete, and more' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/30b5f4d45_Chooseawarpicon.png', caption: 'Set Warp Icon — click any item from your inventory (not consumed)' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/6adec2321_Choosetheparticlecolorofyourwarppoint.png', caption: 'Warp Color — choose from 10 particle colors' },
  ],
  de: [
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ba26b0169_Thewarpmenuforplayers.png', caption: 'Warp Book GUI — alle Spieler-Warps mit Koordinaten und Status' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/557d2ac54_Warpcountdown.png', caption: '5-Sekunden Teleport-Countdown mit Spiral-Partikeln' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/ffc98c25d_Warppointwithparticles.png', caption: 'Warp-Punkt mit Tornado-Swirl-Partikeln in der Welt' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/d60b1b2f9_Optionforaplayerwarppoint.png', caption: 'Warp-Optionen — Partikel umschalten, umbenennen, löschen und mehr' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/30b5f4d45_Chooseawarpicon.png', caption: 'Icon setzen — klicke ein Item aus deinem Inventar an (wird nicht verbraucht)' },
    { src: 'https://media.base44.com/images/public/6a4bffc12d8a6fb696747ba5/6adec2321_Choosetheparticlecolorofyourwarppoint.png', caption: 'Warp-Farbe — wähle aus 10 Partikel-Farben' },
  ],
};

const heading = {
  en: 'See it in action',
  de: 'Sieh es in Aktion',
};

const subtitle = {
  en: 'From the Warp Book GUI to particle effects — explore what 404Warp looks like in-game.',
  de: 'Vom Warp Book GUI bis zu Partikel-Effekten — entdecke, wie 404Warp im Spiel aussieht.',
};

export default function ShowcaseSection() {
  const { lang } = useLanguage();
  const images = showcaseImages[lang] || showcaseImages.en;

  return (
    <section className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">{heading[lang] || heading.en}</h2>
          <p className="text-muted-foreground">{subtitle[lang] || subtitle.en}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel glass-panel-hover chromatic-border rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-auto object-contain bg-black/40 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-muted-foreground text-center border-t border-white/5">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}