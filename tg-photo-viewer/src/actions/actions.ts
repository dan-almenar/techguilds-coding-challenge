"use server"
import { RequestOptions, ImageData } from "../customTypes/types";

const UNSPLASH_ENDPOINT_BASE: string = 'https://api.unsplash.com/photos/';
const UNSPLASH_ENDPOINT_RANDOM: string = 'https://api.unsplash.com/photos/random';
const defaultOptions: RequestOptions = {
	headers: {
		'Accept-Version': 'v1',
		'Authorization': `Client-ID ${process.env.API_KEY}`,
		'Content-Type': 'application/json',
	},
};

const baseParams: Record<string, string | number> = {
	'per_page': 12,
	'count': 12,
}

const parseURI: Function = (
	params: Record<string, string | number> = baseParams
): string => {
	const endpoint: URL = params.query ? new URL(UNSPLASH_ENDPOINT_RANDOM) : new URL(UNSPLASH_ENDPOINT_BASE);

	for (const [key, value] of Object.entries(params)) {
		endpoint.searchParams.append(key, value.toString());
	};

	return endpoint.href;
}

const toImageData: Function = (item: any): ImageData => {
	return {
		id: item['id'],
		width: item['width'],
		height: item['height'],
		blur_hash: item['blur_hash'],
		description: item['description'] ?? '',
		alt_description: item['alt_description'] ?? '',
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

async function fetchImages(
	options: RequestOptions = defaultOptions,
	params: Record<string, string | number> = baseParams,
): Promise<ImageData[]> {
	try {
		let uri: string = parseURI(params);

		const response: Response = await fetch(uri, options);
		if (response.ok){
			let data: ImageData[] = await response.json();
			data = data.map((item: any) => toImageData(item));
			return data;
		} else {
			return Promise.reject(response);
		}
	} catch(err) {
		return Promise.reject(err);
	}
};

export { fetchImages };

