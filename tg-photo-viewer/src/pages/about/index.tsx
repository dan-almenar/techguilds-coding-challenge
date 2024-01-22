import styles from './about.module.css';
import LayoutComponent from '../../components/layout/layout/LayoutComponent';
import Headers from '../../components/layout/headers/Headers';
import HeaderProps from '../../customTypes/types.ts';

const About: React.FunctionComponent = (): React.JSX.Element => {
	const props: HeaderProps = {
		title: 'About',
		description: 'About the app',
	}
	return (
		<>
			<Headers {...props} />
			<LayoutComponent>
				<h1 className={styles.h1}>About the App</h1>
			</LayoutComponent>
		</>
	);
};

export default About;
