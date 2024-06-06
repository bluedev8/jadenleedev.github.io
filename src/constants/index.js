import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  bigcommerce,
  symphony,
  seedtech
} from "../assets";

import todo_list from "../assets/todo_list.png";
import add_bag from "../assets/add_bag.png";
import world_ranks from "../assets/world_ranks.png";
import login from "../assets/login.png";
import nike from "../assets/nike-store.png";
import tours_travel from "../assets/tours.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "Javascript",
  //   icon: "logos:javascript",
  // },
  // {
  //   name: "Typescript",
  //   icon: "logos:typescript-icon",
  // },
  {
    name: "Node",
    icon: "logos:nodejs-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Angular",
    icon: "logos:angular-icon",
  },
  {
    name: "Spring Boot",
    icon: "logos:spring-icon",
  },
  {
    name: "ASP.NET",
    icon: "logos:dotnet",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "Wordpress",
    icon: "logos:wordpress-icon",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
  // {
  //   name: "Jest",
  //   icon: "logos:jest",
  // },
  // {
  //   name: "Jasmine",
  //   icon: "logos:jasmine",
  // },
  // {
  //   name: "Cypress",
  //   icon: "logos:cypress-icon",
  // },
  // {
  //   name: "Jira",
  //   icon: "logos:jira",
  // },
  // {
  //   name: "Jenkins",
  //   icon: "logos:jenkins",
  // },
  // {
  //   name: "Kubernetes",
  //   icon: "logos:kubernetes",
  // },
  // {
  //   name: "Docker",
  //   icon: "logos:docker-icon",
  // },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Azure",
    icon: "logos:azure-icon",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "BigCommerce - Austin, TX",
    icon: bigcommerce,
    iconBg: "#f1f1f1",
    date: "08/2021 – 04/2024",
    points: [
      "Developed and implemented 3 front-end applications, and 2 back-end applications",
      "Developed a Social Media Auto Poster app and Fraud Fighter app",
      "Developed SEO-friendly web applications",
      "Conducted CI/CD pipeline for testing and AWS",
      "Coordinated a team of 2-3 frontend and backend developers, managing 2-3 projects in parallel",
      "Actively participated as a team member in all stages of the agile SDLC",
      "Led regular code reviews on GitHub, delivering constructive feedback to team members",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Symphony Solution - Fanwood, NJ",
    icon: symphony,
    iconBg: "#f1f1f1",
    date: "07/2020 – 07/2021",
    points: [
      "Successfully launched and deployed 3 secure and powerful backend services",
      "Implemented automated and event-driven cloud security controls in AWS",
      "Led a collaborative effort with Scrum team members to engineer a robust e-commerce platform",
      "Migrated a searching mechanism to utilize Elasticsearch's superior full-text search functionality",
      "Achieved automated test cases for both the frontend and backend"
    ],
  },
  {
    title: "Software Developer",
    company_name: "Seedtech LLC - Hopatcong, NJ",
    icon: seedtech,
    iconBg: "#ffffff",
    date: "08/2017 – 06/2020",
    points: [
      "Proficient in converting Figma designs for 3 projects into pixel-perfect, responsive web applications",
      "Migrated 2 projects from React and other frameworks to Angular",
      "Implemented a scheduled task to automate data processing and improve operational efficiency ",
      "Developed and maintained Seedtech LLC Website",
      "Wrote unit tests and end-to-end tests",
      "Employed webpack for efficient module bundling and static asset optimization, alongside AWS EC2 and S3",
    ],
  },
];

const testimonials = [
];

const projects = [
  // {
  //   name: "Nike Store ECommerce",
  //   description:
  //     "Nike Store is an e-commerce platform famous for sportswear, shoes and accessories. This online store offers users a wide range of Nike brand products and allows sports enthusiasts to discover and purchase the latest collections.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "vite",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "redux toolkit",
  //       color: "white",
  //     },
  //     {
  //       name: "vercel",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: nike,
  //   source_code_link: "https://github.com/Kasimurkmez/3D_Web_Portfolio",
  // },
];

export { services, technologies, experiences, testimonials, projects };
