import React from 'react';
import {Flex, Heading, Link, Text} from "@radix-ui/themes";

const NotFoundPage: React.FC = () => (
    <Flex direction={"column"} align={"center"} gap={"10px"} justify={"center"} className={"h-screen p-[40px] text-center"}>
        <Heading as={"h1"}>404 - Страница не найдена</Heading>
        <Text  className={"text-[#555555]"}>
            К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес
            или страница была удалена.
        </Text>
        <Link href="/my-first-landing" className={"text-[#007BFF] no-underline"} >
            Вернуться на главную
        </Link>
    </Flex>
);

export default NotFoundPage;
