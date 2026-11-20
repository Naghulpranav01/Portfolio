import { useEffect, useState } from 'react';
import { profile } from '../data/resume';
import { ArrowUpRight, Check, Copy, Github, Mail, Phone, Pin } from './Icons';
import { LineMask, Magnetic, Reveal } from './ui';

function useLocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 20000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export default function Contact() {
  const time = useLocalTime();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden />
      <div className="wrap">
        <Reveal y={12}>
          <div className="sec-head__eyebrow contact__eyebrow">
            <span className="mono sec-head__index">07</span>
            <span className="mono sec-head__label">Contact</span>
            <span className="sec-head__rule" aria-hidden />
          </div>
        </Reveal>

        <h2 className="contact__title" id="contact-title">
          <LineMask>Have something</LineMask>
          <LineMask delay={0.08}>
            <span className="serif grad">worth building?</span>
          </LineMask>
        </h2>

        <Reveal delay={0.12}>
          <p className="contact__lede">
            I&apos;m looking for 2027 new-grad roles in AI, full-stack or platform
            engineering — and I&apos;m always up for a hard technical conversation.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="contact__mail-row">
            <Magnetic strength={12}>
              <a className="contact__mail" href={`mailto:${profile.email}`} data-cursor="link">
                <span>{profile.email}</span>
                <ArrowUpRight />
              </a>
            </Magnetic>
            <button
              className="contact__copy"
              onClick={copyEmail}
              data-cursor="link"
              aria-label="Copy email address"
            >
              {copied ? <Check /> : <Copy />}
              <span className="mono">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={0.04}>
            <a className="contact-card" href={`mailto:${profile.email}`} data-cursor="link">
              <span className="contact-card__icon">
                <Mail />
              </span>
              <span className="mono contact-card__label">Email</span>
              <span className="contact-card__value">{profile.email}</span>
              <ArrowUpRight className="contact-card__arrow" />
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a className="contact-card" href={`tel:${profile.phoneHref}`} data-cursor="link">
              <span className="contact-card__icon">
                <Phone />
              </span>
              <span className="mono contact-card__label">Phone</span>
              <span className="contact-card__value">{profile.phone}</span>
              <ArrowUpRight className="contact-card__arrow" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              className="contact-card"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
            >
              <span className="contact-card__icon">
                <Github />
              </span>
              <span className="mono contact-card__label">GitHub</span>
              <span className="contact-card__value">@{profile.githubHandle}</span>
              <ArrowUpRight className="contact-card__arrow" />
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="contact-card contact-card--static">
              <span className="contact-card__icon">
                <Pin />
              </span>
              <span className="mono contact-card__label">Chennai, India</span>
              <span className="contact-card__value contact-card__time">
                {time} <em>IST</em>
              </span>
              <span className="contact-card__arrow mono">LOCAL</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="contact__foot">
            <span className="mono">Open to on-site, hybrid and remote</span>
            <a className="contact__resume" href={profile.resume} download data-cursor="link">
              <span>Download résumé</span>
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
