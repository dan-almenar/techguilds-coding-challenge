import { FooterProps } from '../../../customTypes/types.ts';
import styles from './footer.module.css';

const Footer: React.FunctionComponent<FooterProps> = (footprops: FooterProps): React.JSX.Element => {
	const { data } = footprops;

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

