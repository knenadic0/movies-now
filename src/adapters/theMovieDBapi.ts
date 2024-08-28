import { movieDBapiToken, movieDBapiUrl } from '@constants/strings';

const getOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${movieDBapiToken}`,
	},
};

export const getNewestMovies = async () => {
	const response = await fetch(`${movieDBapiUrl}/now_playing?language=en-US&page=1`, getOptions);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};
