'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProductLocalStorage } from '@/types/product-types';

interface CartContextType {
    cart: ProductLocalStorage[];
    addToCart: (product: ProductLocalStorage) => void;
    removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductLocalStorage[]>([]);

    useEffect(() => {
        // Carregue o carrinho do localStorage quando o componente for montado
        const savedCart = JSON.parse(localStorage.getItem('cart-products') || '[]') as ProductLocalStorage[];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        // Atualize o localStorage sempre que o carrinho mudar
        localStorage.setItem('cart-products', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: ProductLocalStorage) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
