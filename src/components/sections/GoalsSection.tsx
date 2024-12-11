import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Flex, Heading, Text } from '@radix-ui/themes';

interface CardProps {
    src: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ src, title, text }) => (
    <Flex
        direction="column"
        align="center"
        gap="10px"
        className="w-[300px]"
        aria-labelledby={`card-title-${title}`}
    >
        <AspectRatio ratio={1} className="w-full rounded-full overflow-hidden">
            <img src={src} alt={title} className="w-full h-full object-cover" />
        </AspectRatio>
        <Heading as="h3" align="center" id={`card-title-${title}`} className="text-lg font-bold">
            {title}
        </Heading>
        <Text align="center" className="text-center text-gray-600">
            {text}
        </Text>
    </Flex>
);

const GoalsSection: React.FC = () => {
    const cards: CardProps[] = [
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Похудение и красивые формы",
            text: "Большой опыт работы фитнес инструктором позволяет мне эффективно решать вопросы с лишним весом"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Набор массы тела",
            text: "Как правильно набрать мышечную массу без вреда для суставов и связок. Современные методики тренировок"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Составление питания",
            text: "Правильное питание - это 70% результата. Программы питания и четкий план, когда, сколько и что кушать"
        }
    ];

    return (
        <Flex
            direction="column"
            align={"center"}
            gap={"40px"}
            className="w-full p-10"
            aria-labelledby="goals-section-title"
        >
            <Heading
                as="h2"
                align="center"
                id="goals-section-title"
            >
                Персональные тренировки — лучший выбор для вас и вашего тела
            </Heading>

            <Flex
                justify={"center"}
                wrap={"wrap"}
                gap={"40px"}
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        src={card.src}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default GoalsSection;
