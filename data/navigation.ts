export type NavItem = {
    label: string;
    icon: string;
    href: string;
};

export const navigation: NavItem[] = [
    { label: 'Intro', icon: 'LayoutGrid', href: '/' },
    { label: 'About', icon: 'User', href: '/about' },
    { label: 'Skills', icon: 'Kanban', href: '/skills' },
    { label: 'Work/Projects', icon: 'Layers', href: '/projects' },
    { label: 'Resume', icon: 'Briefcase', href: '/resume' },
    { label: 'Contact', icon: 'Send', href: '/contact' },

];