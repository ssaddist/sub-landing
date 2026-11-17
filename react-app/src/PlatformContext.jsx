import { createContext, useContext, useMemo, useState } from 'react';
import { detectPlatform, getConsent, rememberPlatform, savedPlatform, setConsent } from './platform.js';

const PlatformContext = createContext(null);

export function PlatformProvider({ children }) {
  const [detected] = useState(detectPlatform);
  const [platform, setPlatform] = useState(() => savedPlatform() || detected);
  const [consent, setConsentState] = useState(getConsent);

  const value = useMemo(() => ({
    platform,
    detected,
    consent,
    choose(next) {
      setPlatform(next);
      rememberPlatform(next);
    },
    answer(allowed) {
      setConsent(allowed, platform);
      setConsentState(allowed ? 'yes' : 'no');
    },
  }), [platform, detected, consent]);

  return <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>;
}

export function usePlatform() {
  const ctx = useContext(PlatformContext);
  if (!ctx) throw new Error('usePlatform must be used inside <PlatformProvider>');
  return ctx;
}
