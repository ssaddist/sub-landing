import { useLanguage } from '../i18n/LanguageContext.jsx';
import { REPO_URL } from '../i18n/strings.js';
import { usePlatform } from '../PlatformContext.jsx';
import { APP_VERSION, DOWNLOADS, PLATFORMS, downloadUrl } from '../release.js';
import Reveal from './Reveal.jsx';

export default function CallToAction() {
  const { t } = useLanguage();
  const { platform, choose } = usePlatform();
  const known = PLATFORMS.includes(platform);
  const [main, ...extra] = known ? DOWNLOADS[platform] : [];
  const others = PLATFORMS.filter((p) => p !== platform);

  return (
    <section className="cta" id="get-it" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal as="h2" id="cta-title">{t.ctaTitle}</Reveal>
        <Reveal as="p">{t.ctaText}</Reveal>

        <Reveal className="download">
          {known ? (
            <>
              <div className="actions">
                <a className="btn" href={downloadUrl(main.file)}>
                  {t.dlFor.replace('{os}', t.osNames[platform])}
                </a>
                {extra.length > 0 && (
                  <span className="meta">
                    {t.dlAlso}{' '}
                    {extra.map((f, i) => (
                      <span key={f.file}>
                        {i > 0 && ' · '}
                        <a href={downloadUrl(f.file)}>{f.label}</a>
                      </span>
                    ))}
                  </span>
                )}
              </div>
              <p className="meta dl-meta">{t.dlMeta[platform]}</p>
            </>
          ) : (
            <p className="dl-note">{platform === 'mobile' ? t.dlMobile : t.dlPick}</p>
          )}

          <div className="os-switch" role="group" aria-label={t.dlOtherLabel}>
            <span className="meta">{known ? t.dlOther : t.dlChoose}</span>
            {(known ? others : PLATFORMS).map((p) => (
              <button key={p} type="button" onClick={() => choose(p)}>
                {t.osNames[p]}
              </button>
            ))}
          </div>

          <div className="all-downloads">
            <h3>{t.dlAll} <span className="meta">{t.dlVersion.replace('{v}', APP_VERSION)}</span></h3>
            <dl>
              {PLATFORMS.map((p) => (
                <div key={p}>
                  <dt>{t.osNames[p]}</dt>
                  <dd>
                    {DOWNLOADS[p].map((f, i) => (
                      <span key={f.file}>
                        {i > 0 && ' · '}
                        <a href={downloadUrl(f.file)}>{f.label}</a>
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="meta">
              <a href={`${REPO_URL}/releases`}>{t.dlReleases}</a> · <a href={REPO_URL}>{t.ctaSource}</a> · {t.ctaMeta}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
