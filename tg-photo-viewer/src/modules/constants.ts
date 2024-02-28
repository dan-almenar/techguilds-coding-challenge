/*
 * The constants.ts module exports the services object.
 * Said object contains the endpoints and base options for fetching images from Unsplash,
 * although it can be extended to adapt to any other API.
*/
export const services = {
	unsplash: {
		endpoints: {
			base: 'https://api.unsplash.com/photos/',
			random: 'https://api.unsplash.com/photos/random',
		},
		base_options: {
			headers: {
				'Accept-Version': 'v1',
				'Authorization': `Client-ID ${process.env.UNSPLASH_API_KEY}`,
				'Content-Type': 'application/json',
			},
		},
		base_params: {
			per_page: 12, // per_page param required when no query is provided
			count: 16, // count param required when a query is provided
		},
	},
};
