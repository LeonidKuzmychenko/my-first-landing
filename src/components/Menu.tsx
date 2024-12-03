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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Обработчик прокрутки: устанавливает флаг isScrolled
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 0);
    }, []);

    // Обновление состояния isScrolled при прокрутке
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Отслеживание пересечения секций
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) setActiveId(visibleEntry.target.id);
            },
            { threshold: 0.9 } // Срабатывает, если секция видна на 60%
        );

        const sections = item.map(({ id }) => document.getElementById(id)).filter(Boolean);
        sections.forEach(section => section && observer.observe(section as Element));

        return () => {
            sections.forEach(section => section && observer.unobserve(section as Element));
        };
    }, [item]);

    // Обработчик клика по бургер-меню
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : styles.transparent}`}>
            {/* Бургер-кнопка для мобильных устройств */}
            <a
                className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={styles.burgerIcon}></span>
            </a>

            {/* Ссылки меню */}
            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                {item.map(({ id, title }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`${styles.button} ${activeId === id ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)} // Закрытие меню после клика
                    >
                        {title}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Menu;
