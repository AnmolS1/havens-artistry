import Panel from '@/components/Panel';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import styles from './page.module.css';

export const metadata = { title: 'Privacy Policy' };

const TOC = [
	['What I Collect', '#collect'],
	['How I Use It', '#use'],
	['Sharing', '#share'],
	['Cookies', '#cookies'],
	['Security', '#security'],
	['Your Rights', '#rights'],
	['Contact', '#contact'],
];

export default function PrivacyPage() {
	return (
		<>
			{/* custom head with table of contents */}
			<section className={styles.head}>
				<span className="blob" style={{ width: 320, height: 320, background: 'var(--mint)', top: '-90px', left: '8%' }} />
				<span className="blob" style={{ width: 300, height: 300, background: 'var(--lavender)', top: '-50px', right: '8%' }} />
				<div className={`wrap ${styles.inner}`}>
					<span className="eyebrow">Tended With Care</span>
					<h1 className="display" style={{ fontSize: 'clamp(2.6rem,6vw,4.4rem)' }}>
						Privacy Policy
					</h1>
					<p className="lead center" style={{ margin: '.6em auto 1em' }}>
						Your trust matters as much as your treasures. Here&apos;s exactly how your information is
						gathered, used, and kept safe. Last updated <strong>[date]</strong>.
					</p>
					<div className={styles.toc}>
						{TOC.map(([label, href]) => (
							<a key={href} href={href} className={styles.tocLink}>
								{label}
							</a>
						))}
					</div>
				</div>
				<Divider />
			</section>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className={`wrap ${styles.wrap}`}>
					<Panel flourish className={`${styles.sec} reveal`}>
						<p style={{ marginBottom: 0 }}>
							Haven&apos;s Artistry (&quot;we,&quot; &quot;I,&quot; &quot;the shop&quot;) is a small
							handmade studio, and I treat your personal information the same way I treat everything
							here — with care and intention. This policy explains what I collect when you visit{' '}
							<strong>[havensartistry.com]</strong> or place an order, why I collect it, and the
							choices you have. By using this site, you agree to the practices described below.
						</p>
					</Panel>

					<Panel id="collect" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>1</span>Information I Collect
						</h3>
						<p>I only gather what&apos;s needed to make and send your order and to keep the shop running smoothly:</p>
						<ul className={styles.list}>
							<li><strong>Information you give me</strong> — your name, email, shipping &amp; billing address, phone number (if provided), and the details you share on the custom-order form (your vision, reference photos, timeline, and budget).</li>
							<li><strong>Order &amp; payment information</strong> — what you purchased and the billing details needed to process it. <em>Full card numbers are handled directly by our payment partners ([Stripe], [PayPal], [Venmo]) and are never stored on our servers.</em></li>
							<li><strong>Automatic information</strong> — basic technical data your browser shares, such as device type, browser, approximate location, and pages visited, gathered through cookies and similar tools.</li>
							<li><strong>Messages</strong> — anything you send by email, the contact form, or social media.</li>
						</ul>
					</Panel>

					<Panel id="use" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>2</span>How I Use Your Information
						</h3>
						<p>Your information helps me:</p>
						<ul className={styles.list}>
							<li>Make, package, and ship your order — and keep you updated along the way.</li>
							<li>Prepare quotes and bring custom pieces to life.</li>
							<li>Reply to your questions and provide friendly support.</li>
							<li>Send the &quot;Join the Garden&quot; newsletter — <strong>only if you&apos;ve signed up</strong>, and you can unsubscribe any time.</li>
							<li>Improve the shop, prevent fraud, and meet legal and tax obligations.</li>
						</ul>
						<div className={styles.note}>🌸 I will never sell your personal information. Ever.</div>
					</Panel>

					<Panel id="share" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>3</span>When Information Is Shared
						</h3>
						<p>I share information only with the trusted helpers needed to get your treasures to you — never for their own marketing:</p>
						<ul className={styles.list}>
							<li><strong>Payment processors</strong> ([Stripe], [PayPal], [Venmo]) to handle transactions securely.</li>
							<li><strong>Shipping carriers</strong> ([USPS], [UPS], etc.) to deliver your parcel.</li>
							<li><strong>Service providers</strong> for things like website hosting, email, and analytics.</li>
							<li><strong>Legal authorities</strong> if required by law, or to protect the rights and safety of the shop and its customers.</li>
						</ul>
					</Panel>

					<Panel id="cookies" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>4</span>Cookies &amp; Tracking
						</h3>
						<p>
							This site uses small files called cookies to remember your basket, keep you signed in,
							and understand how visitors wander through the garden so I can make it lovelier. You can
							disable cookies in your browser settings, though some features (like your cart) may not
							work as smoothly. <em>[Placeholder — add details of any specific analytics or advertising tools you use.]</em>
						</p>
					</Panel>

					<Panel id="security" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>5</span>How Your Information Is Kept Safe
						</h3>
						<p>
							I use reasonable technical and organizational measures — secure connections (SSL),
							trusted payment partners, and limited access — to protect your information. No method of
							transmission over the internet is ever 100% secure, but I take real care to guard what
							you share and keep only what I need, for only as long as I need it.
						</p>
					</Panel>

					<Panel id="rights" className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>6</span>Your Choices &amp; Rights
						</h3>
						<p>You&apos;re always in control of your information. Depending on where you live, you may have the right to:</p>
						<ul className={styles.list}>
							<li>Access, correct, or delete the personal information I hold about you.</li>
							<li>Unsubscribe from the newsletter at any time using the link in any email.</li>
							<li>Ask how your information is used, or request a copy of it.</li>
							<li>Opt out of certain cookies and tracking.</li>
						</ul>
						<p style={{ marginTop: 12 }}>
							To make any request, just email me at <strong>[hello@havensartistry.com]</strong> and
							I&apos;ll respond within <strong>[X] business days</strong>.{' '}
							<em>[Placeholder — note GDPR / CCPA specifics if they apply to you.]</em>
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>7</span>Children&apos;s Privacy
						</h3>
						<p>
							This shop is intended for grown-up gift-givers and collectors. I don&apos;t knowingly
							collect personal information from children under <strong>[13/16]</strong>. If you believe
							a child has shared information with me, please reach out and I&apos;ll remove it promptly.
						</p>
					</Panel>

					<Panel className={`${styles.sec} reveal`}>
						<h3 className={styles.h3}>
							<span className={styles.num}>8</span>Changes to This Policy
						</h3>
						<p>
							As the shop grows, this policy may bloom and change too. Any updates will be posted here
							with a new &quot;last updated&quot; date, so it&apos;s worth a peek now and then.
						</p>
					</Panel>

					<Panel id="contact" className={`${styles.sec} center reveal`} style={{ background: 'linear-gradient(135deg,var(--mint-18),var(--lavender-15))' }}>
						<h3 className={styles.h3} style={{ justifyContent: 'center' }}>
							A question about your privacy?
						</h3>
						<p style={{ color: 'var(--ink-soft)' }}>
							I&apos;m always happy to help — reach out and I&apos;ll get back to you with care.
						</p>
						<Button external href="#" variant="primary">
							Email the Studio
						</Button>
					</Panel>

					<p className="center" style={{ color: 'var(--ink-faint)', marginTop: 6 }}>
						🌿 made by hand and with heart — and handled the same way.
					</p>
				</div>
			</section>
		</>
	);
}
