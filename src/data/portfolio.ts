/**
 * Central portfolio data — generated from Sudarshan Karn's resume (Sudarshan_Karn_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sudarshan Karn',
  displayName: 'Sudarshan Karn',
  firstName: 'SUDARSHAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A KARN ORIGINAL',
  role: 'Zoho CRM Developer',
  tagline: ['Team Manager', 'Zoho CRM', 'Automation'],
  intro:
    'Team Manager and Zoho CRM developer leading data and automation teams — modernizing manual, hierarchy-driven workflows into AI-assisted automation, with hands-on depth in Zoho CRM, SQL and Deluge scripting.',
  email: 'Sudarshankarn@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/Sudarshan',
    github: 'https://github.com/Skarnix',
  },
  resumePdf: '/assets/Sudarshan_Karn_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sudarshan Karn',
  },
  interests: ['AI-Assisted Automation', 'Workflow Modernization', 'Data & BI'],
};

export const education = [
  {
    school: 'Shyam Lal College, IGNOU',
    place: 'Delhi',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024 – 2026',
  },
  {
    school: 'Lalit Narayan Mithila University',
    place: 'Darbhanga',
    degree: "Bachelor's in Arts",
    period: '2016 – 2019',
  },
  {
    school: 'Marwari College',
    place: 'Darbhanga',
    degree: 'Intermediate',
    period: '2014 – 2016',
  },
];

export const experience = [
  {
    company: 'GemPundit',
    role: 'Team Manager – Data and Automation (L2)',
    period: 'Apr 2026 – Present',
    points: [
      'Managing the Data and Automation team, owning bandwidth planning, task allocation, and workload distribution across Doers, Team Leads, and cross-functional stakeholders.',
      'Built team reporting and performance dashboards to track throughput, SLA adherence, and bottlenecks, enabling data-backed capacity and hiring decisions.',
      'Designed and rolled out structured onboarding and training programs for freshers, cutting ramp-up time and standardizing skill benchmarks across the team.',
      'Redesigned department-based approval and escalation hierarchies, replacing a rigid legacy model to improve turnaround, ownership, and cross-team accountability.',
      'Driving a broader automation roadmap to modernize hierarchical, manual-approval-driven workflows into event-driven, self-service systems.',
      'Architected large-scale data pipelines (bulk imports, validation, reconciliation) to handle high-volume operational data with minimal manual intervention.',
      'Leading early efforts to route operational and CRM data into AI-assisted automation — anomaly detection, smart task routing, and predictive reporting — to reduce manual oversight at scale.',
      'Partnering with leadership on process optimization and change management, translating operational pain points into scalable systems and measurable efficiency gains.',
    ],
  },
  {
    company: 'Elevolt Global',
    role: 'Tech Developer – Zoho CRM Development',
    period: 'Mar 2024 – Apr 2026',
    points: [
      'Designed and deployed Zoho CRM solutions — custom modules, workflow automation, and data migration — for 100+ users across inventory, HR, and operational functions.',
      'Reduced operational overhead by 35% through advanced Zoho workflow automation, eliminating manual data entry.',
      'Built data migration pipelines and API/webhook integrations using SQL, Deluge scripting, and REST APIs, ensuring 100% data integrity across systems.',
      'Owned the full CRM implementation lifecycle — requirements, design, development, testing, and deployment — plus Zoho Analytics dashboards for executive reporting.',
      'Provided post-deployment support and training, resolving 50+ CRM issues through root cause analysis.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Senior Customer Support Executive',
    period: 'Jul 2022 – Dec 2022',
    points: [
      'Resolved customer inquiries within established SLAs, contributing to a 35% reduction in escalations and 95% satisfaction rating across 40+ customers per shift.',
      'Analyzed support workflows and performance KPIs to identify inefficiencies and drive data-informed process improvements.',
      'Collaborated with cross-functional stakeholders to gather requirements and implement process enhancements aligned with business goals.',
    ],
  },
  {
    company: 'Urban Company, IENERGIZER',
    role: 'Customer Support Executive',
    period: 'Aug 2021 – Jul 2022',
    points: [
      'Led team in analyzing customer trends and data patterns, resulting in a 25% decrease in issue resolution time.',
      'Reduced unresolved issues by 72% by identifying gaps beyond automated system capabilities through structured data analysis.',
      'Conducted root cause analysis to systematically resolve recurring issues and gathered stakeholder requirements to improve service delivery processes.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Short domain label shown on cards (the resume doesn't date its projects). */
  domain: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when there's no public repository — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'modules' | 'dashboard' | 'scatter' | 'pulse';
};

export const projects: Project[] = [
  {
    id: 'zoho-inventory',
    title: 'Zoho CRM Inventory System',
    domain: 'Zoho CRM',
    genre: 'Zoho CRM • Deluge • Automation',
    logline: 'An inventory management system on Zoho CRM — modules, automation and live executive dashboards.',
    stack: ['Zoho CRM', 'Deluge', 'SQL', 'Zoho Analytics'],
    build: [
      'Designed and developed custom Zoho CRM modules for inventory tracking, supplier management, and procurement workflows.',
      'Built automated workflows and Deluge scripts to handle stock movements, low inventory alerts, and supplier notifications without manual intervention.',
      'Migrated 10,000+ inventory records from a legacy Excel system to Zoho CRM with full data validation and reconciliation.',
      'Created executive dashboards in Zoho Analytics tracking inventory KPIs, stock turnover, and supplier performance in real-time.',
    ],
    features: [
      'Custom modules for inventory, suppliers and procurement',
      'Deluge-scripted stock movements and low-inventory alerts',
      'Automatic supplier notifications',
      'Legacy Excel migration with validation & reconciliation',
      'Real-time Zoho Analytics executive dashboards',
    ],
    metrics: [
      { value: '10,000+', label: 'records migrated' },
      { value: '40%', label: 'less manual data entry' },
      { value: '99.8%', label: 'inventory accuracy' },
      { value: '25%', label: 'faster process execution' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'modules',
  },
  {
    id: 'vehicle-accident',
    title: 'Vehicle Accident Analysis',
    domain: 'Power BI',
    genre: 'BI • SQL • Dashboards',
    logline: 'Interactive Power BI dashboards that reveal where, when and in what weather accidents happen.',
    stack: ['Power BI', 'SQL'],
    build: [
      'Wrote SQL queries to extract and transform accident data; designed interactive Power BI dashboards for stakeholders to explore patterns by location, time, and weather.',
      'Delivered data-driven insights across the full BI lifecycle — from requirements gathering to deployment.',
    ],
    features: [
      'SQL extraction and transformation of accident data',
      'Interactive exploration by location, time and weather',
      'Full BI lifecycle: requirements to deployment',
    ],
    metrics: [
      { value: '5', label: 'high-risk locations identified' },
      { value: '40%', label: 'of serious accidents' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'dashboard',
  },
  {
    id: 'airbnb-eda',
    title: 'AirBnB Exploratory Data Analysis',
    domain: 'Python & SQL',
    genre: 'EDA • Python • Data Viz',
    logline: 'Cleaning and visualizing large listing datasets to surface pricing and booking trends.',
    stack: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    build: [
      'Queried and cleaned large datasets using SQL and Pandas to ensure data accuracy and consistency prior to analysis.',
      'Visualized relationships between listing features using Matplotlib to identify pricing and booking trends.',
    ],
    features: [
      'SQL + Pandas cleaning for accuracy and consistency',
      'Matplotlib visualizations of listing features',
      'Pricing and booking trend analysis',
    ],
    metrics: [{ value: '35%', label: 'higher booking rate with professional photos' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'scatter',
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Prediction',
    domain: 'Machine Learning',
    genre: 'Deep Learning • Healthcare • ML',
    logline: 'A deep learning model for early identification of at-risk patients from clinical data.',
    stack: ['TensorFlow', 'Keras', 'sklearn', 'Seaborn'],
    build: [
      'Built a deep learning model using TensorFlow/Keras; used Seaborn for EDA to identify patterns in clinical data.',
      'Employed Scikit-learn for pre-processing, model evaluation, and performance fine-tuning.',
    ],
    features: [
      'TensorFlow / Keras deep learning model',
      'Seaborn EDA on clinical data',
      'Scikit-learn pre-processing, evaluation and fine-tuning',
    ],
    metrics: [{ value: '89%', label: 'prediction accuracy' }],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'pulse',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'automation-35',
    title: '35% Less Manual Work',
    org: 'Elevolt Global',
    detail: 'Reduced operational overhead by 35% through advanced Zoho workflow automation, eliminating manual data entry.',
    laurel: 'Workflow Automation',
  },
  {
    id: 'data-integrity',
    title: '100% Data Integrity',
    org: 'Elevolt Global',
    detail: 'Data migration pipelines and API/webhook integrations built with SQL, Deluge and REST APIs.',
    laurel: 'Data Migration',
  },
  {
    id: 'crm-support',
    title: '50+ CRM Issues Resolved',
    org: 'Elevolt Global',
    detail: 'Post-deployment support and training for 100+ users, resolved through root cause analysis.',
    laurel: 'Support & Training',
  },
  {
    id: 'unresolved-72',
    title: '72% Fewer Unresolved Issues',
    org: 'Urban Company',
    detail: 'Found gaps beyond automated system capabilities through structured data analysis.',
    laurel: 'Root Cause Analysis',
  },
  {
    id: 'csat-95',
    title: '95% Satisfaction',
    org: 'Amazon',
    detail: '35% fewer escalations and a 95% satisfaction rating across 40+ customers per shift.',
    laurel: 'Customer Excellence',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'DS', name: 'Data Science' },
  { issuer: 'ADCA', name: 'Advance Diploma in Computer Science' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'zoho',
    title: 'Zoho CRM',
    subtitle: 'Configuration • Automation • Data Migration',
    skills: [
      { name: 'Zoho CRM', mono: 'Zo', note: 'Primary' },
      { name: 'Configuration', mono: 'Cf' },
      { name: 'Automation', mono: 'Au' },
      { name: 'Data Migration', mono: 'Dm' },
      { name: 'Deluge', mono: 'De' },
    ],
  },
  {
    id: 'design',
    title: 'CRM Design',
    subtitle: 'Modules • Workflows • System Design',
    skills: [
      { name: 'Modules', mono: 'Md' },
      { name: 'Workflows', mono: 'Wf' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    subtitle: 'Connecting systems',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Webhooks', mono: 'Wh' },
      { name: 'Zoho APIs', mono: 'Za' },
    ],
  },
  {
    id: 'bi',
    title: 'BI & Reporting',
    subtitle: 'Dashboards for decisions',
    skills: [
      { name: 'Zoho Analytics', mono: 'An' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Looker Studio', mono: 'Ls' },
      { name: 'Dashboards', mono: 'Db' },
    ],
  },
  {
    id: 'data',
    title: 'Data & SQL',
    subtitle: 'Query • Transform • Analyze',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'ETL', mono: 'Et' },
      { name: 'Python', mono: 'Py' },
      { name: 'Excel', mono: 'Xl' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Building & shipping',
    skills: [
      { name: 'GitHub', mono: 'Gh' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TensorFlow', mono: 'Tf' },
    ],
  },
  {
    id: 'team',
    title: 'Team & Ops',
    subtitle: 'Leading people and process',
    skills: [
      { name: 'Bandwidth Planning', mono: 'Bp' },
      { name: 'Reporting', mono: 'Rp' },
      { name: 'Training', mono: 'Tr' },
      { name: 'SOPs', mono: 'So' },
    ],
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'Stakeholders & change',
    skills: [
      { name: 'Stakeholder Mgmt', mono: 'Sm' },
      { name: 'Change Mgmt', mono: 'Cm' },
      { name: 'RCA', mono: 'Rc' },
    ],
  },
  {
    id: 'interests',
    title: 'Now Building Toward',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'AI-Assisted Automation', mono: 'Ai' },
      { name: 'Smart Task Routing', mono: 'Sr' },
      { name: 'Predictive Reporting', mono: 'Pr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Zoho CRM': ['Elevolt Global — 100+ users', 'Zoho CRM Inventory System'],
  Configuration: ['Elevolt Global'],
  Automation: ['35% less manual work at Elevolt', 'Zoho CRM Inventory System'],
  'Data Migration': ['10,000+ records migrated', '100% data integrity'],
  Deluge: ['Elevolt Global', 'Zoho CRM Inventory System'],
  Modules: ['Elevolt Global', 'Zoho CRM Inventory System'],
  Workflows: ['Elevolt Global', 'Zoho CRM Inventory System'],
  'System Design': ['Elevolt Global — full CRM lifecycle'],
  'REST APIs': ['Elevolt Global'],
  Webhooks: ['Elevolt Global'],
  'Zoho APIs': ['Elevolt Global'],
  'Zoho Analytics': ['Elevolt Global executive dashboards', 'Zoho CRM Inventory System'],
  'Power BI': ['Vehicle Accident Analysis'],
  Dashboards: ['GemPundit team dashboards', 'Vehicle Accident Analysis'],
  SQL: ['Elevolt Global', 'Vehicle Accident Analysis', 'AirBnB EDA'],
  ETL: ['GemPundit data pipelines'],
  Python: ['AirBnB EDA', 'Heart Disease Prediction'],
  TensorFlow: ['Heart Disease Prediction'],
  'Bandwidth Planning': ['GemPundit'],
  Reporting: ['GemPundit'],
  Training: ['GemPundit fresher onboarding', 'Elevolt post-deployment training'],
  SOPs: ['GemPundit'],
  'Stakeholder Mgmt': ['GemPundit', 'Amazon'],
  'Change Mgmt': ['GemPundit'],
  RCA: ['Elevolt — 50+ CRM issues', 'Urban Company — 72% fewer unresolved issues'],
  'AI-Assisted Automation': ['GemPundit automation roadmap'],
  'Smart Task Routing': ['GemPundit'],
  'Predictive Reporting': ['GemPundit'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2014 – 2019',
    synopsis: 'Intermediate and a Bachelor’s in Arts in Darbhanga — where the story starts.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'Intermediate at Marwari College, Darbhanga.',
        tags: ['Intermediate', 'Marwari College'],
        runtime: '2014 – 2016',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Graduate',
        description: "Bachelor's in Arts at Lalit Narayan Mithila University, Darbhanga.",
        tags: ['BA', 'LNMU'],
        runtime: '2016 – 2019',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Customer First',
    period: '2021 – 2022',
    synopsis: 'Two customer-support roles that taught root cause analysis, SLAs and data-informed process improvement.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Trend Spotter',
        description: 'Customer Support Executive at Urban Company, IENERGIZER — led trend analysis for a 25% faster resolution time and 72% fewer unresolved issues.',
        tags: ['Urban Company', 'RCA', 'Data Analysis'],
        runtime: 'Aug 2021 – Jul 2022',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The SLA Keeper',
        description: 'Senior Customer Support Executive at Amazon — 35% fewer escalations and a 95% satisfaction rating across 40+ customers per shift.',
        tags: ['Amazon', 'SLA', 'KPIs'],
        runtime: 'Jul 2022 – Dec 2022',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter: Zoho CRM',
    period: '2024 – 2026',
    synopsis: 'Tech Developer at Elevolt Global, while pursuing an MCA at IGNOU.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Builder',
        description: 'Designed and deployed Zoho CRM solutions — custom modules, workflow automation and data migration — for 100+ users.',
        tags: ['Zoho CRM', 'Modules', 'Workflows'],
        runtime: 'Mar 2024 – Apr 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Automator',
        description: 'Cut operational overhead by 35% with Zoho workflow automation, and kept data at 100% integrity through SQL, Deluge, REST API and webhook integrations.',
        tags: ['Deluge', 'REST APIs', 'Webhooks', 'SQL'],
        runtime: '35% less manual work',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Student',
        description: 'Master of Computer Applications at Shyam Lal College, IGNOU, Delhi.',
        tags: ['MCA', 'IGNOU'],
        runtime: '2024 – 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Leading the Team',
    period: 'Apr 2026 – Present',
    synopsis: 'Team Manager – Data and Automation (L2) at GemPundit.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Manager',
        description: 'Owning bandwidth planning, task allocation and workload distribution — backed by dashboards for throughput, SLA adherence and bottlenecks.',
        tags: ['Bandwidth Planning', 'Dashboards', 'SLA'],
        runtime: 'Apr 2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Mentor',
        description: 'Structured onboarding and training for freshers, plus redesigned approval and escalation hierarchies.',
        tags: ['Training', 'Onboarding', 'Process Redesign'],
        runtime: 'GemPundit',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Architect',
        description: 'Large-scale data pipelines for bulk imports, validation and reconciliation — with minimal manual intervention.',
        tags: ['Data Pipelines', 'Reconciliation'],
        runtime: 'GemPundit',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The long-term vision: modernize manual workflows into AI-assisted automation.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Routing operational and CRM data into AI-assisted automation — anomaly detection, smart task routing and predictive reporting.',
        tags: ['AI-Assisted Automation', 'Anomaly Detection', 'Predictive Reporting'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary tool', title: 'Zoho CRM', detail: 'Configuration • Automation • Data Migration', palette: crimson },
  { label: 'Biggest win', title: '35%', detail: 'Manual processes reduced at Elevolt Global', palette: amber },
  { label: 'Current role', title: 'Team Manager', detail: 'Data & Automation (L2) • GemPundit', palette: ocean },
  { label: 'Data at scale', title: '10,000+', detail: 'Inventory records migrated to Zoho CRM', palette: violet },
  { label: 'Customer impact', title: '72%', detail: 'Fewer unresolved issues at Urban Company', palette: jade },
  { label: 'Accuracy', title: '99.8%', detail: 'Inventory accuracy in the Zoho CRM system', palette: amber },
  { label: 'Data storytelling', title: 'Power BI', detail: '5 high-risk locations behind 40% of serious accidents', palette: crimson },
  { label: 'The ML original', title: '89%', detail: 'Heart Disease Prediction accuracy', palette: violet },
  { label: 'Satisfaction', title: '95%', detail: 'Customer satisfaction at Amazon', palette: ocean },
  { label: 'Current focus', title: 'AI Automation', detail: 'Anomaly detection • smart routing • predictive reporting', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now',
    title: 'Team Manager',
    lines: ['Data and Automation (L2) · GemPundit', 'Apr 2026 – Present'],
    chips: ['Bandwidth Planning', 'SLA Tracking', 'Training'],
  },
  {
    kicker: 'Skills',
    title: 'Zoho first.',
    lines: ['Zoho CRM, Deluge, Zoho Analytics · SQL, ETL, Python', 'REST APIs, Webhooks · Power BI, Looker Studio'],
    chips: ['Zoho CRM', 'Deluge', 'SQL', 'Power BI', 'REST APIs', 'Python'],
  },
  {
    kicker: 'Experience',
    title: 'Four Roles',
    lines: ['GemPundit · Elevolt Global · Amazon · Urban Company', 'From customer support to CRM development to team leadership'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['Zoho CRM Inventory — 10,000+ records, 99.8% accuracy', 'Vehicle Accident Analysis — 5 high-risk locations', 'AirBnB EDA · Heart Disease Prediction — 89% accuracy'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['35% less manual work — Elevolt Global', '72% fewer unresolved issues — Urban Company', '95% satisfaction — Amazon'],
  },
  {
    kicker: 'Education',
    title: 'MCA · IGNOU',
    lines: ['Shyam Lal College, IGNOU — Delhi', '2024 – 2026'],
    chips: ['DS', 'ADCA'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['AI-assisted automation · anomaly detection · smart task routing · predictive reporting'],
  },
];

export type ProfileId = 'sudarshan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sudarshan',
    name: 'Sudarshan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Role & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
