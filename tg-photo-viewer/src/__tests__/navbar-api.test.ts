import { NavbarProps } from '../customTypes/types.ts';
import getStaticProps from '../pages/api/navbar/navbar.ts';

describe('Navbar API test', () => {
	it('should return expected response', async () => {
		const { props } = await getStaticProps();
		const expectedData: NavbarProps = 
			{ data: 
				[
					{ id: 'home', url: '/', label: 'home' },
					{ id: 'about', url: '/about', label: 'info' }
				]
			}

		expect(props).toMatchObject(expectedData);
	});
})
