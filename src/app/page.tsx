import { appName } from '@constants/strings';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Home | ${appName}`,
};

export default function Home() {
	return <main className="full-h-layout flex flex-col items-center justify-between p-24"></main>;
}
