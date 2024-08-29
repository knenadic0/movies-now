import { appName } from '@constants/strings';

export type MetaTagsProps = {
	title: string;
};

const Metatags = ({ title }: MetaTagsProps) => {
	const pageTitle = `${title} | ${appName}`;
	return (
		<>
			<title>{pageTitle}</title>
			<meta charSet="utf-8" />
		</>
	);
};

export default Metatags;
