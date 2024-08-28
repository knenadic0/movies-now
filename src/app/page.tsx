import HorizontalSlider from '@components/HorizontalSlider';
import { getTitle } from '@helpers/stringHelper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: getTitle('Home'),
};

const Home = () => {
	return (
		<main className="full-h-layout flex flex-col px-6 py-12">
			<HorizontalSlider title="Newest movies" />
		</main>
	);
};

export default Home;
