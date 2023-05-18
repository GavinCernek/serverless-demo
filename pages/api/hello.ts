import { NextRequest, NextResponse } from 'next/server';

export const config = {
	runtime: 'edge',
	regions: ['iad1'],
};

export default (request: NextRequest) => {
	return NextResponse.json({
		name: `Hello, from ${request.url} I'm an Edge Function!`,
	});
};
