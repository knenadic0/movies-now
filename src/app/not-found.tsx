import { NotFoundImage } from '@components/NotFoundImage';
import { homeRoute } from '@constants/routes';
import { Button } from '@nextui-org/react';
import { Metadata } from 'next';
import NextLink from 'next/link';

export const metadata: Metadata = {
	title: 'Page not found',
};

const NotFound = () => (
	<main className="full-h-layout flex flex-col items-center px-6 pt-12 md:flex-row md:pt-0">
		<div className="flex flex-col gap-y-6">
			<h1 className="text-5xl font-bold">It&apos;s empty here</h1>
			<p>Looks like this page can&apos;t be found. Maybe it was moved or renamed.</p>
			<Button as={NextLink} href={homeRoute} variant="ghost" color="primary" fullWidth={false} className="w-min px-6">
				Back to home
			</Button>
		</div>
		<div className="flex-shrink-0 sm:w-[300px] md:w-[400px] lg:w-[500px]">
			<NotFoundImage />
		</div>
	</main>
);

export default NotFound;
