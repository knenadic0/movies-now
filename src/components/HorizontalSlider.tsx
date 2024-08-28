'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Scrollbar } from 'swiper/modules';
import MovieCard from './MovieCard';
import { useGetNewestMovies } from '@adapters/queryAdapter';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import { defaultResultsPerPage } from '@constants/numbers';

export type HorizontalSliderProps = {
	title?: string;
};

const HorizontalSlider = ({ title }: HorizontalSliderProps) => {
	const { isLoading, error, response } = useGetNewestMovies();

	return (
		<>
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
					response &&
					response.results.map((movie) => (
						<SwiperSlide key={movie.id}>
							<MovieCard movie={movie} />
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
};

export default HorizontalSlider;
