import PageHead from '@/components/PageHead';
import ShopGrid from '@/components/ShopGrid';

export const metadata = { title: 'Shop All' };

const BLOBS = [
	{ width: 320, height: 320, background: 'var(--pink)', top: '-90px', left: '8%' },
	{ width: 280, height: 280, background: 'var(--lime)', top: '-50px', right: '10%' },
];

export default function ShopPage() {
	return (
		<>
			<PageHead eyebrow="Gather a Posy" title="Shop All" blobs={BLOBS} divider={false}>
				Everything blooming in the studio right now — filter by collection and fill your basket.
			</PageHead>

			<section className="section" style={{ paddingTop: 18 }}>
				<div className="wrap">
					<ShopGrid />
				</div>
			</section>
		</>
	);
}
