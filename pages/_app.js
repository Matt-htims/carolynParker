import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const { globalData } = pageProps;
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Carolyn Parker" />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:url" content="" />
			</Head>
			<Layout globalData={globalData}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
