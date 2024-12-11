import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

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

    // Обработчик прокрутки: устанавливает флаг isScrolled
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Инициализация состояния при загрузке
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Отслеживание пересечения секций
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 } // Срабатывает, если секция видна на 90%
        );

        const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean);

        if (sections.length === 0) {
            console.warn('No sections found for provided item ids:', items);
        }

        sections.forEach(section => section && observer.observe(section as Element));

        return () => sections.forEach(section => section && observer.unobserve(section as Element));
    }, [items]);

    // Обработчик клика по бургер-меню
    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

    // Закрытие меню после клика на элемент
    const handleLinkClick = useCallback(() => setIsMenuOpen(false), []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.transparent}`}>
            <nav className={styles.nav}>
                {/* Бургер-кнопка для мобильных устройств */}
                <button
                    type="button"
                    className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.burgerIcon}></span>
                </button>

                {/* Ссылки меню */}
                <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                    {items.map(({id, title}) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`${styles.button} ${activeId === id ? styles.active : ''}`}
                            onClick={handleLinkClick}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
