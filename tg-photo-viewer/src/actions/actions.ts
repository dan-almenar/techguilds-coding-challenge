import { RequestOptions, ImageData } from "../customTypes/types";

const BASE_ENDPOINT: string = `${process.env.BASE_ENDPOINT}`;
const defaultOptions: RequestOptions = {
	headers: {
		'Accept-Version': 'v1',
		'Authorization': `Client-ID ${process.env.API_KEY}`,
		'Content-Type': 'application/json',
	},
};

const toImageData: Function = (item: any): ImageData => {
	return {
		id: item['id'],
		width: item['width'],
		height: item['height'],
		blur_hash: item['blur_hash'],
		description: item['description'],
		alt_description: item['alt_description'],
		urls: {
			full: item['urls']['full'],
			regular: item['urls']['regular'],
			small: item['urls']['small'],
		},
		links: {
			html: item['links']['html'],
			download: item['links']['download'],
		},
		likes: item['likes'],
		user: {
			id: item['user']['id'],
			username: item['user']['username'],
			name: item['user']['name'],
			portfolio_url: item['user']['portfolio_url'],
		},
	};
};
async function fetchImages(endpoint: string = BASE_ENDPOINT, options: RequestOptions = defaultOptions): Promise<ImageData[]> {
	try {
		const response: Response = await fetch(endpoint, options);
		if (response.ok){
			const data: ImageData[] = await response.json();
			data.map((item: any) => toImageData(item));
			return data;
		} else {
			const err: Error = new Error(`Error: ${response.status} - ${response.statusText}`);
			return Promise.reject(err);
		}
	} catch(err) {
		return Promise.reject(err);
	}
};

export { fetchImages };

