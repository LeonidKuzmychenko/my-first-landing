import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/Menu.module.css';

interface MenuItem {
    id: string;
    title: string;
}

interface MenuProps {
    item: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ item }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Стейт для управления видимостью меню на мобильных устройствах

    // Оптимизация функции handleScroll с помощью useCallback
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Используем Intersection Observer для отслеживания секций
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.6,
            }
        );

        item.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            item.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, [item]);

    return (
        <nav id="topMenu" className={`${styles.nav} ${isScrolled ? styles.scrolled : styles.transparent}`}>
            {/* Кнопка бургер-меню */}
            <button
                className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className={styles.burgerIcon}></span>
            </button>

            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                {item.map(({ id, title }) => (
                    <button
                        key={id}
                        onClick={() => {
                            const element = document.getElementById(id);
                            const menu = document.getElementById("topMenu");

                            if (element && menu) {
                                const menuHeight = menu.offsetHeight;
                                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                const offsetPosition = elementPosition - menuHeight;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth',
                                });
                            }
                        }}
                        className={`${styles.button} ${activeId === id ? styles.active : ''}`}
                    >
                        {title}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Menu;
