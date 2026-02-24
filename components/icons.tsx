import type { ComponentType, SVGProps } from "react";
import {
    LayoutGrid,
    User,
    Kanban,
    Layers,
    Award,
    Briefcase,
    Send,
    Monitor,
    Server,
    Cog,
    X,
    ArrowUpRight,
    Download,
    Mail,
    Linkedin,
    Github,
    FileText,
} from "lucide-react";

type IconMap = {
    [key: string]: ComponentType<SVGProps<SVGSVGElement>>;
};

export const Icons: IconMap = {
    LayoutGrid,
    User,
    Kanban,
    Layers,
    Award,
    Briefcase,
    Send,
    Monitor,
    Server,
    Cog,
    X,
    ArrowUpRight,
    Download,
    Mail,
    Linkedin,
    Github,
    FileText,
};