export const PROFILE = {
  brandName: 'AA.',
  fullName: 'Akhlaque Ansari',
  role: 'Aspiring Software Engineer',
  location: 'Aurangabad, Bihar, India',
  email: 'shameer.alam2512@gmail.com',
  phone: '+91 7462846877',
  availability: 'Open to Software Engineering Roles',
  headline: 'Building meaningful digital experiences through code and creativity.',
  summary:
    'Aspiring Software Engineer passionate about frontend development, problem-solving and building practical applications.',
  aboutParagraphs: [
    'I am a B.Sc. Information Technology graduate with a strong interest in software development, frontend engineering, and modern web technologies. Based in Aurangabad, Bihar, India, I enjoy learning new technologies, solving programming problems, and building practical applications.',
    'From crafting responsive, accessible interfaces with HTML5, CSS3, JavaScript, and React.js to diagnosing real-world hardware, OS, and network issues, I bring a methodical, detail-oriented approach to software engineering and technical problem-solving.',
  ],
  aboutHighlights: [
    {
      label: 'Current Base',
      value: 'Aurangabad, Bihar, India',
    },
    {
      label: 'Academic Degree',
      value: 'B.Sc. IT (First Class)',
    },
    {
      label: 'Core Focus',
      value: 'Frontend & Web Development',
    },
  ],
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Akhlaque_Ansari_Resume.pdf',
  socials: {
    github: 'https://github.com/akhl1234',
    linkedin: 'https://www.linkedin.com/in/akhlaque-ansari-0184a5227',
  },
};

export const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Competencies', href: '#competencies', id: 'competencies' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const CORE_COMPETENCIES = [
  {
    id: 'languages',
    category: 'Programming Languages',
    description:
      'Core logic, structured problem-solving, algorithmic thinking, and modern scripting.',
    skills: ['C++', 'JavaScript (ES6+)', 'Python'],
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    description:
      'Interactive, accessible, and responsive user interfaces built with modern web standards.',
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id: 'database',
    category: 'Database & APIs',
    description:
      'Relational data modeling, SQL querying, and integrating RESTful web APIs into frontend apps.',
    skills: ['MySQL', 'REST APIs', 'JSON'],
  },
  {
    id: 'tools',
    category: 'Tools, Systems & Networking',
    description:
      'Version control workflows alongside hands-on OS troubleshooting, diagnostics, and networking fundamentals.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Windows Troubleshooting',
      'Hardware Diagnostics',
      'TCP/IP',
      'DNS & DHCP',
      'LAN/WAN',
    ],
  },
];

export const PROJECT_CATEGORIES = ['All', 'Analytics & APIs', 'Design & Web'];

export const PROJECTS = [
  {
    id: 'leetmetrics-app',
    title: 'LeetMetrics Web Application',
    year: '2025',
    category: 'Analytics & APIs',
    summary:
      'A React-based dashboard that tracks coding progress by integrating APIs and displaying user statistics, problem-solving analytics, and activity metrics.',
    highlights: [
      'Interactive stat visualizations for tracking problem-solving progress.',
      'Real-time API data fetching with structured state handling.',
      'Responsive dashboard layout built for desktop and mobile screens.',
    ],
    techStack: ['React.js', 'REST APIs', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/akhl1234',
    liveDemoUrl: null,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    year: '2026',
    category: 'Design & Web',
    summary:
      'A modern, responsive personal portfolio website showcasing skills, projects, and professional experience with a dark-mode aesthetic and smooth UX.',
    highlights: [
      'Mobile-first responsive layout across desktop, tablet, and phone viewports.',
      'Semantic HTML5 structure with accessible keyboard and focus navigation.',
      'Sticky glassmorphic navigation with smooth section scrolling.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/akhl1234',
    liveDemoUrl: '#top',
  },
];

export const TIMELINE_ITEMS = [
  {
    id: 'exp-ntpc',
    type: 'Work Experience',
    role: 'Desktop Support Engineer Intern',
    organization: 'NTPC Limited · India · Internship / On-site',
    period: 'JANUARY 2026 — PRESENT',
    isCurrent: true,
    description:
      'Supporting daily IT operations, hardware diagnostics, OS maintenance, and end-user technical resolution on site.',
    points: [
      'Troubleshoot hardware, software, and Windows OS issues.',
      'Diagnose network connectivity problems.',
      'Install, configure, and update software.',
      'Support end users and document technical issues.',
      'Assist with daily IT operations.',
    ],
  },
  {
    id: 'exp-freelance',
    type: 'Work Experience',
    role: 'Freelance Web Developer',
    organization: 'Self-employed · India · Contract / Remote',
    period: '2024 — PRESENT',
    isCurrent: true,
    description:
      'Designing, building, and maintaining responsive web applications with clean version control practices.',
    points: [
      'Work on web application development.',
      'Resolve software and browser-related issues.',
      'Deploy and maintain web applications.',
      'Use Git and GitHub for version control.',
    ],
  },
  {
    id: 'edu-bsc',
    type: 'Education',
    role: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    organization: 'Sachidanand Sinha College, Magadh University · First Class',
    period: '2023 — 2026',
    isCurrent: false,
    description:
      'Focused on core computer science subjects, programming methodologies, database management systems, and web technologies.',
    points: [],
  },
  {
    id: 'edu-inter',
    type: 'Education',
    role: 'Intermediate – Science',
    organization: 'Bihar School Examination Board (BSEB) · First Division',
    period: '2019 — 2021',
    isCurrent: false,
    description:
      'Physics, Chemistry, and Mathematics foundation providing analytical rigor and scientific problem-solving methods.',
    points: [],
  },
];

export const CERTIFICATIONS = [
  {
    id: 'cert-fcc',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    description:
      '400+ hours of coursework and practical projects covering Semantic HTML, Advanced CSS, Flexbox, CSS Grid, and responsive UI principles.',
  },
  {
    id: 'cert-sigma',
    title: 'Sigma 4.0 Web Development + DSA',
    issuer: 'Apna College',
    description:
      'Comprehensive Full Stack Web Development and Data Structures & Algorithms program focused on algorithmic logic and end-to-end coding.',
  },
  {
    id: 'cert-python',
    title: 'Programming in Python',
    issuer: 'Technical Skill Credential',
    description:
      'Python programming fundamentals, algorithmic problem-solving logic, structured data handling, and function modularization.',
  },
];
