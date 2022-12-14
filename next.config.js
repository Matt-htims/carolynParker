/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['carolyn-parker.s3.eu-west-2.amazonaws.com'],
	},
};

module.exports = nextConfig;
