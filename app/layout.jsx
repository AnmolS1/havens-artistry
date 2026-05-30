import './globals.css';
import { CartProvider } from '@/components/CartProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
	title: "Haven's Artistry — made by hand and with heart",
	description:
		'A little handmade garden shop — stickers, jewelry, and wire whimsies, each one made by hand and with heart.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
