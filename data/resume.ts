export type Experience = {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    bullets: string[];
};

export const experiences: Experience[] = [
    {
        role: 'Software Engineer (Full-Time)',
        company: 'Red7 Systems',
        companyUrl: 'https://red7systems.com/',
        period: 'March 2026 - August 2026',
        bullets: [
            "Built a production MCP server that gives the company's AI assistant safe, permission-checked access to 122 internal tools, secured with OAuth login and backed by a PostgreSQL database with a full audit trail.",
            "Ran a security review of the customer portal and found two serious bugs: an authentication bypass (CVSS 7.9) that let attackers silently take over accounts, and an access-control flaw (CVSS 6.4) that exposed customers' personal information — both reported against CCPA/GDPR requirements.",
            "Made a key database query 96% faster (25s → under 1s) by adding the right indexes across 5 tables with ~6.5M rows, then set up automated alerts so slow queries get caught before users notice.",
            "Built a cookie-consent system that shows the correct privacy messaging based on each visitor's location, staying compliant with GDPR/CCPA rules across 32 countries and 20 US states and verified by 170+ automated tests.",
            "Used site analytics (bounce rate, time on page, conversions) to guide navigation, layout, and content changes that improved user retention.",
            "Replaced the company's old VPN with a modern Zero Trust setup (Cloudflare, Microsoft Entra SSO, MFA, device compliance checks), removing an entire class of security risk plus its constant upkeep.",
            "Turned raw, messy web-scraping output into a clean PostgreSQL prospect database, producing 1,726 qualified leads across 73 metro areas and correctly flagging 541 target dealers with zero errors.",
            "Rebuilt the marketing site from an outdated WordPress theme into a fast, mobile-first React web app, deleting ~30 duplicate page templates and shrinking the main image load by 67.5%.",
            "Automated a scraper for a slow-loading data grid, recovering 100% of rows (vs. 52% before) across 285 batch exports, and built a 177-test QA suite covering 7 browsers and screen sizes."
        ],
    },
    {
        role: 'Web Developer (Contract)',
        company: 'GOLFi',
        companyUrl: 'https://www.golfiusa.com/',
        period: 'Oct 2025 - March 2026',
        bullets: [
            "Led the end-to-end Tailor Brands website redesign, keeping marketing and design aligned around one brand experience.",
            "Grew weekly site traffic from ~58 to ~480 visits (+728%) in 2 weeks with SEO, UX improvements, and targeted campaigns.",
            "Raised engagement across the site: page views jumped from ~200 to ~920 per week and weekly visits from ~350 to 960.",
            "Improved site speed and SEO, lifting the Google Lighthouse score from 68 to 92 and boosting organic search impressions by 45%.",
            "Used site analytics (bounce rate, time on page, conversions) to guide navigation, layout, and content changes that improved user retention.",
            "Worked closely with marketing and design teams so website updates always matched brand goals and active campaigns."
        ],
    },
    {
        role: 'Front-End Developer (Contract)',
        company: 'Uniquelyme',
        companyUrl: 'https://uniquely.me',
        period: 'Mar 2025 - Sept 2025',
        bullets: [
            "Cut website page sizes dramatically (100MB+ down to as low as ~430KB) by optimizing images, removing unused assets, and serving files more efficiently.",
            "Improved page speed and Core Web Vitals, hitting 90+ Google Lighthouse scores through performance and SEO fixes.",
            "Turned Figma designs into pixel-accurate, responsive interfaces that look and work well on any screen.",
            "Resolved Git conflicts and tricky CSS challenges with teammates, keeping the development workflow smooth.",
            "Cleaned up messy legacy CSS, fixing stubborn layout and styling problems while making the code easier to maintain and extend.",
            "Made sure the site stayed consistent and accessible across desktop, tablet, and mobile devices.",
            "Led UI/UX updates across multiple pages, improving mobile and tablet responsiveness through CSS cleanup and smarter layouts.",
        ],
    },
];