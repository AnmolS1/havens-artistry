import Link from 'next/link';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import { Spiral } from '@/components/Decor';

export const metadata = { title: 'Lost in the Garden' };

export default function NotFound() {
	return (
		<section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
			<span className="blob" style={{ width: 320, height: 320, background: 'var(--pink)', top: '-60px', left: '10%' }} />
			<span className="blob" style={{ width: 300, height: 300, background: 'var(--mint)', bottom: '-60px', right: '12%' }} />
			<div className="wrap center" style={{ position: 'relative', zIndex: 2 }}>
				<Spiral
					className="anim-spin"
					size={120}
					style={{ color: 'var(--mauve)', opacity: 0.6, margin: '0 auto 18px' }}
				/>
				<span className="eyebrow">Page 404</span>
				<h1 className="display" style={{ fontSize: 'clamp(2.6rem,6vw,4.4rem)' }}>
					A little lost in the garden
				</h1>
				<p className="lead center" style={{ margin: '.6em auto 0' }}>
					This path seems to have grown over. Let&apos;s wander back to somewhere blooming.
				</p>
				<Divider />
				<div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
					<Button href="/" variant="primary">
						Back Home
					</Button>
					<Button href="/shop" variant="ghost">
						Visit the Shop
					</Button>
				</div>
			</div>
		</section>
	);
}
