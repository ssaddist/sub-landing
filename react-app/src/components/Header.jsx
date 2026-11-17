import { useLanguage } from '../i18n/LanguageContext.jsx';
import { APP_NAME, BRAND_SUFFIX, LANGUAGES } from '../i18n/strings.js';

export default function Header() {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="wrap top">
      <a className="wordmark" href="#">
        {APP_NAME} <span className="wordmark-sub">{BRAND_SUFFIX}</span>
      </a>
      <div className="top-right">
        <nav aria-label={t.navLabel}>
          <a className="nav-how" href="#how">{t.navHow}</a>
          <a className="nav-download" href="#get-it">{t.navDownload}</a>
        </nav>
        <div className="lang" role="group" aria-label={t.langLabel}>
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              aria-label={l.name}
              aria-pressed={lang === l.code}
              onClick={() => setLang(l.code)}
            >
              {l.short}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
