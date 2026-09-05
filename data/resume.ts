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
            "Built a production Model Context Protocol (MCP) server exposing 122 role-gated tools with OAuth 2.1 + PKCE auth, backed by an Aurora PostgreSQL system-of-record (35 tables, audit ledger, row-level security) and a React + Express console routing all writes through audited tools.",
            "Led an authenticated security assessment of a customer portal and SaaS platform, discovering a CVSS 7.9 authentication bypass (silent account takeover) and a CVSS 6.4 IDOR exposing full customer PII, with reporting mapped to CCPA/GDPR exposure.",
            "Cut a core query from ~25s to under 1s (~96% faster) via composite indexing across 5 Aurora MySQL tables (~6.5M rows), then built a zero-downtime slow-query alerting pipeline (Aurora → CloudWatch → Kinesis Firehose → New Relic).",
            "Architected a multi-tenant cookie-consent platform on Cloudflare Workers/D1 (11-table schema, JWT auth) with GDPR/CCPA geo-compliance across 32 countries and 20 US state laws, validated by a 170+ invariant automated test suite.",
            "Implemented data-driven improvements, analyzing site metrics (bounce rate, session duration, conversion rate) and optimizing navigation, layout, and content for better user retention.",
            "Eliminated the legacy VPN and its ops overhead by architecting a Zero Trust access layer (Cloudflare + Entra ID SAML, Conditional Access, Intune MFA/device compliance, BitLocker escrow), removing an entire legacy attack surface.",
            "Built a multi-source prospect database in PostgreSQL (7 normalized tables) that deduplicated raw scrape output into 1,726 qualified prospects across 73 metros, plus a text classifier surfacing 541 target dealers with zero false positives.",
            "Rebuilt the company marketing site from a legacy WordPress theme into a mobile-first React 18 SPA on Docker + AWS App Runner, using single-template routing that eliminated ~30 duplicate components and cut hero image payload by 67.5%.",
            "Automated a Python + Playwright scraper against a lazy-loading AngularJS grid that recovered 100% of rows (vs. 52% on a naive pass) across 285 batch exports, and built a 177-test Playwright QA suite spanning 7 browser/viewport targets."
        ],
    },
    {
        role: 'Web Developer (Contract)',
        company: 'GOLFi',
        companyUrl: 'https://www.golfiusa.com/',
        period: 'Oct 2025 - March 2026',
        bullets: [
            "Owned the end-to-end Tailor Brands site redesign, aligning marketing and design on one brand experience.",
            "Boosted weekly site traffic by 728% (from ~58 to ~480 visits) in 2 weeks through SEO optimization, UX improvements, and targeted campaign promotion.",
            "Increased engagement, growing page views from ~200/week to ~920/week and weekly visits from ~350 to 960.",
            "Improved website performance and SEO metrics, raising Google Lighthouse score from 68 to 92 and increasing organic search impressions by 45%.",
            "Implemented data-driven improvements, analyzing site metrics (bounce rate, session duration, conversion rate) and optimizing navigation, layout, and content for better user retention.",
            "Collaborated cross-functionally with marketing and design teams to align website updates with brand goals and campaigns."
        ],
    },
    {
        role: 'Front-End Developer (Contract)',
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
];