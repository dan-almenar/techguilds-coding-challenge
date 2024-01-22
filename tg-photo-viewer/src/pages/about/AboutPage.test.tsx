import { render, screen } from '@testing-library/react';
import About from './index.tsx';

// define test suite
describe('About page tests', () => {
	it('renders the About component', () => {
		const { container } = render(<About />);
		expect(container).toMatchSnapshot();
	});

	// test the navbar is present
	it('renders the navbar', () => {
		render(<About />);
		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});

	// test the footer is present
	it('renders the footer', () => {
		render(<About />);
		const footer = screen.getByText('2024', { exact: false });
		expect(footer).toBeInTheDocument();
	});
});

