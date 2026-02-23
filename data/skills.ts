export type SkillCategory = {
    title: string;
    icon: string;
    items: string[];
};

export const skills: SkillCategory[] = [
    {
        title: "Frontend",
        icon: "Monitor",
        items: [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js, Next.js, Astro.js",
            "TypeScript",
            "Tailwind CSS, Bootstrap",
            "Responsive Web Design",
            "Framer Motion",
            "SEO Optimization & Performance Optimization",
        ],
    },
    {
        title: "Backend",
        icon: "Server",
        items: [
            "Node.js",
            "AWS (S3, EC2, Lambda)",
            "MySQL, MongoDB",
        ],
    },
    {
        title: "Tools & Platforms",
        icon: "Cog",
        items: [
            "Git & GitHub",
            "Figma",
            "Google Lighthouse & Google Analytics",
            "VS Code",

        ],
    },
];