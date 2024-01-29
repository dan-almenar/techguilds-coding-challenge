import { RequestOptions, ImageData } from "../customTypes/types";

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

const fetchData: Function = async<T>(endpoint: string, options?: RequestOptions, callback?: Function): Promise<T | T[]> => {
	try {
		const response: Response = await fetch(endpoint, options ? options : {});
		if (response.ok) {
			const data: T | T[] = await response.json();
			if (callback) {
				if (Array.isArray(data)){
					return data.map((item) => callback(item));
				} else {
					return callback(data);
				}
			} else {
				return data;
			};
		} else {
			const err: Error = new Error(`Error ${response.status}: ${response.statusText}`);
			return Promise.reject(err);
		}
	} catch (err) {
		return Promise.reject(err);
	};
};

export { toImageData, fetchData };
