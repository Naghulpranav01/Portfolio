import { moreProjects, profile, projects } from '../data/resume';
import { cx, pad } from '../lib/utils';
import { ArrowUpRight } from './Icons';
import { Reveal, SectionHead, TiltCard } from './ui';
import { WorkVisual } from './WorkVisuals';

export default function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead
          id="work"
          index="04"
          label="Selected work"
          title={
            <>
              Work I&apos;m <span className="serif grad">proud of</span>.
            </>
          }
          note="Five systems across security, analytics, infrastructure, applied AI and hardware — built to run, not just to demo."
        />

        <div className="work__list">
          {projects.map((project, i) => (
            <article className="project" key={project.id} data-cursor="view">
              <TiltCard className="project__tilt" max={3.2}>
                <div className={cx('project__inner', i % 2 === 1 && 'is-flipped')}>
                  <div className="project__visual">
                    <WorkVisual kind={project.visual} />
                  </div>

                  <div className="project__content">
                    <div className="project__top">
                      <span className="mono project__kind">{project.kind}</span>
                      <span className="mono project__year">{project.year}</span>
                    </div>

                    <div className="project__heading">
                      <span className="serif project__index" aria-hidden>
                        {pad(i + 1)}
                      </span>
                      <h3 className="project__title">{project.title}</h3>
                    </div>

                    <p className="project__blurb">{project.blurb}</p>

                    <ul className="project__bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="project__stack">
                      {project.stack.map((tech) => (
                        <span className="chip chip--sm" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      className="project__link"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                    >
                      <span>View on GitHub</span>
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </article>
          ))}
        </div>

        <div className="more">
          <Reveal>
            <div className="more__head">
              <div>
                <span className="mono more__label">Also built</span>
                <h3 className="more__title">
                  Nine more experiments, <span className="serif">shipped</span>.
                </h3>
              </div>
              <a
                className="more__link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                All repositories <ArrowUpRight />
              </a>
            </div>
          </Reveal>

          <div className="more__grid">
            {moreProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.05}>
                <a
                  className="mini"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                >
                  <div className="mini__top">
                    <span className="mono mini__index">{pad(i + 1)}</span>
                    <ArrowUpRight className="mini__arrow" />
                  </div>
                  <h4 className="mini__title">{project.title}</h4>
                  <p className="mini__desc">{project.desc}</p>
                  <span className="mono mini__stack">{project.stack}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
