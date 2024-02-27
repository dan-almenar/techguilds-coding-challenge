import "server-only";
import { RequestOptions, ImageData } from "../customTypes/types";
import { toImageData } from "./helpers";

const UNSPLASH_ENDPOINT_BASE: string = 'https://api.unsplash.com/photos/';
const UNSPLASH_ENDPOINT_RANDOM: string = 'https://api.unsplash.com/photos/random';
const defaultOptions: RequestOptions = {
	headers: {
		'Accept-Version': 'v1',
		'Authorization': `Client-ID ${process.env.UNSPLASH_API_KEY}`,
		'Content-Type': 'application/json',
	},
};

const baseParams: Record<string, string | number> = {
	'per_page': 12, // per_page param required when no query is provided
	'count': 16, // count param required when a query is provided
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

const fetchImages: Function = (async(
	params: Record<string, string | number> = baseParams,
	options: RequestOptions = defaultOptions,
): Promise<ImageData[]>  => {
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
});

const fetchData: Function = async(
	params: Record<string, string | number> = baseParams
): Promise<ImageData[]> => {
	const data: ImageData[] = await fetchImages(params);
	return data;
};

export { fetchData, toImageData };

