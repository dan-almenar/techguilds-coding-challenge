/*
 * The actions.ts module exports the fetchData function.
 * Said function is currently used to fetch images from Unsplash and map them to ImageData objects,
 * but their implementation can be extended to adapt to any other API.
*/
import "server-only";
import { RequestOptions, ImageData } from "../customTypes/types";
import { toImageData } from "./helpers";
import { services } from "./constants";


const { unsplash } = services;

const parseURI: Function = (
	params: Record<string, string | number> = baseParams
): string => {
	const endpoint: URL = params.query ? new URL(unsplash.endpoints.random) : new URL(unsplash.endpoints.base);

	for (const [key, value] of Object.entries(params)) {
		endpoint.searchParams.append(key, value.toString());
	};

	return endpoint.href;
}

const fetchImages: Function = (async(
	params: Record<string, string | number> = unsplash.base_params,
	options: RequestOptions = unsplash.base_options,
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
	params: Record<string, string | number> = unsplash.base_params
): Promise<ImageData[]> => {
	const data: ImageData[] = await fetchImages(params);
	return data;
};

export { fetchData };

