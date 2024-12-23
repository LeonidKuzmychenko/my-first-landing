import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";

const NotFoundPage: React.FC = () => {
    const {t, i18n} = useTranslation('notfound');

    useEffect(() => {
        document.title = "404 - Страница не найдена";
        window.history.replaceState({}, '', '/my-first-landing/not-found');
    }, []);

    return (
        <div
            className="flex flex-col items-center gap-10 justify-center h-screen p-10 text-center"
            role="main"
            aria-labelledby="not-found-title"
        >
            <h1
                id="not-found-title"
                className="text-4xl font-extrabold leading-tight"
            >
                {t("title")}
            </h1>
            <p
                className="text-gray-600 text-base leading-relaxed"
                tabIndex={0}
            >
                {t("text")}
            </p>
            <a
                href="/my-first-landing/"
                className="text-neutral-600 text-sm font-medium underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 hover:no-underline"
                tabIndex={0}
            >
                {t("button-back")}
            </a>
        </div>
    );
}


export default NotFoundPage;
