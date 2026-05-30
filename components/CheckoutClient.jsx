'use client';

import Link from 'next/link';
import Panel from './Panel';
import { useCart } from './CartProvider';
import styles from './CheckoutClient.module.css';

export default function CheckoutClient() {
	const { items, subtotal } = useCart();

	// ---------------------------------------------------------------------------
	// Payment handlers are intentionally placeholders. No real charge is made.
	// ---------------------------------------------------------------------------
	function payWithCard() {
		// TODO: Stripe integration
		// Mount Stripe Elements (Card Element) into #stripe-card-element above and
		// confirm the PaymentIntent here. Replace this placeholder alert.
		alert('Placeholder — Stripe checkout will be wired up here. 🌸');
	}

	function payWithPayPal() {
		// TODO: PayPal/Venmo integration
		// Render the PayPal Buttons SDK (with the Venmo funding source enabled) into
		// #paypal-button-container / #venmo-button-container and approve the order here.
		alert('Placeholder — PayPal SDK will be wired up here.');
	}

	function payWithVenmo() {
		// TODO: PayPal/Venmo integration
		// Venmo is offered through the PayPal Buttons SDK (funding: 'venmo').
		alert('Placeholder — Venmo SDK will be wired up here.');
	}

	return (
		<div className={styles.checkout}>
			{/* ============ PAYMENT ============ */}
			<Panel flourish className="reveal">
				{/* ----- Pay with Card (Stripe) ----- */}
				<div className={styles.payBlock}>
					<h3 className={styles.payHead}>
						<span className={styles.dot} style={{ background: '#635bff' }} />
						Pay with Card
					</h3>
					{/* TODO: Stripe integration — replace these static fields with Stripe Elements
              mounted into #stripe-card-element. No real card data is collected here. */}
					<div id="stripe-card-element" className={styles.cardFields}>
						<div className={styles.fakeField}>
							<label>Card Number</label>
							<div className={styles.fakeInput}>•••• •••• •••• ••••</div>
						</div>
						<div className={styles.row2}>
							<div className={styles.fakeField}>
								<label>Expiry</label>
								<div className={styles.fakeInput}>MM / YY</div>
							</div>
							<div className={styles.fakeField}>
								<label>CVC</label>
								<div className={styles.fakeInput}>•••</div>
							</div>
						</div>
						<div className={styles.fakeField}>
							<label>Name on Card</label>
							<div className={styles.fakeInput}>Full name</div>
						</div>
					</div>
					<button className={styles.payBtn} onClick={payWithCard}>
						Pay with Card
					</button>
				</div>

				<div className={styles.dividerOr}>or</div>

				{/* ----- Pay with PayPal or Venmo ----- */}
				<div className={styles.payBlock}>
					{/* TODO: PayPal/Venmo integration — render the PayPal Buttons SDK (Venmo
              funding enabled) into the containers below. These are placeholders. */}
					<button id="paypal-button-container" className={styles.walletBtn} onClick={payWithPayPal}>
						<span className={styles.dot} style={{ background: '#0070ba' }} />
						Pay with PayPal
					</button>
					<button id="venmo-button-container" className={styles.walletBtn} onClick={payWithVenmo}>
						<span className={styles.dot} style={{ background: '#3d95ce' }} />
						Pay with Venmo
					</button>
				</div>

				<p className={styles.secureNote}>
					🔒 This is a design placeholder — no real payment is processed.
				</p>
			</Panel>

			{/* ============ ORDER SUMMARY ============ */}
			<Panel className={`${styles.summary} reveal d1`} as="aside">
				<h3 className={styles.summaryHead}>Your Basket</h3>

				{items.length === 0 ? (
					<p className={styles.emptyCart}>
						Your basket is empty.
						<br />
						Wander the{' '}
						<Link href="/shop" className={styles.link}>
							shop
						</Link>{' '}
						to gather a few treasures. 🌷
					</p>
				) : (
					<>
						{items.map((it, i) => (
							<div className={styles.lineItem} key={`${it.name}-${i}`}>
								<div className={styles.lineImg} />
								<div>
									<div className={styles.nm}>{it.name}</div>
									<div className={styles.qty}>Qty {it.qty || 1}</div>
								</div>
								<div className={styles.pr}>{it.price}</div>
							</div>
						))}
						<div className={styles.totals}>
							<div className={styles.row}>
								<span>Subtotal</span>
								<span>${subtotal.toFixed(0)}</span>
							</div>
							<div className={styles.row}>
								<span>Shipping</span>
								<span>
									$[X] <span className={styles.faint}>(placeholder)</span>
								</span>
							</div>
							<div className={`${styles.row} ${styles.grand}`}>
								<span>Total</span>
								<span>${subtotal.toFixed(0)}+</span>
							</div>
						</div>
					</>
				)}

				<Link href="/shop" className={styles.keepBtn}>
					Keep gathering 🌿
				</Link>
			</Panel>
		</div>
	);
}
