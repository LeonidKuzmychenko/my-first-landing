import React from 'react';

interface CardProps {
    src: string;
    title: string;
    name: string;
    year: string;
}

const AchievementsSection: React.FC = () => {
    const cards: CardProps[] = [
        {
            src: `${process.env.PUBLIC_URL}/images/achievement/odesa_win.webp`,
            title: "Лучший спортсмен",
            name: "Чемпионат Одессы",
            year: "2023"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/achievement/ukraine_champion.webp`,
            title: "Абсолютный чемпион",
            name: "Чемпионат Украины",
            year: "2023"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/achievement/spain_champion.webp`,
            title: "Чемпион",
            name: "Arnold Classic Europe Madrid Spain",
            year: "2023"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/achievement/achievement.webp`,
            title: "Абсолютной чемпион",
            name: "Europe Championship Santa Susana Spain",
            year: "2023"
        }
    ];

    return (
        <div className="flex flex-col gap-10 w-full p-5 md:p-10 bg-gray-100" aria-labelledby="achievements-title">
            <h2 id="achievements-title" className="text-center text-4xl font-bold leading-tight">
                Спортивные достижения
            </h2>

            <div className="flex flex-wrap justify-center gap-10" role="list" aria-label="Список достижений">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 items-center w-72"
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
                            className="w-full aspect-square rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                        >
                            <img
                                src={card.src}
                                loading="lazy"
                                alt={`Изображение достижения ${card.title}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center leading-snug">
                            {card.title}
                        </h3>
                        <p className="flex flex-col">
                            <span className="text-lg font-normal text-center leading-relaxed">
                                {card.name}
                            </span>
                            <span className="text-lg font-normal text-center leading-relaxed">
                                {card.year}
                            </span>
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