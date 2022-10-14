import { useEffect } from 'react';
import Head from 'next/head';
import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../lib/queries';

// Global data
import { useGlobalUpdater } from '../customHooks/updateGlobalState';

export default function Home({ globalData }) {
	useGlobalUpdater(globalData);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="">Home</h1>
		</div>
	);
}

export async function getStaticProps() {
	const res = await request({
		query: GLOBAL_QUERY,
	});

	const globalData = res.globalInfo.data.attributes;

	return {
		props: { globalData },
	};
}
