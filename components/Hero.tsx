import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export function Hero() {
    return (
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-8">
                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Hello! 👋</p>
                    <h2 className="font-display text-5xl font-semibold leading-tight text-white">Brandon Lov</h2>
                    <p className="text-lg text-textSecondary">
                        I am a software engineer who builds web applications end to end, from React interfaces
                        down to the PostgreSQL schemas, cloud infrastructure, and authentication layers behind them.
                        Recently that has meant a role-gated MCP server backed by an audited Aurora database, a
                        multi-tenant consent platform on Cloudflare Workers, and a core query cut from 25 seconds
                        to under one.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/resume"
                        className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-background shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        View Resume
                        <Download className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:opacity-80" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl border border-accent/60 bg-transparent px-6 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
                    >
                        Contact Me
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            title: "Background",
                            detail: "B.S. in Computer Information Systems from Cal Poly Pomona.",
                        },
                        {
                            title: "Focus",
                            detail: "Secure Architecture, Performance, Reliable Data Layers",
                        },
                        {
                            title: "Location",
                            detail: "Los Angeles, California",
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-2xl border border-muted/60 bg-muted/40 p-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{item.title}</p>
                            <p className="mt-2 text-base font-semibold text-white">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="relative aspect-[5/6] w-full max-w-md overflow-hidden rounded-3xl border border-muted/60 bg-gradient-to-br from-muted/20 via-transparent to-accent/20 p-6 shadow-soft">
                    <div className="relative h-full overflow-hidden rounded-2xl border border-dashed border-accent/20 bg-surface/70">
                        <Image
                            src="/profile-picture.JPG"
                            alt="Portrait of Brandon Lov"
                            fill
                            priority
                            sizes="(min-width: 1024px) 400px, (min-width: 640px) 55vw, 85vw"
                            className="object-cover object-[50%_30%]"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}


