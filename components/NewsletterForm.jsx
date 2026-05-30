'use client';

import { useState } from 'react';
import Button from './Button';

// Email signup used in the footer and the home "Join the Garden" section.
// Styling is supplied by the parent via `className` / `messageClassName`.
export default function NewsletterForm({ className, messageClassName, spin }) {
	const [message, setMessage] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setMessage('🌷 Welcome to the garden! Check your inbox soon.');
		e.target.reset();
	}

	return (
		<>
			<form className={className} onSubmit={handleSubmit}>
				<input type="email" required placeholder="your@email.com" aria-label="Email address" />
				<Button type="submit" variant="primary" spin={spin}>
					Subscribe
				</Button>
			</form>
			<p className={messageClassName}>{message}</p>
		</>
	);
}
