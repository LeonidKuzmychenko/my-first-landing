import React from 'react';
import {Box, Flex, Heading} from "@radix-ui/themes";

const ServicesSection: React.FC = () => {
    return (
        <Flex
            className="h-[600px] bg-[#333333] text-white"
            aria-labelledby="services-section-title"
            role="region"
        >
            <Flex align="center" justify="center" gap="7vw" className="h-full w-full">
                <Flex className="h-full p-10" align="center">
                    <Flex direction="column" gap="5">
                        <Heading as="h2" id="services-section-title" className="text-3xl font-bold">
                            <Flex direction="column" className="text-center">
                                <span tabIndex={0} aria-label="Отправь заявку сейчас">Отправь заявку сейчас</span>
                                <span tabIndex={0} aria-label="и получи">и получи</span>
                                <span tabIndex={0} aria-label="Бесплатную тренировку">Бесплатную Тренировку</span>
                            </Flex>
                        </Heading>
                        <ul role="list" aria-label="Список бесплатных услуг">
                            <li role="listitem" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                * Консультация
                            </li>
                            <li role="listitem" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                * Анализ рациона
                            </li>
                            <li role="listitem" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                * Пробное занятие
                            </li>
                        </ul>
                    </Flex>
                </Flex>
                <Box className="h-full">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Respect.png`}
                        className="h-full w-full object-cover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        alt="Изображение, отображающее уважение и признание"
                    />
                </Box>
            </Flex>
        </Flex>
    );
};

export default ServicesSection;
