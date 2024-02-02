import styles from './about.module.css';
import LayoutComponent from '../../components/layout/layout/LayoutComponent';
import Headers from '../../components/layout/headers/Headers';
import HeaderProps from '../../customTypes/types.ts';

const About: React.FunctionComponent = (): React.JSX.Element => {
	const headProps: HeaderProps = {
		title: 'About',
		description: 'About the app',
	}
	return (
		<>
			<Headers {...headProps} />
			<LayoutComponent>
				<div className={styles.content}>
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
					<p className={styles.p}>
						You may find the source code for this project following
						<a className={styles.a}
							href="https://github.com/dan-almenar/techGuilds-coding-challenge"
							target="_blank">
							&nbsp;
							this link
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
						following a server side first render approach. Almost all components are rendered server side. This very about
						page is a NextJS static generated page.
					</p>
					<p className={styles.p}>
						All images had been fetched using the
						&nbsp;
						<a className={styles.a} href="https://unsplash.com/" target="_blank">
							Unsplash API.
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
				<section className={styles.section}>
					<h3 className={styles.h3}>
						About me:
					</h3>
					<p className={styles.p}>
						I&apos;m a full stack developer from Argentina, currently based in Canada.
					</p>
					<p className={styles.p}>
						Even though I&apos;ve been mostly devoted to web development, I&apos;ve also developed mobile apps,
						small videogames, and command line tools. I&apos;ve also worked with data analysis and visualization, as well
						as cloud computing and DevOps.
					</p>
					<p className={styles.p}>
						Lately, aside of my regular interest in Data Structures and Algorithms, I&apos;ve been learning code 
						optimization, and Compiler&apos;s theory. Performance analysis and improvement is a subject that I&apos;m 
						really passionate about.
					</p>
				</section>
				</div>
			</LayoutComponent>
		</>
	);
};

export default About;

