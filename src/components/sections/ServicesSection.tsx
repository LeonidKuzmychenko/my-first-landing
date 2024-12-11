import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <div
            className="flex h-[600px] bg-neutral-800 text-white"
            aria-labelledby="services-section-title"
            role="region"
        >
            <div
                className="flex items-center justify-center h-full w-full"
            >
                <div
                    className="flex items-center h-full p-10"
                >
                    <div className="flex flex-col gap-5">
                        <h2
                            id="services-section-title"
                            className="text-3xl font-bold"
                        >
                            <div className="flex flex-col text-end">
                                <span
                                    tabIndex={0}
                                    aria-label="Отправь заявку сейчас"
                                >
                                    Отправь заявку сейчас
                                </span>
                                <span
                                    tabIndex={0}
                                    aria-label="и получи"
                                >
                                    и получи
                                </span>
                                <span
                                    tabIndex={0}
                                    aria-label="Бесплатную Тренировку"
                                >
                                    Бесплатную Тренировку
                                </span>
                            </div>
                        </h2>
                        <ul
                            role="list"
                            aria-label="Список бесплатных услуг"
                            className="flex flex-col text-end"
                        >
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Консультация
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Анализ рациона
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Пробное занятие
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/Respect.png`}
                        className="h-full w-full object-cover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                        alt="Изображение, отображающее уважение и признание"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;