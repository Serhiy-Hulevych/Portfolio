export const profile = {
  name: "Serhiy Hulevych",
  headline: "Full Stack Developer",
  location: "Zurich, Switzerland - Permit B",
  phone: "+41 78 260 55 98",
  email: "serhiy.jobs@hotmail.com",
  summary:
    "Software engineer with 3+ years building production web apps end-to-end in C#/.NET and Angular. Comfortable turning requirements into reliable APIs and UIs, collaborating across teams, and keeping code easy to evolve. I self-host a Docker lab to explore infrastructure, automation, and observability.",
  tags: ["C#/.NET", "Angular & Vue", "Azure & DevOps", "Domain-driven design"],
  links: {
    linkedin: "https://www.linkedin.com/in/serhiy-hulevych-847018172/",
    github: "https://github.com/Serhiy-Hulevych",
  },
};

export const highlights = [
  {
    label: "Experience",
    value: "3+ years",
    caption: "Shipping full stack products with small teams.",
  },
  {
    label: "Current",
    value: "Creasoft AG",
    caption: "Full Stack Developer - Oct 2024 to Present",
  },
  {
    label: "Toolbox",
    value: "C# / .NET / Angular / Vue",
    caption: "Plus Azure, Docker, EF Core, CI/CD.",
  },
];

export const skills = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "C# / .NET Core", icon: "devicon:csharp" },
      { name: "Entity Framework", icon: "logos:dotnet" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Vue", icon: "devicon:vuejs" },
      { name: "JavaScript / TypeScript", icon: "logos:typescript-icon" },
      { name: "HTML & CSS", icon: "devicon:html5" },
      { name: "SQL", icon: "devicon:mysql" },
      { name: "Python", icon: "logos:python" },
      { name: "Java", icon: "logos:java" },
    ],
  },
  {
    title: "Platforms & Tools",
    items: [
      { name: "Azure Cloud", icon: "logos:microsoft-azure" },
      { name: "Docker & Compose", icon: "logos:docker-icon" },
      { name: "Azure DevOps", icon: "logos:azure-devops" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Jira & Confluence", icon: "logos:atlassian" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "CI/CD pipelines", icon: "mdi:infinity" },
      { name: "OWASP practices", icon: "mdi:shield-check" },
    ],
  },
  {
    title: "Ways of Working",
    items: [
      { name: "Domain-driven design", icon: "mdi:domain" },
      { name: "Event-driven architecture", icon: "mdi:vector-triangle" },
      { name: "Agile & Scrum", icon: "mdi:chart-timeline-variant" },
      { name: "Code reviews & mentoring", icon: "mdi:account-group-outline" },
      { name: "Documentation with empathy", icon: "mdi:file-document-edit-outline" },
    ],
  },
];

export const experiences = [
  {
    company: "Creasoft AG",
    location: "Mauren, Liechtenstein",
    role: "Full Stack Developer",
    start: "Oct 2024",
    end: "Present",
    summary:
      "Designing domain-aligned services and frontends for industrial workflows, with a strong focus on traceability and smooth collaboration with business stakeholders.",
    highlights: [
      "Applied Domain-Driven Design to shape bounded contexts and keep code aligned with ubiquitous language.",
      "Implemented command- and event-driven patterns to decouple services and improve traceability.",
      "Collaborated closely with business analysts to turn requirements into clear acceptance criteria and edge cases.",
      "Built RESTful APIs with input validation, consistent error handling, versioning, and concise documentation.",
      "Created EF Core migrations and optimised slow queries after analysing execution plans.",
      "Developed and implemented scanner-ready business processes in C#/.NET and Angular.",
      "Performed code reviews that upheld coding standards, test coverage, and clear documentation.",
      "Worked within Agile Scrum ceremonies (planning, reviews, demos, retros) with actionable follow-ups.",
    ],
  },
  {
    company: "Teleperformance",
    location: "Lisbon, Portugal",
    role: "Full Stack Developer & Tech Lead",
    start: "Feb 2022",
    end: "Sep 2024",
    summary:
      "Led cross-functional delivery of automation products, spanning backend, frontend, and secure authentication flows.",
    highlights: [
      "Served as tech lead automating a manual process end-to-end, cutting errors and cycle time.",
      "Developed backend and frontend applications in C#/.NET, Vue, JavaScript, and HTML/CSS.",
      "Used Entity Framework with a code-first approach to manage databases and create migrations.",
      "Built RESTful APIs following SOLID principles within a microservices architecture.",
      "Implemented Azure Cloud Services and Azure Active Directory for scalable, reliable infrastructure.",
      "Integrated SAML, OpenID, OAuth, and JWT bearer tokens for secure authentication flows.",
      "Implemented CI/CD pipelines in Azure DevOps and managed deployments across DEV, UAT, and PROD.",
      "Collaborated with teams across the globe to manage dependencies and hit project deadlines.",
      "Prepared solution architectures, planned releases, and distributed tasks for timely delivery.",
      "Created multiple Chrome extensions that improved client productivity and efficiency.",
      "Owned the entire lifecycle from requirements gathering through development, testing, deployment, and go-live.",
      "Contributed to technical architectural decisions while ensuring thorough documentation and quality.",
      "Relied on Jira, Confluence, and Git to keep project tracking transparent.",
      "Delivered consistently in a fast-paced environment.",
      "Followed Agile Scrum methodology for ceremonies and cadence.",
    ],
  },
];

export const projects = [
  {
    name: "Home Server Lab",
    timeline: "Ongoing",
    description:
      "Self-hosted Docker playground for Angular apps, REST APIs, PostgreSQL, Python scrapers, n8n automations, and local LLM/MCP services.",
    outcomes: [
      "Orchestrated services with Docker Compose across isolated networks and persistent volumes.",
      "Used Traefik reverse proxy for routing, TLS, and observability experiments.",
      "Prototyped features quickly and practiced deployment, monitoring, and automation patterns.",
    ],
  },
];

export const education = {
  school: "NOVA School of Science and Technology",
  degree: "Master's in Computer Science and Engineering",
  timeline: "2016 - 2021",
  thesis:
    "Unsupervised document clustering and topic discovery, graded 17/20.",
  courses: [
    "Machine Learning",
    "Cloud Development",
    "Algorithms & Data Structures",
    "Network and Computer Systems Security",
    "Computational Game Theory",
    "Object-Oriented Programming",
  ],
};

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Portuguese", level: "Native" },
  { name: "Ukrainian", level: "Native" },
  { name: "German", level: "Basic (A2)" },
];

export const contactActions = [
  {
    label: "Email",
    value: "serhiy.jobs@hotmail.com",
    icon: "mdi:email-edit-outline",
    href: "mailto:serhiy.jobs@hotmail.com",
  },
  {
    label: "Phone",
    value: "+41 78 260 55 98",
    icon: "mdi:phone-outgoing-outline",
    href: "tel:+41782605598",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/serhiy-hulevych",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/serhiy-hulevych-847018172/",
  },
];
