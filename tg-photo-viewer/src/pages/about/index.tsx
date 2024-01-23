import styles from './about.module.css';
import LayoutComponent from '../../components/layout/layout/LayoutComponent';
import Headers from '../../components/layout/headers/Headers';
import HeaderProps from '../../customTypes/types.ts';

const About: React.FunctionComponent = (): React.JSX.Element => {
	// console header
	console.log("%cAbout Page", "color: white; font-size: 30px; background-color: black; padding: 10px 50px;");
	console.log("%cTechGuild's Challenge", "color: darkred; font-weight: bold; font-size: 18px; padding: 0 25px;");
	console.log("%cBy Dan Almenar Williams", "color: black; font-weight: bold; font-size: 14px; padding: 0 25px;");

	const headProps: HeaderProps = {
		title: 'About',
		description: 'About the app',
	}
	return (
		<>
			<Headers {...headProps} />
			<LayoutComponent>
				<h1 className={styles.h1}>About the App</h1>
				<section className={styles.section}>
					<h3 className={styles.h3}>
						The Challenge:
					</h3>
					<p className={styles.p}>
						This App is an implementation of the
						&nbsp;
						<a className={styles.a} href="https://github.com/TechGuilds/React-coding-challenge" target="_blank">
							TechGuild&apos;s React Coding Challenge
						</a>
						&nbsp;
						made from scratch by
						&nbsp;
						<a className={styles.a} href="https://github.com/dan-almenar" target="_blank">
							Dan Almenar Williams
						</a>.
					</p>
				</section>
				<section className={styles.section}>
					<h3 className={styles.h3}>
						The Solution:
					</h3>
					<p className={styles.p}>
						The App was created using
						&nbsp;
						<a className={styles.a} href="https://nextjs.org/" target="_blank">
							NextJS
						</a>
						&nbsp;
						following a server side first render approach. All components are rendered server side. This very about
						page is a NextJS static generated page.
					</p>
					<p className={styles.p}>
						All images had been fetched using the
						&nbsp;
						<a className={styles.a} href="https://unsplash.com/" target="_blank">
							Unsplash API
						</a>
					</p>
					<p className={styles.p}>
						Aditionally, I&apos;ve added extra features not required in the challenge:
						
					</p>
					<ul className={styles.ul}>
							<li className={styles.li}>
								Search functionality
							</li>
							<li className={styles.li}>
								This About page
							</li>
							<li className={styles.li}>
								A GitHub Actions based CI/CD pipeline that runs unit and integration tests on code commits.
							</li>
						</ul>
				</section>
			</LayoutComponent>
		</>
	);
};

export default About;

