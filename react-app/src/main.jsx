import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import App from './App.jsx';
import { PlatformProvider } from './PlatformContext.jsx';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource/geologica/500.css';
import '@fontsource/geologica/700.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/400-italic.css';
import '@fontsource/ibm-plex-sans/500.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <PlatformProvider>
        <App />
      </PlatformProvider>
    </LanguageProvider>
  </StrictMode>,
);
