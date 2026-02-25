'use client';

import { Download } from "lucide-react";
import { experiences } from "@/data/resume";

export function Resume() {
    return (
        <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Resume</p>
                    <h3 className="font-display text-3xl font-semibold">Work Experience</h3>
                    <p className="max-w-2xl text-base leading-relaxed text-textSecondary">
                        I work across interfaces, services, and brands to create dependable features. Download my full resume for detailed
                        history, responsibilites, and technical highlights.
                    </p>
                </div>
                <a
                    href="/Resume_Brandon_Lov.pdf"
                    className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 px-5 py-3 text-sm font-semibold text-accent transition
                    hover:border-accent hover:bg-accent/10"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Download className="h-4 w-4" />
                    Download Resume
                </a>
            </div>

            <div className="space-y-10">
                {experiences.map((experience) => (
                    <div key={experience.role} className="relative pl-10">
                        <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full border border-accent/60 bg-background text-center text-xs
                        font-semibold text-accent">
                            ●
                        </span>
                        <div className="rounded-3xl border border-muted/60 bg-muted/40 p-6 shadow-soft">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <h4 className="text-xl font-semibold text-white">{experience.role}</h4>
                                    <a
                                        href={experience.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:underline text-sm"
                                    >
                                        <p className="text-sm text-textSecondary">{experience.company}</p>
                                    </a>
                                </div>
                                <span className="rounded-full border border-muted/70 bg-surface/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-textSecondary">
                                    {experience.period}
                                </span>
                            </div>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-textSecondary">
                                {experience.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-3">
                                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}