import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../lib/queries/globalQueries';

export default function Contact({ globalData }) {
	return (
		<div>
			<h1>Contact</h1>
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
