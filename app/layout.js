import './globals.css';

export const metadata = {
	title: 'Meal Share',
	description:
		'Meal Share is a Next.js app where users can share, discover, and save recipes from a community of home cooks.'
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
