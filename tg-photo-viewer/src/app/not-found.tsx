import Head from "next/head";
import styles from "./not-found.module.css";

const getRandomColor = (): string => {
	const colors: string[] = [
		'firebrick',
		'yellow',
		'white',
	];

	return colors[Math.floor(Math.random() * colors.length)];
};

const generateStars = (): JSX.Element[] => {
	const stars: JSX.Element[] = [];
	for (let i = 0; i < 50; i++) {
		const size = Math.floor(Math.random() * 5) + 1;
		stars.push(
			<div
				key={i}
				className={styles.star}
				style={{
					position: 'absolute',
					backgroundColor: getRandomColor(),
					top: Math.random() * 100 + '%',
					left: Math.random() * 100 + '%',
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
			<body className={styles.body}
				style={{
					backgroundColor: 'black',
				}}
			>
				{ stars }
			</body>
		</>
	);
}
