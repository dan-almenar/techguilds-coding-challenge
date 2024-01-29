import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';

const ImageGrid: React.FunctionComponent<ImageData[]> = (props: ImageData[]): React.JSX.Element => {
	return (
		<div id="img-grid" className={styles.imgGrid}>
		{
			props.map((imgData: ImageData) => (
				<ImageComponent key={imgData.id} {...imgData} />
			))
		}
		</div>
	)
};

export default ImageGrid;
