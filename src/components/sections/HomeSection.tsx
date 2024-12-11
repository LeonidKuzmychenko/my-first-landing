import React from 'react';

const HomeSection: React.FC = () => {
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/HomeGym.jpg`;

    return (
        <div
            style={{backgroundImage: `url(${backgroundUrl})`}}
            className="flex justify-center items-center h-screen w-full text-white bg-cover bg-center"
            aria-labelledby="home-section-title"
        >
            <div
                role="banner"
                className="flex flex-col items-center justify-center h-full w-full"
            >
                <h1
                    id="home-section-title"
                    className="text-4xl font-bold text-center"
                >
                    <div className="flex flex-col items-center text-center">
                        <p
                            className="text-2xl font-semibold"
                            tabIndex={0}
                            aria-label="Профессия: Персональный тренер"
                        >
                            Персональный тренер
                        </p>
                        <p
                            className="text-3xl font-bold"
                            tabIndex={0}
                            aria-label="Имя тренера: Степан Бандера"
                        >
                            Степан Бандера
                        </p>
                    </div>
                </h1>

                <a
                    href="#goals"
                    className="mt-10 bg-gray-700 text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-800 transition-colors"
                    aria-label="Перейти к целям тренировки"
                >
                    Узнать больше
                </a>
            </div>
        </div>
    );
};

export default HomeSection;
