import Image from 'next/image';
import { ImageData } from '../../customTypes/types.ts';
import styles from './imgComponent.module.css';

const ImageComponent: React.FunctionComponent<ImageData> = (props: ImageData): React.JSX.Element => {
	const handleClick = (e: React.SyntheticEvent): void => {
		e.preventDefault();

		// TODO implementation (open a dialog modal)
		console.log(e);
	}
	return (
		<figure id={props.id} className={styles.figure}
			onClick={handleClick}
			onTouchEnd={handleClick}
		>
			<Image
				className={styles.img}
				src={props.urls.small}
				alt={props.alt_description}
				fill={true}
			/>
		</figure>
	)
}
