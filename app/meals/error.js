'use client';

export default function ErrorPage({ error }) {
	return (
		<main className='error'>
			<h1>An Error Occurred</h1>
			<p>Failed to Fetch Meal Data</p>
		</main>
	);
}
