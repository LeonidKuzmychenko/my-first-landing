import React from 'react';

const HomeSection: React.FC = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/background.jpg`;

    return (
        <div
            style={{ backgroundImage: `url(${backgroundUrl})` }}
            className="flex justify-center items-center h-screen w-full text-white bg-cover bg-center p-10"
            aria-labelledby="home-section-title"
        >
            <div
                role="banner"
                className="flex flex-col items-center justify-center h-full w-full"
            >
                <h1
                    id="home-section-title"
                    className="text-4xl font-extrabold leading-tight text-center"
                >
                    <div className="flex flex-col items-center text-center">
                        <p
                            className="text-2xl font-semibold leading-snug"
                            tabIndex={0}
                            aria-label="Профессия: Персональный тренер"
                        >
                            Персональный тренер
                        </p>
                        <p
                            className="text-3xl font-bold leading-tight"
                            tabIndex={0}
                            aria-label="Имя тренера: Евгений Московцев"
                        >
                            Евгений Московцев
                        </p>
                    </div>
                </h1>

                <a
                    href="#goals"
                    className="mt-10 bg-primary text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-600 hover:bg-neutral-700 transition-colors"
                    aria-label="Перейти к целям тренировки"
                >
                    Узнать больше
                </a>
            </div>
        </div>
    );
};

export default HomeSection;