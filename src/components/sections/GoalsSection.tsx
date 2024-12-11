import React from 'react';

interface CardProps {
    src: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ src, title, text }) => (
    <div
        className="flex flex-col items-center gap-2.5 w-72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
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
            className="w-full aspect-square rounded-full overflow-hidden"
        >
            <img
                src={src}
                alt={`Изображение для цели: ${title}`}
                className="w-full h-full object-cover pointer-events-none"
            />
        </div>
        <h3
            id={`card-title-${title}`}
            className="text-lg font-bold text-center pointer-events-none"
        >
            {title}
        </h3>
        <p className="text-center text-gray-600 pointer-events-none">
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
);

const GoalsSection: React.FC = () => {
    const cards: CardProps[] = [
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Похудение и красивые формы",
            text: "Большой опыт работы фитнес инструктором позволяет мне эффективно решать вопросы с лишним весом"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Набор массы тела",
            text: "Как правильно набрать мышечную массу без вреда для суставов и связок. Современные методики тренировок"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "Составление питания",
            text: "Правильное питание - это 70% результата. Программы питания и четкий план, когда, сколько и что кушать"
        }
    ];

    return (
        <div className="flex flex-col items-center gap-10 w-full p-10" aria-labelledby="goals-section-title">
            <h2 id="goals-section-title" className="text-3xl font-bold text-center">
                Персональные тренировки — лучший выбор для вас и вашего тела
            </h2>

            <div className="flex flex-wrap justify-center gap-10" role="list" aria-label="Список целей персональных тренировок">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        src={card.src}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoalsSection;
