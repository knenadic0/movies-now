'use client';

import useSWR from 'swr';
import { getNewestMovies } from './theMovieDBapi';
import { APIResponse } from '@datatypes/APIResponse';

export const useGetNewestMovies = (): { isLoading: boolean; error?: Error; response: APIResponse } => {
	const { data: response, error, isLoading } = useSWR('newest', getNewestMovies);
	return { isLoading, error, response };
};
