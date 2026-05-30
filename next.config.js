/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '/havens-artistry' : '';

const nextConfig = {
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: true,
	distDir: 'build',
	basePath,
	assetPrefix: basePath,
};

module.exports = nextConfig;
