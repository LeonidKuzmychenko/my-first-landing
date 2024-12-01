import React from 'react';
import styles from '../../styles/HomeSection.module.css';

const HomeSection: React.FC = () => {
    return (
        <div className={styles.content}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}><span>Персональный тренер</span><span>Степан Бандера</span></h1>
            </div>
        </div>
    );
};

export default HomeSection;