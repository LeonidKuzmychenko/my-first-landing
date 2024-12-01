import React from 'react';
import styles from '../../styles/GoalsSection.module.css';

interface Card {
    src: string
    title: string
    text: string
}

const GoalsSection: React.FC = () => {

    const cards: Card[] = [
        {
            src: "/images/AchivementsKachok.jpg",
            title: "Похудение и красивые формы",
            text: "Большой опыт работы фитнес инструктором позволяет мне эффективно решать вопросы с лишним весом"
        },
        {
            src: "/images/AchivementsKachok.jpg",
            title: "Набор массы тела",
            text: "Как правильно набрать мышечную массу без вреда для суставов и связок. Современные методики тренировок"
        },
        {
            src: "/images/AchivementsKachok.jpg",
            title: "Составление питания",
            text: "Правильное питание - это 70% результата. Программы питания и четкий план, когда, сколько и что кушать"
        }
    ];

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Персональные тренировки лучший выбор для вас и вашего тела</h2>


            <div className={styles.cardsWrapper}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <img src={card.src} className={styles.cardImage} alt={card.title} />
                        <div className={styles.cardTitle}>{card.title}</div>
                        <div className={styles.cardText}>{card.text}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default GoalsSection;