'use client';

import { skills } from "@/data/skills";
import { Icons } from "@/components/icons";

export function Skills() {
    return (
        <div className="space-y-6">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Skills</p>
                <h3 className="font-display text-3xl font-semibold text-white">Technologies I Work With</h3>
                <p className="max-w-2xl text-base leading-relaxed text-textSecondary">
                    These are the frameworks, languages, and practices I use most often. I adapt to new
                    tools quickly, so this list is always growing.
                </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                {skills.map((category) => {
                    const Icon = Icons[category.icon];
                    return (
                        <div
                            key={category.title}
                            className="group flex flex-col gap-4 rounded-3xl border border-muted/50 bg-muted/40 p-6 shadow-soft transition"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                                    {Icon && <Icon className="h-5 w-5" />}
                                </span>
                                <p className="text-lg font-semibold text-white">{category.title}</p>
                            </div>
                            <ul className="flex flex-wrap gap-2 text-sm text-textSecondary">
                                {category.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-lg border border-muted/60 bg-surface/80 px-3 py-1">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}