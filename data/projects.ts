export type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demo: string;
    code?: string;
};

export const work: Project[] = [
    {
        title: 'Red7Systems',
        description: 'Rebuilt the marketing site as a mobile-first React 18 SPA, eliminating ~30 duplicate components and cutting the hero image payload by 67.5% for faster, cleaner performance.',
        image: '/red7system.png',
        tags: ['React', 'Typescript', 'Express', 'Docker', 'AWS App Runner', 'Cloudflare Workers'],
        demo: 'https://red7systems.com/',
    },
    {
        title: 'UniquelyMe',
        description: 'Front-end performance overhaul of the main site, cutting page asset payloads from 100MB+ to ~430KB and achieving 90+ Google Lighthouse scores through image, CSS, and delivery optimizations.',
        image: '/uniquelyme.png',
        tags: ['Astro', 'HTML/CSS', 'Javascript', 'Node.js', 'Express', 'Kubernetes'],
        demo: 'https://uniquely.me/',
    },
    {
        title: '5th Avenue Bagelry',
        description: 'Developed a responsive, performance-optimized website for 5th Avenue Bagelry in Downtown Long Beach, focused on intuitive navigation, mobile responsiveness, and improved customer conversion.',
        image: '/5th-ave.png',
        tags: ['Typescript', 'Javascript', 'CSS', 'Vercel'],
        demo: 'https://5th-ave-bagelry.vercel.app/',
        code: 'https://github.com/brdnlov/5th-Ave-Bagelry'
    },
    {
        title: 'GOLFi',
        description: 'Redesigned and optimized the company\'s website through SEO and UX improvements that grew weekly traffic by 728% and raised its Google Lighthouse score from 68 to 92.',
        image: '/golfi1.png',
        tags: ['HTML/CSS', 'TailorBrands', 'Google Lighthouse', 'SEO'],
        demo: 'https://www.golfiusa.com/',
    },

];

export const projects: Project[] = [
    {
        title: 'Anime Vault',
        description: 'A dynamic anime discovery platform where users can browse, search, and explore their favorite series through a responsive web interface.',
        image: '/anime-vault.png',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://anime-vault-nu.vercel.app/',
        code: 'https://github.com/brdnlov/anime_vault'
    },
    {
        title: 'Prompt Publisher',
        description: 'A full-stack platform with user authentication that allows users to publish, browse, and save AI prompts from other creators.',
        image: '/prompt.png',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://promptopia-fawn-beta.vercel.app/',
        code: 'https://github.com/brdnlov/promptopia'
    },
    {
        title: 'Car Rental System Dashboard',
        description: 'A car rental management dashboard featuring advanced search functionality and dynamic filtering by brand, make, and model.',
        image: '/car-hub.png',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://car-hub-xi-liart.vercel.app/',
        code: 'https://github.com/brdnlov/CarHub'
    },
];

