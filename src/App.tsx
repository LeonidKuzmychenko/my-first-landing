import React, {useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import MotivationSection from './components/sections/MotivationSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactsSection from "./components/sections/ContactsSection";
import GoalsSection from "./components/sections/GoalsSection";
import NotFoundPage from "./components/NotFoundPage";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import HorizontalGallery from "./components/sections/HorizontalGallery";
import {useTranslation} from "react-i18next";
import BASE_URL from "./utils/constants";
import Fonts from "./components/Fonts";

export interface SectionData {
    id: string;
    title: string;
    content: React.ReactNode;
}

const App: React.FC = () => {

    const { t, i18n } = useTranslation('app');

    useEffect(() => {
        i18n.changeLanguage('uk')
        document.title = t("app-title");
        console.log(i18n.language);
        console.log(BASE_URL);
    }, []);

    const sections: SectionData[] = [
        {id: 'home', title: t("home-title"), content: <HomeSection/>},
        {id: 'goals', title: t("goals-title"), content: <GoalsSection/>},
        {id: 'motivation', title: t("motivation-title"), content: <MotivationSection/>},
        {id: 'achievements', title: t("achievements-title"), content: <AchievementsSection/>},
        {id: 'clients', title: t("clients-title"), content: <HorizontalGallery/>},
        {id: 'contacts', title: t("contacts-title"), content: <ContactsSection/>}
    ];

    return (
        <>
            <Fonts/>
            <Router basename="/my-first-landing">
                <div className="flex flex-col min-h-screen" role="application" aria-labelledby="home-title">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Header items={sections.map(item => ({id: item.id, title: item.title}))}/>
                                <main role="main">
                                    {sections.map(({id, content}) => (
                                        <section key={id} id={id} aria-labelledby={`${id}-title`}>
                                            {content}
                                        </section>
                                    ))}
                                </main>
                                <Footer/>
                            </>
                        }/>
                        <Route path="/my-first-landing" element={<Navigate to="/"/>}/>
                        <Route path="/my-first-landing/" element={<Navigate to="/"/>}/>
                        <Route path="/not-found" element={<NotFoundPage/>}/>
                        <Route path="*" element={<Navigate to="/not-found"/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;