import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../lib/queries/globalQueries';
import { WHAT_PAGE_QUERY } from '../lib/queries/pageQueries';

// Components
import Banner from '../components/blocks/Banner';
import Padding from '../components/blocks/Padding';
import PageIntro from '../components/blocks/PageIntro';
import ProjectDisplay from '../components/blocks/ProjectDisplay';
import Testimonial from '../components/blocks/Testimonial';

import CustomHead from '../components/CustomHead';

export default function WhatWeDo({ globalData, pageData }) {
	const componentMapping = {
		Banner,
		Padding,
		PageIntro,
		ProjectDisplay,
		Testimonial,
	};

	const dynamicComponents = pageData.blocks.map((block) => {
		return block.__typename.replace('ComponentBlock', '');
	});

	return (
		<div>
			<CustomHead seo={pageData.seo} />
			<main>
				{dynamicComponents.map((componentName, n) => {
					const Component = componentMapping[componentName];
					return <Component key={n} content={pageData.blocks[n]} />;
				})}
			</main>
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
