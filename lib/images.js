// =============================================================================
// Image manifest — the single place that maps the site's photo slots to files
// in /public/images. Everything is `null` by default, which shows the decorative
// striped placeholder. To use a real photo:
//
//   1. Drop the file into the matching folder under /public/images
//      (see /public/images/README.md for the exact filenames).
//   2. Set the entry below to its path, e.g.
//         stickers: '/images/collections/stickers.jpg'
//
// Paths are root-relative ('/images/...'); the GitHub Pages basePath (if any)
// is applied automatically by withBase().
// =============================================================================

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBase = (p) => (p ? `${BASE}${p}` : null);

export const IMAGES = {
	// Collection cards (home tiles + Collections page). Keyed by collection slug.
	collection: {
		stickers: null, // '/images/collections/stickers.jpg'
		earrings: null, // '/images/collections/earrings.jpg'
		rings: null, // '/images/collections/rings.jpg'
		bracelets: null, // '/images/collections/bracelets.jpg'
		necklaces: null, // '/images/collections/necklaces.jpg'
		'wire-animals': null, // '/images/collections/wire-animals.jpg'
	},

	// Shop All product cards. Keyed by product id (see lib/catalog.js).
	product: {
		'sticker-01': null,
		'sticker-02': null,
		'sticker-pack': null,
		'earrings-01': null,
		'earrings-02': null,
		'earrings-03': null,
		'ring-01': null,
		'ring-02': null,
		'ring-03': null,
		'bracelet-01': null,
		'bracelet-02': null,
		'bracelet-03': null,
		'necklace-01': null,
		'necklace-02': null,
		'necklace-03': null,
		'necklace-04': null,
	},

	// Home "Follow along" Instagram strip (6 squares).
	instagram: [null, null, null, null, null, null],

	// Studio photos.
	portrait: null, // '/images/about/portrait.jpg'  — About page + home teaser
	customWork: null, // '/images/about/custom-work.jpg' — Custom Order intro
};

// --- resolvers (apply basePath, return null when no image is set) ---
export const collectionImg = (slug) => withBase(IMAGES.collection[slug]);
export const productImg = (id) => withBase(IMAGES.product[id]);
export const instagramImg = (i) => withBase(IMAGES.instagram[i]);
export const portraitImg = () => withBase(IMAGES.portrait);
export const customWorkImg = () => withBase(IMAGES.customWork);
