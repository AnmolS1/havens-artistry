// Catalog data — collections, products, and custom-order timelines.
// All values are placeholders for the handmade shop.

export const COLLECTIONS = [
	{
		slug: 'stickers',
		name: 'Stickers',
		sub: 'peel · stick · bloom',
		blurb:
			'Waterproof, peel-and-bloom little artworks for journals, water bottles, and everywhere in between.',
	},
	{
		slug: 'earrings',
		name: 'Earrings',
		sub: 'dangle & sway',
		blurb:
			'Hand-wired dangles and studs that catch the light and sway with every little movement.',
	},
	{
		slug: 'rings',
		name: 'Rings',
		sub: 'tiny treasures',
		blurb:
			'Delicate coiled bands and beaded blooms, each shaped and sized to feel like it grew just for you.',
	},
	{
		slug: 'bracelets',
		name: 'Bracelets',
		sub: 'wrap of whimsy',
		blurb: 'Wrapped wire, glass beads, and tiny charms strung into wearable bits of whimsy.',
	},
	{
		slug: 'necklaces',
		name: 'Necklaces',
		sub: 'close to heart',
		blurb:
			'Pendants and pressed-flower charms to keep a little bit of the garden close to your heart.',
	},
];

// "Wire Animals" — shown on the Collections page as coming soon.
export const COMING_SOON = {
	slug: 'wire-animals',
	name: 'Wire Animals',
	blurb:
		'Tiny sculpted creatures coiled entirely from wire — foxes, frogs, and friends. Growing soon in the studio.',
};

// Category labels keyed by the filter slug used on Shop All.
export const CATEGORY_LABELS = {
	stickers: 'Stickers',
	earrings: 'Earrings',
	rings: 'Rings',
	bracelets: 'Bracelets',
	necklaces: 'Necklaces',
};

// Shop All product grid (placeholders).
export const PRODUCTS = [
	{ cat: 'stickers', name: 'Sticker No. 01', price: '$4' },
	{ cat: 'stickers', name: 'Sticker No. 02', price: '$5' },
	{ cat: 'stickers', name: 'Sticker Pack', price: '$12' },
	{ cat: 'earrings', name: 'Earrings No. 01', price: '$24' },
	{ cat: 'earrings', name: 'Earrings No. 02', price: '$28' },
	{ cat: 'earrings', name: 'Earrings No. 03', price: '$26' },
	{ cat: 'rings', name: 'Ring No. 01', price: '$18' },
	{ cat: 'rings', name: 'Ring No. 02', price: '$20' },
	{ cat: 'rings', name: 'Ring No. 03', price: '$22' },
	{ cat: 'bracelets', name: 'Bracelet No. 01', price: '$26' },
	{ cat: 'bracelets', name: 'Bracelet No. 02', price: '$30' },
	{ cat: 'bracelets', name: 'Bracelet No. 03', price: '$28' },
	{ cat: 'necklaces', name: 'Necklace No. 01', price: '$34' },
	{ cat: 'necklaces', name: 'Necklace No. 02', price: '$38' },
	{ cat: 'necklaces', name: 'Necklace No. 03', price: '$42' },
	{ cat: 'necklaces', name: 'Necklace No. 04', price: '$40' },
];

// Filter pills for Shop All.
export const FILTERS = [
	{ key: 'all', label: 'All' },
	{ key: 'stickers', label: 'Stickers' },
	{ key: 'earrings', label: 'Earrings' },
	{ key: 'rings', label: 'Rings' },
	{ key: 'bracelets', label: 'Bracelets' },
	{ key: 'necklaces', label: 'Necklaces' },
];

// Custom-order estimated production timelines (placeholder).
export const TIMELINES = {
	Sticker: '1–2 weeks',
	Earring: '2–3 weeks',
	Ring: '3–4 weeks',
	Bracelet: '3–4 weeks',
	Necklace: '4–5 weeks',
};

export const PRODUCT_TYPES = ['Sticker', 'Earring', 'Ring', 'Bracelet', 'Necklace'];

export const BUDGET_RANGES = [
	'Under $25',
	'$25–$50',
	'$50–$100',
	'$100–$200',
	'$200+',
];
