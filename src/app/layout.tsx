import { Varela_Round } from 'next/font/google';
import '@styles/globals.css';
import { Providers } from './providers';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { mnGreen3 } from '@constants/colors';

const VARELA_ROUND = Varela_Round({ weight: '400', subsets: ['latin'] });

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={VARELA_ROUND.className}>
			<NextTopLoader showSpinner={false} color={mnGreen3} />
			<Header />
			<Providers>{children}</Providers>
			<Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
					},
				}}
			/>
			<Footer />
		</body>
	</html>
);

export default RootLayout;
