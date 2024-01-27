import Head from "next/head";
import styles from "./not-found.module.css";

const getRandomColor = (): string => {
	const colors: string[] = [
		'white',
		'yellow',
		'firebrick',
	];

	const pickColor = (): number => {
		const base: number = Math.floor(Math.random() * 100);

		if (base < 80) return 0;
		if (base < 95) return 1;
		return 2;
	}

	return colors[pickColor()];
};

const generateStars = (): JSX.Element[] => {
	const numberOfStars = 10000;
	const stars: JSX.Element[] = [];
	for (let i = 0; i < numberOfStars; i++) {
		const size = Math.floor(Math.random() * 5) + 1;
		stars.push(
			<div
				key={i}
				className={styles.star}
				style={{
					backgroundColor: getRandomColor(),
					top: Math.random() * 800 + '%',
					left: Math.random() * 600 + '%',
					width: `${size}px`,
					height: `${size}px`,
				}}
			></div>
		);
	}
	return stars;
};

export default function NotFound(): JSX.Element {
	const stars: JSX.Element[] = generateStars();
	return (
		<>
			<Head>
				<title>Oops!</title>
			</Head>
			<main className={styles.main}
			>
				<div className={styles.windshield}
				></div>
				<div className={styles.starfield}>
				{ stars }
				</div>
				<div className={styles.textContainer}>
					<p className={`${styles.p} ${styles.title}`}>Error : 404</p>
					<p className={styles.p}>PAGE NOT FOUND</p>
					<p className={styles.p}>Maybe the page got lost in the vastness of space...</p>
				</div>
				<a className={styles.a} href="/">
					Go Home
					&nbsp;
					<span className="material-icons">rocket_launch</span>
				</a>
			</main>
		</>
	);
};

