import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../lib/queries/globalQueries';
import { WHAT_PAGE_QUERY } from '../lib/queries/pageQueries';

// Components
import CustomPage from '../components/CustomPage';

export default function WhatWeDo({ globalData, pageData }) {
	return (
		<div>
			<CustomPage pageData={pageData} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await request({
		query: GLOBAL_QUERY,
	});

	const resPage = await request({
		query: WHAT_PAGE_QUERY,
		variables: {
			pagination: {
				pageSize: 1,
				page: 1,
			},
		},
	});

	const globalData = res.globalInfo.data.attributes;
	const pageData = resPage.pageWhatWeDo.data.attributes;

	return {
		props: { globalData, pageData },
	};
}
