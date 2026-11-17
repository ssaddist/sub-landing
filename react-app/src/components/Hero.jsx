import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const [before, accent, after] = t.heroTitle;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <h1 id="hero-title">
          {before}<em>{accent}</em>{after}
        </h1>
        <div className="hero-foot">
          <p className="lead">{t.heroLead}</p>
          <p className="privacy">{t.heroPrivacy}</p>
        </div>
      </div>
    </section>
  );
}
