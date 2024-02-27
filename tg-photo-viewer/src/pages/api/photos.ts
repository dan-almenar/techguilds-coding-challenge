/*
 * The photos.ts file is used to fetch images from Unsplash using the Unsplash API.
 * This module can be extended to fetch images from any other API (e.g. Pixabay). In that case,
 * the base endpoints, options and API Keys should be added to the codebase.
 * In the previous stated scenario, it would be best to change the endpoints variables
 * into an object (e.g. endpoints: {service: {endpoints: {base: string, random: string}}}).
 * The same suggestion applies to the options.
 * As for the API Keys, it is best to add them to the .env file.
 * All other functions should also be refactored to adapt to the new API, but
 * this module would serve as a template.
*/
import { NextApiRequest, NextApiResponse } from 'next';
import { RequestOptions, ImageData } from '../../customTypes/types';

// Define the base endpoints for fetching images from Unsplash
const UNSPLASH_BASE_ENDPOINT: string = 'https://api.unsplash.com/photos/';
const UNSPLASH_RANDOM_ENDPOINT: string = 'https://api.unsplash.com/photos/random';

// Default request options including headers
const defaultOptions: RequestOptions = {
  headers: {
    'Accept-Version': 'v1',
    'Authorization': `Client-ID ${process.env.UNSPLASH_API_KEY}`,
    'Content-Type': 'application/json',
  },
};

// Define the base parameters for constructing the URL
const baseParams: Record<string, string | number> = {
  'page': 1,
  'per_page': 12, // per_page param required when no query is provided
  'count': 16, // count param required when a query is provided
}

// Handler function to fetch images from Unsplash
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Construct the URL based on the request query parameters
	req.query = {...req.query, ...baseParams};
	req.headers = {...req.headers, ...defaultOptions.headers};
    const uri = setURL(req.query);
    
    // Fetch images from the constructed URL with default options
    const response = await fetch(uri, defaultOptions);

    // If the response is successful, parse the JSON data and map it to ImageData objects
    if (response.ok) {
      const data = await response.json();
      const imageData = data.map((item: any) => toImageData(item));
      
      // Send the image data as JSON response
      res.status(200).json(imageData);
      //return Promise.resolve(imageData);
    } else {
      // If there's an error in fetching images, send an internal server error response
      res.status(500).json({ error: 'Internal Server Error' });
      //return Promise.reject(response);
    };
  } catch (error) {
    // Catch and handle any errors that occur during the process
    res.status(500).json({ error: 'Internal Server Error' });
    //return Promise.reject(error);
  };
};

// Function to construct the URL based on query parameters
const setURL = (params?: Partial<{ [key: string]: string | string[] | number }>): string => {
  const endpoint: URL = params && params.query ? new URL(UNSPLASH_RANDOM_ENDPOINT) : new URL(UNSPLASH_BASE_ENDPOINT);

  // Append query parameters to the URL using URLSearchParams
  if (params) {
	for (const [key, value] of Object.entries(params)) {
		value && endpoint.searchParams.append(key, value.toString());
	  };
  }
  
  return endpoint.href;
};

// Function to convert response data to ImageData objects
const toImageData: Function = (item: any): ImageData => {
  return {
    id: item['id'],
    width: item['width'],
    height: item['height'],
    blur_hash: item['blur_hash'],
    description: item['description'] ?? '',
    alt_description: item['alt_description'] ?? '',
    urls: {
      full: item['urls']?.full,
      regular: item['urls']?.regular,
      small: item['urls']?.small,
    },
    links: {
      html: item['links']?.html,
      download: item['links']?.download,
    },
    likes: item['likes'],
    user: {
      id: item['user']?.id,
      username: item['user']?.username,
      name: item['user']?.name,
      portfolio_url: item['user']?.portfolio_url,
    },
  };
};

