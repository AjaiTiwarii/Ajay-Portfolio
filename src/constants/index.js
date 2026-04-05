import am_sc from "../assets/projects/am-sc.jpg";
import dns_img from "../assets/projects/dns-img.jpg";
import ra_img from "../assets/projects/ra-img.jpg";
import wa_img from "../assets/projects/wa-img.jpg";

export const HERO_CONTENT = `I am a Full Stack Software Engineer with strong expertise in backend systems, scalable architectures, and AI-powered applications. Currently working as a Software Engineer Intern at HashedIn by Deloitte, I have built production-grade systems and led winning product development teams. I specialize in designing robust backend services, asynchronous systems, and integrating GenAI to build intelligent applications. With a strong foundation in Data Structures & Algorithms (LeetCode Top 8%), I am passionate about solving complex engineering problems and building impactful products.`;

export const ABOUT_TEXT = `I am Ajay Tiwari, a Computer Science Engineering student at IIIT Kalyani with a CGPA of 8.91. I am a backend-focused full stack developer with experience building scalable systems, distributed architectures, and AI-powered applications.

During my internship at HashedIn by Deloitte, I led a 5-member team to build a production-grade product module that won 1st place in a company-wide competition. My work spans across backend systems, asynchronous processing (Celery, Redis), containerized environments (Docker), and modern full-stack frameworks.

I have built projects ranging from a LeetCode-style coding platform with secure code execution to an AI-powered CRM that generates campaign insights using LLMs. I also have experience in machine learning through a rooftop solar analysis project using YOLO.

I actively solve algorithmic problems (800+ on LeetCode, Top 8%) and enjoy building systems that are scalable, efficient, and impactful.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Software Engineer Intern",
    company: "HashedIn by Deloitte",
    description: [
      "Completed a structured 5-track program covering Full Stack, GenAI, and Data Engineering",
      "Led a 5-member cross-functional team during Product Month",
      "Built IPS Token Exchange module integrated into a live enterprise project",
      "Secured 1st place among all teams in company-wide competition"
    ],
    technologies: [
      "Python",
      "GenAI",
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "PySpark",
      "Snowflake"
    ],
  },
  {
    year: "June 2025",
    role: "Technical Solutions Engineer Intern",
    company: "AlgoUniversity",
    description: [
      "Built automated web scraping system extracting 500+ coding questions from multiple platforms",
      "Improved API response time from ~800ms to ~320ms by parallelizing external API calls using subprocess architecture",
      "Used Django Debug Toolbar to measure and optimize backend performance",
      "Worked on backend systems serving 2000+ active users"
    ],
    technologies: [
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "BeautifulSoup",
      "Selenium",
      "APIs",
      "Performance Optimization"
    ],
  },
];

export const PROJECTS = [
  {
    title: "Mini CRM - AI Powered Customer Management Platform",
    image: am_sc,
    description: "Built a full-stack CRM platform with Google OAuth authentication, customer segmentation, and campaign tracking. Integrated Google Gemini API to generate AI-powered campaign insights within 3–5 seconds, replacing manual analysis workflows.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Sequelize", "Tailwind CSS", "Google Gemini API"],
    github: "https://github.com/AjaiTiwarii/Mini-CRM-Frontend",
    deployed_link: "https://mini-crm-frontend-liard.vercel.app/"
  },
  {
    title: "CodeMaster - Coding Platform",
    image: dns_img,
    description: "Developed a LeetCode-style coding platform supporting multi-language execution using Docker containers with strict resource limits. Designed an asynchronous execution system using Celery and Redis, handling concurrent submissions efficiently with 3–7 second processing time.",
    technologies: ["Django REST Framework", "React", "PostgreSQL", "Redis", "Celery", "Docker", "JWT"],
    github: "https://github.com/AjaiTiwarii/coding-platform",
    deployed_link: ""
  },
  {
    title: "GeoPV - Rooftop Solar Potential Analyzer",
    image: ra_img,
    description: "Worked on training a YOLO-based object detection model on 400+ annotated satellite images, achieving strong precision and recall for rooftop detection. Analyzed 500+ buildings for solar potential estimation.",
    technologies: ["React", "Flask", "Redis", "YOLO", "OpenCV", "Python"],
    github: "https://github.com/harshrox/GeoPV",
    deployed_link: ""
  },

  // --- OLD PROJECTS (PRESERVED) ---
  {
    title: "AmazoScrape Pro",
    image: am_sc,
    description: "Developed a robust web scraping project for efficiently extracting detailed information from Amazon product pages using Selenium and rotating proxies.",
    technologies: ["Django", "Redis", "Celery", "Python", "Selenium"],
    github: "https://github.com/AjaiTiwarii/AmazoScrape",
    deployed_link: ""
  },
  {
    title: "DNS Server Implementation in Go",
    image: dns_img,
    description: "Implemented DNS query parsing and response handling using Go's networking stack, supporting multiple DNS record types.",
    technologies: ["Go", "Networking", "UDP", "DNS Protocol"],
    github: "https://github.com/AjaiTiwarii/codecrafters-dns-server-go/blob/master/app/dns/dns.go",
    deployed_link: ""
  },
  {
    title: "Recipe Book Application",
    image: ra_img,
    description: "Built a Django-based CRUD application with authentication and responsive UI for managing recipes.",
    technologies: ["Django", "Python", "SQLite", "HTML", "Bootstrap"],
    github: "https://github.com/AjaiTiwarii/Recipe_Project",
    deployed_link: ""
  },
  {
    title: "Weather Application",
    image: wa_img,
    description: "Developed a mobile app to fetch real-time weather data using OpenWeatherMap API with city-based search.",
    technologies: ["Flutter", "Dart", "API"],
    github: "https://github.com/AjaiTiwarii/Weather-App",
    deployed_link: ""
  }
];

export const CONTACT = {
  address: "Bengaluru, India",
  phoneNo: "+91 9598898898",
  email: "ajaiofficial0209@gmail.com",
};