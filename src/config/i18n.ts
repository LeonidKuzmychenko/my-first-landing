import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//app
import enAppLang from '../locales/en/app.json';
import ruAppLang from '../locales/ru/app.json';
import ukAppLang from '../locales/uk/app.json';

//home
import enHomeLang from '../locales/en/home.json';
import ruHomeLang from '../locales/ru/home.json';
import ukHomeLang from '../locales/uk/home.json';

//goals
import enGoalsLang from '../locales/ru/goals.json';
import ruGoalsLang from '../locales/ru/goals.json';
import ukGoalsLang from '../locales/ru/goals.json';

//seo
import enSeoLang from '../locales/ru/seo.json';
import ruSeoLang from '../locales/ru/seo.json';
import ukSeoLang from '../locales/ru/seo.json';

//menu
import enMenuLang from '../locales/ru/menu.json';
import ruMenuLang from '../locales/ru/menu.json';
import ukMenuLang from '../locales/ru/menu.json';

//motivation
import enMotivationLang from '../locales/ru/motivation.json';
import ruMotivationLang from '../locales/ru/motivation.json';
import ukMotivationLang from '../locales/ru/motivation.json';

//achievements
import enAchievementsLang from '../locales/ru/achievements.json';
import ruAchievementsLang from '../locales/ru/achievements.json';
import ukAchievementsLang from '../locales/ru/achievements.json';

//clients
import enClientsLang from '../locales/ru/clients.json';
import ruClientsLang from '../locales/ru/clients.json';
import ukClientsLang from '../locales/ru/clients.json';

//contacts
import enContactsLang from '../locales/ru/contacts.json';
import ruContactsLang from '../locales/ru/contacts.json';
import ukContactsLang from '../locales/ru/contacts.json';

//footer
import enFooterLang from '../locales/ru/footer.json';
import ruFooterLang from '../locales/ru/footer.json';
import ukFooterLang from '../locales/ru/footer.json';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                app: enAppLang,
                home: enHomeLang,
                goals: enGoalsLang,
                seo: enSeoLang,
                menu: enMenuLang,
                motivation: enMotivationLang,
                achievements: enAchievementsLang,
                clients: enClientsLang,
                contacts: enContactsLang,
                footer: enFooterLang
            },
            ru: {
                app: ruAppLang,
                home: ruHomeLang,
                goals: ruGoalsLang,
                seo: ruSeoLang,
                menu: ruMenuLang,
                motivation: ruMotivationLang,
                achievements: ruAchievementsLang,
                clients: ruClientsLang,
                contacts: ruContactsLang,
                footer: ruFooterLang
            },
            uk: {
                app: ukAppLang,
                home: ukHomeLang,
                goals: ukGoalsLang,
                seo: ukSeoLang,
                menu: ukMenuLang,
                motivation: ukMotivationLang,
                achievements: ukAchievementsLang,
                clients: ukClientsLang,
                contacts: ukContactsLang,
                footer: ukFooterLang
            }
        },
        fallbackLng: "en", // язык по умолчанию
        supportedLngs: ["en", "ru", "uk"], // поддерживаемые языки
        ns: ['app', 'home', 'goals', 'seo', 'menu', 'motivation', 'achievements', 'clients', 'contacts', 'footer'],
        defaultNS: 'app', // Пространство имен по умолчанию
        interpolation: {
            escapeValue: false, // отключает экранирование
        },
        detection: {
            // Настройки для LanguageDetector
            order: ['localStorage', 'cookie', 'navigator'], // Источники определения языка
            caches: ['localStorage', 'cookie'], // Где сохранять выбранный язык
        },
    })

export default i18n;
