import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
		<h1>Hello, World!</h1>
		&nbsp;
		<span className={`material-icons-outlined ${styles.heart}`}>favorite_border</span>
    </main>
  )
}
