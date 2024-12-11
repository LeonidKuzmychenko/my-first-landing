import React from 'react';
import {Flex} from "@radix-ui/themes";

interface SocialCard {
    src: string
    alt: string
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
        <Flex  direction={"column"} gap={"40px"} className="text-white bg-[#333333] pt-10 ps-10 pr-10 pb-1 min-h-[170px]">
            <Flex justify={"between"} gap={"10px"} wrap={"wrap"}>
                <Flex  direction={"column"} gap={"5px"} flexGrow={"1"}>
                    <Flex justify={"center"}>Адрес</Flex>
                    <Flex justify={"center"}>Фітнес-клуб Sport Studio 55</Flex>
                </Flex>
                <Flex direction={"column"} gap={"5px"} flexGrow={"1"}>
                    <Flex justify={"center"}>Телефон</Flex>
                    <Flex justify={"center"}>+380671322223</Flex>
                </Flex>
                <Flex  direction={"column"} gap={"5px"} flexGrow={"1"}>
                    <Flex justify={"center"}>Социальные сети</Flex>
                    <Flex justify={"center"} gap={"10px"}>
                        {cards.map((card, index) => (
                            <Flex key={card.alt}>
                                <img className="h-8 w-8" src={card.src} alt={card.alt}/>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify={"center"} align={"end"} flexGrow={"1"}>Copyright © 2024. Created by Грыня Господень</Flex>
        </Flex>
    );
};

export default Footer;
