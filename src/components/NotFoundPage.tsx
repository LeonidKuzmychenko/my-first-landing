import React from 'react';

const NotFoundPage: React.FC = () => (
    <div style={styles.container}>
        <h1 style={styles.header}>404 - Страница не найдена</h1>
        <p style={styles.paragraph}>
            К сожалению, запрашиваемая вами страница не существует. Возможно, вы ввели неправильный адрес
            или страница была удалена.
        </p>
        <a href="/my-first-landing" style={styles.link}>
            Вернуться на главную
        </a>
    </div>
);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center' as const,
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    header: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    paragraph: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: '#555',
    },
    link: {
        fontSize: '1.25rem',
        color: '#007BFF',
        textDecoration: 'none',
    },
};

export default NotFoundPage;
