import { useEffect, useRef, useState } from 'react';
import { cx } from '../lib/utils';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setPct(Math.round(100 * (1 - Math.pow(1 - p, 2))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => onDoneRef.current(), 1050);
    return () => clearTimeout(t);
  }, [leaving]);

  return (
    <div className={cx('preloader', leaving && 'is-leaving')} aria-live="polite">
      <div className="preloader__grid" aria-hidden />
      <div className="preloader__top mono">
        <span>PORTFOLIO — 2026</span>
        <span>CHENNAI, IN</span>
      </div>

      <div className="preloader__center">
        <div className="preloader__mark" aria-hidden>
          <span className="serif">N</span>
          <span className="preloader__orbit" />
        </div>
        <p className="preloader__name">NAGHUL PRANAV K R</p>
        <p className="preloader__role mono">AI · FULL-STACK · CLOUD</p>
        <span className="sr-only">Loading portfolio</span>
      </div>

      <div className="preloader__bottom">
        <div className="preloader__bar" aria-hidden>
          <span style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
        <div className="preloader__counter serif" aria-hidden>
          {String(pct).padStart(3, '0')}
          <em>%</em>
        </div>
      </div>
    </div>
  );
}
