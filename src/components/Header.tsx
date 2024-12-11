import React, {useCallback, useEffect, useState} from 'react';
import {Cross1Icon, HamburgerMenuIcon} from '@radix-ui/react-icons';

interface MenuItem {
    id: string;
    title: string;
}

interface MenuProps {
    items: MenuItem[];
}

const Header: React.FC<MenuProps> = ({items}) => {
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
            {threshold: 0.7} // Срабатывает, если секция видна на 90%
        );

        const sections = items.map(({id}) => document.getElementById(id)).filter(Boolean);

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

    // Сброс состояния меню при изменении ширины экрана
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`fixed top-0 w-full h-16 flex z-50 px-10 justify-center items-center ${isScrolled ? 'bg-[#666] shadow-md' : 'bg-transparent'}`} aria-label="Main Navigation">
            <nav className="flex justify-end items-center transition-colors duration-300 text-white w-full" role="navigation">
                {/* Бургер-кнопка для мобильных устройств */}
                <button
                    type="button"
                    className="relative w-10 h-10 flex md:hidden justify-center items-center"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ?
                        <Cross1Icon className="w-full h-full text-white" /> :
                        <HamburgerMenuIcon className="w-full h-full text-white" />
                    }
                </button>

                {/* Ссылки меню */}
                <ul
                    className={`py-2 md:flex flex-col md:flex-row justify-center w-full ${isMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-[#333]' : 'hidden md:flex'}`}
                    role="menubar"
                >
                    {items.map(({id, title}, index) => (
                        <li
                            key={id}
                            role="none"
                            onClick={handleLinkClick}
                            className={`cursor-pointer py-2 px-4 hover:underline ${activeId === id ? 'font-bold' : ''}`}
                        >
                            <a
                                href={`#${id}`}
                                className="text-white text-center w-full h-full block"
                                tabIndex={index === 0 ? 0 : -1}
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
