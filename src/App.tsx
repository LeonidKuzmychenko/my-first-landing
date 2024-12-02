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
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

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

    let path = window.location.pathname;
    console.log("path = " + path)

    // const content = <>
    //     <div style={styles.app}>
    //         <Menu item={sections.map(item => ({id: item.id, title: item.title}))}/>
    //         {sections.map(({id, content}) => (
    //             <Section key={id} id={id} content={content}/>
    //         ))}
    //         <Footer/>
    //     </div>
    // </>

    // switch (path) {
    //     case '/my-first-landing':
    //         return content;
    //     case '/my-first-landing/':
    //         return content;
    //     default:
    //         return <NotFoundPage/>;
    // }

    return (
        <Router basename="/my-first-landing">
            <div style={styles.app}>
                <Routes>
                    <Route path="/" element={<>
                        <Menu item={sections.map(item => ({id: item.id, title: item.title}))}/>
                        {sections.map(({id, content}) => (
                            <Section key={id} id={id} content={content}/>
                        ))}
                        <Footer/>
                    </>}/>
                    <Route path="/my-first-landing" element={<Navigate to="/"/>}/>
                    <Route path="/my-first-landing/" element={<Navigate to="/"/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </Router>
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