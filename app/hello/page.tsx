'use client';

import { useState, useEffect } from 'react';

export default function Users() {
	const [loading, setLoading] = useState<boolean>(true);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		(async () => {
			try {
				const res = await (await fetch('/api/hello')).json();
				setMessage(res.name);
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
			{message ? <p>{message}</p> : <p>No message was returned</p>}
		</main>
	);
}
