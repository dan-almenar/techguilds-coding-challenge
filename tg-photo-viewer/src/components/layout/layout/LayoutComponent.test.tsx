// LayoutComponent integration test
import { render, screen } from '@testing-library/react';
import LayoutComponent from './LayoutComponent.tsx';

// mocked child component
const mockData = jest.mock('', () => {
	return {
		__esModule: true,
		default: jest.fn(() => {
			<>
				<section>
					<h2>Mocked Children</h2>
					<p>Some random paragraph</p>
				</section>
			</>
		}),
	};
}) as jest.Mocked<any>;

const { layout } = render(
	<LayoutComponent>
		{ mockData.default }
	</LayoutComponent>
)
// Tests
describe('LayoutComponent Tests', () => {
	render(
		<LayoutComponent>
			{ mockData.default }
		</LayoutComponent>
	)

	it('Mock children render properly', () => {
		expect({ layout }).toMatchSnapshot();
	});

	it('Layout component renders Navbar component', () => {
		render(
			<LayoutComponent>
				<div></div>
			</LayoutComponent>
		)

		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});

	it('Layout component renders Footer component', () => {
		render(
			<LayoutComponent>
				<div></div>
			</LayoutComponent>
		)

		const footer = screen.getByRole('contentinfo');
		expect(footer).toBeInTheDocument();
	});
});

