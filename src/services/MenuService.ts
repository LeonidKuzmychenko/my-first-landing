import { useState, useEffect, useRef } from 'react';

export interface MenuItem {
    id: string;
    title: string;
}

interface UseActiveSectionResult {
    isScrolled: boolean;
    activeId: string | null;
}

export function useActiveSection(items: MenuItem[]): UseActiveSectionResult {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    const ratioMap = useRef<Record<string, number>>({});
    const frameId = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true }); // ✅ Установлен passive: true
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let observer: IntersectionObserver;

        const createObserver = () => {
            const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const { id } = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        ratioMap.current[id] = entry.intersectionRatio;
                    } else {
                        ratioMap.current[id] = 0;
                    }
                });

                if (frameId.current) {
                    cancelAnimationFrame(frameId.current);
                }

                frameId.current = requestAnimationFrame(() => {
                    let maxRatio = 0;
                    let maxId: string | null = null;

                    Object.entries(ratioMap.current).forEach(([sectionId, ratio]) => {
                        if (ratio > maxRatio) {
                            maxRatio = ratio;
                            maxId = sectionId;
                        }
                    });

                    if (maxId && maxId !== activeId) {
                        setActiveId(maxId);
                    }
                });
            }, { threshold: thresholds });

            const sections = items
                .map(({ id }) => document.getElementById(id))
                .filter(Boolean);

            sections.forEach(section => {
                if (section) observer.observe(section);
            });
        };

        createObserver();

        const handleResize = () => {
            observer.disconnect();
            createObserver();
        };

        window.addEventListener('resize', handleResize, { passive: true }); // ✅ Установлен passive: true
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            if (frameId.current) cancelAnimationFrame(frameId.current);
        };
    }, [items, activeId]);

    return { isScrolled, activeId };
}

export const useResponsiveMenu = (setIsMenuOpen: (value: boolean) => void) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize, { passive: true }); // ✅ Установлен passive: true
        return () => window.removeEventListener('resize', handleResize);
    }, [setIsMenuOpen]);
};
