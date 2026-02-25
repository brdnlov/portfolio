export type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demo: string;
    code: string;
};

export const projects: Project[] = [
    {
        title: 'Anime Vault',
        description: 'A dynamic anime discovery platform where users can browse, search, and explore their favorite series through a responsive web interface.',
        image: '/placeholder.jpg',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://anime-vault-nu.vercel.app/',
        code: 'https://github.com/brdnlov/anime_vault'
    },
    {
        title: 'Prompt Publisher',
        description: 'A full-stack platform with user authentication that allows users to publish, browse, and save AI prompts from other creators.',
        image: '/placeholder.jpg',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://promptopia-fawn-beta.vercel.app/',
        code: 'https://github.com/brdnlov/promptopia'
    },
    {
        title: 'Car Rental System Dashboard',
        description: 'A car rental management dashboard featuring advanced search functionality and dynamic filtering by brand, make, and model.',
        image: '/placeholder.jpg',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://car-hub-xi-liart.vercel.app/',
        code: 'https://github.com/brdnlov/CarHub'
    },
    {
        title: '5th Avenue Bagelry',
        description: 'Developed a responsive, performance-optimized website for 5th Avenue Bagelry in Downtown Long Beach, focused on intuitive navigation, mobile responsiveness, and improved customer conversion.',
        image: '/placeholder.jpg',
        tags: ['HTML', 'CSS', 'Javascript', 'AWS'],
        demo: 'https://github.com/brdnlov/5th-Ave-Bagelry',
        code: 'https://github.com/brdnlov/5th-Ave-Bagelry'
    },
];