import { NavbarProps } from '../../../customTypes/types.ts';
import styles from './navbar.module.css';

const Navbar: React.FunctionComponent = (): React.JSX.Element => {
	const props: NavbarProps = {
		data: [
			{
				id: 'home',
				url: '/',
				label: 'home'
			},
			{
				id: 'about',
				url: '/about',
				label: 'info'
			}
		],
	};

	const { data } = props;
		
	return (
		<nav className={styles.nav}>
			<div className={styles.logoContainer}>
				<span className={styles.appname}>ChipiKat!</span>
				<img className={styles.logo} src="/ChipiKat.png" alt="ChipiKat Logo"/>
			</div>
			<span className={styles.appname}>Image Viewer</span>
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
