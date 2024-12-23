import React from 'react';
import {useTranslation} from "react-i18next";
import {FaCheck} from "react-icons/fa";

const MotivationSection: React.FC = () => {
    const { t, i18n } = useTranslation('motivation');

    return (
        <div
            className="flex p-5 md:p-0 md:h-[700px] bg-neutral-800 text-white"
            aria-labelledby="motivation-title"
            role="region"
        >
            <div className="flex items-center justify-center h-full w-full">
                <div className="flex items-center h-full">
                    <div className="flex flex-col gap-10 md:gap-5 p-0 md:p-5">
                        <h2 id="motivation-title" className="text-4xl font-bold">
                            <div tabIndex={0} className="flex flex-col text-center">
                                <span>{t("title-1")}</span>
                                <span>{t("title-2")}</span>
                            </div>
                        </h2>
                        <p className="text-center text-2xl" tabIndex={0}>{t("text-1")}</p>
                        <p className="text-center text-2xl" tabIndex={0}>{t("text-2")}</p>
                        <ul role="list" className="flex flex-col text-center">
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 flex items-center justify-center"
                            >
                                <FaCheck className="w-7 h-7 mr-2 mb-1" />
                                {t("text-3")}
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 flex items-center justify-center"
                            >
                                <FaCheck className="w-7 h-7 mr-2 mb-1" />
                                {t("text-4")}
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 flex items-center justify-center"
                            >
                                <FaCheck className="w-7 h-7 mr-2 mb-1" />
                                {t("text-5")}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full hidden md:block">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/eugen_without_background.webp`}
                        loading="lazy"
                        className="h-full w-full object-cover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                        alt={`${t("img-alt")}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default MotivationSection;
