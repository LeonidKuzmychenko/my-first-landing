import React from 'react';
import {Box, Flex, Heading} from "@radix-ui/themes";

const ServicesSection: React.FC = () => {
    return (
        <Flex className="h-[600px] bg-[#333333] text-white">
            <Flex align={"center"} justify={"center"} gap={"7vw"} className={"h-full w-full"}>
                <Flex className={"h-full p-10"} align={"center"}>
                    <Flex direction={"column"} gap={"5"}>
                        <Heading as={"h2"}>
                            <Flex direction={"column"}>
                                <span>Отправь заявку сейчас</span><span>и получи</span><span>Бесплатную Тренировку</span>
                            </Flex>
                        </Heading>
                        <ul>
                            <li>* Консультация</li>
                            <li>* Анализ рациона</li>
                            <li>* Пробное занятие</li>
                        </ul>
                    </Flex>
                </Flex>
                <Box className={"h-full"}>
                    <img src={`${process.env.PUBLIC_URL}/images/Respect.png`} className="h-full" alt={"respect"}/>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ServicesSection;