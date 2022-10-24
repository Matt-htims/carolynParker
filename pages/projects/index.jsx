import { request } from '../../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../../lib/queries/globalQueries';

export default function Projects({ globalData }) {
	return (
		<div>
			<h1 className="h-screen">Projects</h1>
			<p className="h-screen">hello</p>
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
