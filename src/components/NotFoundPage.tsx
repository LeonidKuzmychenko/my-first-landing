import React from 'react';

const NotFoundPage: React.FC = () => (
    <div
        className="flex flex-col items-center gap-10 justify-center h-screen p-10 text-center"
        role="main"
        aria-labelledby="not-found-title"
    >
        <h1
            id="not-found-title"
            className="text-4xl font-extrabold leading-tight"
        >
            404 - Страница не найдена
        </h1>
        <p
            className="text-gray-600 text-base leading-relaxed"
            tabIndex={0}
            aria-label="К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес или страница была удалена."
        >
            К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес или страница была удалена.
        </p>
        <a
            href="/my-first-landing/"
            className="text-blue-500 text-sm font-medium underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:no-underline"
            aria-label="Вернуться на главную страницу"
        >
            Вернуться на главную
        </a>
    </div>
);

export default NotFoundPage;
