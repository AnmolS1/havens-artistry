/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: true,
	distDir: 'build',
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

	env: { NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH },
};

module.exports = nextConfig;
