export type ImpactEntry = {
    metric: string;
    before: string;
    after: string;
    context: string;
};

// Every figure here is traceable to a bullet in data/resume.ts.
export const impact: ImpactEntry[] = [
    {
        metric: "Core query latency",
        before: "25s",
        after: "<1s",
        context: "Red7 Systems — composite indexing across 5 Aurora tables, ~6.5M rows",
    },
    {
        metric: "Page asset payload",
        before: "100MB",
        after: "430KB",
        context: "Uniquelyme — image optimization and delivery strategy",
    },
    {
        metric: "Scraper row recovery",
        before: "52%",
        after: "100%",
        context: "Red7 Systems — Playwright against a lazy-loading grid, 285 batch exports",
    },
    {
        metric: "Lighthouse performance",
        before: "68",
        after: "92",
        context: "GOLFi — front-end performance and SEO work",
    },
    {
        metric: "Weekly site traffic",
        before: "58",
        after: "480",
        context: "GOLFi — visits per week, measured over two weeks",
    },
];
