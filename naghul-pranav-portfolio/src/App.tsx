import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Credentials from './components/Credentials';
import Cursor from './components/Cursor';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Preloader from './components/Preloader';
import Research from './components/Research';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import Work from './components/Work';
import { disposeScroll, initScroll } from './lib/scroll';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initScroll();
    return () => disposeScroll();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', !ready);
    if (ready) document.body.classList.add('is-ready');
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <div className="grain" aria-hidden />
      <ScrollProgress />
      <Cursor />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero ready={ready} />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Research />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
