import LayoutComponent from '../components/layout/layout/LayoutComponent.tsx';
import SearchBar from '../components/searchbar/SearchBar.tsx';

export default function Home(){
	return (
		< LayoutComponent>
			<SearchBar />
			<h2>Include children here...</h2>
		</LayoutComponent>
	)
}
