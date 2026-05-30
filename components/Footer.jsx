import Link from 'next/link';
import { FooterVine, Star } from './Decor';
import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

// Payment badges below are visual placeholders only.
// The actual Stripe / PayPal / Venmo SDK integration lives in
// components/CheckoutClient.jsx (see the TODO markers there).
const PAYMENTS = [
	{ name: 'Stripe', color: '#635bff' },
	{ name: 'PayPal', color: '#0070ba' },
	{ name: 'Venmo', color: '#3d95ce' },
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterVine className={styles.vine} />
			<div className={styles.inner}>
				<div className={styles.grid}>
					<div className={styles.brand}>
						<div className={`${styles.wm} display`}>Haven&apos;s Artistry</div>
						<div className={styles.tag}>made by hand and with heart</div>
						<p className={styles.brandText}>
							Tiny treasures grown in a little garden studio — stickers, jewelry, and wire
							whimsies, each one made just for you.
						</p>
						<div className={styles.payRow} aria-label="Accepted payments">
							{PAYMENTS.map((p) => (
								<span key={p.name} className={styles.payChip}>
									<span className={styles.dot} style={{ background: p.color }} />
									{p.name}
								</span>
							))}
						</div>
					</div>

					<div>
						<h4 className={styles.h4}>Wander Here</h4>
						<ul className={styles.links}>
							<li><Link href="/faqs">FAQs</Link></li>
							<li><Link href="/terms">Terms &amp; Conditions</Link></li>
							<li><Link href="/privacy">Privacy Policy</Link></li>
							<li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
						</ul>
					</div>

					<div>
						<h4 className={styles.h4}>Join the Garden</h4>
						<p className={styles.joinText}>
							Stay in the loop with new collections, restocks, and garden updates.
						</p>
						<NewsletterForm className={styles.newsForm} messageClassName={styles.msg} spin />
					</div>
				</div>

				<div className={styles.bottom}>
					<span>© Haven&apos;s Artistry · All blooms reserved.</span>
					<span className={styles.heart}>
						<Star size={13} /> handmade with heart <Star size={13} />
					</span>
				</div>
			</div>
		</footer>
	);
}
