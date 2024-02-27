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
