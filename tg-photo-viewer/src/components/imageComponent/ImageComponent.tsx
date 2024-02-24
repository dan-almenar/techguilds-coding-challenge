"use client";
import Image from 'next/image';
import { useState } from 'react';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgComponent.module.css';

const ImageComponent: React.FunctionComponent<ImageData> = (props: ImageData): React.JSX.Element => {
	// required with "placeholder='blur'"
	const blurDataURL: string = `data:image/jpeg;base64,${props.blur_hash}`;
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const description: string = props.description?.length > 40 ? props.description.substring(0, 40) + '...' : props.description;

	const handleClick = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		console.log('clicked', props.id);

		// TODO implementation (open a dialog modal)
	}
	const handleHover = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		setIsHovered(!isHovered);
		console.log(description);
	}

	return (
		<figure id={props.id} className={styles.figure}
			onClick={handleClick}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			{isHovered && props.description && (
			<figcaption className={styles.figcaption}>
				{description}
			</figcaption>	
			)}

			<Image
				className={styles.img}
				src={props.urls.small}
				alt={props.alt_description}
				placeholder='blur'
				blurDataURL={blurDataURL}
				width={250}
				height={`${Math.floor(props.height * 250 / props.width)}`}
			/>
		</figure>
	)
};

export default ImageComponent;

