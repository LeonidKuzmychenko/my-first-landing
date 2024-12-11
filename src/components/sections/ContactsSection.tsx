import React from 'react';
import {Flex, Heading} from "@radix-ui/themes";

const ContactsSection: React.FC = () => {
    return (
        <Flex
            direction="column"
            className="w-full h-[calc(100vh-170px-64px)]"
            aria-labelledby="contacts-title"
        >
            <Heading
                as={"h2"}
                id="contacts-title"
                className="sr-only"
            >
                Местоположение
            </Heading>

            <iframe
                className="border-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31135.878956261782!2d30.70203583533237!3d46.388255311779915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cb797001e137%3A0xa9a9a195e8cc0959!2z0KTRltGC0L3QtdGBLdC60LvRg9CxIFNwb3J0IFN0dWRpbyA1NQ!5e0!3m2!1sru!2sua!4v1732522605157!5m2!1sru!2sua"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={true}
                title="Google Maps - местоположение Спорт Студио 55"
                role="application"
                tabIndex={0}
            ></iframe>
        </Flex>
    );
};

export default ContactsSection;
