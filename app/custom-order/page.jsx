import PageHead from '@/components/PageHead';
import Panel from '@/components/Panel';
import Placeholder from '@/components/Placeholder';
import CustomOrderForm from '@/components/CustomOrderForm';
import { customWorkImg } from '@/lib/images';
import styles from './page.module.css';

export const metadata = { title: 'Custom Order' };

const BLOBS = [
	{ width: 330, height: 330, background: 'var(--lavender)', top: '-100px', left: '6%' },
	{ width: 300, height: 300, background: 'var(--pink)', top: '-50px', right: '8%' },
];

export default function CustomOrderPage() {
	return (
		<>
			<PageHead eyebrow="One of a Kind" title="Custom Order" blobs={BLOBS}>
				Every custom piece is made with love and intention — shaped slowly by hand, just for you and
				no one else.
			</PageHead>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className={styles.customLayout}>
						<Panel flourish className={`${styles.introCard} reveal`}>
							<Placeholder className={styles.introPh} framed label="Custom work" sprig="br" src={customWorkImg()} alt="A custom handmade piece" />
							<h3>Made just for you</h3>
							<p style={{ color: 'var(--ink-soft)' }}>
								Tell me your vision — a favorite flower, a color you love, a feeling you want to carry
								with you. I&apos;ll dream it up and bring it to life by hand, one careful coil and bead
								at a time.
							</p>
							<p style={{ color: 'var(--ink-soft)', marginBottom: 0 }}>
								No two pieces are ever quite the same, and that&apos;s exactly the point. 🌿
							</p>
						</Panel>

						<CustomOrderForm />
					</div>
				</div>
			</section>
		</>
	);
}
