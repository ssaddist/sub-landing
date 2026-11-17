import { useLanguage } from '../i18n/LanguageContext.jsx';
import { REPO_URL } from '../i18n/strings.js';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">
        <span>{t.footMade}</span>
        <a href={REPO_URL}>{t.footSource}</a>
      </div>
    </footer>
  );
}
