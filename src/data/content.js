export const profile = {
  name: 'Alan Qiao',
  title: 'Software Engineer',
  tagline: 'CS + Statistics @ Duke University',
  email: 'alan.qiao@duke.edu',
  github: 'https://github.com/alanqiao6',
  linkedin: 'https://www.linkedin.com/in/alanqiao6',
  bio: "I'm a junior at Duke University studying Computer Science, Statistics, and Math. I like building full-stack apps and ML systems that turn messy data into something people can actually use — from engagement dashboards to rendering engines. Outside of code, you'll find me on the ice with Duke Club Hockey or sketching in charcoal.", // draft bio — edit freely
}

export const experience = [
  {
    company: 'Appian',
    role: 'Software Engineer Intern',
    location: 'McLean, VA',
    period: 'Jun – Aug 2026',
    bullets: [
      'Co-authored the engineering design doc and implemented core Go and Java infrastructure for a new foreign data source in Appian Data Fabric, including DB registration, PAT auth, connection pooling, and JDBC driver-detection edge cases',
      "Fixed critical bugs for Snowflake's integration in Appian Data Fabric causing query failures and page crashes, resolving M:1 join errors and composite-key rendering issues, with unit and integration test coverage",
      'Resolved a Map Record Fields bug where primary/unique keys failed to auto-populate for Snowflake and view-backed record types, blocking record type setup',
      'Diagnosed a memory circuit breaker failure in Record Type Designer on record types with 60+ actions, scoping tradeoffs between backend memory limits and UI pagination fixes',
    ],
  },
  {
    company: 'UPS',
    role: 'Software Engineer Intern',
    location: 'Atlanta, GA',
    period: 'Jun – Aug 2025',
    bullets: [
      'Migrated QA automation for healthcare logistics systems from UiPath to Power Automate, reducing script development time 50% and costs 96%',
      'Prototyped an ML fraud detection system for the UPS mobile app using XGBoost, React, Flask, and GCP, flagging geographic anomalies, abnormal shipping patterns, and suspicious API activity',
    ],
  },
  {
    company: 'Duke Marine Robotics & Remote Sensing Lab',
    role: 'Software Developer',
    location: 'Durham, NC',
    period: 'Jan – May 2025',
    bullets: [
      'Programmed a full-stack web application (React, Django, PostgreSQL) to help marine biologists measure whale dimensions and condition from aerial images, integrating 3 photogrammetric tools',
      'Collaborated with research institutions to ensure scalable deployment; implemented CI/CD workflows, authored user stories, and conducted user interviews to align design with fieldwork needs',
    ],
  },
  {
    company: 'Ignite',
    role: 'Data Science Research Analyst',
    location: 'Durham, NC',
    period: 'May 2024 – May 2025',
    bullets: [
      'Developed a MySQL database and full-stack data analysis tool with a dynamic tag system and paired t-test visualizations to analyze data from 350+ students, reducing manual processing by 80% and report time by 99%',
      'Secured a $180k grant and partnered with the Durham Museum of Life and Sciences, eliminating student participation costs',
    ],
  },
]

export const projects = [
  {
    name: '2D Graphics & Shader Engine',
    period: 'Jan – May 2026',
    stack: ['C++'],
    description:
      'CPU-based 2D rendering engine implementing scanline polygon rasterization with an active-edge table, an affine matrix transformation stack, and a composable shader pipeline (gradient, bitmap, triangle shaders) with all 16 Porter-Duff blend modes.',
    href: null,
  },
  {
    name: 'Clasi',
    period: 'Jan – May 2025',
    stack: ['Python', 'Flask', 'SQL', 'HTML/CSS'],
    description:
      'Web app to simplify Duke course planning — user authentication, student reviews, curriculum/course filters, a schedule builder, and RateMyProfessor integration via custom scraping. Streamlined an ETL pipeline loading ~9,700 courses into a normalized SQLite schema.',
    href: 'https://github.com/kanthipm/clasi',
  },
  {
    name: 'Whale Photogrammetry Tool',
    period: 'Jan – May 2025',
    stack: ['React', 'Django', 'PostgreSQL', 'Python', 'R'],
    description:
      'Full-stack application built with the Duke Marine Robotics & Remote Sensing Lab to help marine biologists measure whale dimensions and condition from aerial imagery, integrating three photogrammetric tools.',
    href: null,
  },
  {
    name: 'ZoomBuddy',
    period: 'HackDuke 2025',
    stack: ['Python', 'Flask', 'JavaScript', 'HTML', 'SQL'],
    description:
      'Flask web app analyzing student engagement in Zoom sessions with interactive dashboards and dynamic filtering. Trained a multi-label classifier (MLkNN, TF-IDF, Sentence-BERT) to categorize interactions and quantify alignment with curriculum topics.',
    href: 'https://github.com/alanqiao6/zoomBuddy',
  },
  {
    name: 'Perfecting the March Madness Bracket',
    period: '2024',
    stack: ['Python', 'Pandas', 'scikit-learn', 'BeautifulSoup'],
    description:
      'Lasso regression models predicting NCAA tournament outcomes (2014–2024) at 75% accuracy. Scraped and cleaned multi-source basketball datasets, engineering features like underdog interaction terms.',
    href: 'https://github.com/JuliaHealeyParera/cs216',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'C++', 'Go', 'C', 'SQL', 'JavaScript', 'R', 'HTML/CSS'],
  'Frameworks & Tools': [
    'React', 'Flask', 'Django', 'PostgreSQL', 'MySQL', 'Git', 'GCP', 'Spark', 'Pandas', 'NumPy', 'scikit-learn',
  ],
}
