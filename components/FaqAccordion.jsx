'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Spiral, PlusGlyph } from './Decor';
import styles from './FaqAccordion.module.css';

const FAQS = [
	{
		q: 'How long do processing & shipping take?',
		a: (
			<>
				Because everything is made by hand in small batches, ready-made items typically ship
				within <strong>[X] business days</strong>. Once your order is on its way, delivery usually
				takes another <strong>[X–X] business days</strong> depending on your location. You&apos;ll
				receive a tracking link the moment your parcel leaves the studio.
			</>
		),
	},
	{
		q: 'How do I care for my wire jewelry?',
		a: (
			<>
				Treat your pieces like the delicate little blooms they are. Keep them dry — remove jewelry
				before showering, swimming, or sleeping — and store each piece flat or hung, away from
				humidity. A gentle polish with a soft cloth keeps the shine. Avoid lotions and perfumes
				directly on the metal. With a little love, your piece will last for many seasons.
			</>
		),
	},
	{
		q: 'How do custom orders work?',
		a: (
			<>
				Head to the{' '}
				<Link href="/custom-order" className={styles.link}>
					Custom Order
				</Link>{' '}
				page and share your vision — product type, colors, inspiration, timeline, and budget.
				I&apos;ll reply within <strong>[X] business days</strong> with a quote, a rough timeline, and
				any questions. Once we&apos;ve agreed on the details and a deposit is placed, your piece
				begins its slow journey on my bench. Need it sooner? Ask about{' '}
				<strong>✨ Fairy Express</strong>.
			</>
		),
	},
	{
		q: 'Do you offer gifting & gift wrapping?',
		a: (
			<>
				Always — gifting is one of my favorite things! Every order arrives nestled in tissue with a
				little hand-tied finishing touch. At checkout you can add a <strong>[gift wrap option]</strong>{' '}
				and include a short handwritten note, and we&apos;ll happily ship directly to your recipient
				with no prices on the packing slip.
			</>
		),
	},
	{
		q: 'What if my item arrives damaged?',
		a: (
			<>
				Oh no — I&apos;m so sorry! Please email me within <strong>[X] days</strong> of delivery with a
				photo of the item and the packaging. While all sales are final, I care deeply that your piece
				arrives in lovely condition, so I&apos;ll work with you to repair or replace a piece that was
				damaged in transit. 🌷
			</>
		),
	},
	{
		q: 'How do I contact the shop?',
		a: (
			<>
				The quickest way to reach me is by email at <strong>[hello@havensartistry.com]</strong>, or
				send a little message on{' '}
				<a href="#" className={styles.link}>
					Instagram
				</a>
				. I read every note myself and usually reply within <strong>[X] business days</strong> —
				tucked between studio sessions.
			</>
		),
	},
];

function FaqItem({ q, a }) {
	const [open, setOpen] = useState(false);
	const inner = useRef(null);

	return (
		<div className={`${styles.item} ${open ? styles.open : ''}`}>
			<button className={styles.q} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
				<Spiral className={styles.qmark} strokeWidth={4} />
				{q}
				<PlusGlyph className={styles.tw} />
			</button>
			<div
				className={styles.a}
				style={{ maxHeight: open ? `${inner.current ? inner.current.scrollHeight : 600}px` : 0 }}
			>
				<div className={styles.aInner} ref={inner}>
					{a}
				</div>
			</div>
		</div>
	);
}

export default function FaqAccordion() {
	return (
		<div className={styles.accordion}>
			{FAQS.map((f) => (
				<FaqItem key={f.q} q={f.q} a={f.a} />
			))}
		</div>
	);
}
