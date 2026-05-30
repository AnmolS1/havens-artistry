import PageHead from '@/components/PageHead';
import Panel from '@/components/Panel';
import styles from './page.module.css';

export const metadata = { title: 'Terms & Conditions' };

const BLOBS = [
	{ width: 320, height: 320, background: 'var(--lavender)', top: '-90px', left: '8%' },
	{ width: 300, height: 300, background: 'var(--rose)', top: '-50px', right: '8%', opacity: 0.35 },
];

export default function TermsPage() {
	return (
		<>
			<PageHead
				eyebrow="The Fine (and Friendly) Print"
				title="Terms & Conditions"
				blobs={BLOBS}
			>
				A few gentle ground rules so we&apos;re on the same page. Last updated <strong>[date]</strong>.
			</PageHead>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className={`wrap ${styles.wrap}`}>
					<Panel flourish className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>1</span>Returns &amp; Refunds
						</h3>
						<p style={{ marginBottom: 14 }}>
							Because every piece is made by hand — and many are made just for you —{' '}
							<strong>all sales are final</strong>. We don&apos;t offer returns or refunds. I promise
							this comes from a place of care, not coldness: handmade work takes time, heart, and
							one-of-a-kind materials that can&apos;t simply be restocked.
						</p>
						<div className={styles.note}>
							🌸 That said, your happiness matters to me. If something arrives damaged in transit,
							please reach out within <strong>[X] days</strong> with a photo and I&apos;ll do
							everything I can to make it right.
						</div>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>2</span>Cancellations
						</h3>
						<p>
							Changed your mind? That&apos;s okay — orders may be cancelled{' '}
							<strong>within 48 hours of placement</strong> for a full refund. After 48 hours,
							production has likely already begun on your piece, and cancellations can no longer be
							accepted. Custom orders follow this same window once a deposit is placed.
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>3</span>Use of This Site
						</h3>
						<p>
							You&apos;re welcome to browse, shop, and share Haven&apos;s Artistry to your heart&apos;s
							content. By using this site, you agree to provide accurate information at checkout and to
							use the shop only for lawful, personal purposes.{' '}
							<em>[Placeholder — expand with your specific acceptable-use terms.]</em>
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>4</span>Intellectual Property
						</h3>
						<p>
							All designs, illustrations, photographs, written words, and the Haven&apos;s Artistry
							name and logo are the original work of the shop and are protected by copyright. Please
							don&apos;t reproduce, resell, or use them commercially without written permission.{' '}
							<em>[Placeholder — add licensing details as needed.]</em>
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>5</span>Limitation of Liability
						</h3>
						<p>
							Handmade items are delicate by nature and intended for gentle, decorative, and everyday
							wear as described. To the fullest extent permitted by law, Haven&apos;s Artistry is not
							liable for indirect or incidental damages arising from the use of our products or this
							website. <em>[Placeholder — confirm wording with a legal professional.]</em>
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>6</span>Governing Law
						</h3>
						<p>
							These terms are governed by the laws of <strong>[your state / country]</strong>, without
							regard to conflict-of-law principles. Any disputes will be handled in the courts of that
							jurisdiction. <em>[Placeholder — fill in your locale.]</em>
						</p>
					</Panel>

					<p className="center" style={{ color: 'var(--ink-faint)', marginTop: 30 }}>
						Questions about any of this? I&apos;m always happy to chat — find me on the{' '}
						<a href="/faqs" style={{ color: 'var(--mauve)', fontWeight: 700 }}>
							FAQs
						</a>{' '}
						page or send a little message. 🌿
					</p>
				</div>
			</section>
		</>
	);
}
