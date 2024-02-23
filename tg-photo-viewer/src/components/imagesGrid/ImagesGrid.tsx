import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';
import ImageComponent from '../imageComponent/ImageComponent.tsx';
import { fetchImages } from '../../actions/actions.ts';

async function fetchData(): Promise<ImageData[]> {
	const params: Record<string, string | number> = {
		page: 1,
		per_page: 12, // per_page param used when no query is provided
		count: 12, // count param used when query is provided
	}
	const data: ImageData[] = await fetchImages(undefined, params);
	return data;
}

const ImageGrid: React.FunctionComponent<ImageData[]> = (props: object): React.JSX.Element => {
	const { data } = props;
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

