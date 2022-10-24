import ReactMarkdown from 'react-markdown';
import { request } from '../../lib/apollo';

// Components
import CustomImage from '../../components/CustomImage';

// Queries
import { GLOBAL_QUERY } from '../../lib/queries/globalQueries';
import { TEAM_PATHS_QUERY } from '../../lib/queries/pathQueries';
import { TEAM_SINGLE_QUERY } from '../../lib/queries/singleQueries';

export default function Team({ globalData, singleData }) {
	return (
		<div>
			<CustomImage content={singleData.image} />
			<h1>{singleData.name}</h1>
			<ReactMarkdown className="">{singleData.description}</ReactMarkdown>
		</div>
	);
}

export async function getStaticPaths() {
	const pathsRes = await request({ query: TEAM_PATHS_QUERY });

	const paths = pathsRes.teams.data.map((team) => ({
		params: { slug: team.attributes.slug },
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
		query: TEAM_SINGLE_QUERY,
		variables: {
			filters: {
				slug: {
					eq: params.slug,
				},
			},
		},
	});

	const globalData = resGlobal.globalInfo.data.attributes;
	const singleData = resPage.teams.data[0].attributes;

	return {
		props: { globalData, singleData },
	};
}
