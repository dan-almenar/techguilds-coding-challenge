import LayoutComponent from '../components/layout/layout/LayoutComponent.tsx';
import SearchBar from '../components/searchbar/SearchBar.tsx';
import ImagesGrid from '../components/imagesGrid/ImagesGrid.tsx';

export default function Home(){
	return (
		< LayoutComponent>
			<SearchBar />
			<ImagesGrid />
		</LayoutComponent>
	)
};

