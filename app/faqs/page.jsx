import PageHead from '@/components/PageHead';
import Panel from '@/components/Panel';
import Button from '@/components/Button';
import FaqAccordion from '@/components/FaqAccordion';
import styles from './page.module.css';

export const metadata = { title: "FAQs — Haven's Artistry" };

const BLOBS = [
	{ width: 320, height: 320, background: 'var(--pink)', top: '-90px', left: '8%' },
	{ width: 300, height: 300, background: 'var(--mint)', top: '-50px', right: '8%' },
];

export default function FaqsPage() {
	return (
		<>
			<PageHead eyebrow="Curious Hearts" title="Frequently Asked" blobs={BLOBS}>
				Little answers to the questions that bloom most often. Still wondering? Reach out any time.
			</PageHead>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className={`wrap ${styles.faqWrap}`}>
					<FaqAccordion />

					<Panel className={`center reveal ${styles.cta}`}>
						<h3>Still have a question blooming?</h3>
						<p style={{ color: 'var(--ink-soft)' }}>
							I&apos;d love to help — reach out and I&apos;ll get back to you soon.
						</p>
						<Button external href="#" variant="primary">
							Send a Message
						</Button>
					</Panel>
				</div>
			</section>
		</>
	);
}
