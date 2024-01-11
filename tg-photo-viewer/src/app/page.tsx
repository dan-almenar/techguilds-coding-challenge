import styles from './page.module.css'
import Navbar from '../components/layout/navbar/Navbar.tsx';
import Footer from '../components/layout/footer/Footer.tsx';

export default function Home() {
	
  return (
	  <>
		<Navbar />
    	<main className={styles.main}>
			<h1>Hello, World!</h1>
			&nbsp;
			<span className={`material-icons-outlined ${styles.heart}`}>favorite_border</span>
    	</main>
		<Footer />
	  </>
  )
}
