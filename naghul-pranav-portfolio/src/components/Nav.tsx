import { useEffect, useState } from 'react';
import { profile } from '../data/resume';
import { scrollToId, scrollToTop, setScrollLocked } from '../lib/scroll';
import { cx } from '../lib/utils';
import { ArrowUpRight, Download, Github } from './Icons';

const LINKS = [
  { id: 'work', label: 'Work', index: '04' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'stack', label: 'Stack', index: '02' },
  { id: 'experience', label: 'Experience', index: '03' },
  { id: 'research', label: 'Research', index: '05' },
  { id: 'credentials', label: 'Credentials', index: '06' },
  { id: 'contact', label: 'Contact', index: '07' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('top');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-38% 0px -56% 0px' },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    return () => setScrollLocked(false);
  }, [open]);

  const go = (id: string) => {
    const wasOpen = open;
    setOpen(false);
    window.setTimeout(() => scrollToId(id), wasOpen ? 380 : 0);
  };

  return (
    <>
      <header className={cx('nav', scrolled && 'is-scrolled', open && 'is-open')}>
        <div className="nav__inner">
          <button className="nav__brand" onClick={scrollToTop} data-cursor="link" aria-label="Back to top">
            <span className="nav__monogram">
              <span className="serif">N</span>
              <span className="nav__monogram-dot" />
            </span>
            <span className="nav__brand-text">
              Naghul <span>Pranav</span>
            </span>
          </button>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((link) => (
              <button
                key={link.id}
                className={cx('nav__link', active === link.id && 'is-active')}
                onClick={() => go(link.id)}
                data-cursor="link"
              >
                <span className="nav__link-dot" aria-hidden />
                {link.label}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <a
              className="nav__resume"
              href={profile.resume}
              download
              data-cursor="link"
            >
              <span>Résumé</span>
              <Download />
            </a>
            <button
              className={cx('nav__burger', open && 'is-open')}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              data-cursor="link"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={cx('menu', open && 'is-open')} aria-hidden={!open}>
        <div className="menu__inner">
          <nav className="menu__links" aria-label="Mobile">
            {LINKS.map((link, i) => (
              <button
                key={link.id}
                className="menu__link"
                onClick={() => go(link.id)}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
                tabIndex={open ? 0 : -1}
              >
                <span className="mono menu__index">{link.index}</span>
                <span className="menu__label">{link.label}</span>
                <ArrowUpRight className="menu__arrow" />
              </button>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={`mailto:${profile.email}`} className="menu__contact">
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="menu__social"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a href={profile.resume} download className="menu__social menu__social--text">
              Résumé
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
