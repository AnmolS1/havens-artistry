/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export — produces an `out/` folder that deploys cleanly to
	// Cloudflare Pages (Build command: `next build`, Output directory: `out`).
	output: 'export',

	// next/image optimization is a server feature; disable for static export.
	images: { unoptimized: true },

	// Emit each route as a folder with index.html (e.g. /shop/ -> /shop/index.html).
	// Plays nicely with Cloudflare Pages' static routing.
	trailingSlash: true,
	
	distDir: 'out'
};

module.exports = nextConfig;
