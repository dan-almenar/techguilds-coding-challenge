type Target = '' | '_blank';
export interface NavbarProps {
	data: { id: string, url: string, label: string }[];
};
export interface FooterProps {
	data: { year: number, url: string, label: string, target?: Target };
};
export interface ImageData {
	id: string,
	width: number,
	height: number,
	blur_hash: string,
	description: string,
	alt_description: string,
	location: { [key: string]: string },
	urls: {
		full: string,
		regular: string,
		small: string
	},
	links: {
		html: string,
		download: string
	},
	likes: number,
	user: {
		id: string,
		username: string,
		name: string,
		portfolio_url: string
	}
};
export interface RequestOptions {
	headers?: { [key: string]: string };
};
