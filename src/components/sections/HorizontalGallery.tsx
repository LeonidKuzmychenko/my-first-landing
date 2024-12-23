import React, { useState, useEffect, useRef } from 'react';
import {useTranslation} from "react-i18next";

interface GalleryItemProps {
    src: string;
    index: number;
    alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, index, alt }) => (
    <div
        className="flex flex-shrink-0 justify-center items-center w-full scroll-snap-center"
        role="tabpanel"
        aria-labelledby={`gallery-image-${index}`}
    >
        <img
            src={src}
            loading="lazy"
            id={`gallery-image-${index}`}
            alt={alt}
            className="w-full h-full max-w-full max-h-full object-contain rounded-lg transition-transform ease-in-out duration-300"
        />
    </div>
);

const HorizontalGallery: React.FC = () => {
    const { t, i18n } = useTranslation('clients');

    const images: string[] = [
        `${process.env.PUBLIC_URL}/images/students/before_after_1.webp`,
        `${process.env.PUBLIC_URL}/images/students/before_after_2.webp`,
        `${process.env.PUBLIC_URL}/images/students/before_after_3.webp`,
        `${process.env.PUBLIC_URL}/images/students/before_after_4.webp`,
        `${process.env.PUBLIC_URL}/images/students/before_after_5.webp`,
        `${process.env.PUBLIC_URL}/images/students/before_after_6.webp`
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const startXRef = useRef<number | null>(null);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        scrollToImage(index);
    };

    const scrollToImage = (index: number) => {
        const galleryElement = galleryRef.current;
        if (galleryElement) {
            const scrollAmount = index * galleryElement.clientWidth;
            galleryElement.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        startXRef.current = touch.clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (startXRef.current === null) return;
        const touch = e.touches[0];
        const diffX = startXRef.current - touch.clientX;
        const threshold = 50; // Пороговое значение для свайпа
        if (diffX > threshold) {
            const nextIndex = Math.min(activeIndex + 1, images.length - 1);
            setActiveIndex(nextIndex);
            scrollToImage(nextIndex);
            startXRef.current = null; // Сброс начальной точки
        } else if (diffX < -threshold) {
            const prevIndex = Math.max(activeIndex - 1, 0);
            setActiveIndex(prevIndex);
            scrollToImage(prevIndex);
            startXRef.current = null; // Сброс начальной точки
        }
    };

    const handleTouchEnd = () => {
        startXRef.current = null; // Сброс начальной точки после завершения свайпа
    };

    useEffect(() => {
        const galleryElement = galleryRef.current;
        if (galleryElement) {
            galleryElement.addEventListener('touchstart', handleTouchStart);
            galleryElement.addEventListener('touchmove', handleTouchMove);
            galleryElement.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            if (galleryElement) {
                galleryElement.removeEventListener('touchstart', handleTouchStart);
                galleryElement.removeEventListener('touchmove', handleTouchMove);
                galleryElement.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => {
            scrollToImage(activeIndex);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex]);

    return (
        <section
            className="flex flex-col gap-10 relative w-full h-[600px] md:h-[800px] max-w-full overflow-hidden p-5 md:p-10 bg-neutral-800 text-white"
            aria-labelledby="clients-title"
        >
            <h2
                id="clients-title"
                className="text-center text-4xl font-bold"
            >
                {t("title")}
            </h2>

            <div
                className="relative w-full overflow-hidden rounded-lg"
                id="gallery-scrollarea"
                ref={galleryRef}
            >
                <div className="flex w-full h-full">
                    {images.map((image, index) => (
                        <GalleryItem key={index} src={image} index={index} alt={`Изображение из галереи ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div
                className="flex justify-center mt-4 gap-3"
                aria-label="Навигация по галерее"
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3.5 h-3.5 bg-gray-600 rounded-full cursor-pointer relative flex items-center justify-center transition-colors duration-300 transform ${index === activeIndex ? 'bg-white' : 'hover:bg-gray-500'}`}
                        aria-label={`Перейти к изображению ${index + 1}`}
                    >
                        <div
                            className={`w-2 h-2 bg-white rounded-full transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        ></div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HorizontalGallery;
