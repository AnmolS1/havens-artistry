import './globals.css';
import { Playfair_Display, Cormorant_Garamond, Nunito } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

// Self-hosted, optimized fonts (no render-blocking @import). Exposed as CSS
// variables that globals.css maps onto --display / --heading / --body.
const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-playfair',
	display: 'swap',
});
const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
	display: 'swap',
});
const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-nunito',
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://havens-artistry.example'),
	title: {
		default: "Haven's Artistry — made by hand and with heart",
		template: "%s · Haven's Artistry",
	},
	description:
		'A little handmade garden shop — stickers, jewelry, and wire whimsies, each one made by hand and with heart.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${playfair.variable} ${cormorant.variable} ${nunito.variable}`}>
			<body>
				<CartProvider>
					<Header />
					<main>{children}</main>
					<Footer />
					<RevealOnScroll />
				</CartProvider>
			</body>
		</html>
	);
}
