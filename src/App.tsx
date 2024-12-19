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

export interface SectionData {
    id: string;
    title: string;
    content: React.ReactNode;
}

const App: React.FC = () => {

    useEffect(() => {
        document.title = "Персональный тренер Евгений Московцев";
    }, []);

    const sections: SectionData[] = [
        {id: 'home', title: 'Главная', content: <HomeSection/>},
        {id: 'goals', title: 'Цели', content: <GoalsSection/>},
        {id: 'motivation', title: 'Мотивация', content: <MotivationSection/>},
        {id: 'achievements', title: 'Достижения', content: <AchievementsSection/>},
        {id: 'clients', title: 'Клиенты', content: <HorizontalGallery/>},
        {id: 'contacts', title: 'Контакты', content: <ContactsSection/>}
    ];

    return (
        <>
            <style >{`
            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Regular.ttf') format('ttf');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/fonts/Roboto-Medium.ttf') format('ttf');
                font-weight: 500;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/Roboto-Bold.ttf') format('ttf');
                font-weight: 700;
                font-style: normal;
            }

            @font-face {
                font-family: 'Roboto';
                src: url('${process.env.PUBLIC_URL}/Roboto-Black.ttf') format('ttf');
                font-weight: 900;
                font-style: normal;
            }
            `}</style>
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