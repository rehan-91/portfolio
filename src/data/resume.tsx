import { Icons } from "@/components/icons";
import { HomeIcon, Cloud, Brain } from "lucide-react";
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGooglegemini,
} from "@icons-pack/react-simple-icons";


export const DATA = {
  name: "Md Rehan Nawaz",
  initials: "RN",
  url: "https://nawazdev.vercel.app",
  location: "New Delhi / Noida, India",
  locationLink: "https://maps.google.com/?q=Noida,India",
  description:"Laravel Full Stack Developer specializing in enterprise web applications, scalable backend architecture, REST APIs, React, AI integrations, and business automation.",

  seo: {
    title: "Md Rehan Nawaz | Laravel Full Stack Developer",

    description:
      "Laravel Full Stack Developer with 6+ years of experience building enterprise CRM, Banking, AI-powered, POS and scalable web applications using Laravel, React, PHP and MySQL.",

    twitter: "@Legendry_basher",

    keywords: [
      "Md Rehan Nawaz",
      "Laravel Developer",
      "Full Stack Developer",
      "PHP Developer",
      "React Developer",
      "Laravel Portfolio",
      "Laravel India",
      "MySQL",
      "Enterprise CRM",
      "AI Integration",
      "REST API",
      "Banking Application",
      "Portfolio",
    ],
  },

  summary: `Laravel Full Stack Developer with **6+ years of professional experience** building enterprise-grade web applications using Laravel, PHP, React, MySQL, and modern web technologies.

I specialize in developing secure, scalable, and business-focused software including **CRM platforms, POS systems, Digital Banking Applications, AI-powered Marketplaces, HRM solutions, Investment Platforms, Franchise Management Systems, and Enterprise APIs**.

Throughout my career, I've designed scalable backend architecture, developed secure REST APIs, implemented workflow automation, integrated payment gateways and third-party services, built authentication and reporting systems, and incorporated AI capabilities using OpenAI and Gemini to solve real-world business challenges.

I enjoy transforming complex business requirements into secure, maintainable, and production-ready software that improves operational efficiency and delivers measurable business value.`,
  avatarUrl: "/me.jpg",
  skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Git", icon: SiGit },
      { name: "AWS", icon: Cloud },
      { name: "OpenAI", icon: Brain },
      { name: "Gemini AI", icon: SiGooglegemini },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mdrehannawaz8084@gmail.com",
    tel: "+91 9643147619",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rehan-91",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rehan-nawaz-85192695",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:mdrehannawaz8084@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      
    },
  },

  work: [
  {
    company: "Detailing Devils India Pvt. Ltd.",
    href: "https://detailingdevils.com",
    badges: [],
    location: "Noida, India",
    title: "Laravel Full Stack Developer",
    logoUrl: "/detailing-devils.png",
    start: "Jun 2023",
    end: "Present",
    description:
      "Design, develop, and maintain enterprise web applications using Laravel, PHP, React, JavaScript, and MySQL. Architect secure REST APIs, scalable backend systems, business workflows, reporting modules, and third-party integrations. Build CRM, marketplace, HRM, POS, digital banking, and franchise management platforms while collaborating with cross-functional teams to deliver secure, scalable, and production-ready solutions.",
  },
  {
    company: "Trendy Online Solution Pvt. Ltd.",
    href: "https://www.trendyonlinesolution.in/",
    badges: [],
    location: "New Delhi, India",
    title: "PHP Web Developer",
    logoUrl: "/trendy-online.jpg",
    start: "Sep 2022",
    end: "Feb 2023",
    description:
      "Developed backend components and integrated web applications with external services. Built server-side and client-side features using PHP, AJAX, HTML, CSS, and JavaScript while implementing client requirements and supporting production deployments.",
  },
  {
    company: "Web Mingo IT Solutions Pvt. Ltd.",
    href: "https://www.webmingo.com/",
    badges: [],
    location: "Noida, India",
    title: "PHP Web Developer",
    logoUrl: "/webmingo.jpg",
    start: "Jun 2022",
    end: "Sep 2022",
    description:
      "Designed, developed, tested, and maintained web applications based on business requirements. Collaborated throughout the software development lifecycle and improved application reliability through database optimization and testing.",
  },
  {
    company: "VOCSO Technologies Pvt. Ltd.",
    href: "https://www.vocso.com",
    badges: [],
    location: "Faridabad, India",
    title: "PHP Developer",
    logoUrl: "/vocso.jpg",
    start: "Aug 2019",
    end: "Jan 2021",
    description:
      "Developed booking systems and e-commerce applications using Laravel, PHP, AJAX, HTML, CSS, JavaScript, and MySQL. Implemented customer requirements, maintained production systems, optimized backend functionality, and resolved technical issues.",
  },
  {
    company: "HHP Software Pvt. Ltd.",
    href: "https://www.hhpsoftware.in/",
    badges: [],
    location: "Noida, India",
    title: "PHP Web Developer",
    logoUrl: "/hhp.webp",
    start: "Nov 2018",
    end: "Jun 2019",
    description:
      "Developed backend components, integrated web services, and implemented business requirements using PHP, Laravel, MySQL, HTML, CSS, and JavaScript. Built maintainable features connecting frontend interfaces with backend systems.",
  },
  ],
  education: [
    {
      school: "Annamalai University",
      href: "https://annamalaiuniversity.ac.in/",
      degree: "Bachelor of Engineering (B.E.) in Electrical & Electronics Engineering",
      logoUrl: "/annamalai.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "AI Automotive Marketplace",
      href: "https://car.detailingdevils.com/",
      dates: "2024 - Present",
      active: false,
      description:
        "Designed and developed a production-grade automotive marketplace featuring vehicle listings, auctions, appointments, lead management, CMS, admin dashboards, and franchise workflows. Implemented AI-assisted vehicle analysis and pricing using OpenAI and Gemini while integrating Google Maps, WhatsApp, AWS services, and other third-party platforms.",
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "JavaScript",
        "MySQL",
        "AWS",
        "OpenAI",
        "Gemini AI",
        "Google Maps",
        "WhatsApp API",
      ],
      links: [
        {
          type: "Website",
          href: "https://car.detailingdevils.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:"/projects/car.png",
      video: "",
    },

    {
      title: "Enterprise POS CRM & Workshop Management System",
      href: "#",
      dates: "2025 - Present",
      active: false,
      description:
        "Designed backend architecture for a multi-store workshop and POS CRM platform covering appointments, inspections, job cards, invoicing, payments, warranties, inventory, reporting, and analytics. Built secure REST APIs, RBAC, validation, notifications, and workflow automation to support large-scale business operations.",
      technologies: [
        "Laravel",
        "PHP",
        "React",
        "MySQL",
        "REST API",
        "Laravel Sanctum",
        "AWS",
        "JavaScript",
      ],
      links: [],
      image: "/projects/pos-crm.png",
      video: "",
    },

    {
      title: "Secure Digital Banking Platform",
      href: "#",
      dates: "2026 - Present",
      active: false,
      description:
        "Developed secure digital banking modules including maker-checker approvals, beneficiary management, fund transfer workflows, two-factor authentication, encrypted API communication, reporting, callbacks, and webhook processing using enterprise security practices and service-layer architecture.",
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "MySQL",
        "Axis Bank APIs",
        "OpenSSL",
        "JWE/JWS",
        "Events",
        "REST API",
      ],
      links: [],
      image: "/projects/digital-banking.png",
      video: "",
    },

    {
      title: "Investment & Franchise Management Platform",
      href: "#",
      dates: "2025 - Present",
      active: false,
      description:
        "Designed and developed a centralized investment and franchise management platform supporting investor onboarding, KYC verification, franchise lifecycle management, payment processing, financial reporting, transaction tracking, audit logging, and analytics dashboards. Built secure business workflows with scalable service-layer architecture and automated operational processes.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Blade",
        "Razorpay",
        "Cron Jobs",
        "Mail",
        "Service Layer",
      ],
      links: [],
      image: "/projects/investment-platform.png",
      video: "",
    },

    {
      title: "Enterprise Business Management Platform",
      href: "#",
      dates: "2023 - Present",
      active: false,
      description:
        "Designed and developed a unified enterprise business platform integrating CRM, franchise management, procurement, inventory, finance, invoicing, warranty management, royalty processing, payments, lead management, reporting, and business analytics. Developed scalable REST APIs where required, optimized database architecture, automated complex business workflows, and integrated third-party services to support secure, high-performance enterprise operations.",
      technologies: [
        "Laravel",
        "PHP",
        "Blade",
        "MySQL",
        "REST API",
        "Payment Gateway",
        "CRM",
        "Inventory",
        "Reporting",
      ],
      links: [],
      image: "/projects/business-management.png",
      video: "",
    },

    {
      title: "Enterprise Lead Management System Modernization",
      href: "#",
      dates: "2023 - Present",
      active: false,
      description:
        "Modernized a large-scale enterprise lead management platform by optimizing SQL queries, improving application performance, enhancing UI/UX, streamlining reporting and priority queue management, implementing workflow automation, integrating Google Calendar, and adding AI-powered speech-to-text transcription and call summarization while maintaining production stability.",
      technologies: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Google Calendar API",
        "OpenAI",
        "AI Speech-to-Text",
        "SQL Optimization",
      ],
      links: [],
      image: "/projects/lead-management-ai.png",
      video: "",
    },
  ],
  
} as const;
