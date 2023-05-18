'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
	id: {
		name: string;
		value: string;
	};
	name: {
		first: string;
		last: string;
		title: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
}

export default function Users() {
	const [loading, setLoading] = useState<boolean>(true);
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await (await fetch('/api/users')).json();
				setUsers(res.results);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<main style={{ margin: '0 auto', padding: '16px', maxWidth: '1440px' }}>
			{users.length > 0 ? (
				<ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
					{users.map((user, index) => {
						return (
							<li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
								<img src={user.picture.thumbnail} alt="" />
								<p>{user.name.first}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<p>No users returned.</p>
			)}
			<Link href="/">Go to Homepage</Link>
		</main>
	);
}
