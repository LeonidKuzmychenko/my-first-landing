import React, { useState, useEffect } from 'react';

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
    const images: string[] = [
        `${process.env.PUBLIC_URL}/images/before-after-5.jpg`,
        `${process.env.PUBLIC_URL}/images/before-after-2.jpg`,
        `${process.env.PUBLIC_URL}/images/before-after-3.jpg`,
        `${process.env.PUBLIC_URL}/images/before-after-4.jpg`,
        `${process.env.PUBLIC_URL}/images/before-after-1.jpg`
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        scrollToImage(index);
    };

    const scrollToImage = (index: number) => {
        const galleryElement = document.getElementById('gallery-scrollarea');
        if (galleryElement) {
            const scrollAmount = index * galleryElement.clientWidth;
            galleryElement.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            scrollToImage(activeIndex);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex]);

    return (
        <section
            className="flex flex-col gap-10 relative w-full h-[600px] md:h-[800px] max-w-full overflow-hidden p-5 md:p-10 bg-neutral-800 text-white"
            aria-labelledby="gallery-title"
        >
            <h2
                id="gallery-title"
                className="text-center text-4xl font-bold"
            >
                Спортивные достижения клиентов
            </h2>

            <div
                className="relative w-full overflow-hidden rounded-lg"
                id="gallery-scrollarea"
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