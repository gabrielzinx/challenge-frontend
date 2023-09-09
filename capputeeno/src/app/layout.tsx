import { CartProvider } from '@/contexts/cart-context';
import FilterContextProvider from '../contexts/filter-context';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Capputeeno',
    description: 'Um E-commerce para venda de canecas e camisetas.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <FilterContextProvider>
                <CartProvider>
                    <body suppressHydrationWarning={true}>{children}</body>
                </CartProvider>
            </FilterContextProvider>
        </html>
    )
}