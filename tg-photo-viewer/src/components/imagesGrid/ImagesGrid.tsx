import { ImageData } from '../../customTypes/types.ts';
import styles from './imgGrid.module.css';

const ImageGrid: React.FunctionComponent<ImageData[]> = (props: ImageData[]): React.JSX.Element => {
	return (
		<div id="img-grid" className={styles.imgGrid}>
		{
			props.map((imgData: ImageData) => (
				<ImageComponent key={imgData.id} props={imgData} />
			))
		}
		</div>
	)
};
