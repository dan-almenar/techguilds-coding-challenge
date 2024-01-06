import { NavbarProps } from '../../../customTypes/types.ts';

const Navbar: React.FunctionComponent<NavbarProps> = (navprops: NavbarProps): React.JSX.Element => {
	const { data } = navprops;
	return (
		<nav>
			<ul>
				{ data.map((item) => (
					<li key={item.id}>
					<a className="material-icons" href={item.url}>{item.label}</a>
					</li>
					)) 
				}
			</ul>
		</nav>
	);
};

export default Navbar;
