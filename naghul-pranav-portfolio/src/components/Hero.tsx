import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { marqueeWords, profile, stats } from '../data/resume';
import { scrollToId } from '../lib/scroll';
import HeroScene from './HeroScene';
import { ArrowDown, Download, Github } from './Icons';
import Marquee from './Marquee';
import { CountUp, EASE, Magnetic } from './ui';

const LINES = [
  { text: 'Engineering', accent: false },
  { text: 'intelligent', accent: true },
  { text: 'software.', accent: false },
];

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [ist, setIst] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.04,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const tick = () => setIst(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero" id="top" ref={ref}>
        <div className="hero__stage" aria-hidden>
          <motion.div className="hero__canvas" style={{ y: canvasY, scale: canvasScale, opacity: canvasOpacity }}>
            <HeroScene active={inView} />
          </motion.div>
          <div className="hero__grid" />
          <div className="hero__vignette" />
        </div>

        <div className="wrap hero__inner">
          <motion.div
            className="hero__copy"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <motion.div
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              <span className="status">
                <span className="status__dot" />
                {profile.status}
              </span>
              <span className="hero__eyebrow-sep" aria-hidden />
              <span className="mono hero__loc">CHENNAI, IN</span>
              <span className="mono hero__loc hero__loc--time">{ist} IST</span>
            </motion.div>

            <h1 className="hero__title" aria-label="Engineering intelligent software.">
              {LINES.map((line, i) => (
                <span className="hero__line" key={line.text} aria-hidden>
                  <motion.span
                    className={line.accent ? 'hero__line-inner serif hero__accent' : 'hero__line-inner'}
                    initial={{ y: '118%' }}
                    animate={ready ? { y: '0%' } : { y: '118%' }}
                    transition={{ duration: 1.15, delay: 0.22 + i * 0.085, ease: [0.76, 0, 0.24, 1] }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="hero__lede"
              initial={{ opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            >
              Final-year computer science engineer at SRM Institute. I build AI products,
              full-stack platforms and the cloud infrastructure that keeps them running.
            </motion.p>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
            >
              <Magnetic strength={14}>
                <button className="btn btn--solid" onClick={() => scrollToId('work')} data-cursor="link">
                  <span>Explore selected work</span>
                  <ArrowDown className="btn__icon" />
                </button>
              </Magnetic>
              <Magnetic strength={12}>
                <a className="btn btn--ghost" href={profile.resume} download data-cursor="link">
                  <Download className="btn__icon" />
                  <span>Résumé</span>
                </a>
              </Magnetic>
              <a
                className="hero__github"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                data-cursor="link"
              >
                <Github />
              </a>
            </motion.div>

            <motion.div
              className="hero__stats"
              initial={{ opacity: 0, y: 22 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.88, ease: EASE }}
            >
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat__value">
                    <span className="serif">
                      <CountUp value={stat.value} decimals={stat.decimals ?? 0} />
                    </span>
                    <span className="stat__suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat__label mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="hero__proof mono"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
            >
              RHCSA certified · OCI Data Science (in progress) · 5 peer-reviewed publications
            </motion.p>
          </motion.div>
        </div>

        <div className="hero__rail" aria-hidden>
          <span className="mono">SCROLL</span>
          <span className="hero__rail-line" />
        </div>

        <div className="hero__corner hero__corner--tl" aria-hidden>
          +
        </div>
        <div className="hero__corner hero__corner--br" aria-hidden>
          +
        </div>
      </section>
      <Marquee words={marqueeWords} />
    </>
  );
}
