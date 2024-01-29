import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { fetchImages } from '../../helpers/helpers.ts';

const ImageGrid: React.FunctionComponent<ImageData[]> = async (): React.JSX.Element => {
	const props: ImageData[] = await fetchImages();
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

