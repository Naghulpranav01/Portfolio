export const profile = {
  name: 'Naghul Pranav K R',
  shortName: 'Naghul Pranav',
  role: 'AI · Full-stack · Cloud',
  location: 'Chennai, Tamil Nadu, India',
  email: 'naghul695@gmail.com',
  phone: '+91 63801 90811',
  phoneHref: '+916380190811',
  github: 'https://github.com/Naghhulpranav01',
  githubHandle: 'Naghhulpranav01',
  resume: '/Naghul-Pranav-Resume.pdf',
  status: 'Open to 2027 new-grad roles',
};

export type Project = {
  id: string;
  title: string;
  kind: string;
  year: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  visual: 'secaudit' | 'ledger' | 'lmt' | 'rag' | 'surgery';
};

export const projects: Project[] = [
  {
    id: 'secaudit',
    title: 'AI SecAudit Pro',
    kind: 'Security SaaS',
    year: '2025',
    blurb:
      'A code-review and security-audit platform that fuses static AST analysis with an LLM pipeline to surface vulnerabilities and generate remediation suggestions.',
    bullets: [
      'Background job processing with Celery and Redis, plus a security scoring interface.',
      'Monaco-based code comparison view for reviewing flagged diffs in context.',
    ],
    stack: ['Python', 'Django', 'React', 'Celery', 'Redis', 'Groq · Llama 3.3 70B'],
    visual: 'secaudit',
  },
  {
    id: 'ledger',
    title: 'LedgerSpace Sales Analytics',
    kind: 'Full-stack platform',
    year: '2025',
    blurb:
      'A multi-tenant sales analytics workspace with JWT authentication, spreadsheet and CSV import, and isolated PostgreSQL schemas per user.',
    bullets: [
      'APIs for revenue, margin, month-over-month, year-over-year and forecast metrics.',
      'React Three Fiber dashboard with reporting integrations and live charting.',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'React Three Fiber'],
    visual: 'ledger',
  },
  {
    id: 'lmt',
    title: 'LMT — Linux Monitoring Tool',
    kind: 'Infrastructure',
    year: '2025',
    blurb:
      'A complete Linux host monitoring stack on Ubuntu — metrics, alert routing and service health — wired together as managed systemd services.',
    bullets: [
      'Prometheus, Node Exporter and Alertmanager managed through systemd units.',
      'Email notifications for infrastructure alerts and service-health events.',
    ],
    stack: ['Linux', 'Bash', 'Prometheus', 'Node Exporter', 'Alertmanager', 'systemd'],
    visual: 'lmt',
  },
  {
    id: 'rag',
    title: 'RAG-based Llama 2 Medical Chatbot',
    kind: 'Applied AI',
    year: '2024',
    blurb:
      'A CPU-friendly retrieval-augmented generation app that answers questions from user-supplied PDFs and images with a traceable source pipeline.',
    bullets: [
      'OpenCV and Tesseract OCR for image text extraction before answering.',
      'FAISS vector document retrieval with Chainlit as the conversation surface.',
    ],
    stack: ['Python', 'LangChain', 'FAISS', 'Chainlit', 'OpenCV', 'Tesseract OCR', 'Llama 2'],
    visual: 'rag',
  },
  {
    id: 'surgery',
    title: 'Robotic-Assisted Surgery System',
    kind: 'Hardware · Simulation',
    year: '2024',
    blurb:
      'A Unity-controlled dual-arm robotic prototype built on ESP8266 boards and PCA9685 servo drivers, with an interactive training environment.',
    bullets: [
      'Dual-arm servo control driven from a real-time Unity simulation.',
      'Interactive simulated environment designed for robotic surgical training.',
    ],
    stack: ['Unity', 'C#', 'IoT', 'ESP8266', 'PCA9685'],
    visual: 'surgery',
  },
];

export const moreProjects = [
  {
    title: 'Habits',
    desc: 'Habit tracking with reminders, streaks, multilingual UI and AI-assisted insights.',
    stack: 'Python · React · Django',
  },
  {
    title: 'Meal',
    desc: 'Meal planning and nutrition with personalized recommendations and AI health suggestions.',
    stack: 'React · Django',
  },
  {
    title: 'Resume Builder',
    desc: 'AI-assisted résumé creation with live editing, formatting and document export.',
    stack: 'Java · JavaScript · SQL',
  },
  {
    title: 'Healthcare Diagnosis',
    desc: 'Symptom analysis web app with structured, AI-assisted health information.',
    stack: 'HTML · JavaScript · React',
  },
  {
    title: 'DashboardX',
    desc: 'Android dashboard application built for at-a-glance operational metrics.',
    stack: 'Kotlin · Gradle',
  },
  {
    title: 'Wear-It-Again',
    desc: 'Responsive marketplace for exchanging second-hand clothing.',
    stack: 'JavaScript · React · Tailwind CSS',
  },
  {
    title: 'Sprite Pachinko',
    desc: 'Browser-based pachinko game with physics simulation and animated visuals.',
    stack: 'HTML · CSS · React',
  },
  {
    title: 'RFID Access Control',
    desc: 'Arduino-based RFID entry-control prototype for access management.',
    stack: 'Arduino · C++ · C#',
  },
  {
    title: 'Blind Stick',
    desc: 'Assistive device that detects nearby obstacles and raises haptic alerts.',
    stack: 'Arduino · C++ · C#',
  },
];

export const experience = [
  {
    role: 'UI/UX Developer Intern',
    org: 'Zidio',
    period: 'May 2025 — Aug 2025',
    location: 'Bengaluru, IN',
    bullets: [
      'Designed responsive interfaces for the Outframe learning website in Figma, covering page layouts and core user flows.',
      'Refined flows and adapted layouts across screen sizes to keep the experience consistent.',
    ],
    tags: ['Figma', 'UI systems', 'Prototyping'],
  },
  {
    role: 'Full Stack Web Development Intern',
    org: 'SKOLAR',
    period: 'Apr 2024 — Jun 2025',
    location: 'Remote',
    bullets: [
      'Worked across client-side and server-side web applications using HTML, CSS, JavaScript and web frameworks.',
      'Connected front-end components with backend functionality and implemented features end to end.',
    ],
    tags: ['JavaScript', 'HTML/CSS', 'Full-stack'],
  },
  {
    role: 'Cyber Security Intern',
    org: 'Computational Intelligence Research Foundation',
    period: 'Nov 2024 — Dec 2024',
    location: 'Remote',
    bullets: [
      'Examined network-security scenarios and analyzed potential threats in practical security work.',
      'Used ethical-hacking methods and vulnerability assessment to locate and document security weaknesses.',
    ],
    tags: ['VAPT', 'Network security', 'Ethical hacking'],
  },
  {
    role: 'Cloud Computing & Big Data Analytics Intern',
    org: 'C-DAC',
    period: 'Mar 2024 — Jul 2024',
    location: 'Chennai, IN · On-site',
    bullets: [
      'Worked with large datasets using Python and SQL in a cloud-computing and big-data analytics setting.',
      'Prepared visual analyses to present patterns and findings from project datasets.',
    ],
    tags: ['Python', 'SQL', 'Analytics'],
  },
  {
    role: 'Java Programming Intern',
    org: 'CodSoft',
    period: 'Jun 2024 — Jul 2024',
    location: 'Remote',
    bullets: [
      'Built Java applications using core language features and object-oriented programming concepts.',
      'Used IntelliJ IDEA to develop, organize and test project work.',
    ],
    tags: ['Java', 'OOP', 'IntelliJ'],
  },
  {
    role: 'Data Science Intern',
    org: 'Pan-Tech',
    period: 'Jun 2024',
    location: 'Remote',
    bullets: [
      'Worked through data-science projects using Python and common machine-learning libraries.',
      'Created dashboards and visual reports with Power BI and Tableau to surface data-driven insights.',
    ],
    tags: ['Python', 'ML', 'Power BI'],
  },
];

export type Publication = {
  title: string;
  venue: string;
  publisher: string;
  date: string;
  authors: string;
  doi?: string;
  status?: string;
};

export const publications: Publication[] = [
  {
    title: 'Blockchain-Enabled Examination Integrity',
    venue: 'Book Chapter',
    publisher: 'CRC Press',
    date: 'Jul 2026',
    authors: 'K. R. Naghul Pranav, Mohan Divya',
    doi: '10.1201/9781003655190-6',
  },
  {
    title: 'IT2FLS-RSA: QoS-Driven Routing and Security in Wireless Sensor Networks',
    venue: 'International Journal of Fuzzy Systems',
    publisher: 'Springer',
    date: 'Apr 2025',
    authors:
      'Ravikumar Sethuraman, D. Kavitha, K. R. Naghul Pranav, M. M. Yamuna Devi, M. Arunadevi',
    doi: '10.1007/s40815-025-01980-8',
  },
  {
    title: 'Minimizing Portfolio Risk with Fuzzy Neural Networks',
    venue: 'Networks and Spatial Economics',
    publisher: 'Springer',
    date: 'Feb 2025',
    authors:
      'S. K. Veluchamy, K. Lakshmanan, S. Nalini, K. R. N. Pranav, R. Sethuraman',
    doi: '10.1007/s11067-024-09663-x',
  },
  {
    title: 'BGHO-E2EB Model: Enhancing IoT Security with Hummingbird Optimization',
    venue: 'Transactions on Emerging Telecommunications Technologies',
    publisher: 'Wiley',
    date: 'Jan 2025',
    authors: 'K. Dhamshkodi, K. Venkataramani, K. R. Naghul Pranav, R. Sethuraman',
    doi: '10.1002/ett.70037',
  },
  {
    title: 'IoT-Based Autonomous Vehicle System for Driving Safety',
    venue: 'Book Chapter',
    publisher: 'Wiley',
    date: 'Jan 2025',
    authors: 'D. Kavitha, S. Ravikumar, K. R. Naghul Pranav',
    doi: '10.1002/9781394303564.ch26',
  },
  {
    title: 'Dynamic Train Compartment Management using YOLOv8',
    venue: 'Conference Paper',
    publisher: 'Peer reviewed',
    date: 'Forthcoming',
    authors: 'K. R. Naghul Pranav',
    status: 'Forthcoming',
  },
  {
    title: 'Hybrid Classical-Quantum ML Model for Disaster Image Classification',
    venue: 'Research',
    publisher: 'In progress',
    date: 'In progress',
    authors: 'K. R. Naghul Pranav',
    status: 'In progress',
  },
];

export const certifications = [
  {
    name: 'Red Hat Certified System Administrator',
    short: 'RHCSA',
    issuer: 'Red Hat',
    date: 'Feb 2026 — Feb 2029',
    detail: 'Credential ID 8830c515-77f2-442d-b80b-656bd56ebf78',
    state: 'Active',
  },
  {
    name: 'OCI 2025 Certified Data Science Professional',
    short: '1Z0-1110-25',
    issuer: 'Oracle Cloud Infrastructure',
    date: 'In progress',
    detail: 'Certification track: Data Science Professional',
    state: 'In progress',
  },
];

export const workshops = [
  { name: 'Data Science Workshop', meta: 'Pantch · Online', date: 'Jun 2024' },
  {
    name: 'Hands-on IoT Workshop',
    meta: 'Networking Nexus · SRM Kattankulathur',
    date: 'Sep 2023',
  },
];

export const recognition = [
  {
    title: '4th Place — Drestein 25',
    meta: 'Saveetha Engineering College',
    tag: 'Competition',
  },
  {
    title: 'Workshop Lead — Startup Summit 1.0',
    meta: 'SRM Institute of Science and Technology',
    tag: 'Leadership',
  },
  {
    title: 'Activity Based Learning Skills',
    meta: 'Certificate of Participation · Mech Lab, SRM',
    tag: 'Participation',
  },
];

export const education = [
  {
    school: 'SRM Institute of Science and Technology',
    degree: 'B.Tech, Computer Science & Engineering',
    meta: 'CGPA 8.7 / 10',
    period: '2023 — 2027 (expected)',
    place: 'Kattankulathur, Chennai',
  },
  {
    school: 'Velammal Vidhyashram',
    degree: 'CBSE XII · Computer Science 76.33% · CBSE X 87.8%',
    meta: 'Class XII & X',
    period: '2021 — 2023',
    place: 'Mambakkam, Chennai',
  },
];

export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 6, suffix: '', label: 'Internships' },
  { value: 7, suffix: '', label: 'Publications' },
  { value: 8.7, suffix: '', label: 'CGPA / 10', decimals: 1 },
  { value: 14, suffix: '+', label: 'Projects shipped' },
];

export type SkillCategory =
  | 'Languages'
  | 'Web & UI'
  | 'AI / ML'
  | 'Cloud & DevOps'
  | 'Data'
  | 'Security'
  | 'Design & IoT'
  | 'Research';

export const skillGroups: { name: SkillCategory }[] = [
  { name: 'Languages' },
  { name: 'Web & UI' },
  { name: 'AI / ML' },
  { name: 'Cloud & DevOps' },
  { name: 'Data' },
  { name: 'Security' },
  { name: 'Design & IoT' },
  { name: 'Research' },
];

export type Skill = { name: string; cat: SkillCategory };

export const skills: Skill[] = [
  { name: 'Python', cat: 'Languages' },
  { name: 'Java', cat: 'Languages' },
  { name: 'C++', cat: 'Languages' },
  { name: 'C', cat: 'Languages' },
  { name: 'C#', cat: 'Languages' },
  { name: 'JavaScript', cat: 'Languages' },
  { name: 'SQL', cat: 'Languages' },
  { name: 'Kotlin', cat: 'Languages' },
  { name: 'React', cat: 'Web & UI' },
  { name: 'Django', cat: 'Web & UI' },
  { name: 'Node.js', cat: 'Web & UI' },
  { name: 'Express', cat: 'Web & UI' },
  { name: 'Tailwind CSS', cat: 'Web & UI' },
  { name: 'React Three Fiber', cat: 'Web & UI' },
  { name: 'HTML / CSS', cat: 'Web & UI' },
  { name: 'Monaco Editor', cat: 'Web & UI' },
  { name: 'TensorFlow', cat: 'AI / ML' },
  { name: 'scikit-learn', cat: 'AI / ML' },
  { name: 'NumPy', cat: 'AI / ML' },
  { name: 'pandas', cat: 'AI / ML' },
  { name: 'Matplotlib', cat: 'AI / ML' },
  { name: 'LangChain', cat: 'AI / ML' },
  { name: 'RAG', cat: 'AI / ML' },
  { name: 'Generative AI', cat: 'AI / ML' },
  { name: 'Computer Vision', cat: 'AI / ML' },
  { name: 'OpenCV', cat: 'AI / ML' },
  { name: 'YOLOv8', cat: 'AI / ML' },
  { name: 'Llama 2', cat: 'AI / ML' },
  { name: 'Groq LLM API', cat: 'AI / ML' },
  { name: 'FAISS', cat: 'AI / ML' },
  { name: 'Chainlit', cat: 'AI / ML' },
  { name: 'Tesseract OCR', cat: 'AI / ML' },
  { name: 'Docker', cat: 'Cloud & DevOps' },
  { name: 'Linux', cat: 'Cloud & DevOps' },
  { name: 'Bash', cat: 'Cloud & DevOps' },
  { name: 'Ansible', cat: 'Cloud & DevOps' },
  { name: 'Prometheus', cat: 'Cloud & DevOps' },
  { name: 'Alertmanager', cat: 'Cloud & DevOps' },
  { name: 'Node Exporter', cat: 'Cloud & DevOps' },
  { name: 'systemd', cat: 'Cloud & DevOps' },
  { name: 'Celery', cat: 'Cloud & DevOps' },
  { name: 'Redis', cat: 'Cloud & DevOps' },
  { name: 'Git', cat: 'Cloud & DevOps' },
  { name: 'PostgreSQL', cat: 'Data' },
  { name: 'MySQL', cat: 'Data' },
  { name: 'Power BI', cat: 'Data' },
  { name: 'Tableau', cat: 'Data' },
  { name: 'JWT Auth', cat: 'Security' },
  { name: 'Ethical Hacking', cat: 'Security' },
  { name: 'Vulnerability Assessment', cat: 'Security' },
  { name: 'Network Security', cat: 'Security' },
  { name: 'Cybersecurity', cat: 'Security' },
  { name: 'Figma', cat: 'Design & IoT' },
  { name: 'Unity', cat: 'Design & IoT' },
  { name: 'Blender', cat: 'Design & IoT' },
  { name: 'Unreal Engine', cat: 'Design & IoT' },
  { name: 'Arduino', cat: 'Design & IoT' },
  { name: 'ESP8266', cat: 'Design & IoT' },
  { name: 'PCA9685', cat: 'Design & IoT' },
  { name: 'RFID', cat: 'Design & IoT' },
  { name: 'Blockchain', cat: 'Research' },
  { name: 'Quantum ML', cat: 'Research' },
  { name: 'Fuzzy Logic', cat: 'Research' },
  { name: 'Wireless Sensor Networks', cat: 'Research' },
];

export const marqueeWords = [
  'Python',
  'React',
  'Django',
  'PostgreSQL',
  'Docker',
  'Prometheus',
  'TensorFlow',
  'LangChain',
  'Linux',
  'YOLOv8',
  'Generative AI',
  'Redis',
];
