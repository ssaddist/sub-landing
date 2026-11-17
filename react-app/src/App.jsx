import { useLanguage } from './i18n/LanguageContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Screens from './components/Screens.jsx';
import WhatYouGet from './components/WhatYouGet.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
import CookieNotice from './components/CookieNotice.jsx';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Screens />
        <WhatYouGet />
        <CallToAction />
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
