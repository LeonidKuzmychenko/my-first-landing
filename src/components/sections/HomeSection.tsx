import React from 'react';
import {useTranslation} from "react-i18next";

const HomeSection: React.FC = () => {
    const { t, i18n } = useTranslation('home');

    const backgroundUrl = `${process.env.PUBLIC_URL}/images/background.webp`;

    return (
        <div
            style={{ backgroundImage: `url(${backgroundUrl})` }}
            className="flex justify-center items-center h-screen w-full text-white bg-cover bg-center p-10"
            aria-labelledby="home-title"
        >
            <div
                role="banner"
                className="flex flex-col items-center justify-center h-full w-full"
            >
                <h1
                    id="home-title"
                    className="text-4xl font-extrabold leading-tight text-center"
                >
                    <div className="flex flex-col items-center text-center">
                        <p
                            className="text-4xl font-bold leading-snug"
                            tabIndex={0}
                        >
                            {t("title-job")}
                        </p>
                        <p
                            className="text-5xl font-bold leading-tight"
                            tabIndex={0}
                        >
                            {t("title-name")}
                        </p>
                    </div>
                </h1>

                <a
                    href="#goals"
                    className="mt-10 text-xl bg-primary text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 hover:bg-neutral-700 transition-colors"
                >
                    {t("button-next")}
                </a>
            </div>
        </div>
    );
};

export default HomeSection;