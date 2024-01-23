import styles from './layout.module.css'
import '../../../app/globals.css';
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
			{children}
    	</main>
		<Footer />
	  </>
  )
}
