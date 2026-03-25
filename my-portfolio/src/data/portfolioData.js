const portfolio = {
  name: "Ankit Kumar",
  role: "Data Engineer & CS Engineer",
  tagline: "Turning data into actionable insights using machine learning, scalable pipelines, and intelligent systems.",
  about: "Computer Science Engineering student at Lovely Professional University (CGPA: 7.84) with a strong interest in Data Science, Machine Learning, and Data Engineering.",
  about2: "Skilled in Python, data analysis, and building end-to-end ML pipelines—from data preprocessing to model deployment. Experienced in working with real-world datasets to extract actionable insights and solve practical problems.",
  about3: "Additionally, I have experience integrating AI features into web applications through MERN + GenAI projects, enabling intelligent and user-focused solutions.",
  about4: "Currently focused on strengthening problem-solving skills and building impactful data-driven projects.",
  info: [
    { label: "Role",      value: "Data Engineer" },
    { label: "Education", value: "B.Tech CSE — LPU, Punjab" },
    { label: "CGPA",      value: "7.84" },
    { label: "Phone",     value: "+91 7257916334" },
    { label: "DSA",       value: "150+ Problems Solved" },
    { label: "Email",     value: "ankitsharmaroh@gmail.com" },
    { label: "Location",  value: "Punjab, India" },
    { label: "Status",    value: "Open to Data Engineering roles" },
  ],
  skills: [
    { cat: "Languages",   items: ["JavaScript", "TypeScript", "Python", "C++"] },
    { cat: "Frontend",    items: ["React.js", "React Native", "Tailwind CSS"] },
    { cat: "Backend",     items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { cat: "Database",    items: ["MongoDB", "PostgreSQL"] },
    { cat: "Tools",       items: ["Git", "GitHub", "Excel", "Selenium", "Pandas"] },
    { cat: "Soft Skills", items: ["Problem-Solving", "Team Player", "Communication"] },
  ],

  experience: [
    {
      role: "Web Scraping & Data Automation",
      company: "Cozzydeal.com",
      period: "Apr 2025 – May 2025",
      accent: "var(--accent)",
      points: [
        "Developed automated web scraping scripts to extract structured data from dynamic e-commerce websites.",
        "Designed end-to-end data pipelines to clean, transform, and validate raw scraped data.",
        "Stored and organized datasets in CSV and Excel formats, reducing manual data handling.",
        "Handled dynamic content, pagination, and anti-scraping challenges using browser automation.",
      ],
      tags: ["Python", "BeautifulSoup", "Selenium", "Pandas", "CSV", "Excel"],
    },
    {
      role: "MERN Stack with GenAI",
      company: "W3grads · Angaar Batch",
      period: "Jun 2025 – Jul 2025",
      accent: "var(--accent2)",
      points: [
        "Built full-stack MERN applications covering frontend, backend APIs, and database design.",
        "Developed RESTful APIs with JWT-based authentication for secure user access.",
        "Integrated GenAI features — intelligent content generation and automated responses.",
        "Deployed applications to cloud platforms with practical deployment workflow experience.",
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "GenAI APIs", "Cloud Deploy"],
    },
  ],

  projects: [
  {
    title: "Amazon Price Tracker & Web Scraper",
    url: "https://your-project-link.com",
    type: "Project",
    period: "2025",
    description: "Built a scalable Amazon web scraping system to extract product data such as price, ratings, and availability. Implemented automated tracking and alert system for price drops with data storage and API access.",
    outcome: "Enabled real-time price monitoring and historical tracking, helping users identify best buying opportunities and saving up to 30% on purchases.",
    tags: ["Python", "BeautifulSoup", "Requests", "MongoDB", "Flask", "REST APIs", "Cron Jobs"],
  },
  {
    title: "AI Interviewer",
    url: "https://aiinterviewer-k0xg.onrender.com",
    type: "Project",
    period: "May 2025 – Aug 2025",
    description: "AI-powered interview prep web app for technical and HR interviews. Features role-based question personalization via NLP, real-time performance analysis, and actionable feedback.",
    outcome: "Enabled users to receive instant personalized feedback and reduced dependency on mock interviews.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "NLP", "REST APIs"],
  },
],

  education: [
    { institution: "Lovely Professional University", location: "Phagwara, Punjab", degree: "B.Tech — Computer Science and Engineering", detail: "CGPA: 7.84", period: "Current",              accent: "var(--accent)" },
    { institution: "Guru Gobind Singh Public School", location: "Bokaro",           degree: "Intermediate (PCM)",                       detail: "84.6%",       period: "Apr 2021 – May 2022", accent: "var(--accent2)" },
    { institution: "St. Joseph School",               location: "Nawada",           degree: "Matriculation",                            detail: "89.6%",       period: "Apr 2019 – May 2020", accent: "var(--muted)" },
  ],

  certificates: [
    { name: "TCP/IP and Advanced Topics", issuer: "University of Colorado", date: "Nov 2024", link: "https://coursera.org/share/86d3774aeb71e4b3c2553a8f25daecc7" },
    { name: "Bits and Bytes of Computer Networking", issuer: "Google", date: "Sep 2024", link: "https://coursera.org/share/c87065fbcdc6e193df1551d732dcf6ea" },
    { name: "Cloud Computing", issuer: "NPTEL", date: "2025", link: "https://your-nptel-certificate-link-here.com" },
  ],

  contact: {
    email: "ankitsharmaroh@gmail.com",
    phone: "+91 7257916334",
    linkedin: "https://linkedin.com/in/ankit-sharma-674434399",
    github: "https://github.com/ankitsharmx",
  },
};

export default portfolio;