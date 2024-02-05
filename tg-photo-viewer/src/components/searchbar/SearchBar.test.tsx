import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.tsx';

// Mock window.location.href
const { location } = window;
delete window.location;
window.location = { ...location, href: '' };

describe('SearchBar tests', () => {
	// Component renders properly
	it('Component renders properly', () => {
	  render(<SearchBar />);
	  // Add assertions here to test if the component renders properly
	  const inputElement = screen.getByPlaceholderText('Search...');
	  expect(inputElement).toBeInTheDocument();
	});

	// Test text input value changes on input
	it('Text input value changes on input', () => {
	  render(<SearchBar />);
	  const inputElement = screen.getByPlaceholderText('Search...');

	  fireEvent.change(inputElement, { target: { value: 'testSearch' } });

	  expect(inputElement.value).toBe('testSearch');
	});

	// Test button click redirects to /search/[search term]
	it('Button click redirects to /search/[search term]', () => {
	  render(<SearchBar />);
	  const inputElement = screen.getByPlaceholderText('Search...');
	  const buttonElement = screen.getByText('search');

	  fireEvent.change(inputElement, { target: { value: 'testSearch' } });
	  fireEvent.click(buttonElement);

	  // Verify redirection
	  expect(window.location.href).toBe('/search/testSearch');
	});
	it("Enter key redirects to /search/[search term]", () => {
		render(<SearchBar />);
		const inputElement = screen.getByPlaceholderText('Search...');
		fireEvent.change(inputElement, { target: { value: 'testSearch' } });
		fireEvent.keyDown(inputElement, { key: "Enter" });
		// Verify redirection
		expect(window.location.href).toBe('/search/testSearch');
	});
})


// Restore window.location after the tests
afterAll(() => {
  window.location = location;
});

