import React from 'react';
import {useTranslation} from "react-i18next";

interface SocialCard {
    src: string;
    url: string;
    alt: string;
}

const Footer: React.FC = () => {
    const {t, i18n} = useTranslation('footer');

    const cards: SocialCard[] = [
        {
            src: `${process.env.PUBLIC_URL}/icons/instagram-icon.webp`,
            url: "https://www.instagram.com/",
            alt: "Instagram"
        },
        {
            src: `${process.env.PUBLIC_URL}/icons/tiktok-icon.png`,
            url: "https://www.tiktok.com/",
            alt: "TikTok"
        }
    ];

    return (
        <footer role="contentinfo" aria-labelledby="footer-title">
            <div className="flex flex-col gap-4 text-white bg-neutral-800 p-5 pb-1 md:p-10 md:pb-1 min-h-[170px]">
                <h2 id="footer-title" className="sr-only">
                    {t("title")}
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-4 flex-wrap">
                    <div className="flex flex-row md:flex-col gap-2 flex-1 text-center">
                        <h3 tabIndex={0}
                            className="flex justify-center items-center text-xl font-bold leading-snug">
                            {t("address")}<span className="block md:hidden">:</span>
                        </h3>
                        <span tabIndex={0}
                              className="flex justify-center items-center mt-1 text-base font-normal leading-relaxed">
                            {t("address-value")}
                        </span>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 flex-1 text-center">
                        <h3 tabIndex={0}
                            className="flex justify-center items-center text-xl font-bold leading-snug">
                            {t("phone")}<span className="block md:hidden">:</span>
                        </h3>
                        <a
                            href={"tel:" + `${t("phone-value")}`}
                            className="flex justify-center items-center mt-1 leading-relaxed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            aria-label={`Позвонить по номеру ${t("phone-value")}`}
                        >
                            {t("phone-value")}
                        </a>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 flex-1 text-center">
                        <h3
                            tabIndex={0}
                            className="flex justify-center items-center text-xl font-bold leading-snug"
                        >
                            {t("social")}<span className="block md:hidden">:</span>
                        </h3>
                        <div className="flex justify-center gap-2">
                            {cards.map((card, index) => (
                                <a
                                    key={card.alt}
                                    href={card.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                                    aria-label={`Открыть страницу в ${card.alt}`}
                                >
                                    <img
                                        className="h-8 w-8"
                                        loading="lazy"
                                        src={card.src}
                                        alt={card.alt}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-end flex-1 text-center gap-5">
                    <p
                        tabIndex={0}
                        aria-label="Авторские права"
                        className="text-sm font-medium leading-snug"
                    >
                        {t("creator")}
                    </p>
                    <a
                        tabIndex={0}
                        aria-label="Политика конфиденциальности"
                        href="https://www.apache.org/licenses/LICENSE-2.0"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-sm font-medium leading-snug cursor-pointer relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                    >
                        {t("policy")}
                        <div
                            className="absolute bottom-full left-0 mb-2 px-3 py-2 text-xs text-white bg-neutral-800 rounded-md hidden group-hover:block group-focus:block whitespace-normal w-full"
                        >
                            {t("policy-up")}
                        </div>
                    </a>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
