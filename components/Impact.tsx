import { impact } from "@/data/impact";

export function Impact() {
    return (
        <section className="space-y-6">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-accent/80">Impact</p>
                <h3 className="font-display text-3xl font-semibold text-white">Measured, not claimed</h3>
                <p className="max-w-2xl text-base leading-relaxed text-textSecondary">
                    A record of what changed after I worked on it.
                </p>
            </div>

            <dl className="border-y border-muted/60">
                {impact.map((entry, index) => (
                    <div
                        key={entry.metric}
                        style={{ animationDelay: `${index * 70}ms` }}
                        className="grid animate-rise gap-3 border-t border-muted/60 py-5 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
                    >
                        <div>
                            <dt className="text-base font-medium text-white">{entry.metric}</dt>
                            <dd className="mt-1 text-xs leading-relaxed text-textSecondary">{entry.context}</dd>
                        </div>
                        <dd className="flex items-baseline gap-3 tabular-nums sm:justify-end">
                            <span className="text-lg text-textSecondary/70">{entry.before}</span>
                            <span aria-hidden="true" className="text-accent/50">&rarr;</span>
                            <span className="font-display text-2xl font-semibold text-accent">{entry.after}</span>
                            <span className="sr-only">improved to {entry.after}</span>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
