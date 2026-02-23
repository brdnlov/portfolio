'use client'

const infoBlocks = [
    { label: "Role", detail: "Front-End Developer" },
    { label: "Location", detail: "Los Angeles, California" },
];

export function About() {
    return (
        <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">About Me</p>
                <h3 className="font-display text-3xl font-semibold text-white">Crafting Seamless Digital Experiences</h3>
                <p className="test-base leading-relaxed text-textSecondary">
                    I am Brandon Lov, a front-end/web developer based in Los Angeles, California. I build web applications end to end, pairing clean
                    interfaces with stable services and data layers. I enjoy translating product goals into reliable architecture that is scalable.
                </p>
                <p className="text-base leading-relaxed text-textSecondary">
                    I value thoughtful API design, input validation, and error handling to create robust applications.
                </p>
            </div>
            <div className="flex flex-wrap gap-24">
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