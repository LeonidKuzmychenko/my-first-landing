import React, { useState, useCallback } from 'react';
import { MenuItem, useActiveSection, useResponsiveMenu } from "../services/MenuService";
import { useTranslation } from "react-i18next";
import {FaBars, FaChevronDown, FaGlobe, FaTimes} from "react-icons/fa";

interface MenuProps {
    items: MenuItem[];
}

const Header: React.FC<MenuProps> = ({ items }) => {
    const { t, i18n } = useTranslation('menu');

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { isScrolled, activeId } = useActiveSection(items);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const handleLinkClick = useCallback(() => setIsMenuOpen(false), []);
    const toggleLangMenu = useCallback(() => setIsLangMenuOpen(prev => !prev), []);

    // Используем хук для закрытия меню при изменении ширины экрана
    useResponsiveMenu(setIsMenuOpen);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full h-16 flex z-40 px-10 justify-center items-center 
                        ${isScrolled || isMenuOpen ? 'bg-neutral-800 shadow-md' : 'bg-transparent'}`}
            aria-label={t("navigation")}
        >
            <nav className="flex justify-between items-center text-white w-full">
                <div className="relative">
                    <button
                        type="button"
                        className="px-4 py-2 text-white border border-neutral-400 rounded-md flex items-center gap-2 group"
                        onClick={toggleLangMenu}
                        aria-expanded={isLangMenuOpen}
                        aria-label={t("language-selector")}
                    >
                        {/* Иконка глобуса */}
                        <FaGlobe className="w-5 h-5" aria-hidden="true" />

                        {/* Иконка стрелки вниз */}
                        <FaChevronDown className="w-4 h-4 transform transition-transform duration-200 group-hover:scale-125" />
                    </button>

                    {isLangMenuOpen && (
                        <ul
                            className="absolute mt-2 left-0 bg-neutral-800 text-white rounded-md shadow-lg w-32 z-50"
                            role="menu"
                            aria-label={t("language-options")}
                        >
                            <li
                                className="px-4 py-2 hover:bg-neutral-600 cursor-pointer"
                                onClick={() => changeLanguage('uk')}
                                role="menuitem"
                            >
                                Українська
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-neutral-600 cursor-pointer"
                                onClick={() => changeLanguage('en')}
                                role="menuitem"
                            >
                                English
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-neutral-600 cursor-pointer"
                                onClick={() => changeLanguage('ru')}
                                role="menuitem"
                            >
                                Русский
                            </li>
                        </ul>
                    )}
                </div>

                <button
                    className="relative w-10 h-10 flex md:hidden justify-center items-center"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={t("close-open-label")}
                >
                    {isMenuOpen ? (
                        <FaTimes className="w-full h-full text-white" aria-hidden="true" /> // Иконка крестика
                    ) : (
                        <FaBars className="w-full h-full text-white" aria-hidden="true" /> // Иконка меню
                    )}
                </button>

                {/* Menu Items */}
                <ul
                    className={`py-2 md:flex flex-col md:flex-row justify-center w-full 
                               ${isMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-neutral-800' : 'hidden md:flex'}`}
                >
                    {items.map(({ id, title }) => (
                        <li
                            key={id}
                            onClick={handleLinkClick}
                            className={`cursor-pointer py-2 px-4 md:py-2 md:px-2 lg:py-1 lg:px-4 hover:underline 
                                        ${activeId === id ? 'font-bold' : ''}`}
                        >
                            <a
                                href={`#${id}`}
                                className="text-white text-center text-lg w-full h-full block"
                                tabIndex={0}
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
