'use client';
import { useState, useEffect, cache } from 'react';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { fetchImages } from '../../actions/actions.ts';

// TODO ADD INFINITY SCROLLING

const ImageGrid: React.FunctionComponent<ImageData[]> = ( { data } ): React.JSX.Element => {
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

