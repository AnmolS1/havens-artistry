import PageHead from '@/components/PageHead';
import Divider from '@/components/Divider';
import Placeholder from '@/components/Placeholder';
import Button from '@/components/Button';
import { Spiral } from '@/components/Decor';
import styles from './page.module.css';

export const metadata = { title: "About — Haven's Artistry" };

const BLOBS = [
	{ width: 320, height: 320, background: 'var(--mint)', top: '-90px', left: '8%' },
	{ width: 300, height: 300, background: 'var(--lavender)', top: '-50px', right: '8%' },
];

const MATERIALS = [
	['Wire', 'Coiled, wrapped, and sculpted by hand into bands, settings, and little creatures.'],
	['Thread', 'Soft fibers woven and knotted for wraps, tassels, and gentle finishing touches.'],
	['Beads', 'Glass and stone beads chosen one by one for color, light, and feeling.'],
	['Jewels', 'Tiny faceted accents set with care to catch the light just so.'],
];

const VALUES = [
	['Handmade', 'Every piece is made by my own two hands — never mass-produced, never rushed.', 'linear-gradient(135deg,var(--pink),var(--lavender))'],
	['Intentional', 'Made in small batches, with materials and colors chosen with real care.', 'linear-gradient(135deg,var(--mint),var(--lime))'],
	['From the Heart', 'Slow, joyful work — made to be treasured, gifted, and loved for a long time.', 'linear-gradient(135deg,var(--lavender),var(--rose))'],
];

export default function AboutPage() {
	return (
		<>
			<PageHead eyebrow="Meet the Maker" title="Our Little Story" blobs={BLOBS}>
				made by hand and with heart — here&apos;s how the garden grew.
			</PageHead>

			{/* bio */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className={styles.bio}>
						<div className={`${styles.portraitWrap} reveal`}>
							<Spiral className={styles.portraitRing} strokeWidth={2.4} />
							<div className={styles.portrait}>
								<Placeholder className={styles.portraitPh} label="Maker portrait" />
							</div>
							<span className={styles.flower} style={{ top: '-10px', right: '30px', fontSize: '2rem' }}>✿</span>
							<span className={styles.flower} style={{ bottom: '6px', left: '8px', fontSize: '1.6rem', color: 'var(--lavender)' }}>❀</span>
						</div>
						<div className="reveal d1">
							<h2>Hello, I&apos;m so glad you wandered in.</h2>
							<p className="lead">
								Haven&apos;s Artistry started small — a single sheet of hand-drawn stickers made at my
								kitchen table, shared with friends who loved them more than I expected.
							</p>
							<p>
								One sticker became a collection, and curiosity carried me into jewelry: wrapping wire
								into rings, coaxing beads onto earrings, and learning the slow, quiet language of
								working with my hands. These days the studio is growing toward wire animals — tiny
								sculpted creatures spun entirely from wire.
							</p>
							<p>
								Everything here is still made the same way it began: by hand, in small batches, with a
								lot of patience and even more heart. When you carry a piece of Haven&apos;s Artistry,
								you&apos;re carrying a little of that care with you.
							</p>
							<Button href="/custom-order" variant="mint" style={{ marginTop: 6 }}>
								Dream up something custom
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Divider />

			{/* materials & process */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className="center reveal">
						<span className="eyebrow">From My Bench</span>
						<h2>Materials &amp; Process</h2>
						<p className="lead center" style={{ margin: '.5em auto 0' }}>
							A handful of humble materials, shaped slowly into something to keep.
						</p>
					</div>
					<div className={styles.materials} style={{ marginTop: 34 }}>
						{MATERIALS.map(([name, blurb]) => (
							<div className={`${styles.mat} reveal`} key={name}>
								<Spiral className={styles.matIc} />
								<h3>{name}</h3>
								<p style={{ color: 'var(--ink-soft)', margin: 0 }}>{blurb}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* values */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className="center reveal">
						<span className="eyebrow">What I Believe</span>
						<h2>Made With Heart</h2>
					</div>
					<div className={styles.values} style={{ marginTop: 34 }}>
						{VALUES.map(([name, blurb, bg]) => (
							<div className={`${styles.value} reveal`} key={name} style={{ background: bg }}>
								<h3 className={styles.valueTitle}>{name}</h3>
								<p className={styles.valueText}>{blurb}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
