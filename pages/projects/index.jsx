import { request } from '../../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../../lib/queries';

// Global data
import { useGlobalUpdater } from '../../customHooks/updateGlobalState';

export default function Projects({ globalData }) {
	useGlobalUpdater(globalData);
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
