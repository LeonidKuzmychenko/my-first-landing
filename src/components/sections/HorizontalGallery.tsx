import React, {useEffect, useRef, useState} from 'react';
import styles from '../../styles/HorizontalGallery.module.css';

// interface HorizontalGalleryProps {
//     images: string[];
// }

const HorizontalGallery: React.FC = () => {

    const images: string[] = [
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
        `${process.env.PUBLIC_URL}/images/HomeGym.jpg`,
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    // Прокрутка к нужному элементу по индексу
    const scrollToImage = (index: number) => {
        if (galleryRef.current) {
            const scrollAmount = index * galleryRef.current.clientWidth;
            galleryRef.current.scrollTo({left: scrollAmount, behavior: 'smooth'});
            setActiveIndex(index);
        }
    };

    // Автоопределение текущего активного изображения
    useEffect(() => {
        const handleScroll = () => {
            if (galleryRef.current) {
                const index = Math.round(galleryRef.current.scrollLeft / galleryRef.current.clientWidth);
                setActiveIndex(index);
            }
        };

        if (galleryRef.current) {
            galleryRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (galleryRef.current) {
                galleryRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Спортивные достижения клиентов</h2>
            <div className={styles.gallery} ref={galleryRef}>
                {images.map((image, index) => (
                    <div className={styles.galleryItem} key={index}>
                        <img src={image} alt={`Gallery image ${index + 1}`} className={styles.galleryImage}/>
                    </div>
                ))}
            </div>

            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => scrollToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HorizontalGallery;
