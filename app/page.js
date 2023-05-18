import Link from 'next/link';

export default function Home() {
	return (
		<main style={{ margin: '0 auto', padding: '16px', maxWidth: '1440px' }}>
			<h1>Home</h1>
			<Link href="/user">Go to User Page</Link>
		</main>
	);
}
