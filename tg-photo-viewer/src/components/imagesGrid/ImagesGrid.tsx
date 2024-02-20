import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { fetchImages } from '../../actions/actions.ts';

async function fetchData(): Promise<ImageData[]> {
	// test performed as expected
	// TODO: change back (remove params)
	const params: Record<string, string | number> = {
		per_page: 4,
		count: 3,
	}
	const data: ImageData[] = await fetchImages(undefined, undefined, params, 'cats');
	return data;
}

const ImageGrid: React.FunctionComponent = async (): Promise<React.JSX.Element> => {
	const data: ImageData[] = await fetchData();
	console.log(data.length);
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

