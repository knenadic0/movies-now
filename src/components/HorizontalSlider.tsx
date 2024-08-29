import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Scrollbar } from 'swiper/modules';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Movie } from '@datatypes/Movie';

export type HorizontalSliderProps = {
	title?: string;
	isLoading: boolean;
	slides?: Movie[];
};

const HorizontalSlider = ({ title, isLoading, slides }: HorizontalSliderProps) => (
	<div>
		{title && <h2 className="mb-2 text-2xl font-bold text-mn-green-3">{title}</h2>}
		<Swiper
			modules={[Navigation, FreeMode, Scrollbar]}
			spaceBetween={24}
			centeredSlides
			slidesPerView="auto"
			className="movies-swiper"
			navigation
			freeMode
			scrollbar={{
				draggable: true,
			}}
			breakpoints={{
				480: {
					centeredSlides: false,
					slidesPerGroupAuto: true,
				},
			}}
		>
			{isLoading &&
				[...Array(5)].map((_, index) => (
					<SwiperSlide key={index}>
						<MovieCardSkeleton />
					</SwiperSlide>
				))}
			{!isLoading &&
				slides &&
				slides.map((movie) => (
					<SwiperSlide key={movie.id}>
						<MovieCard movie={movie} />
					</SwiperSlide>
				))}
		</Swiper>
	</div>
);

export default HorizontalSlider;
