import { render, screen, fireEvent } from '@testing-library/react';
import { ImageData } from '../../customTypes/types.ts';
import ImageComponent from './ImageComponent.tsx';

describe('ImageComponent tests', () => {
	const mockData: ImageData = {
		id: 'test-image',
		width: 7753,
		height: 5155,
		blur_hash: "LJ8EuXWC8^M|ajozM_j=roaKS7kC",
		description: 'Test image description',
		alt_description: 'test image alt_description',
		urls: {
			full: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDIzOTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxOTAzOXw&ixlib=rb-4.0.3&q=85",
    		regular: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDIzOTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxOTAzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    		small: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDIzOTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxOTAzOXw&ixlib=rb-4.0.3&q=80&w=400",
		},
		links: {
			html: "https://unsplash.com/photos/a-scuba-diver-swims-through-an-underwater-cave-yx7TJle8LhM",
    		download: "https://unsplash.com/photos/yx7TJle8LhM/download?ixid=M3w1NDIzOTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTQxOTAzOXw",
		},
		likes: 677,
		user: {
			id: 'test user',
			username: 'test username',
			name: 'test name',
			portfolio_url: 'https://google.com'
		},
	};

	it ('container matches snapshot', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		expect(container).toMatchSnapshot();
	})
	it('<figure> tag renders properly', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const figureTag = container.querySelector('figure');
		expect(figureTag).toMatchSnapshot();
	});

	it('<figcaption> renders properly', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const captionTag = container.querySelector('figcaption');

		expect(captionTag).toBeInTheDocument();
	});

	it('img tag renders property', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const img = container.querySelector('img');

		expect(img).toBeInTheDocument();
	});

	it('Image src property is properly set', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const img = container.querySelector('img');

		expect(img).toHaveAttribute('src');
	});

	it('Component properly responds to click event', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const figureTag = container.querySelector('figure');

		expect(() => {
			fireEvent.click(figureTag);
		}).not.toThrow();
	});

	it('Component handles touch events properly', () => {
		const { container } = render(<ImageComponent {...mockData} />, {});
		const figureTag = container.querySelector('figure');

		expect(() => {
			fireEvent.touchEnd(figureTag);
		}).not.toThrow();
	});
});

