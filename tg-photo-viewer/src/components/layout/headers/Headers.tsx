import Head from 'next/head';
import HeaderProps from '../../../customTypes/types.ts';

const Headers: React.FunctionComponent = (props: HeaderProps): React.JSX.Element => {
	const { title, description } = props;
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			{ /* Google Material Icons */ }
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"/>
		</>
	);
	
}

export default Headers;
