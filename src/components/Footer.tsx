import { appName, author, year } from '@constants/strings';

const Footer = () => (
	<footer className="flex h-16 items-center justify-center gap-3 bg-white border-t-1 border-mn-light-gray text-base sm:gap-7 sm:text-lg">
		<span>{appName}</span>
		<span className="text-mn-green-3">|</span>
		<span>
			{author} © {year}.
		</span>
	</footer>
);

export default Footer;
