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
import enGoalsLang from '../locales/en/goals.json';
import ruGoalsLang from '../locales/ru/goals.json';
import ukGoalsLang from '../locales/uk/goals.json';

//seo
import enSeoLang from '../locales/en/seo.json';
import ruSeoLang from '../locales/ru/seo.json';
import ukSeoLang from '../locales/uk/seo.json';

//menu
import enMenuLang from '../locales/en/menu.json';
import ruMenuLang from '../locales/ru/menu.json';
import ukMenuLang from '../locales/uk/menu.json';

//motivation
import enMotivationLang from '../locales/en/motivation.json';
import ruMotivationLang from '../locales/ru/motivation.json';
import ukMotivationLang from '../locales/uk/motivation.json';

//achievements
import enAchievementsLang from '../locales/en/achievements.json';
import ruAchievementsLang from '../locales/ru/achievements.json';
import ukAchievementsLang from '../locales/uk/achievements.json';

//clients
import enClientsLang from '../locales/en/clients.json';
import ruClientsLang from '../locales/ru/clients.json';
import ukClientsLang from '../locales/uk/clients.json';

//contacts
import enContactsLang from '../locales/en/contacts.json';
import ruContactsLang from '../locales/ru/contacts.json';
import ukContactsLang from '../locales/uk/contacts.json';

//footer
import enFooterLang from '../locales/en/footer.json';
import ruFooterLang from '../locales/ru/footer.json';
import ukFooterLang from '../locales/uk/footer.json';

//notfound
import enNotFoundLang from '../locales/en/notfound.json';
import ruNotFoundLang from '../locales/ru/notfound.json';
import ukNotFoundLang from '../locales/uk/notfound.json';


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
                footer: enFooterLang,
                notfound: enNotFoundLang
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
                footer: ruFooterLang,
                notfound: ruNotFoundLang
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
                footer: ukFooterLang,
                notfound: ukNotFoundLang
            }
        },
        fallbackLng: "en", // язык по умолчанию
        supportedLngs: ["en", "ru", "uk"], // поддерживаемые языки
        ns: ['app', 'home', 'goals', 'seo', 'menu', 'motivation', 'achievements', 'clients', 'contacts', 'footer', 'notfound'],
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
