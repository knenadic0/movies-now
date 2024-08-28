import { Movie } from '@datatypes/Movie';
import { getImageUrl } from '@helpers/movieAPIHelper';
import dateFormat from 'dateformat';
import Image from 'next/image';

export type MovieCardProps = {
	movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
	const { poster_path, title, release_date } = movie;
	return (
		<div className="group relative h-64 w-44 overflow-hidden bg-mn-light-gray shadow">
			<div className="absolute">
				<Image className="h-auto w-full" src={getImageUrl(poster_path)} alt={`${title} poster`} width={176} height={256} />
			</div>
			<div className="absolute bottom-0 h-0 w-full overflow-hidden bg-mn-green-4 px-2.5 py-0 text-white shadow transition-all duration-400 ease-in-out group-hover:h-28 group-hover:py-2.5">
				<label className="block font-bold">{title}</label>
				<label className="">{dateFormat(release_date, 'dd.mm.yyyy.')}</label>
			</div>
		</div>
	);
};

export default MovieCard;
