import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

// Real screenshots of sub-tracker, taken at 2x from its web preview with sample data.
// Files live in public/screens/<lang>-<name>.webp.
const SHOTS = [
  { name: 'dashboard', width: 2560, height: 1800, main: true },
  { name: 'calendar', width: 2560, height: 1720 },
  { name: 'catalog', width: 2560, height: 1520 },
];

export default function Screens() {
  const { t, shotsLang } = useLanguage();

  return (
    <section className="screens" aria-labelledby="screens-title">
      <div className="wrap">
        <div className="screens-head">
          <Reveal as="h2" id="screens-title">{t.screensTitle}</Reveal>
          <Reveal as="p">{t.screensText}</Reveal>
        </div>
        <div className="screens-grid">
          {SHOTS.map((shot) => {
            const src = `${import.meta.env.BASE_URL}screens/${shotsLang}-${shot.name}.webp`;
            const copy = t.shots[shot.name];
            return (
              <Reveal as="figure" key={shot.name} className={shot.main ? 'shot-main' : undefined}>
                <a className="shot" href={src} target="_blank" rel="noopener">
                  <img
                    src={src}
                    alt={copy.alt}
                    width={shot.width}
                    height={shot.height}
                    loading={shot.main ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </a>
                <figcaption>{copy.caption}</figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
