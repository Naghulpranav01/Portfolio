import { certifications, recognition, workshops } from '../data/resume';
import { Check, ArrowUpRight } from './Icons';
import { Reveal, SectionHead } from './ui';

const rhcsa = certifications[0];

export default function Credentials() {
  return (
    <section className="section creds" id="credentials" aria-labelledby="credentials-title">
      <div className="wrap">
        <SectionHead
          id="credentials"
          index="06"
          label="Credentials"
          title={
            <>
              Certified, awarded, <span className="serif grad">involved</span>.
            </>
          }
        />

        <div className="bento">
          <Reveal className="bento__cell cert cert--hero" y={30}>
            <div className="cert__head mono">
              <span>Certification / Red Hat</span>
              <span className="cert__state">
                <span className="status__dot" /> Active
              </span>
            </div>

            <div className="cert__stamp" aria-hidden>
              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="stampPath"
                    d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
                  />
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  fill="none"
                  stroke="rgba(110,231,245,.16)"
                  strokeDasharray="2 6"
                />
                <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,.08)" />
                <text fill="rgba(237,239,245,.5)" fontSize="6.4" letterSpacing="2.4">
                  <textPath href="#stampPath">
                    RED HAT CERTIFIED SYSTEM ADMINISTRATOR · RHCSA ·
                  </textPath>
                </text>
              </svg>
              <span className="cert__stamp-mark">
                <Check />
              </span>
            </div>

            <div className="cert__body">
              <span className="mono cert__kicker">RHCSA</span>
              <h3 className="cert__name">
                Red Hat Certified
                <br />
                System Administrator
              </h3>
              <p className="mono cert__meta">Red Hat · Linux administration</p>
            </div>

            <div className="cert__foot mono">
              <span>Valid {rhcsa.date}</span>
              <span title={rhcsa.detail}>ID 8830c515…</span>
            </div>
          </Reveal>

          <Reveal className="bento__cell cert cert--oci" delay={0.06} y={30}>
            <div className="cert__head mono">
              <span>Certification / Oracle</span>
              <span className="cert__state cert__state--pending">
                <span className="status__dot" /> In progress
              </span>
            </div>

            <div className="cert__body">
              <span className="mono cert__kicker">1Z0-1110-25</span>
              <h3 className="cert__name">OCI 2025 Certified Data Science Professional</h3>
              <p className="mono cert__meta">Oracle Cloud Infrastructure</p>
            </div>

            <div className="cert__progress">
              <span className="mono">Exam track</span>
              <span className="cert__progress-bar" aria-hidden>
                <span />
              </span>
            </div>

            <div className="cert__foot mono">
              <span>Currently preparing</span>
              <span>Next up</span>
            </div>
          </Reveal>

          <Reveal className="bento__cell awards" delay={0.04} y={30}>
            <div className="cell__head">
              <span className="mono">Recognition</span>
              <span className="mono cell__count">03</span>
            </div>

            <ul className="awards__list">
              {recognition.map((item, i) => (
                <li className="award" key={item.title}>
                  <span className="mono award__tag">{item.tag}</span>
                  <span className="award__title">
                    {i === 0 ? <span className="serif award__big">4th</span> : null}
                    {item.title.replace('4th Place — ', '')}
                  </span>
                  <span className="mono award__meta">{item.meta}</span>
                  <ArrowUpRight className="award__arrow" aria-hidden />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="bento__cell workshops" delay={0.1} y={30}>
            <div className="cell__head">
              <span className="mono">Workshops</span>
              <span className="mono cell__count">02</span>
            </div>

            <ul className="workshops__list">
              {workshops.map((item) => (
                <li className="workshop" key={item.name}>
                  <span className="workshop__dot" aria-hidden />
                  <div>
                    <span className="workshop__name">{item.name}</span>
                    <span className="mono workshop__meta">{item.meta}</span>
                  </div>
                  <span className="mono workshop__date">{item.date}</span>
                </li>
              ))}
            </ul>

            <p className="workshops__note">
              Hands-on sessions in data science and IoT — the start of a habit of teaching
              what I learn.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
