'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { toImageData } from '../../modules/helpers.ts';
import { getImages } from '../../modules/actions.ts';

const ImageGrid: React.FunctionComponent<ImageData[]> = ({ data }): React.JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const [images, setImages] = useState<ImageData[]>(data);
    const [page, setPage] = useState<number>(2);
	const isMounted = useRef<boolean>(true);
    const ref = useRef<HTMLDivElement>(null);

    const fetchImages = async () => {
		if (isMounted.current) {
			return;
		}
		try {
			const newImages = await getImages(undefined, page);
			setImages(prevImages => [...prevImages, ...newImages]);
			setPage(prevPage => prevPage + 1);
			setLoading(false); // Set loading to false after fetching images
		} catch (error) {
			console.error('Error fetching images:', error);
			setLoading(false);
			isMounted.current = true;
			return;
		};
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loading) {
                    setLoading(true); // Set loading to true when intersection occurs
                }
            },
            {
                threshold: 0.95,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [loading]); // useEffect depends on loading state

    useEffect(() => {
        if (loading && !isMounted.current) {
            fetchImages(); // Fetch images when loading state is true
        }
    }, [loading]);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		}
	}, []);

    return (
        <div>
            <div id="img-grid" className={styles.imggrid}>
                {images.map((imgData: ImageData) => (
                    <div
                        key={crypto.randomUUID()} id={imgData.id}
                        className={styles.imgcontainer}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('clicked', imgData.id);
                        }}
                    >
                        <ImageComponent {...imgData} />
                    </div>
                ))}
            </div>
            {loading && <p>Loading...</p>}
            <div ref={ref}></div> {/* IntersectionObserver target */}
        </div>
    );
};

export default ImageGrid;

