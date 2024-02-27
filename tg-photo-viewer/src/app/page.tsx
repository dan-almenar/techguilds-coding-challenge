import LayoutComponent from '../components/layout/layout/LayoutComponent.tsx';
import SearchBar from '../components/searchbar/SearchBar.tsx';
import ImagesGrid from '../components/imagesGrid/ImagesGrid.tsx';
import { fetchData } from '../modules/actions.ts';
import type { ImageData } from '../customTypes/types.ts';

export default async function Home() {
	const params: Record<string, string | number> = {
		page: 1,
		per_page: 12, // per_page param required when no query is provided
		count: 16, // count param required when a query is provided
	};
	const data: ImageData[] = await fetchData(params);
	return (
		< LayoutComponent>
			<SearchBar />
			<ImagesGrid data={data}/> 
		</LayoutComponent>
	)
};
