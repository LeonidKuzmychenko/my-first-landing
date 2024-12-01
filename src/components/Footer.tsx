import React from 'react';
import styles from '../styles/Footer.module.css';

interface SocialCard {
    src: string
    alt: string
}

const Footer: React.FC = () => {

    const cards: SocialCard[] = [
        {
            src: "/icons/instagram-icon.webp",
            alt: "Instagram"
        },
        {
            src: "/icons/tiktok-icon.png",
            alt: "TikTok"
        }
    ];

    return (
        <footer className={styles.content}>

            <div className={styles.textWrapper}>
                <div className={styles.textItem}>
                    <div className={styles.textItemTitle}>Адрес</div>
                    <div className={styles.textItemValue}>Фітнес-клуб Sport Studio 55</div>
                </div>
                <div className={styles.textItem}>
                    <div className={styles.textItemTitle}>Телефон</div>
                    <div className={styles.textItemValue}>+380671322223</div>
                </div>
                <div className={styles.textItem}>
                    <div className={styles.textItemTitle}>Социальные сети</div>

                    <ul className={styles.socialMediaWrapper}>
                        {cards.map((card, index) => (
                            <li key={card.alt} className={styles.socialMedia}>
                                <img className={styles.socialMediaImage} src={card.src} alt={card.alt}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.creator}>Copyright © 2024. Created by Грыня Господень</div>
        </footer>
    );
};

export default Footer;
