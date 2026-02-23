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
        title: 'TaskFlow',
        description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
        image: '/taskflow.jpg',
        tags: ['React', 'Tailwind CSS'],
        demo: 'https://my-portfolio-demo.com',
        code: 'https://github.com/my-portfolio'
    },
    {
        title: 'ShopLite',
        description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
        image: '/shoplite.jpg',
        tags: ['React', 'Tailwind CSS'],
        demo: 'https://my-portfolio-demo.com',
        code: 'https://github.com/my-portfolio'
    },
    {
        title: 'Car Rental System Dashboard (Demo Project',
        description: 'A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
        image: '/placeholder.jpg',
        tags: ['Next.js', 'React', 'Tailwind CSS'],
        demo: 'https://my-portfolio-demo.com',
        code: 'https://github.com/my-portfolio'
    },
];