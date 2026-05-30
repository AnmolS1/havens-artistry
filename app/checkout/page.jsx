import PageHead from '@/components/PageHead';
import CheckoutClient from '@/components/CheckoutClient';

export const metadata = { title: "Checkout — Haven's Artistry" };

const BLOBS = [
	{ width: 300, height: 300, background: 'var(--mint)', top: '-80px', left: '8%' },
	{ width: 280, height: 280, background: 'var(--pink)', top: '-40px', right: '8%' },
];

export default function CheckoutPage() {
	return (
		<>
			<PageHead
				eyebrow="Almost Yours"
				title="Checkout"
				titleSize="clamp(2.4rem,5.5vw,3.8rem)"
				blobs={BLOBS}
			>
				A few last petals to tuck in, and your little treasures are on their way.
			</PageHead>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<CheckoutClient />
				</div>
			</section>
		</>
	);
}
