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
    	</main>
		<Footer />
	  </>
  )
}
