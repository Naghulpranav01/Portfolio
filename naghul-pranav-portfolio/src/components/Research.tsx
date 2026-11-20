import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { publications } from '../data/resume';
import { cx, pad } from '../lib/utils';
import { ArrowUpRight, Plus } from './Icons';
import { EASE, Reveal, SectionHead } from './ui';

const themes = ['IoT security', 'Fuzzy & neural systems', 'Blockchain integrity', 'Quantum-classical ML'];

export default function Research() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section research" id="research" aria-labelledby="research-title">
      <div className="wrap">
        <SectionHead
          id="research"
          index="05"
          label="Research"
          title={
            <>
              Peer-reviewed, <span className="serif grad">practically applied</span>.
            </>
          }
          note="Five published papers and chapters, with one forthcoming and one in progress — across secure networks, fuzzy intelligence and verification."
        />

        <div className="research__grid">
          <aside className="research__aside">
            <div className="research__sticky">
              <span className="mono research__label">Themes</span>
              <ul className="research__themes">
                {themes.map((theme) => (
                  <li key={theme} className="research__theme">
                    <span className="research__theme-dot" aria-hidden />
                    {theme}
                  </li>
                ))}
              </ul>

              <div className="research__count">
                <span className="serif">07</span>
                <p className="mono">
                  publications
                  <br />
                  05 published · 02 upcoming
                </p>
              </div>

              <p className="research__note">
                My research looks at making intelligent systems trustworthy — secure IoT
                routing, fuzzy risk models, and verifiable records.
              </p>
            </div>
          </aside>

          <div className="research__list">
            {publications.map((pub, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={pub.title} delay={i * 0.03} y={20}>
                  <div className={cx('pub', isOpen && 'is-open')}>
                    <button
                      className="pub__row"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`pub-panel-${i}`}
                      data-cursor="link"
                    >
                      <span className="mono pub__index">{pad(i + 1)}</span>
                      <span className="pub__main">
                        <span className="pub__title">{pub.title}</span>
                        <span className="mono pub__meta">
                          {pub.venue} · {pub.publisher}
                        </span>
                      </span>
                      <span className="mono pub__date">{pub.date}</span>
                      <span className="pub__toggle" aria-hidden>
                        <Plus />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`pub-panel-${i}`}
                          className="pub__panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                        >
                          <div className="pub__panel-inner">
                            <div className="pub__authors">
                              <span className="mono pub__panel-label">Authors</span>
                              <p>{pub.authors}</p>
                            </div>
                            <div className="pub__links">
                              {pub.doi ? (
                                <a
                                  className="pub__doi"
                                  href={`https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  data-cursor="link"
                                >
                                  <span className="mono">DOI {pub.doi}</span>
                                  <ArrowUpRight />
                                </a>
                              ) : (
                                <span className="chip chip--sm">{pub.status}</span>
                              )}
                              <span className="mono pub__type">{pub.venue}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
