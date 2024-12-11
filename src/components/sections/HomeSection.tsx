import React from 'react';

import styles from '../../styles/HomeSection.module.css';
import {Flex, Heading} from "@radix-ui/themes";

const HomeSection: React.FC = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/HomeGym.jpg`;
    return (
        <Flex style={{backgroundImage: `url(${backgroundUrl})`}}
              justify={"center"} align={"center"}
              className={`h-screen w-full text-white bg-cover bg-center`}
              aria-labelledby="home-section-title">
            <Flex
                className={styles.titleWrapper}
                align="center"
                justify="center"
                direction="column"
                style={{height: '100%'}}
            >
                <Heading as="h1" id="home-section-title" className={styles.title}>
                    <Flex direction={"column"} align={"center"}>
                        <span className={styles.titlePart}>Персональный тренер</span>
                        <span>Степан Бандера</span>
                    </Flex>
                </Heading>
            </Flex>
        </Flex>
    );
};

export default HomeSection;
