import React from 'react';
import {useTranslation} from "react-i18next";

interface CardProps {
    src: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({src, title, text}) => {
    const {t, i18n} = useTranslation('goals');

    return <div
        className="flex flex-col items-center gap-5 w-72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-600"
        aria-labelledby={`card-title-${title}`}
        tabIndex={0}
        role="listitem"
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = document.getElementById(`card-link-${title}`);
                link?.click();
            }
        }}
    >
        <div
            className="w-36 aspect-square rounded-full overflow-hidden transform transition-transform duration-200 hover:scale-110">
            <img
                src={src}
                loading="lazy"
                alt={`${t("goal-img")} ${title}`}
                className="w-full h-full object-cover pointer-events-none"
            />
        </div>
        <h3 id={`card-title-${title}`} className="text-2xl font-bold text-center pointer-events-none">
            {title}
        </h3>
        <p className="text-lg text-center pointer-events-none">
            {text}
        </p>
        <a
            id={`card-link-${title}`}
            href={`#goal-${title}`}
            className="sr-only"
        >
            Подробнее о цели: {title}
        </a>
    </div>
}


const GoalsSection: React.FC = () => {
    const {t, i18n} = useTranslation('goals');

    const cards: CardProps[] = [
        {
            src: `${process.env.PUBLIC_URL}/icons/figure.svg`,
            title: t("card-1-title"),
            text: t("card-1-text"),
        },
        {
            src: `${process.env.PUBLIC_URL}/icons/muscle.svg`,
            title: t("card-2-title"),
            text: t("card-2-text"),
        },
        {
            src: `${process.env.PUBLIC_URL}/icons/diet.svg`,
            title: t("card-3-title"),
            text: t("card-3-text"),
        }
    ];

    return (
        <div className="flex flex-col gap-10 w-full p-5 md:p-10 bg-gray-100" aria-labelledby="goals-title">
            <h2 id="goals-title" className="text-4xl font-bold text-center">
                {t("title")}
            </h2>

            <div className="flex flex-wrap justify-center gap-10" role="list"
                 aria-label={`${t("goal-list")}`}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        src={card.src}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>

            <hr className="w-full h-px bg-gray-300 border-0" aria-hidden="true"/>

            <div className="flex justify-center"
                 tabIndex={0}
                 aria-label={`${t("trainer")}`}>
                <p className="text-justify max-w-[800px] text-lg">
                    {t("description-1")}
                    <a href="#achievements"
                       className="text-blue-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                        {t("description-2")}
                    </a>
                    {t("description-3")}
                    <a href="#clients"
                       className="text-blue-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                        {t("description-4")}
                    </a>
                    {t("description-5")}
                    <a href="#contacts"
                       className="text-blue-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                        {t("description-6")}
                    </a>
                    {t("description-7")}
                </p>
            </div>
        </div>
    );
};

export default GoalsSection;