import styles from './layout.module.css'
import Navbar from '../navbar/Navbar.tsx';
import Footer from '../footer/Footer.tsx';

export default function LayoutComponent({
	children,
}: {
	children: React.ReactNode
}) {
	
  return (
	  <>
		<Navbar />
    	<main className={styles.main}>
			<h1>Hello, World!</h1>
			&nbsp;
			{ children }
			<span className={`material-icons-outlined ${styles.heart}`}>favorite_border</span>
    	</main>
		<Footer />
	  </>
  )
}
