/*
 * The actions.ts module exports the getImages function.
 * Said function is currently used to fetch images from Unsplash and map them to ImageData objects, but its implementation can be extended to adapt to any other API.
*/
'use server';
import { RequestOptions, ImageData } from "../customTypes/types";
import { toImageData } from "./helpers";
import { services } from "./constants";

const { unsplash } = services;

const getImages: Function = async(
	endpoint: string = unsplash.endpoints.random,
	page: number = 1,
	params: Record<string, string | number> = unsplash.base_params
): Promise<ImageData[]> => {
	try {
		const url: URL = new URL(endpoint);
		for (const [key, value] of Object.entries(params)) {
			url.searchParams.append(key, value.toString());
		}
		url.searchParams.append('page', page.toString());
		const response: Response = await fetch(url.href, unsplash.base_options);
		if (response.ok) {
			const data = await response.json();
			return data.map((item: any) => toImageData(item));
		} else {
			return Promise.reject(`Error: ${response.status}: ${response.statusText}`);
		}
	} catch(err) {
		return Promise.reject(err);
	}
}

export { getImages };

