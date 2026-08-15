'use client'

const infoBlocks = [
    { label: "Role", detail: "Software Engineer" },
    { label: "Location", detail: "Los Angeles, California" },
];

export function About() {
    return (
        <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">About Me</p>
                <h3 className="font-display text-3xl font-semibold text-white">Engineering Systems That Hold Up</h3>
                <p className="text-base leading-relaxed text-textSecondary">
                    I am Brandon Lov, a software engineer based in Los Angeles, California. I work across the
                    whole stack, from React and Next.js interfaces to Node and Express services, PostgreSQL
                    data models, and the AWS and Cloudflare infrastructure underneath. I studied Computer
                    Information Systems at Cal Poly Pomona, and my work since has moved steadily deeper into
                    the systems layer, from front-end performance into services, data modeling, and security.
                </p>
                <p className="text-base leading-relaxed text-textSecondary">
                    What I care about most is whether software holds up under real use. That means designing
                    schemas with row-level security and audit trails from the start, treating authentication
                    and authorization as architecture rather than a feature, and validating behavior with real
                    test coverage. I like problems where the fix is measurable, and I like leaving a codebase
                    simpler than I found it.
                </p>
            </div>
            <div className="flex flex-wrap items-start gap-4">
                {infoBlocks.map((item) => (
                    <div
                        key={item.label}
                        className="flex min-w-[11rem] flex-col gap-1 rounded-2xl border border-accent/25 bg-gradient-to-br from-muted/50 via-muted/30 to-accent/20 p-4 shadow-soft"
                    >
                        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-accent/80">{item.label}</p>
                        <p className="text-base font-semibold text-white">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}