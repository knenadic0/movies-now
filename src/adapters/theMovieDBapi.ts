import { movieDBapiToken, movieDBapiUrl } from '@constants/strings';

const getOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${movieDBapiToken}`,
	},
};

export const getNewestMovies = async () => {
	return await processResponse('movie/now_playing?language=en-US&page=1');
};

export const getPopularMovies = async (genreId: number) => {
	return await processResponse(`discover/movie?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`);
};

const processResponse = async (params: string) => {
	const response = await fetch(`${movieDBapiUrl}/${params}`, getOptions);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
