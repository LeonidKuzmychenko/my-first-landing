import React from 'react';
import styles from '../../styles/ServicesSection.module.css';

const ServicesSection: React.FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.textWrapper}>
                <div className={styles.infoWrapper}>
                    <h2 className={styles.title}>
                        <span>Отправь заявку сейчас</span><span>и получи</span><span> Бесплатную Тренировку</span>
                    </h2>
                    <ul className={styles.listWrapper}>
                        <li>* Консультация</li>
                        <li>* Анализ рациона</li>
                        <li>* Пробное занятие</li>
                    </ul>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/Respect.png"} className={styles.image} alt={"respect"}/>
            </div>
        </div>
    );
};

export default ServicesSection;