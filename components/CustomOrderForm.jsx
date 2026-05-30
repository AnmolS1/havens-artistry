'use client';

import { useState } from 'react';
import { Star } from './Decor';
import Button from './Button';
import { TIMELINES, PRODUCT_TYPES, BUDGET_RANGES } from '@/lib/catalog';
import styles from './CustomOrderForm.module.css';

export default function CustomOrderForm() {
	const [productType, setProductType] = useState('');
	const [fairy, setFairy] = useState(false);
	const [fileName, setFileName] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
		window.scrollTo({ top: Math.max(0, window.scrollY - 80), behavior: 'smooth' });
	}

	if (submitted) {
		return (
			<div className={`${styles.panel} reveal in`}>
				<div className={styles.confirm} style={{ display: 'flex' }}>
					<span className={styles.confirmEmoji}>🌸</span>
					<div>
						<strong>Your vision is on its way!</strong>
						<br />
						<span className={styles.confirmSub}>
							Thank you — I&apos;ll be in touch within [X] business days with a quote and next steps.
						</span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<form className={`${styles.panel} reveal d1`} onSubmit={handleSubmit} noValidate>
			<h3 className={styles.heading}>Share your vision</h3>

			<div className={styles.fieldRow}>
				<div className={styles.field}>
					<label htmlFor="cName">
						Full Name <span className={styles.req}>*</span>
					</label>
					<input id="cName" type="text" required placeholder="Your name" />
				</div>
				<div className={styles.field}>
					<label htmlFor="cEmail">
						Email Address <span className={styles.req}>*</span>
					</label>
					<input id="cEmail" type="email" required placeholder="your@email.com" />
				</div>
			</div>

			<div className={styles.field}>
				<label htmlFor="cType">
					Product Type <span className={styles.req}>*</span>
				</label>
				<select
					id="cType"
					required
					value={productType}
					onChange={(e) => setProductType(e.target.value)}
				>
					<option value="" disabled>
						Choose a type…
					</option>
					{PRODUCT_TYPES.map((t) => (
						<option key={t}>{t}</option>
					))}
				</select>
			</div>

			{productType && TIMELINES[productType] && (
				<div className={styles.timeline}>
					<Star size={14} className={styles.timelineStar} />
					<span>
						Estimated timeline: <strong>{TIMELINES[productType]}</strong>{' '}
						<span className={styles.faint}>(placeholder)</span>
					</span>
				</div>
			)}

			<div className={styles.field}>
				<label htmlFor="cVision">
					Order Description / Vision <span className={styles.req}>*</span>
				</label>
				<textarea
					id="cVision"
					required
					placeholder="Tell me about colors, flowers, sizes, the story behind it…"
				/>
			</div>

			<div className={styles.field}>
				<label>
					Reference Photo <span className={styles.optional}>(optional)</span>
				</label>
				<label className={styles.fileDrop} htmlFor="cPhoto">
					{fileName ? `🌸 ${fileName}` : '🌸 Drop an inspiration photo or click to upload'}
				</label>
				<input
					id="cPhoto"
					type="file"
					accept="image/*"
					className={styles.hiddenFile}
					onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
				/>
			</div>

			<div className={styles.fieldRow}>
				<div className={styles.field}>
					<label htmlFor="cTimeline">
						Desired Timeline <span className={styles.optional}>(optional)</span>
					</label>
					<input id="cTimeline" type="text" placeholder="e.g. before June 1st" />
				</div>
				<div className={styles.field}>
					<label htmlFor="cBudget">
						Budget Range <span className={styles.optional}>(optional)</span>
					</label>
					<select id="cBudget" defaultValue="">
						<option value="" disabled>
							Select a range…
						</option>
						{BUDGET_RANGES.map((b) => (
							<option key={b}>{b}</option>
						))}
					</select>
				</div>
			</div>

			{/* Fairy Express */}
			<div className={styles.fairy}>
				<div className={styles.stars} aria-hidden="true">
					<span className="anim-twinkle" style={{ top: '10%', left: '6%', color: '#fff' }}>
						<Star size={14} />
					</span>
					<span className="anim-twinkle" style={{ top: '60%', left: '30%', color: '#fff', animationDelay: '.8s' }}>
						<Star size={10} />
					</span>
					<span className="anim-twinkle" style={{ top: '20%', right: '12%', color: '#fff', animationDelay: '1.4s' }}>
						<Star size={12} />
					</span>
					<span className="anim-twinkle" style={{ bottom: '14%', right: '30%', color: '#fff', animationDelay: '.4s' }}>
						<Star size={9} />
					</span>
				</div>

				<label className={styles.fairyLabel}>
					<input
						type="checkbox"
						className={styles.fairyInput}
						checked={fairy}
						onChange={(e) => setFairy(e.target.checked)}
					/>
					<span className={`${styles.fairyCheck} ${fairy ? styles.fairyChecked : ''}`} />
					<span>
						<span className={styles.fairyTitle}>Need it sooner? ✨ Fairy Express</span>
						<br />
						<span className={styles.fairySub}>
							Sprinkle a little magic for expedited, top-of-the-bench production.
						</span>
					</span>
				</label>

				{fairy && (
					<div className={styles.fairyNote}>
						✨ A Fairy Express fee of <strong>$[PLACEHOLDER]</strong> will be added to your order for
						expedited production. The fairies will get straight to work!
					</div>
				)}
			</div>

			<Button type="submit" variant="primary" size="lg" block>
				Send My Custom Request
			</Button>
			<p className={styles.note}>
				You&apos;ll hear back within <strong>[X] business days</strong> with a quote and next steps. 🌷
			</p>
		</form>
	);
}
