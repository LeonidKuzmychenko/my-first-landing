import React, { useState, useEffect } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Flex } from '@radix-ui/themes';

interface GalleryItemProps {
    src: string;
    index: number;
    alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, index, alt }) => (
    <div
        className="flex flex-shrink-0 justify-center items-center w-full h-[500px] scroll-snap-center"
        role="tabpanel"
        aria-labelledby={`gallery-image-${index}`}
    >
        <img
            src={src}
            id={`gallery-image-${index}`}
            alt={alt}
            className="w-full h-full max-w-full max-h-full object-contain rounded-lg transition-transform ease-in-out duration-300"
        />
    </div>
);

const HorizontalGallery: React.FC = () => {
    const images: string[] = [
        `${process.env.PUBLIC_URL}/images/AchivementsKachok.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
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
            className="relative w-full max-w-full overflow-hidden p-10 bg-gray-800 text-white"
            aria-labelledby="gallery-title"
        >
            <h2 id="gallery-title" className="text-center mb-5">
                Спортивные достижения клиентов
            </h2>

            <ScrollArea.Root className="relative w-full h-[500px] overflow-hidden rounded-lg" id="gallery-scrollarea">
                <Flex className="flex w-full h-full" direction="row">
                    {images.map((image, index) => (
                        <GalleryItem key={index} src={image} index={index} alt={`Gallery image ${index + 1}`} />
                    ))}
                </Flex>
            </ScrollArea.Root>

            <RadioGroup.Root
                className="flex justify-center mt-4 gap-3"
                value={String(activeIndex)}
                onValueChange={(value) => handleDotClick(Number(value))}
                aria-label="Gallery navigation"
            >
                {images.map((_, index) => (
                    <RadioGroup.Item
                        key={index}
                        value={String(index)}
                        className={`w-3.5 h-3.5 bg-gray-600 rounded-full cursor-pointer relative flex items-center justify-center transition-colors duration-300 transform ${index === activeIndex ? 'bg-white' : 'hover:bg-gray-500'}`}
                        aria-label={`Go to image ${index + 1}`}
                    >
                        <div className={`w-2 h-2 bg-white rounded-full transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}></div>
                    </RadioGroup.Item>
                ))}
            </RadioGroup.Root>
        </section>
    );
};

export default HorizontalGallery;
