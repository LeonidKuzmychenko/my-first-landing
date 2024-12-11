import React from 'react';
import {AspectRatio} from '@radix-ui/react-aspect-ratio';
import {Flex, Heading, Text} from "@radix-ui/themes";

interface CardProps {
    src: string;
    title: string;
    text: string;
}

const AchievementsSection: React.FC = () => {
    const cards: CardProps[] = [
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2021", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2022", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2023", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2024", text: "Крутой качок"}
    ];

    return (
        <Flex direction={"column"} gap={"40px"} className="w-full p-10" aria-labelledby="achievements-title">
            <Heading as={"h2"} align={"center"} id="achievements-title">
                Спортивные достижения
            </Heading>
            <Flex
                justify="center"
                wrap="wrap"
                gap="40px"
            >
                {cards.map((card, index) => (
                    <Flex key={index} direction={"column"} gap={"10px"} align={"center"} className="w-[300px]">
                        <AspectRatio ratio={1} className="w-full rounded-full overflow-hidden">
                            <img src={card.src} alt={card.title} className="w-full h-full object-cover"/>
                        </AspectRatio>
                        <Heading as={"h3"}>{card.title}</Heading>
                        <Text>{card.text}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default AchievementsSection;
