import React from 'react';

interface SocialCard {
    src: string;
    alt: string;
}

const Footer: React.FC = () => {

    const cards: SocialCard[] = [
        {
            src: `${process.env.PUBLIC_URL}/icons/instagram-icon.webp`,
            alt: "Instagram"
        },
        {
            src: `${process.env.PUBLIC_URL}/icons/tiktok-icon.png`,
            alt: "TikTok"
        }
    ];

    return (
        <footer role="contentinfo" aria-labelledby="footer-title">
            <div
                className="flex flex-col gap-4 text-white bg-neutral-800 p-5 pb-1 md:p-10 md:pb-1 min-h-[170px]"
            >
                <h2 id="footer-title" className="sr-only">
                    Информация о контактах и социальных сетях
                </h2>

                <div
                    className="flex flex-col md:flex-row justify-between gap-4 flex-wrap"
                >
                    <div className="flex flex-col gap-2 flex-1 text-center">
                        <h3
                            tabIndex={0}
                            aria-label="Адрес фитнес-клуба"
                            className="text-xl font-semibold leading-snug"
                        >
                            Адрес
                        </h3>
                        <span
                            tabIndex={0}
                            aria-label="Фитнес-клуб Sport Studio 55"
                            className="text-base font-normal leading-relaxed"
                        >
                            г. Одесса, с. Лиманка, ул. Жемчужная 1, Sport Studio 55
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 text-center">
                        <h3
                            tabIndex={0}
                            aria-label="Телефон для связи"
                            className="text-xl font-semibold leading-snug"
                        >
                            Телефон
                        </h3>
                        <a
                            href="tel:+380671322223"
                            className="text-base font-normal leading-relaxed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            aria-label="Позвонить по номеру +380671322223"
                        >
                            +380671322223
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 text-center">
                        <h3
                            tabIndex={0}
                            aria-label="Социальные сети"
                            className="text-xl font-semibold leading-snug"
                        >
                            Социальные сети
                        </h3>
                        <div className="flex justify-center gap-2">
                            {cards.map((card, index) => (
                                <a
                                    key={card.alt}
                                    href="#"
                                    className="h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                                    aria-label={`Открыть страницу в ${card.alt}`}
                                >
                                    <img
                                        className="h-8 w-8"
                                        src={card.src}
                                        alt={card.alt}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-end flex-1 text-center">
                    <p
                        tabIndex={0}
                        aria-label="Авторские права"
                        className="text-sm font-medium leading-snug"
                    >
                        Copyright © 2024. Created by Грыня Господень
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;