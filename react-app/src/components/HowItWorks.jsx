import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="how" id="how" aria-labelledby="how-title">
      <div className="wrap how-grid">
        <Reveal as="h2" id="how-title">{t.howTitle}</Reveal>
        <ol className="steps">
          {t.steps.map(([title, text]) => (
            <Reveal as="li" key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
