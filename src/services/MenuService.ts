// useActiveSection.ts
import { useState, useEffect, useRef } from 'react';

export interface MenuItem {
    id: string;
    title: string;
}

interface UseActiveSectionResult {
    isScrolled: boolean;
    activeId: string | null;
}

/**
 * Кастомный хук для:
 * 1) Флага isScrolled (прокручена ли страница)
 * 2) Определения текущей активной секции (activeId) на основе IntersectionObserver
 */
export function useActiveSection(items: MenuItem[]): UseActiveSectionResult {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    // Словарь для хранения intersectionRatio каждой секции: { sectionId: ratio }
    const ratioMap = useRef<Record<string, number>>({});
    const frameId = useRef<number | null>(null);

    /**
     *  Отслеживаем прокрутку страницы, чтобы установить isScrolled=true,
     *  когда пользователь проскроллит чуть больше 0px.
     */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Инициализация состояния при загрузке
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * Подключаем IntersectionObserver, чтобы вычислять, какой элемент
     * в данный момент покрывает наибольший % вьюпорта (intersectionRatio).
     */
    useEffect(() => {
        let observer: IntersectionObserver;

        const createObserver = () => {
            // thresholds: массив значений от 0 до 1 (шаг 0.05 или 0.01).
            // При любом изменении intersectionRatio выше порога будет коллбэк
            const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

            observer = new IntersectionObserver((entries) => {
                // Записываем пересечения в ratioMap
                entries.forEach(entry => {
                    const { id } = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        ratioMap.current[id] = entry.intersectionRatio;
                    } else {
                        ratioMap.current[id] = 0;
                    }
                });

                // Обновляем стейт один раз за кадр, используя requestAnimationFrame
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

                    // Только если действительно сменился активный ID — меняем стейт
                    if (maxId && maxId !== activeId) {
                        setActiveId(maxId);
                    }
                });
            }, { threshold: thresholds });

            // Подключаем observer к секциям
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

        window.addEventListener('resize', handleResize);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            if (frameId.current) cancelAnimationFrame(frameId.current);
        };
    }, [items, activeId]);

    return { isScrolled, activeId };
}
