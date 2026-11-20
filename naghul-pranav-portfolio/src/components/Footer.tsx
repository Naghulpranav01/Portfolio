import { profile } from '../data/resume';
import { scrollToTop } from '../lib/scroll';
import { ArrowUpRight, Github } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <span className="footer__monogram serif" aria-hidden>
            N
          </span>
          <div>
            <span className="footer__name">{profile.name}</span>
            <span className="mono footer__meta">© 2026 · All rights reserved</span>
          </div>
        </div>

        <span className="mono footer__note">
          Designed &amp; built from scratch · React · Three.js · GLSL
        </span>

        <div className="footer__actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="footer__github"
            aria-label="GitHub"
            data-cursor="link"
          >
            <Github />
          </a>
          <button className="footer__top" onClick={scrollToTop} data-cursor="link">
            Back to top <ArrowUpRight />
          </button>
        </div>
      </div>
    </footer>
  );
}
