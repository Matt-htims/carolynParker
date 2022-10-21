import Head from 'next/head';
import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY, HOME_QUERY } from '../lib/queries';

// Global data
import { useGlobalUpdater } from '../customHooks/updateGlobalState';

// Components
import Banner from '../components/blocks/Banner';
import Padding from '../components/blocks/Padding';
import PageIntro from '../components/blocks/PageIntro';
import ProjectDisplay from '../components/blocks/ProjectDisplay';
import Testimonial from '../components/blocks/Testimonial';

import CustomHead from '../components/CustomHead';

export default function Home({ globalData, pageData }) {
	useGlobalUpdater(globalData);

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
	const resGlobal = await request({
		query: GLOBAL_QUERY,
	});

	const resHome = await request({
		query: HOME_QUERY,
		variables: {
			pagination: {
				pageSize: 1,
				page: 1,
			},
		},
	});

	const globalData = resGlobal.globalInfo.data.attributes;
	const pageData = resHome.pageHome.data.attributes;

	return {
		props: { globalData, pageData },
	};
}
