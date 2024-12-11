import React, {useCallback, useEffect, useState} from 'react';
import {Cross1Icon, HamburgerMenuIcon} from '@radix-ui/react-icons';
import * as Toggle from "@radix-ui/react-toggle";

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

    return (
        <header className={`fixed top-0 w-full h-16 flex z-50 px-10 justify-center items-center ${isScrolled ? 'bg-gray-600 shadow-md' : 'bg-transparent'}`}>
            <nav className="flex justify-end items-center transition-colors duration-300 text-white w-full">
                {/* Бургер-кнопка для мобильных устройств */}
                <Toggle.Root
                    type="button"
                    className={`relative w-10 h-10 flex md:hidden justify-center items-center`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ?
                        <Cross1Icon className="w-full h-full text-white" /> :
                        <HamburgerMenuIcon className="w-full h-full text-white" />
                    }
                </Toggle.Root>

                {/* Ссылки меню */}
                <div className={`md:flex flex-col md:flex-row justify-center gap-5 w-full ${isMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-gray-800' : 'hidden md:flex'}`}>
                    {items.map(({id, title}) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`py-2 px-4 text-white cursor-pointer text-center hover:underline ${activeId === id ? 'font-bold' : ''}`}
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
