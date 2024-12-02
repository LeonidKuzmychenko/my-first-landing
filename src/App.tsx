import React from 'react';
import Menu from './components/Menu';
import Section from './components/Section';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactsSection from "./components/sections/ContactsSection";
import GoalsSection from "./components/sections/GoalsSection";
import {BrowserRouter as Router, Route} from 'react-router-dom';

export interface SectionData {
    id: string;
    title: string
    content: React.ReactNode;
}

const App: React.FC = () => {
    document.title = "Персональный тренер Степан Бандера"
    // Данные для секций
    const sections: SectionData[] = [
        {id: 'home', title: 'Главная', content: <HomeSection/>},
        {id: 'goals', title: 'Цели', content: <GoalsSection/>},
        {id: 'services', title: 'Услуги', content: <ServicesSection/>},
        // {id: 'about', title: 'Обо мне', content: <AboutSection/>},
        {id: 'achievements', title: 'Достижения', content: <AchievementsSection/>},
        {id: 'contacts', title: 'Контакты', content: <ContactsSection/>}
    ];

    return (
        // <Router basename="/my-first-landing">
        //     <Route path="/">
                <div style={styles.app}>
                    <Menu item={sections.map(item => ({ id: item.id, title: item.title }))} />
                    {sections.map(({ id, content }) => (
                        <Section key={id} id={id} content={content} />
                    ))}
                    <Footer />
                </div>
            // </Route>
        // </Router>
    );
};

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'column' as const,
        minHeight: '100vh',
    },
};

export default App;
