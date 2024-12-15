// Header.tsx
import React, { useState, useCallback } from 'react';
import {MenuItem, useActiveSection} from "../services/MenuService";

interface MenuProps {
    items: MenuItem[];
}

const Header: React.FC<MenuProps> = ({ items }) => {
    // Меню открыто/закрыто
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Логика (isScrolled, activeId) берём из нашего кастомного хука
    const { isScrolled, activeId } = useActiveSection(items);

    // Тоггл бургер-меню
    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

    // Закрыть меню при клике на пункт
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
                        loading="lazy"
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
                                className="text-white text-center text-lg w-full h-full block"
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
