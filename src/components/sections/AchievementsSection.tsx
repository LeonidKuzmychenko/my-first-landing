import React from 'react';

interface CardProps {
    src: string;
    title: string;
    text: string;
}

const AchievementsSection: React.FC = () => {
    const cards: CardProps[] = [
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2021", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2022", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2023", text: "Крутой качок"},
        {src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`, title: "Кубок 2024", text: "Крутой качок"}
    ];

    return (
        <div className="flex flex-col gap-10 w-full p-10" aria-labelledby="achievements-title">
            <h2 id="achievements-title" className="text-center text-2xl font-bold">
                Спортивные достижения
            </h2>

            <div className="flex flex-wrap justify-center gap-10" role="list" aria-label="Список достижений">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2.5 items-center w-72"
                        role="listitem"
                        tabIndex={0}
                        aria-label={`Достижение ${card.title}`}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                const link = document.getElementById(`card-link-${index}`);
                                link?.click();
                            }
                        }}
                    >
                        <div
                            className="w-full aspect-square rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <img
                                src={card.src}
                                alt={`Изображение достижения ${card.title}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">
                            {card.title}
                        </h3>
                        <p className="text-base">
                            {card.text}
                        </p>
                        <a
                            id={`card-link-${index}`}
                            href={`#achievement-${index}`}
                            className="sr-only"
                        >
                            Перейти к достижению {card.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
