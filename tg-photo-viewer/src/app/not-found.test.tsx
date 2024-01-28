import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from './not-found.tsx';

describe('404 page tests', () => {
	// Component renders properly
	it('Component renders properly', () => {
		const { container } = render(<NotFound />);
		expect(container).toMatchSnapshot();
	});

	// Error message displays properly
	it('Error message displays properly', () => {
		render(<NotFound />);
		const error = screen.getByText('Error : 404');
		const title = screen.getByText('PAGE NOT FOUND');
		const description = screen.getByText('Maybe the page got lost in the vastness of space...');

		expect(error).toBeInTheDocument();
		expect(title).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	})

	// Go Home button displays properly
	it('Go Home button displays properly', () => {
		render(<NotFound />);
		const goHome = screen.getByText('Go Home');
		expect(goHome).toBeInTheDocument();
	});

	// Go Home button redirects to home page
	it('Go Home button redirects to home page', () => {
		render(<NotFound />);
		const goHome = screen.getByText('Go Home');
		
		fireEvent.click(goHome);
		expect(window.location.pathname).toBe('/');
	});
});

