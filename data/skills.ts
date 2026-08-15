export type SkillCategory = {
    title: string;
    icon: string;
    items: string[];
};
export const skills: SkillCategory[] = [
    {
        title: "Languages",
        icon: "Code2",
        items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "Python",
            "VB.NET",
            "SQL",
        ],
    },
    {
        title: "Frontend",
        icon: "Monitor",
        items: [
            "React.js",
            "Next.js",
            "Astro.js",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Framer Motion",
            "Responsive Web Design",
            "SEO & Performance Optimization",
        ],
    },
    {
        title: "Backend & Data",
        icon: "Server",
        items: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MySQL",
            "Aurora",
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: "Cloud",
        items: [
            "AWS Lightsail",
            "AWS RDS",
            "AWS CloudFront",
            "AWS App Runner",
            "Cloudflare Workers",
            "Cloudflare D1",
            "Cloudflare Zero Trust",
            "Docker",
            "CloudWatch",
            "Vercel",
        ],
    },
    {
        title: "Security",
        icon: "ShieldCheck",
        items: [
            "OAuth 2.1 / PKCE",
            "SAML",
            "JWT",
            "Microsoft Entra ID",
            "Intune",
            "Content Security Policy (CSP)",
            "Security Assessment (CVSS)",
            "GDPR / CCPA",
        ],
    },
    {
        title: "Testing & Tools",
        icon: "FlaskConical",
        items: [
            "Playwright",
            "WCAG 2.1 AA",
            "New Relic",
            "Google Lighthouse & Analytics",
            "Git & GitHub",
            "GitLab",
            "Figma",
            "VS Code",
            "WordPress",
            "Shopify",
        ],
    },
];
