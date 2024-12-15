import React from 'react';

const MotivationSection: React.FC = () => {
    return (
        <div
            className="flex p-10 md:p-0 md:h-[700px] bg-neutral-800 text-white"
            aria-labelledby="motivation-section-title"
            role="region"
        >
            <div className="flex items-center justify-center h-full w-full">
                <div className="flex items-center h-full p-10">
                    <div className="flex flex-col gap-10 md:gap-5">
                        <h2 id="motivation-section-title" className="text-4xl font-bold">
                            <div tabIndex={0} className="flex flex-col text-center" aria-label="Тренировки, которые изменят твою жизнь">
                                <span>Тренировки,</span>
                                <span>которые изменят твою жизнь</span>
                            </div>
                        </h2>
                        <p className="text-center text-2xl">7 дней и ты почувствуешь разницу</p>
                        <p className="text-center text-2xl">3 ключа к здоровью и красоте:</p>
                        <ul role="list" aria-label="Список бесплатных услуг" className="flex flex-col text-center">
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Персональный подход
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Качество
                            </li>
                            <li
                                role="listitem"
                                tabIndex={0}
                                className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                            >
                                * Результат
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-full hidden md:block">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/eugen_without_background.png`}
                        loading="lazy"
                        className="h-full w-full object-cover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600"
                        alt="Изображение, отображающее уважение и признание"
                    />
                </div>
            </div>
        </div>
    );
};

export default MotivationSection;