import { request } from '../lib/apollo';

// Queries
import { GLOBAL_QUERY } from '../lib/queries/globalQueries';
import { HOME_PAGE_QUERY } from '../lib/queries/pageQueries';

// Components
import CustomPage from '../components/CustomPage';

export default function Home({ globalData, pageData }) {
	return (
		<div>
			<CustomPage pageData={pageData} />
		</div>
	);
}

export async function getStaticProps() {
	const resGlobal = await request({
		query: GLOBAL_QUERY,
	});

	const resPage = await request({
		query: HOME_PAGE_QUERY,
		variables: {
			pagination: {
				pageSize: 1,
				page: 1,
			},
		},
	});

	const globalData = resGlobal.globalInfo.data.attributes;
	const pageData = resPage.pageHome.data.attributes;

	return {
		props: { globalData, pageData },
	};
}
