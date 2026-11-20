import { education, profile } from '../data/resume';
import { Reveal, SectionHead, TiltCard } from './ui';

const facts = [
  { label: 'Focus', value: 'Applied AI · Full-stack · DevOps' },
  { label: 'Studying', value: 'B.Tech CSE, SRM Institute' },
  { label: 'Certified', value: 'RHCSA · OCI Data Science' },
  { label: 'Exploring', value: 'Quantum-classical ML' },
];

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead
          id="about"
          index="01"
          label="About"
          title={
            <>
              Equal parts engineer <br className="br-desktop" />and <span className="serif grad">researcher</span>.
            </>
          }
        />

        <div className="about__grid">
          <div className="about__main">
            <Reveal>
              <p className="about__lede">
                I&apos;m Naghul — a final-year B.Tech CSE student at SRM Institute,
                Kattankulathur. My work sits where <em>AI</em>, product engineering and
                infrastructure meet.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="about__body">
                I ship RAG pipelines and computer-vision models, design full-stack products,
                and instrument the Linux systems they run on. Six internships across cloud,
                security, data science and full-stack taught me to move between a research
                paper and a deployment without losing either. Along the way I&apos;ve
                co-authored peer-reviewed work on IoT security, fuzzy neural networks and
                blockchain integrity — and I&apos;m currently exploring hybrid
                classical-quantum models for disaster-image classification.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about__facts">
                {facts.map((fact) => (
                  <div className="fact" key={fact.label}>
                    <span className="mono fact__label">{fact.label}</span>
                    <span className="fact__value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="about__edu">
                <span className="mono about__sub">Education</span>
                {education.map((edu) => (
                  <div className="edu" key={edu.school}>
                    <div className="edu__top">
                      <span className="edu__school">{edu.school}</span>
                      <span className="mono edu__period">{edu.period}</span>
                    </div>
                    <div className="edu__bottom">
                      <span>{edu.degree}</span>
                      <span className="edu__meta">
                        {edu.meta} · {edu.place}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="about__side">
            <Reveal delay={0.1}>
              <TiltCard className="id-card" max={8}>
                <div className="id-card__top mono">
                  <span>PROFILE / 001</span>
                  <span className="id-card__status">
                    <span className="status__dot" /> AVAILABLE
                  </span>
                </div>

                <div className="id-card__mark" aria-hidden>
                  <span className="id-card__mark-ring" />
                  <span className="serif">N</span>
                  <span className="id-card__mark-dot" />
                </div>

                <div className="id-card__name">
                  <h3>{profile.name}</h3>
                  <p className="mono">{profile.role}</p>
                </div>

                <dl className="id-card__rows mono">
                  <div>
                    <dt>Base</dt>
                    <dd>Chennai, India</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>Applied AI / full-stack</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>Final year · 2027</dd>
                  </div>
                  <div>
                    <dt>Cert</dt>
                    <dd>RHCSA</dd>
                  </div>
                </dl>

                <div className="id-card__foot">
                  <span className="id-card__barcode" aria-hidden />
                  <span className="mono">NP — 2026</span>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="about__note">
                <span className="mono about__note-label">Currently</span>
                <p>
                  Co-authoring a hybrid classical-quantum model for disaster-image
                  classification, and preparing for OCI Data Science certification.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
