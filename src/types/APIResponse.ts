import { Movie } from './Movie';

export type APIResponse = {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};
