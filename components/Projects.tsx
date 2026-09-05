'use client';

import { useCallback, MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { projects, work } from "@/data/projects";

export function Projects() {
    const handleCardClick = useCallback((url: string) => {
        if (url && url !== "#") {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Work</p>
                <h3 className="font-display text-3xl font-semibold text-white">Where I've shipped for clients</h3>
                <p className="max-w-3xl text-base leading-relaxed text-textSecondary">Websites and platforms I've built or rebuilt for companies - from marketing sites to full
                    product work - that are live in production today.
                </p>

            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {work.map((work) => (
                    <article
                        key={work.title}
                        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-muted/50 bg-muted/40 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                        onClick={() => handleCardClick(work.demo)}
                    >
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={work.image}
                                alt={work.title}
                                fill
                                sizes="(min-width: 1024px) 340px, 92vw"
                                className="object-cover transition duration-300 group-hover:brightness-[0.6]"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-surface/20 to-surface/80 p-5">
                                <div className="flex items-center justify-end">
                                    <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition duration-300 group-hover:opacity-100" />
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-textSecondary">
                                    {work.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-muted/60 bg-surface/80 px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition duration-300 group-hover:pointer-events-auto group-hover:bg-surface/90 group-hover:opacity-100">
                                <div className="flex gap-4">
                                    <a
                                        href={work.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                        className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background shadow-soft transition hover:translate-y-0.5 hover:shadow-xl"
                                    >
                                        Demo
                                    </a>
                                    {work.code && (
                                        <a
                                            href={work.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                            className="flex items-center gap-2 rounded-xl border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/10"
                                        >
                                            <GithubIcon className="h-4 w-4" />  Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-6">
                            <h4 className="text-xl font-semibold text-white">{work.title}</h4>
                            <p className="flex-1 text-sm leading-relaxed text-textSecondary">{work.description}</p>
                        </div>
                    </article>


                ))}
            </div>
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Projects</p>
                <h3 className="font-display text-3xl font-semibold text-white">Projects I've built on my own</h3>
                <p className="max-w-3xl text-base leading-relaxed text-textSecondary">Side projects where I explore new stacks
                    end to end, from front-end to database, just for fun.
                </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-muted/50 bg-muted/40 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                        onClick={() => handleCardClick(project.demo)}
                    >
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 340px, 92vw"
                                className="object-cover transition duration-300 group-hover:brightness-[0.6]"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-surface/20 to-surface/80 p-5">
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
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition duration-300 group-hover:pointer-events-auto group-hover:bg-surface/90 group-hover:opacity-100">
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                        className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background shadow-soft transition hover:translate-y-0.5 hover:shadow-xl"
                                    >
                                        Demo
                                    </a>
                                    {project.code && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
                                            className="flex items-center gap-2 rounded-xl border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/10"
                                        >
                                            <GithubIcon className="h-4 w-4" />  Code
                                        </a>
                                    )}
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
