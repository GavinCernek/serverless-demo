import Link from 'next/link';

export default function Home() {
	return (
		<main style={{ margin: '0 auto', padding: '16px', maxWidth: '1440px' }}>
			<h1>Home</h1>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
				<Link href="/user">Go to User Page</Link>
				<Link href="/hello">Go to Hello Page</Link>
				<Link href="/users">Go to Users Page</Link>
			</div>
		</main>
	);
}
