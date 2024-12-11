import React from 'react';
import {Flex} from "@radix-ui/themes";

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
            <Flex
                direction="column"
                gap="15px"
                className="text-white bg-[#333333] p-10 pb-1 min-h-[170px]"
            >
                <h2 id="footer-title" className="sr-only">Информация о контактах и социальных сетях</h2>

                <Flex justify="between" gap="10px" wrap="wrap">
                    <Flex direction="column" gap="5px" flexGrow="1">
                        <Flex justify="center">
                            <span tabIndex={0} aria-label="Адрес фитнес-клуба">Адрес</span>
                        </Flex>
                        <Flex justify="center">
                            <span tabIndex={0} aria-label="Фитнес-клуб Sport Studio 55">Фитнес-клуб Sport Studio 55</span>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="5px" flexGrow="1">
                        <Flex justify="center">
                            <span tabIndex={0} aria-label="Телефон для связи">Телефон</span>
                        </Flex>
                        <Flex justify="center">
                            <a href="tel:+380671322223"
                               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                               aria-label="Позвонить по номеру +380671322223">
                                +380671322223
                            </a>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="5px" flexGrow="1">
                        <Flex justify="center">
                            <span tabIndex={0} aria-label="Социальные сети">Социальные сети</span>
                        </Flex>
                        <Flex justify="center" gap="10px">
                            {cards.map((card, index) => (
                                <a
                                    key={card.alt}
                                    href="#"
                                    className="h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    aria-label={`Открыть страницу в ${card.alt}`}
                                >
                                    <img
                                        className="h-8 w-8"
                                        src={card.src}
                                        alt={card.alt}
                                    />
                                </a>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex justify="center" align="end" flexGrow="1">
                    <p tabIndex={0} aria-label="Авторские права">
                        Copyright © 2024. Created by Грыня Господень
                    </p>
                </Flex>
            </Flex>
        </footer>
    );
};

export default Footer;
