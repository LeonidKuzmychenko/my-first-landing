import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import ServicesSection from './components/sections/ServicesSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactsSection from "./components/sections/ContactsSection";
import GoalsSection from "./components/sections/GoalsSection";
import NotFoundPage from "./components/NotFoundPage";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import HorizontalGallery from "./components/sections/HorizontalGallery";
import {Flex} from "@radix-ui/themes";

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
        {id: 'clients', title: 'Клиенты', content: <HorizontalGallery/>},
        {id: 'contacts', title: 'Контакты', content: <ContactsSection/>}
    ];

    return (
        <Router basename="/my-first-landing">
            <Flex direction={"column"} className={"min-h-screen"}>
                <Routes>
                    <Route path="/" element={<>
                        <Menu item={sections.map(item => ({id: item.id, title: item.title}))}/>
                        {sections.map(({id, content}) => (
                            content
                        ))}
                        <Footer/>
                    </>}/>
                    <Route path="/my-first-landing" element={<Navigate to="/"/>}/>
                    <Route path="/my-first-landing/" element={<Navigate to="/"/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Flex>
        </Router>
    );
};

export default App;