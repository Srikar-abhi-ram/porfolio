/**
 * Portfolio copy — update resume URL and social links as needed.
 */
export const PROFILE = {
  New_name: "Sai Balaji Srikar Yellepeddi",
  name: " Srikar",
  role: "Generative AI Engineer",
  tagline: "Building production-grade AI systems with real impact.",
  valueLine:
    "Built RAG-based systems reducing LLM API costs by 75% and improving latency from minutes to seconds.",
  location: "Hyderabad, Telangana, India",
  /** Served from `public/` — file name must match on disk */
  resumeFileName: "sai balaji srikar_resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
} as const;

export const HERO_CTA = {
  primary: "View Projects",
  primaryHref: "#projects",
  secondary: "Contact Me",
  secondaryHref: "#contact",
} as const;

export const ABOUT = {
  intro: [
    "Generative AI Engineer with 4+ years of experience building scalable AI-powered applications using Python, FastAPI, and Next.js.",
    "Currently working on AI-first initiatives at Visa (Cybersource), developing production-grade RAG systems and integrating LLMs into real-world workflows.",
  ],
  specializeTitle: "I specialize in:",
  specialize: [
    "Retrieval-Augmented Generation (RAG)",
    "LLM integrations and prompt workflows",
    "Backend systems using FastAPI",
    "Full-stack applications using Next.js",
  ],
  focus:
    "Focus on building efficient, scalable AI systems that solve real business problems.",
} as const;

export type Project = {
  id: string;
  title: string;
  problem: string;
  solution: string[];
  tech: string[];
  /** Tight, scan-friendly metrics (percentages, times). */
  metrics?: { value: string; label: string }[];
  /** Qualitative production outcomes. */
  outcomes: string[];
  /** Optional: show a pill on cards + modal (e.g. research). */
  badge?: string;
};

/**
 * Real production-style projects: problem → system design → stack → measured impact.
 */
export const PROJECTS: Project[] = [
  {
    id: "ta-rag",
    title: "AI Talent Acquisition Screening System",
    problem:
      "Recruiters needed an efficient way to match candidates with job openings. The manual process was slow, inconsistent, and not scalable.",
    solution: [
      "Built a production-grade RAG pipeline: parse resumes, extract meaningful text, embed candidates, and store job descriptions as vectors. Semantic search with cosine similarity retrieves relevant roles before any heavy generation.",
      "Integrated Vertex AI (Gemini) for matching skills, surfacing gaps, and generating dynamic questionnaires for live candidate evaluation.",
      "Shifted architecture from LLM-heavy batch calls to a retrieval-first design—embeddings and vector search for shortlisting; LLM only where decisions require it.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Vertex AI (Gemini)",
      "Next.js",
      "Docker",
      "GCP",
    ],
    metrics: [
      { value: "75%", label: "LLM API cost reduction" },
      { value: "~20s", label: "end-to-end response (was 1–2 min)" },
      { value: "1–2s", label: "time to first streamed token" },
    ],
    outcomes: [
      "Stronger scalability and production readiness for TA workloads.",
    ],
  },
  {
    id: "fintech-insights",
    title: "Fintech AI Insights Platform",
    problem:
      "Financial data for clients was scattered across systems, making it difficult to track, analyze, and generate actionable insights.",
    solution: [
      "Delivered a full-stack platform that centralizes client financial data and layers GenAI for intelligent insights and recommendations.",
      "LangChain pipelines to process data, ground outputs in context, and suggest next actions for financial decisions.",
      "Backend APIs for ingestion, orchestration, and safe LLM interaction with guardrails for production use.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    outcomes: [
      "Improved visibility of financial data for end users.",
      "Enabled automated, contextual insights and recommendations.",
      "Cut manual analysis effort across client-facing teams.",
    ],
  },
  {
    id: "jira-change",
    title: "AI-driven Jira Change Request Automation",
    problem:
      "Developers had to manually fill detailed change request forms in Jira, leading to inconsistencies and slow release workflows.",
    solution: [
      "Built a system that ingests Jira tickets and release-management signals to pre-fill and classify change requests.",
      "LLM-assisted flows to infer change type, required fields, and copy aligned with “golden rules” for your org.",
      "Integrated Jira APIs so generated drafts land where reviewers expect them—less context switching, fewer round trips.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LLM APIs",
      "LangChain",
      "Jira APIs",
    ],
    outcomes: [
      "Less manual toil for developers on change paperwork.",
      "More consistent change submissions and audit-friendly inputs.",
      "Smoother handoff between dev and release management.",
    ],
  },
  {
    id: "msme",
    title: "MSME Fintech Platform",
    problem:
      "MSMEs faced friction accessing financial services and finding the right partners for their needs.",
    solution: [
      "Shipped a platform that connects small businesses with finance partners and streamlines how requirements are captured and processed.",
      "Scalable Java/Spring services for core workflows; React UIs for onboarding and self-service with clear status and feedback.",
      "Data model and APIs tuned for higher throughput of requests without sacrificing clarity for non-technical users.",
    ],
    tech: ["React.js", "Java (Spring Boot)", "MySQL"],
    outcomes: [
      "Simpler access to financial products for MSMEs.",
      "Better UX and faster turnaround on requests.",
      "More reliable partner–borrower matching at scale.",
    ],
  },
  {
    id: "paper-mineral-cnn-rf",
    badge: "Publication",
    title:
      "Comparative Analysis of Mineral Identification: CNN and Random Forest for Image Classification",
    problem:
      "Mineral image classification is needed for automated geological workflows, but the tradeoff between modern CNNs and classical ensemble methods is not always clear for domain-specific image sets.",
    solution: [
      "Implemented and compared convolutional networks against Random Forest on mineral image data—covering preprocessing, feature use (where applicable), and training regimes.",
      "Evaluated model performance on mineral datasets and reported how each approach performs on classification accuracy, robustness, and practical training cost.",
      "Used OpenCV for image prep and standard vision pipelines, with Keras and TensorFlow for model building, training, and experiment tracking.",
    ],
    tech: ["Python", "OpenCV", "Keras", "TensorFlow", "CNN", "Random Forest", "image classification"],
    outcomes: [
      "Published work comparing CNN vs Random Forest for mineral identification under the same dataset conditions.",
      "Documented how classical vs deep models behave on the chosen mineral image benchmarks.",
    ],
  },
];

export const SKILLS = {
  generativeAI: {
    label: "Generative AI",
    items: [
      "RAG",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "LangChain",
      "Vertex AI (Gemini)",
    ],
  },
  backend: {
    label: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Microservices",
      "REST APIs",
      "JWT",
      "OAuth2",
    ],
  },
  frontend: {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  cloud: {
    label: "Cloud & DevOps",
    items: ["GCP", "AWS", "Docker", "Kubernetes"],
  },
  tools: {
    label: "Tools",
    items: ["Postman", "GitHub", "CI/CD"],
  },
} as const;

export type Job = {
  id: string;
  org: string;
  line: string;
  /** Short label when no `brandLogo` image is set */
  logo: string;
  /** Optional full-width brand mark (e.g. company logo SVG/PNG) */
  brandLogo?: string;
  range: string;
  bullets: string[];
  media: { src: string; alt: string }[];
  skills: string[];
};

export const JOBS: Job[] = [
  {
    id: "acn",
    org: "Accenture",
    line: "Packaged Application Developer | Oct 2022 – Oct 2023",
    logo: "A",
    brandLogo: "/assets/accenture-logo.svg",
    range: "Oct 2022 – Oct 2023",
    bullets: [
      "Developed React-based UI components",
      "Improved accessibility and user experience",
      "Worked on backend integrations using FastAPI",
    ],
    media: [],
    skills: ["React", "FastAPI", "REST", "a11y", "UI"],
  },
  {
    id: "pf",
    org: "Profintech",
    line: "GenAI Full Stack Developer | Feb 2024 – Sep 2025",
    logo: "PF",
    brandLogo: "/assets/pftlogo.jpeg",
    range: "Feb 2024 – Sep 2025",
    bullets: [
      "Built scalable web apps using FastAPI and React",
      "Integrated LLM APIs into backend services",
      "Deployed applications using Docker on GCP/AWS",
      "Mentored junior developers and improved code quality",
    ],
    media: [
      { src: "/assets/pft1.jpeg", alt: "Profintech" },
      { src: "/assets/pft2.jpeg", alt: "Profintech" },
    ],
    skills: ["FastAPI", "React", "LLMs", "Docker", "GCP", "AWS"],
  },
  {
    id: "gd",
    org: "Grid Dynamics (Visa - Cybersource)",
    line: "GenAI Developer | Oct 2025 – Present",
    logo: "GD",
    brandLogo: "/assets/gdlogo.jpeg",
    range: "Oct 2025 – Present",
    bullets: [
      "Built AI-powered RAG system for talent screening",
      "Designed embedding pipelines and semantic search",
      "Integrated LLM workflows using Vertex AI",
      "Solved major cost and latency issues by redesigning architecture",
      "Achieved 75% cost reduction and major performance improvements",
    ],
    media: [
      { src: "/assets/gd1.jpeg", alt: "Grid Dynamics" },
      { src: "/assets/gd2.jpeg", alt: "Grid Dynamics" },
      { src: "/assets/gd3.jpeg", alt: "Grid Dynamics" },
      { src: "/assets/gd4.jpeg", alt: "Grid Dynamics" },
    ],
    skills: [
      "RAG",
      "Vertex AI",
      "FastAPI",
      "Next.js",
      "GCP",
      "LangChain",
    ],
  },
  {
    id: "aps",
    org: "apsolut Group",
    line: "Freelance Developer | May 2021 – Oct 2022",
    logo: "a°",
    brandLogo: "/assets/apsolut_logo.jpeg",
    range: "May 2021 – Oct 2022",
    bullets: [
      "Developed a resource tracking tool to manage employee data for the client with a small team from college and peers.",
      "Worked hybrid from Amaravati; coordinated delivery and iteration with non-technical stakeholders.",
      "Web stack: JavaScript, HTML/CSS, and RESTful integrations to keep data in sync across views.",
    ],
    media: [
      { src: "/assets/aps1.jpeg", alt: "apsolut Group" },
      { src: "/assets/aps2.jpeg", alt: "apsolut Group" },
    ],
    skills: ["JavaScript", "HTML", "CSS", "REST", "Web"],
  },
];

export const CASE_STUDY = {
  title:
    "Case Study: Optimizing Cost and Latency in a Production RAG System",
  /** Quick-scan metrics (UI strip) */
  highlights: [
    { value: "~75%", label: "API cost reduction" },
    { value: "~20 s", label: "end-to-end (was 1–2 min)" },
    { value: "1–2 s", label: "to first streamed token" },
    { value: "RAG", label: "retrieval-first architecture" },
  ],
  overview: [
    "As part of Visa’s AI-first initiative, I contributed to building an AI-powered Talent Acquisition screening platform designed to streamline candidate–job matching. The system leverages Retrieval-Augmented Generation (RAG) to combine semantic search with LLM-based evaluation.",
    "The platform enables recruiters to upload candidate resumes, match them against relevant job openings, and generate skill insights and evaluation questionnaires in real time.",
  ],
  problem: {
    lead:
      "The initial implementation relied heavily on LLM calls for candidate–job evaluation.",
    bullets: [
      "For each request, the system processed ~100 job descriptions.",
      "Each job was sent along with the resume as a separate LLM call.",
      "This resulted in high API costs, significant latency (1–2 minutes per request), and poor scalability for real-world usage.",
    ],
    closing: "This approach was not viable for production deployment.",
  },
  systemContext: [
    "Resumes were parsed and converted into structured text.",
    "Job descriptions were pre-processed and stored.",
    "Matching was initially performed using repeated LLM calls.",
    "LLM (Vertex AI – Gemini) was used for skill matching, gap analysis, and questionnaire generation.",
  ],
  keyChallenges: [
    {
      title: "1. Excessive LLM usage",
      body: "Linear scaling of LLM calls with the number of job descriptions — direct impact on cost and performance.",
    },
    {
      title: "2. Latency bottlenecks",
      body: "Sequential and repeated API calls led to high response times.",
    },
    {
      title: "3. Context limitations (“lost in the middle”)",
      body: "Batching multiple job descriptions into a single prompt led to large context and degraded LLM output quality.",
    },
  ],
  approachIntro:
    "I redesigned the system by decoupling retrieval from generation, shifting to a more efficient RAG-based architecture.",
  approachSteps: [
    {
      title: "Step 1: Embedding-based retrieval",
      body: "Converted all job descriptions into vector embeddings (keyword-focused). At runtime, resume text is embedded; semantic search (cosine similarity) retrieves top matching roles (≥50% similarity).",
    },
    {
      title: "Step 2: Intelligent filtering",
      body: "Instead of evaluating all jobs, only relevant roles are shortlisted. Recruiters can select specific roles for deeper analysis.",
    },
    {
      title: "Step 3: Controlled LLM invocation",
      body: "LLM calls are triggered only after selection. Inputs include resume text and selected job descriptions.",
    },
    {
      title: "Step 4: LLM-powered evaluation",
      body: "Using Vertex AI (Gemini), the system generates matching skills, missing skills, and contextual questionnaires for real-time assessment.",
    },
    {
      title: "Step 5: Streaming responses",
      body: "Implemented streaming APIs to deliver partial responses early — significantly improved perceived performance.",
    },
  ],
  results: [
    {
      heading: "Cost optimization",
      items: [
        "Reduced LLM API usage significantly.",
        "Achieved ~75% reduction in API costs.",
      ],
    },
    {
      heading: "Performance improvement",
      items: [
        "Response time reduced from ~1–2 minutes to ~20 seconds.",
        "First response delivered within 1–2 seconds via streaming.",
      ],
    },
    {
      heading: "Scalability",
      items: [
        "System shifted from LLM-heavy to retrieval-first architecture.",
        "Enabled handling larger job datasets efficiently.",
      ],
    },
    {
      heading: "Output quality",
      items: [
        "Eliminated “lost in the middle” for the new flow.",
        "Improved relevance and consistency of LLM outputs.",
      ],
    },
  ],
  keyLearnings: [
    "LLMs should be used selectively, not as the primary computation layer.",
    "Embeddings + semantic search are critical for scalable GenAI systems.",
    "Large context prompts can degrade output quality if not carefully managed.",
    "System design decisions directly impact cost in GenAI applications.",
  ],
  finalOutcome:
    "The redesigned architecture transformed the system into a production-ready, cost-efficient, and scalable AI solution, aligning with enterprise requirements and significantly improving both performance and user experience.",
} as const;

export const CONTACT = {
  email: "ysrikarabhiram@gmail.com",
  headline: "Let’s work together",
  sub: "For roles in Gen AI, RAG, and full-stack delivery.",
} as const;
