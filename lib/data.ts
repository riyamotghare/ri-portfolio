// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// your site — no need to touch any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Riya Motghare",
  role: "Data Science & Machine Learning Enthusiast",
  tagline:
    "Final-year Data Science student exploring Machine Learning, Data Analytics, and Business Analytics — building practical ML models, SQL-driven analysis, and interactive dashboards with a focus on turning data into actionable insights.",
  location: "Mumbai, India",
  email: "riyamotghare27@gmail.com",
  phone: "+91 89288 27763",
  linkedin: "https://linkedin.com/in/riya-motghare-053b4a301",
  github: "https://github.com/riyamotghare",
  resumeUrl: "/resume/Riya_Motghare_Resume.pdf",
  avatar: "/images/profile.jpg",
  availability:
    "Open to Data Science, ML/AI & Computer Vision roles — Final Year, Batch of 2027",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a final-year B.Tech Data Science student at Usha Mittal Institute of Technology, Mumbai (Class of 2027), interested in Machine Learning, Data Analytics, and Business Analytics, and looking for opportunities to apply my skills to real-world problems.",
    "My work spans Machine Learning and Data Analytics — from CNN-LSTM computer vision projects and classification models to SQL-based analysis and interactive dashboards using Power BI and Tableau. I enjoy turning raw data into meaningful insights, visualizations, and data-driven solutions.",
    "I also completed hands-on training at GNCIPL (Global Next Consulting India Pvt. Ltd.), where I worked on analytics projects and presented findings, strengthening both my technical skills and ability to communicate data-driven insights clearly.",
  ],
  highlights: [
    {
      label: "Focus Areas",
      value: "ML/AI, Computer Vision, Data Science, Data Analytics",
    },
    {
      label: "Status",
      value: "Final Year Data Science Student",
    },
    {
      label: "Graduating",
      value: "2027",
    },
    {
      label: "Based In",
      value: "Mumbai, India",
    },
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
    items: [
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Analytics",
    items: [
      "Power BI",
      "Power Query",
      "DAX",
      "Tableau",
      "SQL",
      "Microsoft Excel",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python",
      "PostgreSQL",
      "Basic R",
      "HTML/CSS",
    ],
  },
  {
    category: "Tools",
    items: [
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "GitHub",
      "Kaggle",
      "Figma",
      "Jira",
    ],
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
      "An end-to-end AI surveillance system combining CNN+LSTM video classification, real-time YOLOv8 object detection, automated alerting, and a Flask + React web application.",
    problem:
      "Manual monitoring of surveillance footage doesn't scale, and violent incidents are often detected only after the event.",
    approach: [
      "Built a CNN+LSTM video classification pipeline using TimeDistributed Conv2D (32 filters) and LSTM (64 units), processing 16-frame video sequences at 64×64 resolution",
      "Integrated YOLOv8n for real-time object detection on live camera feeds",
      "Developed a Flask backend with a POST /upload API for video-based violence classification, including file validation and training-matched preprocessing",
      "Built a React 19 + Vite frontend using Axios to communicate with the Flask API",
      "Implemented automated alerting and a CSV-based detection logging pipeline for detection history and auditing",
      "Expanded the dataset from the original 11 videos to 350 videos and developed a working live camera-feed module",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "LSTM",
      "YOLOv8",
      "Flask",
      "React",
      "Vite",
      "Axios",
    ],
    outcome:
      "Achieved 100% validation accuracy on the original 11-video dataset, expanded the dataset to 350 videos, and developed a working full-stack system with live camera detection and automated alerting.",
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
      "Built DAX measures for KPI calculations including attrition rate, headcount trends, and performance metrics",
      "Designed interactive Power BI visuals for demographics, attrition, and performance analysis",
    ],
    stack: ["Power BI", "Power Query", "DAX", "Excel"],
    outcome:
      "Delivered a fully interactive dashboard surfacing key attrition and workforce insights at a glance.",
    githubUrl:
      "https://github.com/riyamotghare/hr-analytical-dashboard",
    fileUrl: "/files/hr_analytics_dashboard.pbix",
    fileLabel: "Download .pbix",
    featured: true,
  },

  {
    slug: "sales-insights",
    title: "Sales Insights — Data Analytics & Business Intelligence",
    description:
      "An end-to-end sales analytics project for AtliQ Hardware, using MySQL for data cleaning and analysis and Tableau to build an interactive business intelligence dashboard.",
    problem:
      "AtliQ Hardware struggled with fragmented sales data and limited visibility into revenue, customer performance, product trends, and regional sales, making timely business decisions difficult.",
    approach: [
      "Explored and understood transactional sales data covering customers, products, markets, transactions, and dates",
      "Used MySQL to clean, validate, and analyze the data, handling inconsistent currencies, missing values, and invalid sales records",
      "Performed SQL-based analysis to identify revenue trends, top customers, product performance, and market-wise sales",
      "Built an interactive Tableau dashboard to visualize revenue, sales trends, customer performance, and regional and market insights",
      "Designed the dashboard to help business stakeholders move from manual reporting to data-driven decision-making",
    ],
    stack: [
      "MySQL",
      "SQL",
      "Tableau",
      "Excel",
      "Data Cleaning",
      "Data Analysis",
      "Business Intelligence",
    ],
    outcome:
      "Developed an interactive sales insights dashboard that enables stakeholders to analyze revenue trends, market performance, top customers, and product performance for faster data-driven decision-making.",
    featured: true,
  },

  {
    slug: "ddos-attack-analysis",
    title: "DDoS Attack Volume Analysis",
    description:
      "Large-scale EDA on network-flow data from CIC-IDS2018, covering attack-volume trends and protocol breakdowns.",
    problem:
      "Understanding attack volume and traffic signatures to inform intrusion detection strategy.",
    approach: [
      "Analyzed 1M+ network-flow records from the CIC-IDS2018 dataset",
      "Delivered EDA covering attack-volume trends, protocol breakdowns, and outlier detection across multiple DDoS vectors",
      "Built a modular OOP Python script with automated chart exports",
    ],
    stack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
    ],
    outcome:
      "Identified traffic-volume signatures across multiple attack vectors with a fully automated reporting script.",
    githubUrl:
      "https://github.com/riyamotghare/DDoS-Attack-Volume-Analysis",
    featured: true,
  },

  {
    slug: "data-breaches-analysis",
    title: "Data Breaches Analysis by Industry",
    description:
      "EDA on a breach dataset spanning 2004–2022, identifying high-exposure sectors and breach-type trends.",
    problem:
      "Making sense of historical data breach records to surface sector-level trends.",
    approach: [
      "Ran EDA on a 352-row breach dataset from 2004–2022",
      "Identified high-exposure sectors and breach-type trends",
      "Built a structured OOP architecture with Matplotlib-based visualizations",
    ],
    stack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "OOP",
    ],
    outcome:
      "Built an end-to-end analysis project that strengthened data exploration, visualization, and analytical problem-solving skills.",
    featured: true,
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
    stack: [
      "Python",
      "Blockchain",
      "Firebase",
      "URL Analysis",
    ],
    outcome:
      "Built a working decentralized, tamper-proof phishing detection system.",
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
      "Delivered DDoS Attack Analysis and Data Breaches Analysis end-to-end, covering data ingestion, EDA, modular OOP scripts, Matplotlib visualizations, and documented GitHub repositories",
      "Presented analytical findings to senior mentors, practicing data storytelling and communication of technical results to non-technical stakeholders",
    ],
  },

  {
    org: "Usha Mittal Institute of Technology, Mumbai",
    role: "Major Project — Sentinel Eye (AI Violence Detection System)",
    period: "2025 — 2026",
    points: [
      "Developed a CNN+LSTM video classification pipeline using 16-frame sequences with TimeDistributed Conv2D and LSTM-based temporal modeling",
      "Integrated YOLOv8n for real-time object detection on live camera feeds with automated alerts and CSV-based detection logging",
      "Built a full-stack application with a Flask backend, REST API, and React + Vite frontend for video upload and model inference",
      "Expanded the dataset from 11 to 350 videos and achieved 100% validation accuracy on the original dataset",
      "Presented the system architecture, methodology, results, and deployment through a technical presentation",
    ],
  },
];

export const education = [
  {
    institution: "Usha Mittal Institute of Technology, Mumbai",
    degree: "B.Tech in Data Science",
    period: "2023 — 2027 (Expected)",
    details:
      "Final-year student. Relevant coursework: Machine Learning, Computer Vision, Database Management, Statistics, Python Programming.",
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
      "Led architecture design for a CNN+LSTM violence detection system with real-time YOLOv8 integration, achieving 100% validation accuracy on the original validation dataset.",
  },

  {
    title: "Cross-Domain Project Portfolio",
    description:
      "Built end-to-end projects spanning deep learning, computer vision, BI dashboarding, cybersecurity analytics, and blockchain-based security.",
  },

  {
    title: "Creative Team Member — Sports Council, UMIT",
    description:
      "Supported the Sports Council's 2024–25 campaigns through social media design, promotional artwork, event videography, and on-ground event coordination, contributing to the visual communication and execution of campus sports events.",
  },
];

export const socials = [
  {
    label: "GitHub",
    href: profile.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
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
