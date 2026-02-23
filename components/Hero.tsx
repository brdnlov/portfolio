import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

export function Hero() {
    return (
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-8">
                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.6em] text-textSecondary">Hello! 👋</p>
                    <h2 className="font-display text-5xl font-semibold leading-tight text-white">Brandon Lov</h2>
                    <p className="text-lg text-textSecondary">
                        I design and build full stack web applications with clean architecture and modern UI/UX principles.
                        I focus on practical solutions that are scalable, maintainable, and user-friendly.
                        I am passionate about creating seamless digital experiences that delight users and drive business success.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/resume"
                        className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background shadow-soft
                        transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        View Resume
                        <Download className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:opacity-80" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 bg-transparent px-6 py-3 text-sm font-sm font-semibold 
                        text-accent transition hover:border-accent hover:bg-accent//10"
                    >
                        Contact Me
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            title: "Experience",
                            detail: "Building full stack web apps for 3+ years.",
                        },
                        {
                            title: "Focus",
                            detail: "Clean Architecture, Scalable Solutions, User-Centric Design.",
                        },
                        {
                            title: "Location",
                            detail: "Los Angeles, California",
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-2xl border border-muted/60 bg-muted/40 p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{item.title}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="relative aspect-suare w-full max-w-md overflow:hidden rounded-3xl border border-muted/60 bg-gradient-to-br from-muted/20 via-transparent to-accent/20 p-6">
                    <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-accent/20 bg-surface/70">
                        <img
                            src="/profile-face.jpg"
                            alt="Brandon Lov protrait"
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}


