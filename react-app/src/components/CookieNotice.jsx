import { useLanguage } from '../i18n/LanguageContext.jsx';
import { usePlatform } from '../PlatformContext.jsx';

export default function CookieNotice() {
  const { t } = useLanguage();
  const { consent, answer, detected } = usePlatform();

  if (consent === 'yes' || consent === 'no' || detected === 'mobile') return null;

  return (
    <aside className="cookie" role="region" aria-label={t.cookieLabel}>
      <p>{t.cookieText}</p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-small" onClick={() => answer(true)}>
          {t.cookieAllow}
        </button>
        <button type="button" className="link-btn" onClick={() => answer(false)}>
          {t.cookieDecline}
        </button>
      </div>
    </aside>
  );
}
