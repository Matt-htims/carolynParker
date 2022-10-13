import { request } from '../../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../../lib/queries';

// Global data
import { useGlobalUpdater } from '../../customHooks/updateGlobalState';

export default function About({ globalData }) {
	useGlobalUpdater(globalData);
	return (
		<div>
			<h1>About</h1>
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
