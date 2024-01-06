import { render, screen } from '@testing-library/react';
import { NavbarProps } from '../../../customTypes/types.ts';

import Navbar from './Navbar.tsx';



describe('Navbar component tests', () => {
	const mockData: NavbarProps = {
		data: [
			{ id: '1', url: '/', label: 'home' },
			{ id: '2', url: '/about', label: 'about' },
		],
	};
		
	it('Home link renders properly', () => {
		render(<Navbar data={mockData.data} />, {});

		const homeLink = screen.getByText(/home/i);
		expect(homeLink).toBeInTheDocument();
	});
	
	it('About link renders properly', () => {
		render(<Navbar data={mockData.data} />, {});

		const aboutLink = screen.getByText(/about/i);
		expect(aboutLink).toBeInTheDocument();
	});
});

