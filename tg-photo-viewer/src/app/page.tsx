import LayoutComponent from '../components/layout/layout/LayoutComponent.tsx';
import SearchBar from '../components/searchbar/SearchBar.tsx';
import ImagesGrid from '../components/imagesGrid/ImagesGrid.tsx';
import { getImages } from '../modules/actions.ts';
import type { ImageData } from '../customTypes/types.ts';

export default async function Home() {
	/* first images are fetched on the server
	 * using the default parameters from the constants.ts file
	*/
	const images: ImageData[] = await(getImages());
	return (
		< LayoutComponent>
			<SearchBar />
			<ImagesGrid data={images}/> 
		</LayoutComponent>
	)
};
