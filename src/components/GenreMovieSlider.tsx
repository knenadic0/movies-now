'use client';

import { useGetPopularMoviesByGenre } from '@adapters/queryAdapter';
import { Genre } from '@datatypes/Genre';
import HorizontalSlider from './HorizontalSlider';

export type GenreMovieSliderProps = {
	genre: Genre;
};

const GenreMovieSlider = ({ genre }: GenreMovieSliderProps) => {
	const { isLoading, response } = useGetPopularMoviesByGenre(genre.id);

	return <HorizontalSlider title={`Popular ${genre.name} movies`} isLoading={isLoading} slides={response?.results} />;
};

export default GenreMovieSlider;
