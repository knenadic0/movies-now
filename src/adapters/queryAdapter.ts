'use client';

import useSWR from 'swr';
import { getNewestMovies, getPopularMovies } from './theMovieDBapi';
import { APIResponse } from '@datatypes/APIResponse';
import { useEffect, useState } from 'react';

export const useGetNewestMovies = (): { isLoading: boolean; error?: Error; response: APIResponse } => {
	const { data: response, error, isLoading } = useSWR('newest', getNewestMovies);
	return { isLoading, error, response };
};

export const useGetPopularMoviesByGenre = (genreId: number): { isLoading: boolean; error?: Error; response: APIResponse } => {
	const { data: response, error, isLoading } = useSWR(`popular/${genreId}`, () => getPopularMovies(genreId));
	return { isLoading, error, response };
};
