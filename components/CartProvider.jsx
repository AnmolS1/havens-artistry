'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'ha_cart';

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);
	const [ready, setReady] = useState(false);

	// hydrate from localStorage once on mount
	useEffect(() => {
		try {
			const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
			if (Array.isArray(saved)) setItems(saved);
		} catch {
			/* ignore */
		}
		setReady(true);
	}, []);

	// persist on change (after hydration)
	useEffect(() => {
		if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}, [items, ready]);

	const addToCart = useCallback((name, price) => {
		setItems((prev) => [...prev, { name, price, qty: 1 }]);
	}, []);

	const count = items.reduce((a, b) => a + (b.qty || 1), 0);
	const subtotal = items.reduce(
		(a, b) => a + (parseFloat(String(b.price).replace(/[^0-9.]/g, '')) || 0) * (b.qty || 1),
		0
	);

	return (
		<CartContext.Provider value={{ items, addToCart, count, subtotal }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within <CartProvider>');
	return ctx;
}
