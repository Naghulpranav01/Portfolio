export function SecAuditViz() {
  return (
    <div className="viz viz--secaudit">
      <div className="viz__chrome mono">
        <span>secaudit / audit-2025</span>
        <span className="viz__live">
          <span className="status__dot" /> LIVE
        </span>
      </div>

      <div className="viz__ring">
        <svg viewBox="0 0 200 200" role="presentation">
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8B6CFF" />
              <stop offset="100%" stopColor="#6EE7F5" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(255,255,255,.1)"
            strokeWidth="1.5"
            strokeDasharray="2 7"
          />
          <circle cx="100" cy="100" r="66" fill="rgba(110,231,245,.035)" />
          <circle
            cx="100"
            cy="100"
            r="66"
            fill="none"
            stroke="rgba(255,255,255,.06)"
            strokeWidth="7"
          />
          <circle
            cx="100"
            cy="100"
            r="66"
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="381 415"
            transform="rotate(-90 100 100)"
          />
          <circle cx="167" cy="100" r="3.5" fill="#6EE7F5" />
        </svg>
        <div className="viz__score">
          <span className="serif">92</span>
          <span className="mono">SECURITY SCORE</span>
        </div>
      </div>

      <div className="viz__chip viz__chip--tl mono">AST · 128 files</div>
      <div className="viz__chip viz__chip--br mono">GROQ · LLAMA 3.3</div>

      <div className="viz__code mono">
        <div>
          <span className="viz__ln">42</span>
          <span className="viz__sev viz__sev--high">HIGH</span>
          <span>unvalidated redirect</span>
        </div>
        <div>
          <span className="viz__ln">87</span>
          <span className="viz__sev viz__sev--med">MED</span>
          <span>weak JWT expiry</span>
        </div>
        <div>
          <span className="viz__ln">11</span>
          <span className="viz__sev viz__sev--ok">FIXED</span>
          <span>SQL injection</span>
        </div>
      </div>
    </div>
  );
}

const LEDGER_BARS = [38, 54, 46, 68, 58, 82, 74, 94, 88, 100];

export function LedgerViz() {
  return (
    <div className="viz viz--ledger">
      <div className="viz__chrome mono">
        <span>ledger / revenue</span>
        <span>YTD · 2025</span>
      </div>

      <div className="viz__grid" aria-hidden />
      <div className="viz__metric">
        <span className="mono viz__metric-label">NET REVENUE</span>
        <div className="viz__big serif">
          $1.24<span>M</span>
        </div>
        <span className="mono viz__delta">▲ 18.4% YoY</span>
      </div>

      <div className="viz__chart" aria-hidden>
        {LEDGER_BARS.map((h, i) => (
          <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }} />
        ))}
      </div>

      <svg className="viz__line" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="ledgerLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B6CFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8B6CFF" />
            <stop offset="100%" stopColor="#6EE7F5" />
          </linearGradient>
        </defs>
        <path
          d="M0,96 L44,80 L89,88 L133,62 L178,72 L222,46 L267,54 L311,26 L356,36 L400,12"
          fill="none"
          stroke="url(#ledgerLine)"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="viz__float viz__float--a mono">
        <span>Gross margin</span>
        <strong>42.1%</strong>
      </div>
      <div className="viz__float viz__float--b mono">
        <span>MoM growth</span>
        <strong>+6.2%</strong>
      </div>
      <div className="viz__chip viz__chip--bl mono">PostgreSQL · JWT</div>
    </div>
  );
}

export function LmtViz() {
  return (
    <div className="viz viz--lmt">
      <div className="viz__term">
        <div className="viz__term-bar">
          <span className="viz__dot viz__dot--red" />
          <span className="viz__dot viz__dot--amber" />
          <span className="viz__dot viz__dot--green" />
          <em className="mono">monitor@ubuntu:~</em>
        </div>
        <div className="viz__term-body mono">
          <div>
            <span className="viz__prompt">$</span> systemctl status prometheus
          </div>
          <div className="viz__ok">
            <span>●</span> prometheus.service <em>active (running)</em>
          </div>
          <div className="viz__ok">
            <span>●</span> node_exporter.service <em>active</em>
          </div>
          <div className="viz__ok">
            <span>●</span> alertmanager.service <em>active</em>
          </div>
          <div>
            <span className="viz__prompt">$</span> uptime
          </div>
          <div className="viz__uptime serif">
            99.98<span>%</span>
          </div>
          <div className="viz__term-note">last 30 days · 3 hosts</div>
        </div>
      </div>

      <svg className="viz__spark" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6EE7F5" stopOpacity=".25" />
            <stop offset="100%" stopColor="#6EE7F5" />
          </linearGradient>
        </defs>
        <path
          d="M0,44 L18,40 L36,46 L54,34 L72,38 L90,30 L108,36 L126,26 L144,32 L162,22 L180,30 L198,20 L216,26 L234,14 L252,22 L270,18 L288,10 L300,14"
          fill="none"
          stroke="url(#sparkGrad)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="viz__chip viz__chip--br mono">SYSTEMD · 0 OPEN ALERTS</div>
      <div className="viz__chip viz__chip--tl mono">HOSTS · 03</div>
    </div>
  );
}

export function RagViz() {
  return (
    <div className="viz viz--rag">
      <div className="viz__chrome mono">
        <span>medbot / rag-pipeline</span>
        <span className="viz__live">
          <span className="status__dot" /> CPU-SAFE
        </span>
      </div>

      <div className="viz__flow">
        <svg className="viz__edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="ragEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8B6CFF" stopOpacity=".15" />
              <stop offset="100%" stopColor="#6EE7F5" stopOpacity=".9" />
            </linearGradient>
          </defs>
          <path d="M20,52 C30,34 34,30 41,27" />
          <path d="M20,52 C30,70 34,74 41,77" />
          <path d="M50,27 C58,32 55,46 61,52" />
          <path d="M50,77 C58,72 55,58 61,52" />
          <path d="M72,52 L86,52" />
        </svg>

        <span className="viz__node viz__node--a mono">
          PDF<span>source</span>
        </span>
        <span className="viz__node viz__node--b mono">
          OCR<span>tesseract</span>
        </span>
        <span className="viz__node viz__node--c mono">
          CV<span>opencv</span>
        </span>
        <span className="viz__node viz__node--d mono">
          FAISS<span>retrieval</span>
        </span>
        <span className="viz__node viz__node--e mono">
          LLM<span>llama 2</span>
        </span>
      </div>

      <div className="viz__chip viz__chip--bl mono">12 SOURCES INDEXED</div>
      <div className="viz__chip viz__chip--br mono">CITED ANSWERS</div>
    </div>
  );
}

export function SurgeryViz() {
  return (
    <div className="viz viz--surgery">
      <div className="viz__chrome mono">
        <span>surgical / dual-arm</span>
        <span className="viz__live">
          <span className="status__dot" /> SIMULATION
        </span>
      </div>

      <div className="viz__radar" aria-hidden />
      <svg className="viz__rings" viewBox="0 0 320 320" aria-hidden>
        <defs>
          <linearGradient id="surgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6EE7F5" />
            <stop offset="100%" stopColor="#8B6CFF" />
          </linearGradient>
        </defs>
        <circle cx="160" cy="160" r="120" fill="none" stroke="rgba(255,255,255,.07)" />
        <circle
          cx="160"
          cy="160"
          r="96"
          fill="none"
          stroke="url(#surgeGrad)"
          strokeOpacity=".5"
          strokeDasharray="3 9"
        />
        <circle cx="160" cy="160" r="58" fill="none" stroke="rgba(255,255,255,.1)" />
        <path d="M20,160 H300 M160,20 V300" stroke="rgba(255,255,255,.08)" strokeDasharray="2 8" />
        <path
          className="viz__arm"
          d="M46,262 L96,208 L128,196 L160,160"
          fill="none"
          stroke="url(#surgeGrad)"
          strokeWidth="1.4"
        />
        <path
          className="viz__arm viz__arm--b"
          d="M274,262 L224,208 L192,196 L160,160"
          fill="none"
          stroke="url(#surgeGrad)"
          strokeWidth="1.4"
        />
        <circle cx="160" cy="160" r="6" fill="#6EE7F5" fillOpacity=".2" stroke="#6EE7F5" />
        <circle cx="96" cy="208" r="3" fill="#8B6CFF" />
        <circle cx="224" cy="208" r="3" fill="#8B6CFF" />
      </svg>

      <div className="viz__coord mono">x 128.4 · y 092.1 · z 014.7</div>
      <div className="viz__chip viz__chip--bl mono">PCA9685 · DUAL SERVO</div>
      <div className="viz__chip viz__chip--br mono">ESP8266 ×2</div>
    </div>
  );
}

export function WorkVisual({ kind }: { kind: string }) {
  switch (kind) {
    case 'secaudit':
      return <SecAuditViz />;
    case 'ledger':
      return <LedgerViz />;
    case 'lmt':
      return <LmtViz />;
    case 'rag':
      return <RagViz />;
    default:
      return <SurgeryViz />;
  }
}
