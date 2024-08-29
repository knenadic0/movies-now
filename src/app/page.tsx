'use client';

import { useGetNewestMovies } from '@adapters/queryAdapter';
import GenreMovieSlider from '@components/GenreMovieSlider';
import HorizontalSlider from '@components/HorizontalSlider';
import Metatags from '@components/Metatags';
import { genres } from '@constants/genres';
import { getTitle } from '@helpers/stringHelper';

const Home = () => {
	const { isLoading: areNewestMoviesLoading, response: newestMoviesResponse } = useGetNewestMovies();

	return (
		<>
			<Metatags title={getTitle('Home')} />
			<main className="full-h-layout flex flex-col gap-y-8 px-6 py-8">
				<HorizontalSlider title="Newest movies" isLoading={areNewestMoviesLoading} slides={newestMoviesResponse?.results} />
				{genres.map((genre) => (
					<GenreMovieSlider genre={genre} key={genre.id} />
				))}
			</main>
		</>
	);
};

export default Home;
