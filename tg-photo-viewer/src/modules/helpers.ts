/*
 * The helpers.ts module exports the toImageData function.
 * Said function is used to convert response data to ImageData objects.
 * The implementation can be extended to adapt to any other API, in which case
 * it would be advisable to refactor it based on any given data structures that fits the API.
*/
export const toImageData: Function = (item: any): ImageData => {
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
