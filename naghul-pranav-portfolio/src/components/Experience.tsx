import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/resume';
import { pad } from '../lib/utils';
import { Reveal, SectionHead } from './ui';

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 72%', 'end 68%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <section className="section xp" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHead
          id="experience"
          index="03"
          label="Experience"
          title={
            <>
              Six internships across <span className="serif grad">the stack</span>.
            </>
          }
          note="Cloud, security, data and product teams — each role added a layer to how I build."
        />

        <div className="xp__body">
          <div className="xp__rail" ref={railRef} aria-hidden>
            <span className="xp__rail-track" />
            <motion.span className="xp__rail-fill" style={{ scaleY }} />
          </div>

          <div className="xp__list">
            {experience.map((job, i) => (
              <Reveal key={job.org} delay={i * 0.03} y={34}>
                <article className="xp-item">
                  <div className="xp-item__aside">
                    <span className="mono xp-item__period">{job.period}</span>
                    <span className="mono xp-item__loc">{job.location}</span>
                    <div className="xp-item__tags">
                      {job.tags.map((tag) => (
                        <span className="chip chip--sm" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="xp-item__main">
                    <div className="xp-item__head">
                      <h3 className="xp-item__role">{job.role}</h3>
                      <span className="xp-item__org">{job.org}</span>
                    </div>
                    <ul className="xp-item__bullets">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <span className="xp-item__num serif" aria-hidden>
                    {pad(i + 1)}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
