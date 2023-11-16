import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Head of Web Department Intern",
        company_name: "I 2",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "September 2023 - November 2023", 
        points: [
            "Leading an 8-person team to develop the I2 business site landing page, optimizing user experience with modern design tools like Tailwind, Radix UI, and Shadcn UI.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Add a blogging system, And also Managed to pull requests from contributors using TypeScript, Next.js, and Node.js.",
            "This innovation led to a remarkable 75% acceleration of development cycles and significantly improved code maintainability. Demonstrate expertise in JavaScript and React.js, and Node.js.",
        ],
    },
    {
        title: "Frontend Developer Intern",
        company_name: "Skilzen (Remote)",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "June 2021 – August 2021",
        points: [
            "As a Junior Frontend Developer Intern at Skilzen, I specialized in creating and maintaining RESTful APIs for secure storage of Public-Key and Private-Key data.",
            "Ensured robust security protocols for Private-Key data storage and managed the integration of Public-Key data into a secure public database.",
            "Actively collaborated with the team to identify and swiftly resolve development issues, emphasizing proactive problem-solving.",
            "Utilized Material UI for designing responsive interfaces. Implemented responsive design, ensured cross-browser compatibility, actively participated in code reviews, and provided constructive feedback to peers.",
        ],
    },
    {
        title: "Member of Technical Staff (college level)",
        company_name: "InternList",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "August 2022 - December 2023",
        points: [
            "Build and maintain web applications using Next.js and Nest at InternList.",
            "Collaborate with designers and developers in cross-functional teams for delivering high-quality, responsive products with cross-browser compatibility.",
            "Actively engage in code reviews, offering constructive feedback to fellow developers.",
            "Open to remote work, I aim to contribute my skills and enthusiasm for creating meaningful digital solutions.",
        ],
    },
    {
        title: "Web Development OpenSource contributor",
        company_name: "Girl script summer of code 2022",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - July 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, project admin, and other developers to complete Issues ",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code base and providing constructive pull request to other repo.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Tabishhaider72',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sayed-tabish/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AI Reads -SaaS Platform',
        description: 'Full-stack SaaS platform, AI Reads empowers users to analyze, summarize, and generate questions from documents of any size via an AI-powered chatbot interface.',
        link: 'https://ai-reads.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'DocuMation -FullStack Notion Clone',
        description: 'DocuMation, a Next.js 13 and React-based full-stack project integrated with Convex database and authentication, Tailwind, Radix, and Shadcn UI for content creators, providing seamless project management',
        link: 'https://ai-reads.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://rental-my-cars.vercel.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Express -SaaS Platform',
        description: 'full-stack AI web application that hosts five distinct AI tools, from image and video generation to conversation models and code generation, catering to diverse creative needs.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://bookmy-room.vercel.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://get-summarizer.netlify.app',
    }
];