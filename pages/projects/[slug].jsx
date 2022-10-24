import ReactMarkdown from 'react-markdown';
import { request } from '../../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../../lib/queries/globalQueries';
import { PROJECT_PATHS_QUERY } from '../../lib/queries/pathQueries';
import { PROJECT_SINGLE_QUERY } from '../../lib/queries/singleQueries';

// Global data
import { useGlobalUpdater } from '../../customHooks/updateGlobalState';

export default function Project({ globalData, singleData }) {
	useGlobalUpdater(globalData);
	return (
		<div>
			<h1>{singleData.displayTitle}</h1>
			<p>{singleData.location}</p>
			<ReactMarkdown className="">{singleData.description}</ReactMarkdown>
		</div>
	);
}

export async function getStaticPaths() {
	const pathsRes = await request({ query: PROJECT_PATHS_QUERY });

	const paths = pathsRes.projects.data.map((project) => ({
		params: { slug: project.attributes.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const resGlobal = await request({
		query: GLOBAL_QUERY,
	});

	const resPage = await request({
		query: PROJECT_SINGLE_QUERY,
		variables: {
			filters: {
				slug: {
					eq: params.slug,
				},
			},
		},
	});

	const globalData = resGlobal.globalInfo.data.attributes;
	const singleData = resPage.projects.data[0].attributes;

	return {
		props: { globalData, singleData },
	};
}
