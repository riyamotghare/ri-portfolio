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
    slug: "Generate Email Text for Spam Classification",
    title: "SMS Spam Classifier with Generative Augmentation",
    description: "An NLP-based SMS spam classification pipeline leveraging TF-IDF, machine learning, and T5-based data augmentation.",
    problem: "Imbalanced datasets often hinder the accurate detection of minority classes like spam in real-time message streams.",
    approach: [
      "Extracted text features using TF-IDF on the SMS Spam Collection dataset",
      "Applied T5-based paraphrasing for synthetic spam data augmentation to balance the training distribution",
      "Trained and evaluated classification models, and deployed an interactive Streamlit web application for real-time inference"
    ],
    stack: [
      "Python",
      "NLP",
      "Scikit-Learn",
      "T5 Model",
      "Streamlit"
    ],
    outcome: "Achieved a high ROC-AUC score of 0.9929 and deployed an interactive web app for real-time Spam/Ham message classification.",
    githubUrl: "https://github.com/riyamotghare/SMS_Spam_Classifier",
  },
  {
    slug: "ANN Based Customer-Churn-Prediction",
    title: "Customer Churn Prediction Pipeline",
    description: "An end-to-end machine learning system to analyze customer behavior, handle class imbalances, and predict attrition risk.",
    problem: "Subscription-based businesses struggle with customer attrition and need proactive threat identification to improve retention.",
    approach: [
      "Conducted exploratory data analysis (EDA) to uncover patterns across demographics and account characteristics",
      "Engineered features and trained multiple classification models including Logistic Regression, Random Forest, and XGBoost",
      "Evaluated models using key metrics to optimize predictive performance and isolate primary churn drivers"
    ],
    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "Seaborn"
    ],
    outcome: "Identified core business attrition drivers such as contract type and monthly charges to guide data-driven retention strategies.",
    githubUrl: "https://github.com/riyamotghare/Week-5---Customer-Churn-Prediction"
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
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    verifyUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_fsT23iLenJz5TB2kC_1785161815537_completion_certificate.pdf",
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
