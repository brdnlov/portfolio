'use client';

import { useCallback, MouseEvent } from "react";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
    const handleCardClick = useCallback((url: string) => {
        if (url && url !== "#") {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Projects</p>
                <h3 className="font-display text-3xl font-semibold text-white">Applied full stack case studies</h3>
                <p className="max-w-3xl text-base leading-relaxed text-textSecondary">
                    I build products that combine clear interfaces with dependable functionality. Here are a few of my recent projects that
                    demonstrate my skills in frontend and backend development, as well as my ability to create seamless user experiences.
                </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-muted/50 bg-muted/40 shadow-soft
                        transition"
                        onClick={() => handleCardClick(project.demo)}
                    >
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition duration-300 group-hover:brightness-[0.6]"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between bg gradient-to-b from-transparent via-surface/20 to-surface/80 p-5">
                                <div className="flex items-center justify-end">
                                    <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition duration-300 group-hover:opacity-100" />
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-textSecondary">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-muted/60 bg-surface/80 px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-surface/90/0 opacity-0 backdrop-blur-sm
                            transition duration-300 group-hover:pointer-events-auto group-hover:bg-surface/90 group-hover:opacity-100">
                                <div className="flex gap-4">
                                    {/* <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                        className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background shadow-soft transition hover:translate-y-0.5 hover:shadow-xl"
                                    >
                                        Demo
                                    </a> */}
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                        className="flex items-center gap-2 rounded-xl border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/10"
                                    >
                                        <GithubIcon className="h-4 w-4" />  Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-6">
                            <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                            <p className="flex-1 text-sm leading-relaxed text-textSecondary">{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}   
