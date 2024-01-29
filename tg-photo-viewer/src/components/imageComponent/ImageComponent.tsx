"use client";
import Image from 'next/image';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgComponent.module.css';

const ImageComponent: React.FunctionComponent<ImageData> = (props: ImageData): React.JSX.Element => {
	// required with "placeholder='blur'"
	const blurDataURL: string = `data:image/jpeg;base64,${props.blur_hash}`;

	const handleClick = (e: React.SyntheticEvent): void => {
		e.preventDefault();

		// TODO implementation (open a dialog modal)
	}
	return (
		<Image className={styles.img}
			src={props.urls.small}
			alt={props.alt_description}
			placeholder='blur'
			blurDataURL={blurDataURL}
			width={250}
			height={props.height * 250 / props.width}
		/>
	)

	/*
	return (
		<figure id={props.id} className={styles.figure}
			onClick={handleClick}
			onTouchEnd={handleClick}
		>
			<figcaption className={styles.figcaption}>
				{props.description}
			</figcaption>
			<Image
				className={styles.img}
				src={props.urls.small}
				alt={props.alt_description}
				fill={true}
				placeholder='blur'
				blurDataURL={blurDataURL}
			/>
		</figure>
	)
	 */
};

export default ImageComponent;
