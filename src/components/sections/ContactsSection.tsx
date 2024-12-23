import React from 'react';
import {useTranslation} from "react-i18next";

const ContactsSection: React.FC = () => {
    const { t, i18n } = useTranslation('contacts');
    return (
        <div
            className="flex flex-col w-full h-[calc(100vh-170px-64px)]"
            aria-labelledby="contacts-title"
        >
            <h2
                id="contacts-title"
                className="sr-only"
            >
                {t("title")}
            </h2>

            <iframe
                className="border-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31135.878956261782!2d30.70203583533237!3d46.388255311779915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cb797001e137%3A0xa9a9a195e8cc0959!2z0KTRltGC0L3QtdGBLdC60LvRg9CxIFNwb3J0IFN0dWRpbyA1NQ!5e0!3m2!1sru!2sua!4v1732522605157!5m2!1sru!2sua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-modals"
                allowFullScreen
                title={t("map-title")}
                role="application"
                tabIndex={0}
            />
        </div>
    );
};

export default ContactsSection;