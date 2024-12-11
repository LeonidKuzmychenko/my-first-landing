import React, { useState } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styles from '../../styles/HorizontalGallery.module.css';
import {Flex} from "@radix-ui/themes";

interface GalleryItemProps {
    src: string;
    index: number;
    alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, index, alt }) => (
    <div className={styles.galleryItem} role="tabpanel" aria-labelledby={`gallery-image-${index}`}>
        <img src={src} id={`gallery-image-${index}`} alt={alt} className={styles.galleryImage} />
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
        const galleryElement = document.getElementById('gallery-scrollarea');
        if (galleryElement) {
            const scrollAmount = index * galleryElement.clientWidth;
            galleryElement.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.content} aria-labelledby="gallery-title">
            <h2 id="gallery-title" className={styles.title}>
                Спортивные достижения клиентов
            </h2>

            <ScrollArea.Root className={styles.gallery} id="gallery-scrollarea">
                <Flex className={styles.galleryContent} direction="row">
                    {images.map((image, index) => (
                        <GalleryItem key={index} src={image} index={index} alt={`Gallery image ${index + 1}`} />
                    ))}
                </Flex>
            </ScrollArea.Root>

            <RadioGroup.Root
                className={styles.dotsContainer}
                value={String(activeIndex)}
                onValueChange={(value) => handleDotClick(Number(value))}
                aria-label="Gallery navigation"
            >
                {images.map((_, index) => (
                    <RadioGroup.Item
                        key={index}
                        value={String(index)}
                        className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                        aria-label={`Go to image ${index + 1}`}
                    >
                        <div className={styles.dotInner}></div>
                    </RadioGroup.Item>
                ))}
            </RadioGroup.Root>
        </section>
    );
};

export default HorizontalGallery;
