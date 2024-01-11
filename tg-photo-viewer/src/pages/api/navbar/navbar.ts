import { NextApiRequest, NextApiResponse } from 'next';
import { NavbarProps } from '../../../customTypes/types.ts';

export default async function getStaticProps(){
	const props: NavbarProps = {
		data: [
			{ id: 'home', url: '/', label: 'home' },
			{ id: 'about', url: '/about', label: 'info' },
		],
	};

	return {
		props	
	}
}

