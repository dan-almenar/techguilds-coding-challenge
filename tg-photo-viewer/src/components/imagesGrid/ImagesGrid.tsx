import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { fetchImages } from '../../helpers/helpers.ts';

async function fetchData(): Promise<ImageData[]> {
	const data: ImageData[] = await fetchImages();
	return data;
}

const ImageGrid: React.FunctionComponent = async (): Promise<React.JSX.Element> => {
	const data: ImageData[] = await fetchData();
	return (
		<div id="img-grid" className={styles.imggrid}>
		{
			data.map((imgData: ImageData) => (
				<ImageComponent key={imgData.id} {...imgData} />
			))
		}
		</div>
	)
};

export default ImageGrid;

