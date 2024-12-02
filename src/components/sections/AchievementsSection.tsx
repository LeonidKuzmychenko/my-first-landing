import React from 'react';
import styles from '../../styles/AchievementsSection.module.css';

interface Card {
    src: string
    title: string
    text: string
}

const AchievementsSection: React.FC = () => {

    const cards: Card[] = [
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "кубок 2021",
            text: "Крутой качок"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "кубок 2022",
            text: "Крутой качок"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "кубок 2023",
            text: "Крутой качок"
        },
        {
            src: `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
            title: "кубок 2024",
            text: "Крутой качок"
        },

    ];

    return (
        <div className={styles.content}>
            <div className={styles.title}>Спортивные достижения</div>
            <div className={styles.cardsWrapper}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <img src={card.src} className={styles.cardImage} alt={card.title}/>
                        <div className={styles.cardTitle}>{card.title}</div>
                        <div className={styles.cardText}>{card.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;