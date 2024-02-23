import LayoutComponent from '../components/layout/layout/LayoutComponent.tsx';
import SearchBar from '../components/searchbar/SearchBar.tsx';
import ImagesGrid from '../components/imagesGrid/ImagesGrid.tsx';
import { fetchImages } from '../actions/actions.ts';
import type { ImageData } from '../customTypes/types.ts';

async function fetchData(): Promise<ImageData[]> {
	const params: Record<string, string | number> = {
		page: 1,
		per_page: 12, // per_page param used when no query is provided
		count: 12, // count param used when query is provided
	}
	const data: ImageData[] = await fetchImages(undefined, params);
	return data;
}

export default async function Home(){
	const data: ImageData[] = await fetchData();
	return (
		< LayoutComponent>
			<SearchBar />
			<ImagesGrid data={data} /> */}
		</LayoutComponent>
	)
};

