import { useEffect, useMemo, useRef, useState } from 'react';
import { skillGroups, skills, type SkillCategory } from '../data/resume';
import { cx, pad } from '../lib/utils';
import { SectionHead, useMediaQuery } from './ui';

type Filter = 'All' | SkillCategory;

export default function Skills() {
  const [active, setActive] = useState<Filter>('All');
  const [hovered, setHovered] = useState<string | null>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const activeRef = useRef<Filter>('All');
  const state = useRef({
    rx: 0.18,
    ry: 0.35,
    vx: 0,
    vy: 0,
    dragging: false,
    lx: 0,
    ly: 0,
  });
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const compact = useMediaQuery('(max-width: 1024px)');
  const shown = useMemo(
    () => (compact && active === 'All' ? skills.filter((_, i) => i % 2 === 0) : skills),
    [compact, active],
  );

  const unit = useMemo(
    () =>
      shown.map((_, i) => {
        const y = 1 - (i / (shown.length - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = Math.PI * (3 - Math.sqrt(5)) * i;
        return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
      }),
    [shown],
  );

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();

    const render = (dt: number) => {
      const s = state.current;
      if (!s.dragging && !reduced) {
        s.ry += (0.13 + s.vy) * dt;
        s.rx += s.vx * dt;
        s.vy *= 0.94;
        s.vx *= 0.94;
        s.rx = Math.max(-0.85, Math.min(0.85, s.rx));
      }
      const R = Math.min(el.clientWidth, el.clientHeight) * 0.4;
      const cy = Math.cos(s.ry);
      const sy = Math.sin(s.ry);
      const cx = Math.cos(s.rx);
      const sx = Math.sin(s.rx);

      unit.forEach((p, i) => {
        const node = tagRefs.current[i];
        if (!node) return;
        const x = p.x * R;
        const y = p.y * R;
        const z = p.z * R;
        const x1 = x * cy - z * sy;
        const z1 = x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const persp = 900;
        const scale = persp / (persp - z2);
        const depth = (z2 + R) / (2 * R);
        const filter = activeRef.current;
        const dim = filter === 'All' || shown[i].cat === filter ? 1 : 0.14;
        node.style.transform = `translate(-50%, -50%) translate3d(${x1.toFixed(1)}px, ${y1.toFixed(1)}px, 0) scale(${(scale * 0.82).toFixed(3)})`;
        node.style.opacity = String((0.4 + depth * 0.6) * dim);
        node.style.zIndex = String(Math.round(z2 + 600));
      });
    };

    if (reduced) {
      render(0);
      const onResize = () => render(0);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      render(dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [unit, shown, reduced]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const s = state.current;
    s.dragging = true;
    s.lx = e.clientX;
    s.ly = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = state.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.lx;
    const dy = e.clientY - s.ly;
    s.lx = e.clientX;
    s.ly = e.clientY;
    s.ry += dx * 0.006;
    s.rx = Math.max(-0.9, Math.min(0.9, s.rx + dy * 0.005));
    s.vy = dx * 0.4;
    s.vx = dy * 0.25;
  };

  const endDrag = () => {
    state.current.dragging = false;
  };

  const count =
    active === 'All' ? skills.length : skills.filter((skill) => skill.cat === active).length;

  return (
    <section className="section stack" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <SectionHead
          id="stack"
          index="02"
          label="Stack"
          title={
            <>
              A stack built for <span className="serif grad">shipping</span>.
            </>
          }
          note="Eight disciplines, one orbit. Drag the constellation or isolate a discipline to see where the depth is."
        />

        <div className="stack__grid">
          <div className="stack__panel">
            <span className="mono stack__panel-label">Disciplines</span>
            <div className="stack__tabs" role="group" aria-label="Filter skills by discipline">
              <button
                className={cx('stack__tab', active === 'All' && 'is-active')}
                onClick={() => setActive('All')}
                data-cursor="link"
              >
                <span className="mono stack__tab-index">00</span>
                <span className="stack__tab-name">All systems</span>
                <span className="mono stack__tab-count">{pad(skills.length)}</span>
                <span className="stack__tab-arrow" aria-hidden>
                  →
                </span>
              </button>
              {skillGroups.map((group, i) => {
                const total = skills.filter((skill) => skill.cat === group.name).length;
                return (
                  <button
                    key={group.name}
                    className={cx('stack__tab', active === group.name && 'is-active')}
                    onClick={() => setActive(active === group.name ? 'All' : group.name)}
                    data-cursor="link"
                  >
                    <span className="mono stack__tab-index">{pad(i + 1)}</span>
                    <span className="stack__tab-name">{group.name}</span>
                    <span className="mono stack__tab-count">{pad(total)}</span>
                    <span className="stack__tab-arrow" aria-hidden>
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="stack__orb-wrap">
            <div
              className="orb"
              ref={orbRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={endDrag}
            >
              <span className="orb__ring orb__ring--a" aria-hidden />
              <span className="orb__ring orb__ring--b" aria-hidden />
              <span className="orb__axis orb__axis--x" aria-hidden />
              <span className="orb__axis orb__axis--y" aria-hidden />
              <span className="orb__core" aria-hidden />
              {shown.map((skill, i) => (
                <span
                  key={skill.name}
                  ref={(node) => {
                    tagRefs.current[i] = node;
                  }}
                  className={cx(
                    'orb__tag',
                    active !== 'All' && skill.cat === active && 'is-on',
                    hovered === skill.name && 'is-hover',
                  )}
                  onPointerEnter={() => setHovered(skill.name)}
                  onPointerLeave={() => setHovered(null)}
                  title={skill.cat}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="orb__foot">
              <span className="mono orb__caption">
                {active === 'All' ? `Full stack · ${skills.length} technologies` : `${count} in ${active}`}
              </span>
              <span className="mono orb__hint">Drag to rotate</span>
            </div>

            <ul className="sr-only">
              {skills.map((skill) => (
                <li key={skill.name}>
                  {skill.name} — {skill.cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
