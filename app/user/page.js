import { Suspense } from 'react';
import Link from 'next/link';
import { kv } from '@vercel/kv';

export default async function User() {
	const user = await kv.hgetall('user:me');

	return (
		<main style={{ margin: '0 auto', padding: '16px', maxWidth: '1440px' }}>
			<Suspense>
				<h1 style={{ fontWeight: 300 }}>
					{user.firstName} <span style={{ fontWeight: 700 }}>{user.lastName}</span>
				</h1>
				<p>
					<span style={{ fontWeight: 700 }}>ID:</span> {user.id}
				</p>
				<p>
					<span style={{ fontWeight: 700 }}>Email:</span> {user.email}
				</p>
				<p>
					<span style={{ fontWeight: 700 }}>Address:</span> {user.address}
				</p>
				<Link href="/">Go to Homepage</Link>
			</Suspense>
		</main>
	);
}
