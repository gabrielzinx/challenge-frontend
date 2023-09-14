'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProductLocalStorage } from '@/types/product-types';

interface CartContextType {
    cart: ProductLocalStorage[];
    addToCart: (product: ProductLocalStorage) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    clearCart: () => void;
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

    const updateQuantity = (productId: string, newQuantity: number) => {
        setCart((prevCart) => {
            // Encontre o produto com o ID correspondente e atualize sua quantidade
            const updatedCart = prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart([]); // Limpa o carrinho, removendo todos os itens
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
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