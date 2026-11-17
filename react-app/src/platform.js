import { PLATFORMS } from './release.js';

const CONSENT_COOKIE = 'tally_consent';
const OS_COOKIE = 'tally_os';
const YEAR = 60 * 60 * 24 * 365;

export function readCookie(name) {
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

export function writeCookie(name, value, maxAge = YEAR) {
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

export function deleteCookie(name) {
  writeCookie(name, '', 0);
}

export function detectPlatform() {
  const ua = navigator.userAgent || '';
  const hint = (navigator.userAgentData?.platform || '').toLowerCase();
  const touch = navigator.maxTouchPoints > 1;

  if (/android|iphone|ipad|ipod/i.test(ua) || hint === 'android' || hint === 'ios') return 'mobile';
  if (hint === 'macos' || /mac os x|macintosh/i.test(ua)) return touch ? 'mobile' : 'mac';
  if (hint === 'windows' || /windows/i.test(ua)) return 'windows';
  if (hint === 'linux' || hint === 'chrome os' || /linux|x11|cros/i.test(ua)) return 'linux';
  return null;
}

export const getConsent = () => readCookie(CONSENT_COOKIE);

export function setConsent(allowed, platform) {
  writeCookie(CONSENT_COOKIE, allowed ? 'yes' : 'no');
  if (allowed && PLATFORMS.includes(platform)) writeCookie(OS_COOKIE, platform);
  if (!allowed) deleteCookie(OS_COOKIE);
}

export function savedPlatform() {
  const value = readCookie(OS_COOKIE);
  return PLATFORMS.includes(value) ? value : null;
}

export function rememberPlatform(platform) {
  if (getConsent() === 'yes' && PLATFORMS.includes(platform)) writeCookie(OS_COOKIE, platform);
}
