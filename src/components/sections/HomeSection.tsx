import React from 'react';
import {Flex, Heading, Text} from "@radix-ui/themes";

const HomeSection: React.FC = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/HomeGym.jpg`;

    return (
        <Flex
            style={{backgroundImage: `url(${backgroundUrl})`}}
            justify="center"
            align="center"
            className="h-screen w-full text-white bg-cover bg-center"
            aria-labelledby="home-section-title"
        >
            <Flex
                align="center"
                justify="center"
                direction="column"
                role="banner"
                className="h-full w-full"
            >
                <Heading
                    as="h1"
                    id="home-section-title"
                    className="text-4xl font-bold text-center"
                >
                    <Flex
                        direction="column"
                        align="center"
                        className="text-center"
                    >
                        <Text
                            className="text-2xl font-semibold"
                            tabIndex={0}
                            aria-label="Профессия: Персональный тренер"
                        >
                            Персональный тренер
                        </Text>
                        <Text
                            className="text-3xl font-bold"
                            tabIndex={0}
                            aria-label="Имя тренера: Степан Бандера"
                        >
                            Степан Бандера
                        </Text>
                    </Flex>
                </Heading>

                <a
                    href="#goals"
                    className="mt-10 bg-gray-700 text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-800 transition-colors"
                    aria-label="Перейти к целям тренировки"
                >
                    Узнать больше
                </a>
            </Flex>
        </Flex>
    );
};

export default HomeSection;
