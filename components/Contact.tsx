'use client';

import { label } from "framer-motion/client";
import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
    {
        label: "Email",
        href: "mailto:brdnlov@gmail.com",
        icon: Mail,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/brandon-lov/",
        icon: Linkedin,
    },
    {
        label: "GitHub",
        href: "https://github.com/brdnlov",
        icon: Github,
    },
];

export function Contact() {
    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Contact</p>
                <h3 className="font-display text-3xl font-semibold text-white">Let's Connect</h3>
                <p className="max-w-2xl text-base leading-relaxed text-textSecondary">Have an idea or opportunity in mind? I'd love to hear about it.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <form className="grid gap-5 rounded-3xl border border-muted/60 bg-muted/40 p-8 shadow-soft">
                    <div className="grid gap-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-textSecondary">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="rounded-2xl border border-muted/70 bg-surface/70 px-4 py-3 text-sm text-white text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-textSecondary">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="brdnlov@gmail.com"
                            className="rounded-2xl border border-muted/70 bg-surface/70 px-4 py-3 text-sm text-white text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="Subject" className="text-xs uppercase tracking-[0.2em] text-textSecondary">Subject</label>
                        <input
                            id="Subject"
                            type="text"
                            placeholder="Project Inquiry"
                            className="rounded-2xl border border-muted/70 bg-surface/70 px-4 py-3 text-sm text-white text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-textSecondary">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Share your idea, project details, or just say hello 👋"
                            className="rounded-2xl border border-muted/70 bg-surface/70 px-4 py-3 text-sm text-white text-textPrimary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-background shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        Send Message
                    </button>
                </form>
                <div className="space-y-6">
                    <div className="rounded-3xl border border-muted/60 bg-muted/40 p-6 shadow-soft">
                        <h4 className="text-lg font-semibold text-white">How I can help</h4>
                        <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                            Whether you have a project in mind, want to collaborate, or just want to chat about tech, I'm all ears. Feel free to reach out!
                        </p>
                    </div>
                    <div className="rounded-3xl border border-muted/60 bg-muted/40 p-6 shadow-soft">
                        <h4 className="text-xs uppercase tracking-[0.3em] text-textSecondary">Connect</h4>
                        <ul className="mt-4 grid gap-4">
                            {socialLinks.map((item) => {
                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-textPrimary transition hover:border-accent hover:bg-accent/10 hover:text-accent"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted/50 text-accent transition group hover:bg-accent/10">
                                                    <item.icon className="h-5 w-5" />
                                                </span>
                                                {item.label}
                                            </span>
                                            <span className="text-xs uppercase tracking-[0.3em]">Open</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

