import Link from 'next/link';
import HeroDeco from '@/components/HeroDeco';
import Divider from '@/components/Divider';
import CollectionCard from '@/components/CollectionCard';
import Placeholder from '@/components/Placeholder';
import Panel from '@/components/Panel';
import Button from '@/components/Button';
import NewsletterForm from '@/components/NewsletterForm';
import { Spiral } from '@/components/Decor';
import { COLLECTIONS } from '@/lib/catalog';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			{/* ===================== HERO ===================== */}
			<section className={styles.hero} data-screen-label="Hero">
				<HeroDeco />
				<span className="blob" style={{ width: 380, height: 380, background: 'var(--pink)', top: '-80px', left: '8%' }} />
				<span className="blob" style={{ width: 320, height: 320, background: 'var(--mint)', bottom: '-60px', right: '10%' }} />
				<span className="blob" style={{ width: 300, height: 300, background: 'var(--lavender)', top: '30%', right: '4%', opacity: 0.4 }} />
				<span className="blob" style={{ width: 260, height: 260, background: 'var(--lime)', bottom: '8%', left: '30%', opacity: 0.4 }} />

				<div className={styles.heroInner}>
					<div className={styles.heroRibbon}>🌿 a little handmade garden shop 🌿</div>
					<h1 className={styles.h1}>
						<span className={styles.am}>Welcome to</span>
						Haven&apos;s Artistry
					</h1>
					<p className={styles.tagline}>made by hand and with heart</p>
					<div className={styles.heroCta}>
						<Button href="/shop" variant="primary" size="lg">
							Shop All
						</Button>
						<Button href="/custom-order" variant="ghost" size="lg">
							Request a Custom Order
						</Button>
					</div>
				</div>
			</section>

			{/* ===================== FEATURED COLLECTIONS ===================== */}
			<section className="section" data-screen-label="Featured Collections">
				<div className="wrap">
					<div className="center reveal">
						<span className="eyebrow">Tend the Shelves</span>
						<h2>Featured Collections</h2>
						<p className="lead center" style={{ margin: '.6em auto 0' }}>
							Five little worlds to wander through — each piece dreamed up and finished by hand in
							the studio.
						</p>
					</div>
					<Divider />
					<div className={styles.collGrid}>
						{COLLECTIONS.map((c) => (
							<CollectionCard key={c.slug} collection={c} variant="tile" />
						))}
					</div>
				</div>
			</section>

			{/* ===================== ABOUT TEASER ===================== */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<Panel flourish className={styles.teaser}>
						<Placeholder className={styles.teaserPh} framed label="Maker portrait" sprig="br" />
						<div className="reveal">
							<span className="eyebrow">Meet the Maker</span>
							<h2>A garden studio, two hands, and a whole lot of heart.</h2>
							<p className="lead">
								Haven&apos;s Artistry began with a single sheet of stickers at a kitchen table and
								slowly grew into a little world of jewelry and wire whimsies. Every piece is cut,
								coiled, beaded, and finished by hand — slow, intentional, and made just for you.
							</p>
							<Button href="/about" variant="mint" style={{ marginTop: 8 }}>
								Meet the Maker
							</Button>
						</div>
					</Panel>
				</div>
			</section>

			{/* ===================== CUSTOM ORDER BANNER ===================== */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className={`${styles.customBanner} reveal`}>
						<Spiral className={`${styles.bannerDeco} anim-spin`} style={{ top: '-30px', left: '-20px', width: 130, color: 'rgba(255,255,255,.6)' }} />
						<Spiral className={`${styles.bannerDeco} anim-spin`} style={{ bottom: '-30px', right: '-20px', width: 130, color: 'rgba(255,255,255,.6)', animationDirection: 'reverse' }} />
						<span className="eyebrow" style={{ color: '#5b3a55' }}>
							One of a kind
						</span>
						<h2 style={{ maxWidth: '18ch', margin: '0 auto' }}>
							Dreaming of something made only for you?
						</h2>
						<p className={styles.bannerText}>
							Tell me your vision — a favorite flower, a color, a feeling — and I&apos;ll bring it to
							life by hand, one careful coil and bead at a time.
						</p>
						<Button href="/custom-order" size="lg" style={{ marginTop: 26, background: '#fff', borderColor: 'transparent' }}>
							Request a Custom Order
						</Button>
					</div>
				</div>
			</section>

			{/* ===================== JOIN THE GARDEN ===================== */}
			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className={`${styles.garden} reveal`}>
						<span className="blob" style={{ width: 280, height: 280, background: 'var(--lime)', top: '-120px', left: '-60px', opacity: 0.4 }} />
						<span className="blob" style={{ width: 240, height: 240, background: 'var(--pink)', bottom: '-120px', right: '-40px', opacity: 0.4 }} />
						<span className="eyebrow">Join the Garden</span>
						<h2 style={{ position: 'relative' }}>Stay in the loop</h2>
						<p className="lead center" style={{ margin: '.5em auto 0', position: 'relative' }}>
							Be first to hear about new collections, restocks, and little garden updates.
						</p>
						<NewsletterForm className={styles.gardenForm} messageClassName={styles.gardenMsg} />
					</div>
				</div>
			</section>

			{/* ===================== INSTAGRAM STRIP ===================== */}
			<section className="section" style={{ paddingTop: 0 }} data-screen-label="Instagram">
				<div className="wrap">
					<div className="center reveal">
						<span className="eyebrow">From the Studio</span>
						<h2>
							Follow along <span className="script">@havens.artistry</span>
						</h2>
					</div>
					<Divider />
					<div className={styles.igGrid}>
						{[1, 2, 3, 4, 5, 6].map((n) => (
							<Placeholder key={n} className={styles.igPh} label={`IG ${n}`} />
						))}
					</div>
					<div className="center" style={{ marginTop: 26 }}>
						<Button external href="#" variant="ghost" rel="noopener noreferrer" target="_blank">
							Follow on Instagram
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
