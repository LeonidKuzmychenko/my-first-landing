import React from 'react';

import {Flex, Heading, Text} from "@radix-ui/themes";

const HomeSection: React.FC = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/HomeGym.jpg`;
    return (
        <Flex style={{backgroundImage: `url(${backgroundUrl})`}}
              justify={"center"} align={"center"}
              className={`h-screen w-full text-white bg-cover bg-center`}
              aria-labelledby="home-section-title">
            <Flex
                align="center"
                justify="center"
                direction="column"
                style={{height: '100%'}}
            >
                <Heading as="h1" id="home-section-title">
                    <Flex direction={"column"} align={"center"} className={"text-center"}>
                        <Text>Персональный тренер</Text>
                        <Text>Степан Бандера</Text>
                    </Flex>
                </Heading>
            </Flex>
        </Flex>
    );
};

export default HomeSection;
