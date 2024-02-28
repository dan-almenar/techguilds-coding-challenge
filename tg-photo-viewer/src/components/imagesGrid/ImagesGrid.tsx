'use client';
import { useState, useEffect } from 'react';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { toImageData } from '../../modules/helpers.ts';

// TODO ADD INFINITY SCROLLING

const ImageGrid: React.FunctionComponent<ImageData[]> = ( { data } ): React.JSX.Element => {
	
	// FETCH IMPLEMENTATION WORKS AS INTENDED
	const url: URL = new URL('/api/photos', location.origin);
	url.searchParams.append('query', 'cats');
	const moreImagesData = fetch(url.href);
	moreImagesData.then((data) => {
		const imgArr = data.json();
		imgArr.then((data) => {
			data.map((item: any) => {
				const imgData = toImageData(item);
				console.log(imgData.id, imgData.urls.regular);
			})
		})
	})
	return (
		<div id="img-grid" className={styles.imggrid}>
		{
			data.map((imgData: ImageData) => (
				<div key={imgData.id} className={styles.imgcontainer}
					onClick={(e) => { e.preventDefault(); console.log('clicked', imgData.id); }}
				>
				<ImageComponent {...imgData} />
				</div>
			))
		}
		</div>
	)
};

export default ImageGrid;

