/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: true,
	distDir: 'build',

	// Required for GitHub Pages project site at /havens-artistry/
	basePath: '/havens-artistry',
	assetPrefix: '/havens-artistry/',
};

module.exports = nextConfig;
