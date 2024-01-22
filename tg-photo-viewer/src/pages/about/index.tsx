import styles from './about.module.css';
import LayoutComponent from '../../components/layout/layout/LayoutComponent';

const About: React.FunctionComponent = (): React.JSX.Element => {
	const title: string = 'About';
	return (
		<>
			<title>{title}</title>
			<LayoutComponent>
				<h1 className={styles.h1}>About</h1>
			</LayoutComponent>
		</>
	);
};

export default About;
