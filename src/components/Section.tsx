import React from 'react';
import styles from '../styles/Section.module.css';

interface SectionProps {
    id: string,
    content: React.ReactNode,
}

const Section: React.FC<SectionProps> = ({id, content}) => {
    return (
        <section id={id} className={styles.content}>
            {content}
        </section>
    );
};

export default Section;
