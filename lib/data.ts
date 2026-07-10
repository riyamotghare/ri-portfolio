// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// your site — no need to touch any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Riya Motghare",
  role: "Data Science & Machine Learning Enthusiast",
  tagline:
    "Final year Data Science student building end-to-end ML systems — from CNN-LSTM video surveillance pipelines to transfer learning classifiers and analytics dashboards — with a focus on edge AI and real deployment.",
  location: "Mumbai, India",
  email: "riyamotghare27@gmail.com",
  phone: "+91 89288 27763",
  linkedin: "https://linkedin.com/in/riya-motghare-053b4a301",
  github: "https://github.com/riyamotghare",
  resumeUrl: "/resume/Riya_Motghare_Resume.pdf",
  avatar: "/images/profile.jpg",
  availability: "Open to Data Science, ML/AI & Computer Vision roles — Final Year, Batch of 2027",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a final year B.Tech Data Science student at Usha Mittal Institute of Technology, Mumbai (Class of 2027), looking for an ML / Data Science internship where I can apply deep learning expertise in real-world settings.",
    "My work spans the full ML lifecycle — from CNN-LSTM video surveillance pipelines and transfer learning classifiers (MobileNetV2, YOLOv8), to analytics dashboards in Power BI, to SQL-driven fault detection systems. I like projects that go from a raw dataset to something that actually works end-to-end, with a particular interest in edge AI and physical security applications.",
    "I also completed hands-on training at GNCIPL (Global Next Consulting India Pvt. Ltd.), delivering end-to-end analytics projects and presenting findings to senior mentors — sharpening both my technical depth and my ability to communicate results to non-technical stakeholders.",
  ],
  highlights: [
    { label: "Focus Areas", value: "ML/AI, Computer Vision, Edge AI" },
    { label: "Status", value: "Final Year Data Science Student" },
    { label: "Graduating", value: "2027" },
    { label: "Based In", value: "Mumbai, India" },
  ],
};

export const skills = [
  {
    category: "AI / ML",
    items: [
      "Deep Learning (CNN, LSTM, TimeDistributed)",
      "Computer Vision",
      "Transfer Learning (MobileNetV2, YOLOv8)",
      "Video Frame Processing",
      "Model Debugging & Error Analysis",
      "Prompt Engineering",
    ],
  },
  {
    category: "Libraries",
    items: ["TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Analytics",
    items: ["Power BI", "Power Query", "DAX", "Tableau", "SQL", "Microsoft Excel"],
  },
  {
    category: "Programming",
    items: ["Python", "PostgreSQL", "SQL", "Basic R", "HTML/CSS"],
  },
  {
    category: "Tools",
    items: ["Jupyter Notebook", "Google Colab", "VS Code", "GitHub", "Kaggle", "Figma"],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcome: string;
  githubUrl?: string;
  fileUrl?: string;
  fileLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sentinel-eye",
    title: "Sentinel Eye — AI Violence Detection System",
    description:
      "A CNN + LSTM based video surveillance pipeline with real-time YOLOv8 object detection and automated alerting.",
    problem:
      "Manual monitoring of surveillance footage doesn't scale, and violent incidents are often caught only after the fact.",
    approach: [
      "Built a CNN+LSTM pipeline using TimeDistributed Conv2D (32 filters) + LSTM (64 units), extracting 16 frames per video at 64×64 resolution",
      "Integrated YOLOv8n for real-time object detection on live camera feeds",
      "Built an automated alert system and a CSV-based detection logging pipeline",
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "LSTM", "YOLOv8"],
    outcome: "Achieved 100% validation accuracy, with a working live camera-feed module and automated alerting.",
    githubUrl: "https://github.com/riyamotghare/Sentinel-eye",
    featured: true,
  },
  {
    slug: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    description:
      "An interactive Power BI dashboard analyzing employee attrition, workforce demographics, and performance metrics.",
    problem:
      "HR teams need a clear, interactive view of attrition drivers and workforce trends to make informed retention decisions.",
    approach: [
      "Cleaned and transformed raw HR data using Power Query",
      "Built DAX measures for KPI calculations (attrition rate, headcount trends, performance metrics)",
      "Designed interactive Power BI visuals for demographics, attrition, and performance analysis",
    ],
    stack: ["Power BI", "Power Query", "DAX", "Excel"],
    outcome: "Delivered a fully interactive dashboard surfacing key attrition and workforce insights at a glance.",
    githubUrl: "https://github.com/riyamotghare/hr-analytical-dashboard",
    fileUrl: "/files/hr_analytics_dashboard.pbix",
    fileLabel: "Download .pbix",
    featured: true,
  },
  {
    slug: "ddos-attack-analysis",
    title: "DDoS Attack Volume Analysis",
    description:
      "Large-scale EDA on network-flow data from CIC-IDS2018, covering attack-volume trends and protocol breakdowns.",
    problem: "Understanding attack volume and traffic signatures to inform intrusion detection strategy.",
    approach: [
      "Analyzed 1M+ network-flow records from the CIC-IDS2018 dataset",
      "Delivered EDA covering attack-volume trends, protocol breakdowns, and outlier detection across multiple DDoS vectors",
      "Built a modular OOP Python script with automated chart exports",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    outcome: "Identified traffic-volume signatures across multiple attack vectors with a fully automated reporting script.",
    githubUrl: "https://github.com/riyamotghare/DDoS-Attack-Volume-Analysis",
    featured: true,
  },
  {
    slug: "equipment-monitoring-sql",
    title: "Equipment Monitoring & Fault Detection Dashboard",
    description:
      "A SQL-driven dashboard project for monitoring equipment health and flagging anomalies.",
    problem:
      "Maintenance teams need a lightweight, query-based way to spot equipment anomalies without a full BI stack.",
    approach: [
      "Designing a MySQL database to store equipment logs, sensor readings, and maintenance records",
      "Building SQL queries and reporting views to identify equipment faults",
      "Visualizing maintenance trends through structured views",
    ],
    stack: ["MySQL", "SQL", "MySQL Workbench"],
    outcome: "Building a fully query-driven fault detection and maintenance-trend reporting layer.",
    githubUrl: "https://github.com/riyamotghare",
  },
  {
    slug: "data-breaches-analysis",
    title: "Data Breaches Analysis by Industry",
    description:
      "EDA on a breach dataset spanning 2004–2022, identifying high-exposure sectors and breach-type trends.",
    problem: "Making sense of historical data breach records to surface sector-level trends.",
    approach: [
      "Ran EDA on a 352-row breach dataset (2004–2022)",
      "Identified high-exposure sectors and breach-type trends",
      "Built a zero-dependency OOP architecture with Matplotlib-only visualizations",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "OOP"],
    outcome: "One of my first structured end-to-end analysis projects — the foundation for later ML work.",
    githubUrl: "https://github.com/riyamotghare/Blockchain-Anti-Phishing-System",
  },
  {
    slug: "blockchain-anti-phishing",
    title: "Blockchain Anti-Phishing System",
    description:
      "A decentralized URL verification system storing phishing URLs on a blockchain ledger for tamper-proof threat detection.",
    problem:
      "Centralized phishing-URL blocklists can be tampered with or fall out of date; a decentralized approach adds integrity guarantees.",
    approach: [
      "Designed a blockchain ledger to store verified phishing URLs immutably",
      "Backed the system with Firebase for real-time lookups and updates",
      "Built URL analysis logic to flag suspicious links against the ledger",
    ],
    stack: ["Python", "Blockchain", "Firebase", "URL Analysis"],
    outcome: "Built a working decentralized, tamper-proof phishing detection system.",
    githubUrl:
      "https://github.com/riyamotghare/Blockchain-Anti-Phishing-System/blob/main/Blockchain_Anti_Phishing_System.ipynb",
  },
];

export const experience = [
  {
    org: "GNCIPL (Global Next Consulting India Pvt. Ltd.)",
    role: "Data Science Trainee",
    period: "2025",
    points: [
      "Delivered DDoS Attack Analysis and Data Breaches Analysis end-to-end: data ingestion, EDA, modular OOP scripts, Matplotlib visualizations, documented GitHub repositories",
      "Presented analytical findings to senior mentors; practiced data storytelling and communication of technical results to non-technical stakeholders",
    ],
  },
  {
    org: "Usha Mittal Institute of Technology, Mumbai",
    role: "Major Project — Sentinel Eye (AI Violence Detection)",
    period: "2025 — 2026",
    points: [
      "Led model architecture design for a CNN+LSTM violence detection system with integrated YOLOv8 object detection",
      "Built a live camera-feed module, automated alert system, and CSV-based detection logging pipeline",
      "Presented findings via a fully designed technical presentation deck",
    ],
  },
];

export const education = [
  {
    institution: "Usha Mittal Institute of Technology, Mumbai",
    degree: "B.Tech in Data Science",
    period: "2023 — 2027 (Expected)",
    details: "Final year student. Relevant coursework: Machine Learning, Computer Vision, Database Management, Statistics, Python Programming.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  file?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM via Coursera",
    date: "March 2025",
    image: "/certificates/ibm-eda-coursera.png",
    verifyUrl: "https://coursera.org/verify/SWOFG5XNSTXY",
  },
  {
    title: "Summer SkillUp — Online Workshop",
    issuer: "GeeksforGeeks",
    date: "2026",
    image: "/certificates/gfg-summer-skillup.png",
  },
  {
    title: "Live Workshop: Build Your Own AI-Powered Chatbot in 60 Mins",
    issuer: "Simplilearn",
    date: "November 5, 2025",
    image: "/certificates/simplilearn-ai-chatbot.png",
    file: "/certificates/simplilearn-ai-chatbot.pdf",
  },
];

export const achievements = [
  {
    title: "Sentinel Eye — 100% Validation Accuracy",
    description:
      "Led architecture design for a CNN+LSTM violence detection system with real-time YOLOv8 integration, achieving 100% validation accuracy.",
  },
  {
    title: "Cross-Domain Project Portfolio",
    description:
      "Built end-to-end projects spanning deep learning, computer vision, BI dashboarding, cybersecurity analytics, and blockchain-based security.",
  },
  {
    title: "Sports Council Creative Team, UMIT",
    description:
      "Active member of the Sports Council Creative Team at Usha Mittal Institute of Technology (2024–2025).",
  },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
