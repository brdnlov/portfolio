export type Experience = {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    bullets: string[];
};

export const experiences: Experience[] = [
    {
        role: 'Front-End Developer',
        company: 'Uniquelyme',
        companyUrl: 'https://uniquely.me',
        period: 'Mar 2025 - Sept 2025',
        bullets: [
            "Reduced page asset payloads from 100MB+ to as low as ~430KB (≤2MB max) by optimizing images, eliminating redundant assets, and improving delivery strategy.",
            "Improved page load performance and Core Web Vitals, achieving 90+ Google Lighthouse scores through front-end performance and SEO optimizations.",
            "Collaborated with design stakeholders to translate Figma designs into pixel-accurate, responsive UI implementations.",
            "Partnered with technical team members to resolve Git conflicts and advanced CSS challenges, contributing to a smoother development workflow.",
            "Refactored and cleaned legacy CSS, resolving complex layout and styling issues while improving maintainability and scalability.",
            "Ensured cross-device accessibility and usability, delivering consistent user experience across desktop, tablet, and mobile devices.",
            "Led implementation of UI/UX updates across multiple pages, improving mobile and tablet responsiveness through CSS refactoring and responsive layout optimization.",
        ],
    },
    {
        role: 'Web Developer',
        company: 'GOLFi',
        companyUrl: 'https://www.golfiusa.com/',
        period: 'Oct 2025 - Oct 2025',
        bullets: [
            "Redesigned and updated the Tailor Brands website, enhancing functionality, aesthetics, and user experience.",
            "Boosted weekly site traffic by 728% (from ~58 to ~480 visits) in 2 weeks through SEO optimization, UX improvements, and targeted campaign promotion.",
            "Increased engagement, growing page views from ~200/week to ~920/week and weekly visits from ~350 to 960.",
            "Improved website performance and SEO metrics, raising Google Lighthouse score from 68 to 92 and increasing organic search impressions by 45%.",
            "Implemented data-driven improvements, analyzing site metrics (bounce rate, session duration, conversion rate) and optimizing navigation, layout, and content for better user retention.",
            "Collaborated cross-functionally with marketing and design teams to align website updates with brand goals and campaigns."
        ],
    },
];