import { FooterProps } from '../../../customTypes/types.ts';
import styles from './footer.module.css';

const Footer: React.FunctionComponent = (): React.JSX.Element => {
	const currentYear  = new Date().getFullYear();
	const props: FooterProps = {
		data: {
			year: currentYear,
			url: 'https://danielalmenar.com',
			label: 'Dan Almenar Williams',
			target: '_blank'
		}
	};

	const { data } = props;
	
	return (
		<footer className={styles.footer}>
			<span className={styles.span}>
				&copy;&nbsp;
				<time dateTime={data.year.toString()}>
					{data.year.toString()}
				</time>
				&nbsp;
				<a href={data.url} target={data.target ? data.target : ''}>
					| {data.label}
				</a>
			</span>
		</footer>
	)
};

export default Footer;

