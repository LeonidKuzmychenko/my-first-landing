import React from 'react';
import {Flex, Heading, Link, Text} from "@radix-ui/themes";

const NotFoundPage: React.FC = () => (
    <Flex
        direction="column"
        align="center"
        gap="10px"
        justify="center"
        className="h-screen p-10 text-center"
        role="main"
        aria-labelledby="not-found-title"
    >
        <Heading
            as="h1"
            id="not-found-title"
            className="text-4xl font-bold"
        >
            404 - Страница не найдена
        </Heading>
        <Text
            className="text-[#555555]"
            tabIndex={0}
            aria-label="К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес или страница была удалена."
        >
            К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес или страница была удалена.
        </Text>
        <Link
            href="/my-first-landing"
            className="text-[#007BFF] no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:underline"
            aria-label="Вернуться на главную страницу"
        >
            Вернуться на главную
        </Link>
    </Flex>
);

export default NotFoundPage;