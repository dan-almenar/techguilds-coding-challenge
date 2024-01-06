import styles from './page.module.css'
import Navbar from '../components/layout/navbar/Navbar.tsx';
import { NavbarProps } from '../customTypes/types.ts';

export default function Home() {
	const props: NavbarProps = {
		data: [
			{ id: '1', url: '/', label: 'home' },
			{ id: '2', url: '/about', label: 'info' },
		],
	}
  return (
	  <>
		<Navbar data={props.data} />
    <main className={styles.main}>
		<h1>Hello, World!</h1>
		&nbsp;
		<span className={`material-icons-outlined ${styles.heart}`}>favorite_border</span>
    </main>
	  </>
  )
}
