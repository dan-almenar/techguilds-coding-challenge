import styles from './page.module.css'
import { NavbarProps, FooterProps } from '../customTypes/types.ts';
import Navbar from '../components/layout/navbar/Navbar.tsx';
import Footer from '../components/layout/footer/Footer.tsx';

export default function Home() {
	const navprops: NavbarProps = {
		data: [
			{ id: '1', url: '/', label: 'home' },
			{ id: '2', url: '/about', label: 'info' },
		],
	}
	const footprops: FooterProps = {
		data: {
			year: new Date().getFullYear(),
			url: 'https://danielalmenar.com',
			label: 'Dan Almenar Williams',
			target: '_blank',
		},
	}
  return (
	  <>
		<Navbar data={navprops.data} />
    <main className={styles.main}>
		<h1>Hello, World!</h1>
		&nbsp;
		<span className={`material-icons-outlined ${styles.heart}`}>favorite_border</span>
    </main>
		  <Footer data={footprops.data} />
	  </>
  )
}
