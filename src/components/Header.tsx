import React, { useEffect, useState, useRef, useCallback } from 'react';

interface MenuItem {
    id: string;
    title: string;
}

interface MenuProps {
    items: MenuItem[];
}

const Header: React.FC<MenuProps> = ({ items }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Используем словарь intersectionRatio: { sectionId: ratio }
    const ratioMap = useRef<Record<string, number>>({});
    const frameId = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let observer: IntersectionObserver;

        const createObserver = () => {
            // Массив thresholds, чтобы получать коллбэки при любом изменении процента видимости
            const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

            observer = new IntersectionObserver((entries) => {
                // Сначала записываем все intersectionRatio в ratioMap
                entries.forEach(entry => {
                    const { id } = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        ratioMap.current[id] = entry.intersectionRatio;
                    } else {
                        ratioMap.current[id] = 0;
                    }
                });

                // Чтобы не «дёргать» state на каждый entry,
                // используем requestAnimationFrame (один раз на кадр)
                if (frameId.current) {
                    cancelAnimationFrame(frameId.current);
                }
                frameId.current = requestAnimationFrame(() => {
                    // Вычисляем, какая секция имеет максимальный intersectionRatio
                    let maxRatio = 0;
                    let maxId: string | null = null;
                    Object.entries(ratioMap.current).forEach(([sectionId, ratio]) => {
                        if (ratio > maxRatio) {
                            maxRatio = ratio;
                            maxId = sectionId;
                        }
                    });

                    // Обновляем состояние только если действительно сменился активный ID
                    if (maxId && maxId !== activeId) {
                        setActiveId(maxId);
                    }
                });
            }, { threshold: thresholds });

            // Навешиваем на секции
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
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            if (frameId.current) cancelAnimationFrame(frameId.current);
        };
    }, [items, activeId]);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const handleLinkClick = useCallback(() => setIsMenuOpen(false), []);

    return (
        <header
            className={`fixed top-0 w-full h-16 flex z-50 px-10 justify-center items-center
                        ${isScrolled || isMenuOpen ? 'bg-neutral-800 shadow-md' : 'bg-transparent'}`}
            aria-label="Main Navigation"
        >
            <nav className="flex justify-end items-center text-white w-full" role="navigation">
                <button
                    type="button"
                    className="relative w-10 h-10 flex md:hidden justify-center items-center"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    <img
                        src={isMenuOpen
                            ? `${process.env.PUBLIC_URL}/icons/close-btn.svg`
                            : `${process.env.PUBLIC_URL}/icons/menu-btn.svg`
                        }
                        alt={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                        className="w-full h-full object-contain"
                    />
                </button>

                <ul
                    className={`py-2 md:flex flex-col md:flex-row justify-center w-full
                               ${isMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-neutral-800' : 'hidden md:flex'}`}
                    role="menubar"
                >
                    {items.map(({ id, title }) => (
                        <li
                            key={id}
                            role="none"
                            onClick={handleLinkClick}
                            className={`cursor-pointer py-2 px-4 hover:underline
                                        ${activeId === id ? 'font-bold' : ''}`}
                        >
                            <a
                                href={`#${id}`}
                                className="text-white text-center w-full h-full block"
                                tabIndex={0}
                                role="menuitem"
                                aria-current={activeId === id ? 'page' : undefined}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
