import { render, screen } from '@testing-library/react';
import { FooterProps } from '../../../customTypes/types.ts';

import Footer from './Footer.tsx';

describe('Footer component tests', () => {
	const mockData: FooterProps = {
		data: {
			year: 2024,
			url: 'https://danielalmenar.com',
			label: 'Dan Almenar',
			target: ''
		}
	};

	it('Year renders properly', () => {
		render(<Footer data={mockData.data} />, {});
		
		const currentYear = screen.getByText(mockData.data.year);
		expect(currentYear).toBeInTheDocument();
	});

	it('href attribute equals expected value', () => {
		render(<Footer data={mockData.data} />, {});

		const anchorTag = screen.getByText(mockData.data.label, { exact: false });
		expect(anchorTag).toHaveAttribute('href', mockData.data.url);
	});

	it('label renders properly', () => {
		render(<Footer data={mockData.data} />, {});

		const label = screen.getByText(mockData.data.label, { exact: false });
		expect(label).toBeInTheDocument();
	});
})
