import { NavbarProps } from '../../../customTypes/types.ts';
import styles from './navbar.module.css';

const Navbar: React.FunctionComponent<NavbarProps> = (navprops: NavbarProps): React.JSX.Element => {
	const { data } = navprops;
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				{ data.map((item) => (
					<li className={styles.li} key={item.id}>
					<a className={`material-icons ${styles.a}`} href={item.url}>{item.label}</a>
					</li>
					)) 
				}
			</ul>
		</nav>
	);
};

export default Navbar;
