import { NextResponse } from 'next/server';

export const config = {
	runtime: 'edge',
};

export default async () => {
	const url = 'https://randomuser.me/api/?results=50';

	const res = await (await fetch(url)).json();

	return NextResponse.json(res);
};
