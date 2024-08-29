import { Movie } from '@datatypes/Movie';
import { getImageUrl } from '@helpers/movieAPIHelper';
import dateFormat from 'dateformat';
import Image from 'next/image';
import { GoHeartFill } from 'react-icons/go';
import { LuStar } from 'react-icons/lu';

export type MovieCardProps = {
	movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
	const { poster_path, title, release_date, vote_average } = movie;
	return (
		<div className="group relative h-64 w-44 overflow-hidden bg-mn-light-gray shadow">
			<div className="absolute">
				<Image className="h-auto w-full" src={getImageUrl(poster_path)} alt={`${title} poster`} width={176} height={256} />
			</div>
			<div className="absolute bottom-0 h-0 w-full overflow-hidden bg-mn-green-4 px-2.5 py-0 text-white shadow transition-all duration-400 ease-in-out group-hover:h-28 group-hover:py-2.5">
				<label className="block font-bold">{title}</label>
				<div className="flex justify-between">
					<span>{dateFormat(release_date, 'yyyy')}</span>
					<div className="flex items-baseline gap-x-1">
						<LuStar color="yellow" className="h-3" />
						<span>{vote_average.toFixed(1)}</span>
					</div>
				</div>
			</div>
			<div className="absolute right-2.5 top-0 justify-end opacity-0 transition-all group-hover:top-2.5 group-hover:opacity-100">
				<GoHeartFill color="white" className="h-6 w-6" />
			</div>
		</div>
	);
};

export default MovieCard;
