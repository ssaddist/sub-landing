import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

export default function WhatYouGet() {
  const { t } = useLanguage();
  const [figure, unit] = t.getFigure;

  return (
    <section className="get" aria-labelledby="get-title">
      <div className="wrap get-grid">
        <Reveal>
          <h2 id="get-title">{t.getTitle}</h2>
          <p className="get-intro">{t.getText}</p>
          <p className="figure-big" aria-label={t.getFigureAria}>
            {figure}<small>{unit}</small>
          </p>
        </Reveal>
        <Reveal as="dl">
          {t.benefits.map(([term, desc]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{desc}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
