type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type SoftwareProject = {
  title: string
  description: string
  tags: string[]
  image: string
  url: string
  github?: boolean
}

type UIUXProject = {
  title: string
  description: string
  image: string
  url: string
  type: 'case-study' | 'figma'
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  hasTOC?: boolean
  readTime?: string
}

type SocialLink = {
  label: string
  link: string
  image: string
}

export const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    title: "Film E-Commerce Website",
    description: "Modern e-commerce store, enhancing the shopping journey through features like interactive maps, mobile friendliness, and intuitive product/category pages.",
    tags: ['React', 'Javascript', 'Nextjs', 'GraphQL', 'Apollo Client', 'Leaflet'],
    image: "/assets/film-e-commerce-website.jpeg",
    url: "https://github.com/kellyhp/moment/tree/main",
    github: true
  },
  {
    title: "Motor Vehicle Collisions in NYC",
    description: "This is an interactive dashboard designed to analyze and visualize motor vehicle collisions across New York City. The dashboard utilizes various data visualizations to provide insights into the frequency, locations, and causes of accidents.",
    tags: ['Python', 'Steamlit', 'Pandas', 'Plotly', 'Pydeck', 'Excel'],
    image: "/assets/motor-vehicle-collisions-in-nyc.jpeg",
    url: "https://github.com/kellyhp/motor-vehicle-collisions",
    github: true
  },
  {
    title: "Expense Tracker",
    description: "The expense tracker website combines mobile-friendly design with robust user authentication features, including login, account creation, and password recovery, while also providing insightful graphical representations of expenses.",
    tags: ['React', 'Nextjs', 'Javascript', 'Firebase', 'MongoDB', 'Nodejs', 'Express', 'Postman'],
    image: "/assets/expense-tracker.jpeg",
    url: "https://github.com/kellyhp/includeProject",
    github: true
  },
  {
    title: "Inventory Management",
    description: "This project is a full-stack inventory management dashboard designed for managing La Roche-Posay products. It provides a comprehensive site for product management, data analysis, and user experience with dynamic pages, complex data handling, light/dark mode, and search functionality.",
    tags: ['Typescript', 'Next.js', 'Tailwind', 'Redux', 'Node.js', 'Prisma', 'PostgreSQL', 'AWS'],
    image: "/assets/inventory-management.jpeg",
    url: "https://github.com/kellyhp/Laroche-Posay-Inventory-Management",
    github: true
  }
]

export const UIUX_PROJECTS: UIUXProject[] = [
  {
    title: "Boheme",
    description: "The thrift consignment store's web redesign aimed to boost exposure and user experience. The project included a clean, responsive design. Social media integration enhanced online marketing, creating a visually appealing and user-friendly website.",
    image: "/assets/boheme.jpeg",
    url: "https://medium.com/@kellyphan159/case-study-redesigning-boheme-threads-0adf336566ff",
    type: "case-study"
  },
  {
    title: "Expense Tracker",
    description: "The expense tracker website combines mobile-friendly design with robust user authentication features, including login, account creation, and password recovery, while also providing insightful graphical representations of expenses.",
    image: "/assets/expense-tracker.jpeg",
    url: "https://www.figma.com/file/URTHMD9pPUmgIlYNgFkmfr/Expense-Tracker?type=design&node-id=1%3A12&mode=design&t=Jb2oUVgmH1Hcg4zi-1",
    type: "figma"
  },
  {
    title: "Preethi",
    description: "Preethi Indian Cuisine's website redesign aims to blend modern UI elements with a nostalgic mom and pop vibe, integrating DoorDash orders and updating the buffet and menu pages for an enhanced user experience.",
    image: "/assets/preethi.jpeg",
    url: "https://www.figma.com/file/xKwFJkEJRaNNwNSHcqZww2/Preethi's-Indian-Cuisine?type=design&node-id=1%3A147&mode=design&t=oda2qLQfsm2IeUJ5-1",
    type: "figma"
  },
  {
    title: "Geonotify",
    description: "The reminders app utilizes live location tracking to send tailored notifications based on reminders and specified location parameters, enhancing task management with real-time contextual alerts.",
    image: "/assets/geonotify.jpeg",
    url: "https://www.figma.com/file/4LGMkx3vpBN5QRaV0IsPUc/GeoNotify-App?type=design&node-id=1%3A512&mode=design&t=v6qszs5fL0mXiKEL-1",
    type: "figma"
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Homekey.casa',
    title: 'Member of Technical Staff',
    start: 'Jan 2025',
    end: 'Present',
    link: 'https://www.homekey.casa',
    id: 'work0',
  },
  {
    company: 'University of California Agriculture and Natural Resources',
    title: 'Website Student Assistant',
    start: 'Aug 2024',
    end: 'Dec 2024',
    link: 'https://www.ucanr.edu',
    id: 'work1',
  },
  {
    company: 'Feastech Data Corp',
    title: 'Fullstack Developer Intern',
    start: 'Oct 2023',
    end: 'Jan 2024',
    link: 'https://www.feastech.com',
    id: 'work2',
  },
  {
    company: 'Codology',
    title: 'Software Developr Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'https://www.codology.org',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'AI Pipelines Beyond the Model: Designing Workflows That Actually Scale in the Real World',
    description: 'Production AI systems fail more often from pipeline design than model accuracy. Learn how to build workflows that handle real-world complexity.',
    link: '/blog/ai-pipelines-beyond-model',
    uid: 'blog-11',
    hasTOC: true,
    readTime: '~6 min read',
  },
  {
    title: 'Concurrency as Craft: Why Resilient Systems Depend on More Than Just Faster Threads',
    description: 'Learn the art of designing concurrent systems that dance gracefully under load through thoughtful patterns, not brute force.',
    link: '/blog/concurrency-as-craft-resilient-systems',
    uid: 'blog-10',
    hasTOC: true,
    readTime: '~8 min read',
  },
  {
    title: 'Throughput vs. Latency: Rethinking API Performance as a Design Tradeoff, Not Just a Metric',
    description: 'See how throughput and latency represent fundamental design choices that shape your system architecture and user experience.',
    link: '/blog/throughput-vs-latency-api-performance',
    uid: 'blog-9',
    hasTOC: true,
    readTime: '~7 min read',
  },
  {
    title: 'System Design Meets Human Design: Lessons from Scaling APIs and Scaling Usability',
    description: 'Discover how the principles that make systems resilient also make interfaces more usable and accessible.',
    link: '/blog/system-design-meets-human-design',
    uid: 'blog-8',
    hasTOC: true,
    readTime: '~9 min read',
  },
  {
    title: 'The Hidden Costs of Cookie-Cutter UI: Are AI Site Builders Undermining Accessibility?',
    description: 'AI promises instant websites, but speed comes at a cost. Explore how template culture creates accessibility gaps and what it means for inclusive design.',
    link: '/blog/the-hidden-costs-of-cookie-cutter-ui',
    uid: 'blog-7',
    hasTOC: true,
    readTime: '~5 min read',
  },
  {
    title: 'Natural Language Search in Real Estate: Bridging Human Intuition with System Performance',
    description: 'Why choose between natural language and filters? See how combining both creates search experiences that feel human while maintaining the speed of traditional systems.',
    link: '/blog/natural-language-search-real-estate-platforms',
    uid: 'blog-6',
    hasTOC: true,
    readTime: '~8 min read',
  },
  {
    title: 'The First Hurdle: User Onboarding and Retention in Digital Platforms',
    description: 'Dive into the psychology behind user onboarding and discover patterns that dramatically improve retention rates.',
    link: '/blog/the-first-hurdle-user-onboarding-and-retention',
    uid: 'blog-5',
    hasTOC: true,
    readTime: '~6 min read',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kellyhp',
    image: '/assets/github.png',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kellyphan03/',
    image: '/assets/linkedin.png',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kelly_saucy/',
    image: '/assets/instagram.png',
  },
]

export const EMAIL = 'khphan@ucdavis.edu'
