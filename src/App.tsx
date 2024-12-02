import React from 'react';
import Menu from './components/Menu';
import Section from './components/Section';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactsSection from "./components/sections/ContactsSection";
import GoalsSection from "./components/sections/GoalsSection";
import NotFoundPage from "./components/NotFoundPage";

export interface SectionData {
    id: string;
    title: string
    content: React.ReactNode;
}

const App: React.FC = () => {
    document.title = "Персональный тренер Степан Бандера"
    const sections: SectionData[] = [
        {id: 'home', title: 'Главная', content: <HomeSection/>},
        {id: 'goals', title: 'Цели', content: <GoalsSection/>},
        {id: 'services', title: 'Услуги', content: <ServicesSection/>},
        {id: 'achievements', title: 'Достижения', content: <AchievementsSection/>},
        {id: 'contacts', title: 'Контакты', content: <ContactsSection/>}
    ];

    switch (window.location.pathname) {
        case '/my-first-landing':
            return <>
                <div style={styles.app}>
                    <Menu item={sections.map(item => ({id: item.id, title: item.title}))}/>
                    {sections.map(({id, content}) => (
                        <Section key={id} id={id} content={content}/>
                    ))}
                    <Footer/>
                </div>
            </>;
        default:
            return <NotFoundPage/>; // Если маршрут неизвестен
    }
};

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column' as const,
        minHeight: '100vh',
    },
};

export default App;
