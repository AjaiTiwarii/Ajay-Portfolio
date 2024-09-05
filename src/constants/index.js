import am_sc from "../assets/projects/am-sc.jpg";
import dns_img from "../assets/projects/dns-img.jpg";
import ra_img from "../assets/projects/ra-img.jpg";
import wa_img from "../assets/projects/wa-img.jpg";

export const HERO_CONTENT = `I am an aspiring software developer with a passion for solving complex problems and creating impactful solutions. With a solid foundation in languages like C++, Python, and Go, I have developed projects ranging from web applications to networking tools. My experience includes working with frameworks like Django and React, and databases like MongoDB and MySQL. I am driven by a desire to learn and continuously improve, with the goal of leveraging my skills to build innovative software that makes a difference.`;

export const ABOUT_TEXT = `I am Ajay Tiwari, a passionate and driven Computer Science Engineering student at IIIT Kalyani, with a CGPA of 8.93. I have a strong foundation in programming and problem-solving, excelling in languages such as C++, Python, Go, and JavaScript. My experience spans across various domains, from web development to systems programming, where I’ve worked on projects like a DNS Server implementation in Go and an Amazon web scraper using Django and Redis. I am deeply committed to continuous learning and have actively participated in coding contests, securing top ranks on platforms like CodeChef and LeetCode. With a keen interest in developing innovative solutions, I aspire to contribute to impactful projects that combine technology with creativity. Outside of academics, I enjoy participating in hackathons and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "AmazoScrape Pro",
    image: am_sc, // Update with the appropriate image
    description: "Developed a robust web scraping project for efficiently extracting detailed information from Amazon product pages. Implemented Selenium, Bright Data’s rotating proxies, and Jupyter Notebook for enhanced data accuracy and analysis.",
    technologies: ["Django", "Redis", "Celery", "Python", "Bright Data", "Jupyter Notebook", "Selenium"],
    github: "https://github.com/AjaiTiwarii/AmazoScrape" // Replace with actual GitHub link
  },
  {
    title: "DNS Server Implementation in Go",
    image: dns_img, // Update with the appropriate image
    description: "Implemented DNS query parsing and response generation, including handling various DNS record types and DNS message compression. Built with Go’s net package for handling UDP connections.",
    technologies: ["Go (Golang)", "Networking (UDP)", "DNS Protocol"],
    github: "https://github.com/AjaiTiwarii/codecrafters-dns-server-go/blob/master/app/dns/dns.go" // Replace with actual GitHub link
  },
  {
    title: "Recipe Book Application",
    image: ra_img, // Update with the appropriate image
    description: "Developed a web application to manage recipes, including advanced authentication and CRUD operations. Utilized Django views, URLs, and models for backend logic and Bootstrap CSS for a responsive frontend.",
    technologies: ["Django", "Python", "SQLite", "HTML", "Bootstrap CSS"],
    github: "https://github.com/AjaiTiwarii/Recipe_Project" // Replace with actual GitHub link
  },
  {
    title: "Weather Application",
    image: wa_img, // Update with the appropriate image
    description: "Developed a mobile application for getting real-time weather updates. Used  OpenWeatherMap API and Implemented key features including city-based weather search.",
    technologies: ["Flutter", "Dart", "Flutter Packages", "API"],
    github: "https://github.com/AjaiTiwarii/Weather-App" // Replace with actual GitHub link
  }
];


export const CONTACT = {
  address: "Kalyani, Nadia, West Bengal",
  phoneNo: "+91 9598898898",
  email: "ajait0209@gmail.com",
};
