'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Icons } from "@/components/icons";

export function Sidebar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleNavigate = () => {
        setMobileOpen(false);
    };

    if (!mounted) return null;

    return (
        <>
            <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-muted/40 bg-surface/80 p-6 shadow-soft md:flex md:flex-col
            md:justify-between md:rounded-r-3xl md:border-r-0 md:bg-surface/60 md:backdrop-blur">
                <div className="flex flex-col gap-8">
                    <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.4em] text-textSecondary">Portfolio</p>
                        <h1 className="font-display text-2xl font-semibold">Brandon Lov</h1>
                        <p className="text-sm text-textSecondary">Front-end/Web Developer</p>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {navigation.map((item) => {
                            const Icon = Icons[item.icon];
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? 'bg-accent/10 text-accent'
                                        : 'text-textSecondary hover:bg-muted/70 hover:text-textPrimary'
                                        }`}
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted/70 text-accent transition group-hover:bg-accent/
                                    10 group-hover:text-accent">
                                        {Icon && <Icon className="h-4 w-4" />}
                                    </span>
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-muted/40 bg-surface/90 px-4 py-3
            backdrop-blur md:hidden">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-textSecondary">Portfolio</p>
                    <p className="font-display text-lg font-semibold">Brandon Lov</p>
                </div>
                <button
                    type="button"
                    onClick={() => setMobileOpen(prev => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-muted/50 bg-muted/40 text-textPrimary"
                    aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {mobileOpen ? (
                <nav className="fixed inset-y-0 left-0 z-30 w-72 bg-surface px-6 py-20 shadow-soft md:hidden">
                    <div className="flex flex-col gap-6">
                        {navigation.map((item) => {
                            const Icon = Icons[item.icon];
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleNavigate}
                                    className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-accent/10 text-accent' : 'text-textSecondary hover:bg-muted/70 hover:text-textPrimary'
                                        }`}
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted/70 text-accent transition group-hover:bg-accent/10 group-hover:text-accent">
                                        {Icon && <Icon className="h-4 w-4" />}
                                    </span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            ) : null}
        </>
    );
}
