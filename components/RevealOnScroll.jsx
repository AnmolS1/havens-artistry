'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Adds the `in` class to `.reveal` elements as they scroll into view.
// Re-runs on route change so freshly-mounted pages animate too.
export default function RevealOnScroll() {
	const pathname = usePathname();

	useEffect(() => {
		const els = Array.from(document.querySelectorAll('.reveal:not(.in)'));
		if (!els.length) return;

		if (!('IntersectionObserver' in window)) {
			els.forEach((el) => el.classList.add('in'));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						en.target.classList.add('in');
						io.unobserve(en.target);
					}
				});
			},
			{ threshold: 0.12 }
		);

		const raf = requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
		};
	}, [pathname]);

	return null;
}
