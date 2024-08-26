import { NotFoundImage } from '@components/NotFoundImage';
import { homeRoute } from '@constants/routes';
import { Button } from '@nextui-org/react';
import { Metadata } from 'next';
import NextLink from 'next/link';

export const metadata: Metadata = {
	title: 'Page not found',
};

export default function NotFound() {
	return (
		<main className="flex md:flex-row flex-col full-h-layout items-center px-6 pt-12 md:pt-0">
			<div className="flex flex-col gap-y-6">
				<h1 className="font-bold text-5xl">It&apos;s empty here</h1>
				<p>Looks like this page can&apos;t be found. Maybe it was moved or renamed.</p>
				<Button as={NextLink} href={homeRoute} variant="ghost" color="primary" fullWidth={false} className="w-min px-6">
					Back to home
				</Button>
			</div>
			<div className="flex-shrink-0 lg:w-[500px] md:w-[400px] sm:w-[300px]">
				<NotFoundImage />
			</div>
		</main>
	);
}
