import { render, screen } from '@testing-library/react';
import { NavbarProps } from '../../../customTypes/types.ts';

import Navbar from './Navbar.tsx';



describe('Navbar component tests', () => {
	const mockData: NavbarProps = {
		data: [
			{ id: 'home', url: '/', label: 'home' },
			{ id: 'about', url: '/about', label: 'info' },
		],
	};
		
	it('Home link renders properly', () => {
		render(<Navbar data={mockData.data} />, {});

		const homeLink = screen.getByText(/home/i);
		expect(homeLink).toBeInTheDocument();
	});
	
	it('About link renders properly', () => {
		render(<Navbar data={mockData.data} />, {});

		const aboutLink = screen.getByText(/info/i);
		expect(aboutLink).toBeInTheDocument();
	});
});

