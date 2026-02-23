'use client';

import { useState, useEffect, useMemo } from "react";

type UseActiveSectionOptions = {
    rootMargin?: string;
    threshold?: number;
};

export function useActiveSection(sectionIds: string[], options?: UseActiveSectionOptions) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

    const observerOptions = useMemo(() => ({
        root: null,
        rootMargin: options?.rootMargin ?? "-20% 0px -60% 0px",
        threshold: options?.threshold ?? 0.2,
    }),
        [options?.rootMargin, options?.threshold],
    );

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (!elements.length) {
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries.filter((entry) => entry.isIntersecting);

            if (visibleEntries.length) {
                return;
            }

            visibleEntries.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
            const topEntry = visibleEntries[0];
            const targetId = topEntry.target.getAttribute("id");
            if (targetId) {
                setActiveSection(targetId);
            }
        }, observerOptions);

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [sectionIds, observerOptions]);

    return activeSection;
}